import unicodecsv
import sys
from pymongo import MongoClient
# from pandas.io.json import json_normalize
import pandas as pd
import datetime

# https://github.com/surya-shodan/mongoexportcsv
#python db_export.py jon_list domain_v2  domain_v2.csv   
#python db_export.py jon_list domain_v2  testing.csv   

client = MongoClient('localhost',27017)
db = client['jon_list']
col = db["domain_v2"]
# col = db['domain_older']

cursor = col.find()
# print(len(cursor))
datapoints = list(cursor)
# print(datapoints)

df = pd.json_normalize(datapoints)
print(type(df['whois_info.creation_date'][0]))
# df['whois_info.creation_date'].apply(lambda x : x.strftime("%d-%m-%YT%H:%M:%S %f") if type(x) == datetime.datetime else x)
# df['whois_info.creation_date'].apply(lambda x : print(x) if type(x) != datetime.datetime else x)

# df['whois_info.creation_date'] = df['whois_info.creation_date'].dt.strftime('%m/%d/%Y')
# print(df['whois_info.creation_date'][0])

# df['whois_info.creation_date'].apply(lambda x : x.strftime("%d-%m-%YT%H:%M:%S") if x.notnull() else x)

# df['whois_info.creation_date'] = df['whois_info.creation_date'].dt.strftime("%d-%m-%YT%H:%M:%S")
# df['A'].apply(lambda x: x.strftime('%d%m%Y'))
# # print(type(df['whois_info.creation_date']))


cols = ['whois_info.updated_date','whois_info.creation_date','last_analysis_date']
for col in cols:
    for i, row in df[[col]].iterrows():
        # print("row[0]:", row[0])
        if type(row[0]) == list:
            final_list = []
            for each in row[0]:
                final_list.append(each.strftime("%d-%m-%YT%H:%M:%S"))

            df[col][i] = final_list
        else: 
            if row[0] and type(row[0]) != float:
                # print(type(row[0]))
                # print("current row[0]", row[0])
                holder = row[0].strftime("%d-%m-%YT%H:%M:%S")
                print(holder)
                df[col][i] = holder

    
# print(df['whois_info.creation_date'][8])
# print(df['whois_info.creation_date'][0])
# print(df['whois_info.updated_date'][8])


# print(type(df['whois_info.updated_date'][0][0]))
# print((df['whois_info.updated_date'][0]))
# df.to_csv('testing2.csv',date_format='%Y-%m-%d %H:%M:%S:%f')
# df.to_csv('testing3.csv',date_format='%d-%m-%Y %H:%M:%S')
df.to_csv('test.csv',date_format='%d-%m-%YT%H:%M:%S')
# df.to_csv('domain_twobatch_standardised_dates.csv',date_format='%d-%m-%YT%H:%M:%S')

# df.to_csv('testing7.csv',date_format='%d-%m-%YT%H:%M:%S')


# for column in df:
#     print("column", column)
#     print("head:", set(df[column].values))
#     print(type(df[column].values))
#     # if type(df[column]) == list:
#     #     print(column)

# print(df['added_timestamp'][0])