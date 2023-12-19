# Password Generator

A simple application to generate the strong password.

## APIs

1. GET '/': Check if the server is up and running.
2. POST '/'

**Parameters**
a. `size`
To define the length of the password. Should be between 1 and 16.
b. `hasSpecial`
True or False, defines if the password should contain special character or not.

**Request Body**

```json
{
  "size": 10,
  "hasSpecial": true
}
```

**Response**
`Success`

```json
{
  "status": 200,
  "message": "Successfully generated password.",
  "data": {
    "password": "wpBb0zxH"
  }
}
```

`Failed`

```json
{
  "status": 400,
  "error": "Size must be between 1 and 16."
}
```
