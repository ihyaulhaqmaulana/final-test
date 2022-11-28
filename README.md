# Final Test Refactory Batch 11 

This project use express js

## Installation
```
npm install
```

## Run Project
```
npm run start
```

## cURL
get token
```
curl --location --request GET 'localhost:3000/api/auth'
```

get repositories
```
curl --location --request GET 'localhost:3000/api/repositories?page=2&limit=2' \
--header 'Authorization: {token}'
```