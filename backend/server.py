from bs4 import BeautifulSoup
import requests
import pandas as pd
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def remove_astericks(data):
    '''
    Remove potential astericks from a teams name
    '''
    str = data[1]
    if '*' in str:
        pos = str.find('*') # finds the position of the astericks
        data[1] = str[:pos-1] 

    return data


def get_table_data(page_data):
    '''
    Searches the page, finds and stores the table data in a data frame
    '''
    table = page_data.find_all('table')[0] # collects the main table data
    
    # finds the titles of the columns and then strips the text
    titles = table.find_all('th')
    table_titles = [title.text.strip() for title in titles]

    df = pd.DataFrame(columns = table_titles[:10]) # adds the titles to the data frame as columns

    column_data = table.find_all('tr') # finds the column information
    for row in column_data[1:]:
        row_data = row.find_all('td')
        individual_row_data = [data.text.strip() for data in row_data]
        individual_row_data = individual_row_data[:10] # get rid of last row

        # appends row to the data frame
        length = len(df)
        df.loc[length] = remove_astericks(individual_row_data)

    return df 

def get_fixture_data(page_data, team_fixtures):
    '''
    Searches the page and finds and store the fixture data into a data frame
    team_fixtures is a boolean to tell if the search is for a league's fixtures or a specific team
    team_fixtures = False if looking for a league's fixtures, True if looking for a team's fixtures
    '''

    # Finds all of the match dates and stores the text into a list
    dates = page_data.find_all('h4')
    dates_text = [date.text.strip() for date in dates]

    # If looking for fixtures for a specific team
    if (team_fixtures):
        fixture_type = page_data.find_all('h5')
        fixture_type_text = [fix.text.strip() for fix in fixture_type]


    fix = page_data.find('div',{'class':'fixres__body'}) # Entire fixture list
    matches_per_day = []
    for i in range(len(dates)):
        # Splits the fixtures by date and counts how many fixtures are on each date
        matches_per_day.append(fix.prettify().split('<h4 class="fixres__header2">')[i+1].count('<div class="fixres__item">'))

    # Create the data frame to store the data
    if not team_fixtures:
        column_names = ['Match Date','Team 1','Team 2','Time']
    else:
        column_names = ['Match Date','Team 1','Team 2','Time','Fixture Type']
    df = pd.DataFrame(columns = column_names)

    # Finds the data for all the matches
    match_info = page_data.find_all('a',{'class':'matches__item matches__link'})
    match_index_counter = 0 # counter to correlate which match relates to the position in match_info

    # Loops through every date and for every date find the information of the matches on that date
    # Uses the amount of matches per day and the match_index_counter to correlate which matches take place on which days
    for i in range(len(dates)):
        for j in range(matches_per_day[i]):
            # Finds the match currently being iterated on per day
            target_match = match_info[match_index_counter].find_all('span',{'class':'swap-text__target'})[:2]
            teams = [team.text.strip() for team in target_match]

            # Finds the match time for the current match
            match_time = match_info[match_index_counter].find('span',{'class':'matches__date'})
            time = match_time.text.strip()

            if not team_fixtures:
                df.loc[len(df)] = [dates_text[i],teams[0],teams[1],time] # enters the data into the data frame
            else:
                df.loc[len(df)] = [dates_text[i],teams[0],teams[1],time,fixture_type_text[match_index_counter+1]] # enters the data into the data frame

            match_index_counter += 1
    return(df)
    #print(df) #TEST


@app.route("/table/<league_name>")

def run_table_data(league_name):
    url_league_dict =  {
     'PremierLeague':'https://www.skysports.com/premier-league-table/2023',
     'Bundesliga': 'https://www.skysports.com/bundesliga-table/2023',
     'SerieA': 'https://www.skysports.com/serie-a-table/2023',
     'Ligue1': 'https://www.skysports.com/ligue-1-table/2023',
     'LaLiga': 'https://www.skysports.com/la-liga-table/2023'   
    }
    page = requests.get(url_league_dict[league_name])
    page_data = BeautifulSoup(page.text, 'html.parser')

    data = get_table_data(page_data)
    return data.to_json(orient='index')


def main():
    url = 'https://www.skysports.com/manchester-united-fixtures'
    page = requests.get(url)
    page_data = BeautifulSoup(page.text, 'html.parser')
    test = get_fixture_data(page_data, True)
    print(test.to_json(orient='index'))
    return test.to_json(orient='index')

if __name__ == '__main__':
    app.run(debug=True)