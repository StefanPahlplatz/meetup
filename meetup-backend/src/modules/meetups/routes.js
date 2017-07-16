import { Router } from 'express';
import * as MeetupController from './controller';
import { requireJwtAuth } from '../../utils//requireJWTAuth';

const routes = new Router();

routes.post('/meetups', MeetupController.createMeetups);
routes.get('/meetups', requireJwtAuth, MeetupController.getAllMeetups);

export default routes;
