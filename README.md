# fountain-bank

a MERN stack application minicking the process to enroll on to online banking. Fountain Bank allows user to create an account. When user login to the application, a summary page is displayed to list out all the bank accounts under the user account.

APIs

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

