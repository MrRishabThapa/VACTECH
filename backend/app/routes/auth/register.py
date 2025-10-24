from flask import Blueprint, jsonify, request, current_app
from werkzeug.security import check_password_hash
from firebase_admin import auth
from app.routes.utils.user_verifier_func import get_current_user
from app.routes.auth.bp import auth_bp

@auth_bp.route('/register', methods=['POST'])
def register_user():
    try:
        data = request.get_json()
        email = data.get('email', None)
        password = data.get('password',None)
        name = data.get('name', None)

        if not email or not password or not name:
            return jsonify({'msg': 'Email, password and Name are required'}), 400
        
        user = auth.create_user(
            email=email,
            password=password,
            display_name=name
        )
        uid = user.uid

        auth.set_custom_user_claims(uid, {'role': 'President', 'is_admin': True})
        db = current_app.config['db']
        user_ref = db.collection('Users').document(uid)

        if user_ref.get().exists:
            return jsonify({'msg': 'User already exists'}), 400
        
        user_ref.set({
            'email': email,
            'name': name,
            'memo_tokens':10,
            'rank' : 'Hacker',
            'points': 1000,
        })

        return jsonify({'msg': 'User registered sucessfully'}), 201
    
    except Exception as e:
        return jsonify({'msg': f'Error registering user: {str(e)}'}), 500
    
        





