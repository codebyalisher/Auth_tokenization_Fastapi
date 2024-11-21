## **FastAPI Authentication API**

This repository contains a **FastAPI** project implementing authentication features, including user registration, login, token generation, refresh token functionality, and logout. It uses **JWT (JSON Web Tokens)** for secure authentication.


## **Features**

1. **User Registration**:

- Create a new user with a username and password.

- Passwords are securely hashed using bcrypt.

- **User Login**:

- Validate credentials and generate access and refresh tokens.

- **Token Refresh**:

- Refresh expired access tokens using a valid refresh token.

- **Logout**:

- Facilitates client-side token removal to complete the logout process.

- **CORS Support**:

- Allows cross-origin requests for flexibility in frontend integration.


## **Technologies Used**

- **FastAPI**: Backend framework.

- **JWT**: For token-based authentication.

- **SQLite**: For database storage.

- **SQLAlchemy**: ORM for database interactions.

- **Passlib**: Password hashing.

- **dotenv**: For managing environment variables.

- **CORS Middleware**: Handles cross-origin requests.


## **Installation**

**Clone the repository**: \
 \
`git clone https://github.com/your-username/fastapi-auth-api.git`

```
cd fastapi-auth-api

**1-Set up a virtual environment**: \
 \
`python -m venv venv`

source venv/bin/activate   # On Windows: venv\Scripts\activate
2-**Install dependencies**: \
 \
`pip install -r requirements.txt`

3-**Set environment variables**: Create a `.env` file in the project root with the following keys: \
 \
`SECRET_KEY=your_secret_key`

ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
REFRESH_TOKEN_EXPIRE_MINUTES=60
**4-Run the server**: \
 \
`uvicorn main:app --reload`

**Access the API**: The server will run at `http://127.0.0.1:8000`. The Swagger documentation is available at `http://127.0.0.1:8000/docs`.

```
## **Endpoints**

### **Authentication API**

| Method | Endpoint | Description |
|---|---|---|
| POST | /auth/register | Register a new user. |
| POST | /auth/login | Login with username & password. |
| POST | /auth/refresh_token | Refresh access token. |
| POST | /auth/logout | Logout user. |

## **License**

This project is licensed under the MIT License. Feel free to use, modify, and distribute it.


## **Contributions**

Contributions are welcome! Feel free to fork the repository and submit a pull request with your changes.


## **Contact**

For any issues or queries, please open an issue on the repository or contact me at

alishersoftdev@gmail.com
