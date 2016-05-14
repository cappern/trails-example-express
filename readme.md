npm install -g npm3
npm3 install
npm start
node server
nodemon server

npm3 i https://github.com/trailsjs/trailpack-waterline

to get user
POST /auth/local HTTP/1.1
Host: localhost:3000
Accept: application/json
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: dbd05e85-b06a-0122-ac0f-3682346077df

{"username": "jrt", "password": "adminadmin"}

{
  "redirect": "/",
  "user": {
    "passports": [
      {
        "protocol": "local",
        "password": "$2a$10$D8SNy9Uf9/5K3Z8ygdvIk.83Fohr9aZZSDigpgFS7dMdx51axxKTW",
        "user": "5733fe1e385047980a9627e2",
        "accessToken": "XURqwKdKI7sDJ+9xWKNKq6S2hXr77+H0Tx4B4628QWNNRYGUIUMyYp/vGDl1PF7h",
        "createdAt": "2016-05-12T03:53:02.131Z",
        "updatedAt": "2016-05-12T03:53:02.131Z",
        "id": "5733fe1e385047980a9627e3"
      }
    ],
    "username": "jrt",
    "createdAt": "2016-05-12T03:53:02.031Z",
    "updatedAt": "2016-05-12T03:53:02.031Z",
    "id": "5733fe1e385047980a9627e2"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InBhc3Nwb3J0cyI6W3sicHJvdG9jb2wiOiJsb2NhbCIsInBhc3N3b3JkIjoiJDJhJDEwJEQ4U055OVVmOS81SzNaOHlnZHZJay44M0ZvaHI5YVpaU0RpZ3BnRlM3ZE1keDUxYXh4S1RXIiwidXNlciI6IjU3MzNmZTFlMzg1MDQ3OTgwYTk2MjdlMiIsImFjY2Vzc1Rva2VuIjoiWFVScXdLZEtJN3NESis5eFdLTktxNlMyaFhyNzcrSDBUeDRCNDYyOFFXTk5SWUdVSVVNeVlwL3ZHRGwxUEY3aCIsImNyZWF0ZWRBdCI6IjIwMTYtMDUtMTJUMDM6NTM6MDIuMTMxWiIsInVwZGF0ZWRBdCI6IjIwMTYtMDUtMTJUMDM6NTM6MDIuMTMxWiIsImlkIjoiNTczM2ZlMWUzODUwNDc5ODBhOTYyN2UzIn1dLCJ1c2VybmFtZSI6ImpydCIsImNyZWF0ZWRBdCI6IjIwMTYtMDUtMTJUMDM6NTM6MDIuMDMxWiIsInVwZGF0ZWRBdCI6IjIwMTYtMDUtMTJUMDM6NTM6MDIuMDMxWiIsImlkIjoiNTczM2ZlMWUzODUwNDc5ODBhOTYyN2UyIn0sImlhdCI6MTQ2MzAyNjkyOSwiZXhwIjoxNDYzMTEzMzI5LCJhdWQiOiJsb2NhbGhvc3QiLCJpc3MiOiJsb2NhbGhvc3QifQ.pReFttldeCssyg2lyuzMHjM0i0ebU-px11A1y6_LQOk"
}