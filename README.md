# fountain-bank

a MERN stack application mimicking the process to enroll on to online banking. Fountain Bank allows user to create an account. At the time when a user account is created, a saving account and a chequing account is created for user by default. User can then login to the application, a summary page is displayed to list out all the bank accounts under the user account.

# Cases not cover at the moment
Session not implemented - backend is ready but not the UI
Logout button not implemented

# Test Accounts

Name: Jake Horran
Client Card number: 7182392183291319
Password: TestPassword
Note: this account has two bank accounts

Name: Tommy Yienaer
Client Card number: 7182392413294123
Password: TestPassword
Note: this account has no bank accounts


# How to run this app locally
1. Clone/download the repo
2. Navigate to server folder, npm install
3. Navigate to client folder, npm install
4. Navigate to server folder, npm run dev
5. Both server and client app should be up and running
6. Open up a brower and navigate to localhost:3000

# APIs

POST /api/user/register
req:
{
	"firstName": text,
	"lastName": text,
	"pan": text,
	"password": text,
	"password2": text
}
res:
{
  firstName: text,
  lastName: text,
  pan: text,
  password: text
}

POST /api/user/login
req:
{
	"pan": text,
	"password": text,
}
res:
{
  user: object,
  success: boolean,
  token: text
}

GET /api/account/summary
res:
{
  accounts: array
}

POST /api/account/create
{
	"user" : {"id": text},
	"account" : {"type": text, "balance": number}
}

