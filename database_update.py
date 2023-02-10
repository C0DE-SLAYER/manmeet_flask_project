from app import app,db,metadata
import json
import random

with open('p.json','r') as f:
    data = json.load(f)

db.session.query(metadata).delete()
db.session.commit()

num = [x for x in range(278)]

for i in range(len(data)):
    j = random.choice(num)
    num.remove(j)
    title = data[j]['title']
    sub_title = data[j]['sub_title']
    category = data[j]['category']
    photo_path = data[j]['photo_path']
    insert_data = metadata(title=title,sub_title=sub_title,category=category,photo_path=photo_path)
    db.session.add(insert_data)

db.session.commit()
print(f'num= {num}')
