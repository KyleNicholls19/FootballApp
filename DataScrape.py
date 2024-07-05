from bs4 import BeautifulSoup
import requests
import pandas as pd

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

    print(df) # TEST

def get_fixture_data(page_data):
    dates = page_data.find_all('h4')
    dates_text = [date.text.strip() for date in dates]

    fix = page_data.find('div',{'class':'fixres__body'})
    matches_per_day = []
    for i in range(len(dates)):
        matches_per_day.append(fix.prettify().split('<h4 class="fixres__header2">')[i+1].count('<div class="fixres__item">'))


    ang = page_data.find_all('a',{'class':'matches__item matches__link'})
    match_index_counter = 0
    for i in range(len(dates)):
        for j in range(matches_per_day[i]):
            ang2 = ang[match_index_counter].find_all('span',{'class':'swap-text__target'})[:2]
            match_index_counter += 1

    match_time = ang.find_all('span',{'class':'matches__date'})
    time = match_time[0].text.strip()
    teams = [team.text.strip() for team in ang2]

    #print(time)



def main():
    url_league_dict =  {
     'Premier League':'https://www.skysports.com/premier-league-table/2023',
     'Bundesliga': 'https://www.skysports.com/bundesliga-table/2023',
     'Serie A': 'https://www.skysports.com/serie-a-table/2023',
     'Ligue 1': 'https://www.skysports.com/ligue-1-table/2023',
     'La Liga': 'https://www.skysports.com/la-liga-table/2023'   
    }
    page = requests.get(url_league_dict['Premier League'])
    page_data = BeautifulSoup(page.text, 'html')

    #get_table_data(page_data)

    url = 'https://www.skysports.com/premier-league-fixtures'
    page = requests.get(url)
    page_data = BeautifulSoup(page.text, 'html.parser')
    get_fixture_data(page_data)

if __name__ == '__main__':
    main()