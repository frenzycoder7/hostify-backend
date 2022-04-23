import { Router } from 'express';
import { AuthService } from 'src/service/auth_service';


const authController = Router();

const authService: AuthService = new AuthService();

authController.post('/signin', authService.loginUser);
authController.post('/signup', authService.createUser);

export default authController;