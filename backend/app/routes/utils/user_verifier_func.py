from flask import request, jsonify
import firebase_admin
from firebase_admin import auth
from functools import wraps

def get_current_user():
    """
    Reads the Firebase ID token from cookies and verifies it.
    Returns the decoded token (dict) if valid, otherwise None.
    """
    try:
        # The cookie name your frontend sets (adjust if needed)
        id_token = request.cookies.get('firebase_token')

        if not id_token:
            return None  # No token provided
        
        decoded_token = auth.verify_id_token(id_token, check_revoked=True)
        user = {
            "uid": decoded_token['uid'],
            "email": decoded_token['email'],
            "name": decoded_token['name'],
            "role": decoded_token['role'],
            "is_admin": decoded_token['is_admin']
        }

        return user

    except auth.ExpiredIdTokenError:
        print("⚠️ Token expired.")
        return None
    except auth.InvalidIdTokenError:
        print("⚠️ Invalid token.")
        return None
    except auth.RevokedIdTokenError:
        print("⚠️ Token has been revoked.")
        return None
    except Exception as e:
        print("⚠️ Error verifying token:", e)
        return None
