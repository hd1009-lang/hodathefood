import express from 'express';
import UserRouter from './Users.route';
import CateRouter from './Cates.route';
const router = express.Router();

const pathRouter = [
    {
        path: '/users',
        route: UserRouter,
    },
    {
        path: '/cates',
        route: CateRouter,
    },
];

pathRouter.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
