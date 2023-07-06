import requests

# res = requests.get('https://itunes.apple.com/search?term=jack+johnson&limit=25')
res = requests.get('https://itunes.apple.com/search', params={'terms': 'Dragon Guardian', 'limit': 5})
# res = requests.get('https://itunes.apple.com/search?term=dragon+guardian&limit=25')

data = res.json()

for result in data["results"]:
    print(result['trackName'])
    print(result['collectionName'])