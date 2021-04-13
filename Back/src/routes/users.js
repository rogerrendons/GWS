import { Router } from 'express'
const auth = require('../authentication/authentication')
const router = Router();

// Controllers
import { getUsers, getSupporters, createUser, getName, updateUser, deleteUser, login } from '../controllers/user.controller';

// Routes
router.get('/usr-suporter/', getSupporters);
router.get("/:first_name/:last_name", getName);
router.route('/').get(getUsers).post(auth.register, createUser);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/login').post(login);

export default router;