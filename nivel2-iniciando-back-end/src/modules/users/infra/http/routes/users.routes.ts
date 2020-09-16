import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '@modules/users/infra/http/controllers/UsersControllers';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const usersRoute = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

usersRoute.post('/', usersController.create);

usersRoute.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRoute;
