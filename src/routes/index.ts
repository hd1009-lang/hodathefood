import express from 'express';
import UserRouter from './Users.route';

const router = express.Router();

const pathRouter = [
    {
        path: '/users',
        route: UserRouter,
    },
];

pathRouter.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
