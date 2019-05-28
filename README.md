# fountain-bank

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

