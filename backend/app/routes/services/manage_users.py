from flask import Blueprint, jsonify, request, current_app
from app.routes.utils.user_verifier_func import get_current_user
from firebase_admin import auth

users_bp = Blueprint('users', __name__)

@users_bp.route('/get-all-users', methods=['GET'])
def get_all_users():
    try:
        db = current_app.config['db']

        user = get_current_user()
        if not user:
            return jsonify({'msg': 'Unauthorized User'}), 401
        
        users_ref = db.collection('Users')
        users = [doc.to_dict() | {"id": doc.id} for doc in users_ref.stream()]

        return jsonify({
            'msg': 'Successfully fetched users',
            'users': users
        }), 200

    except Exception as e:
        return jsonify({'msg': 'Internal server error', 'error': str(e)}), 500
@users_bp.route('/add_user', methods=['POST'])
def add_user():
    try:
        db = current_app.config['db']
        data = request.get_json()

        if not data:
            return jsonify({'msg': 'Missing JSON data'}), 400
        
        required_fields = ["email", "password", "commitee", "role", "name"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing field: {field}"}), 400
        
        user = get_current_user()
        if not user or not user.is_admin:
            return jsonify({'msg': 'Unauthorized User'}), 401
        
        user = auth.create_user(
            email=data.get('email'),
            password= data.get('password'),
            display_name= data.get('name')
        )

        uid = user.uid
        auth.set_custom_user_claims(uid, {'role':data.get('role'), 'is_admin': data.get('is_admin', False)})
        
        users_ref = db.collection('Users').document(uid)
        users_ref.set({
            'email': data.get('email'),
            'name': data.get('name'),
            'commitee': data.get('commitee'),
            'memo_token': 1,
            'points': 10,
        })

        return jsonify({
            'msg': 'Successfully created user'
        }), 201

    except Exception as e:
        return jsonify({'msg': 'Internal server error', 'error': str(e)}), 500
@users_bp.route('/edit_user/<uid>', methods=['PUT'])
def edit_user(uid):
    try:
        db = current_app.config['db']
        data = request.get_json()

        if not data:
            return jsonify({'msg': 'Missing JSON data'}), 400
        
        updated_info = {}
        updated_fields = ["email", "password", "commitee", "role", "name"]
        for field in updated_fields:
            if field in data:
                updated_info[field] = data[field]
            
        user = get_current_user()
        if not user or not user.is_admin:
            return jsonify({'msg': 'Unauthorized User'}), 401
        
        
        users_ref = db.collection('Users').document(uid)
        users_ref.update(updated_info)

        return jsonify({
            'msg': 'Successfully updated the user'
        }), 200

    except Exception as e:
        return jsonify({'msg': 'Internal server error', 'error': str(e)}), 500
    
@users_bp.route('/delete-user/<uid>', methods=['DELETE'])
def delete_user(uid):
    try:
        db = current_app.config['db']
            
        user = get_current_user()
        if not user or not user.is_admin:
            return jsonify({'msg': 'Unauthorized User'}), 401
        
        
        users_ref = db.collection('Users').document(uid)
        users_ref.delete()

        return jsonify({
            'msg': 'Successfully deleted the user'
        }), 200

    except Exception as e:
        return jsonify({'msg': 'Internal server error', 'error': str(e)}), 500