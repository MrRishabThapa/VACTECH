from flask import request
from firebase_admin import auth

def get_current_user():
    session_cookie = request.cookies.get("session")
    print("Session Cookie:", session_cookie)
    
    if not session_cookie:
        return None

    try:
        decoded_token = auth.verify_session_cookie(session_cookie, check_revoked=True)
        
        user_info = {
            "uid": decoded_token.get("uid"),
            "email": decoded_token.get("email"),
            "name": decoded_token.get("name", "No Name"),
            "role": decoded_token.get("role"),
            "is_admin": decoded_token.get("is_admin"),
            "decoded": decoded_token
        }

        return user_info

    except Exception as e:
        print("Firebase token verification failed:", e)
        return None
