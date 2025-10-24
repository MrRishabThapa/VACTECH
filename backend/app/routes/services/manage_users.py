from flask import Blueprint, jsonify, request, current_app
from app.routes.utils.user_verifier_func import get_current_user

users_bp = Blueprint('users', __name__)

@users_bp.route('/add-members', methods=['POST'])
def add_members():
    try:
        db = current_app