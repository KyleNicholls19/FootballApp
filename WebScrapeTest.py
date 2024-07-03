from bs4 import BeautifulSoup
import requests
import pandas as pd

url = 'https://en.wikipedia.org/wiki/List_of_largest_companies_in_the_United_States_by_revenue'
page = requests.get(url)
features = "html.parser"
soup = BeautifulSoup(page.text, 'html')

table = soup.find_all('table')[1]

world_titles = table.find_all('th')

world_table_titles = [title.text.strip() for title in world_titles]
print(world_table_titles)
df = pd.DataFrame(columns = world_table_titles)
print(df)