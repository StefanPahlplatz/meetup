import { Router } from 'express';
import * as GroupControlller from './controller';

const routes = new Router();

routes.post('/groups/new', GroupControlller.createGroup);
routes.post('/groups/:groupId/meetups/new', GroupControlller.createGroupMeetup);
routes.get('/groups/:groupId/meetups', GroupControlller.getGroupMeetups);

export default routes;
