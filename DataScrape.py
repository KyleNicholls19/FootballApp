from bs4 import BeautifulSoup
import requests
import pandas as pd

url = 'https://www.skysports.com/premier-league-table/2023'
page = requests.get(url)
soup = BeautifulSoup(page.text, 'html')


def remove_astericks(data):
    str = data[1]
    if '*' in str:
        pos = str.find('*')
        data[1] = str[:pos-1]

    return data

def main():
    table = soup.find_all('table')[0]
    titles = table.find_all('th')

    table_titles = [title.text.strip() for title in titles]

    df = pd.DataFrame(columns = table_titles[:10])

    column_data = table.find_all('tr')

    for row in column_data[1:]:
        row_data = row.find_all('td')
        individual_row_data = [data.text.strip() for data in row_data]
        individual_row_data = individual_row_data[:10] # get rid of last row

        length = len(df)
        df.loc[length] = remove_astericks(individual_row_data)



    print(df)

if __name__ == '__main__':
    main()
