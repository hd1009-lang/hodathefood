const UserSwagger = {
    // '/api/users/login': {
    //     get: {
    //         tags: ['Auth'],
    //         summary: 'Login',
    //         description: '',
    //         parameters: [],
    //         responses: {
    //             '200': {
    //                 description: 'Success',
    //                 schema: {
    //                     $ref: '#/definitions/ApiResponse',
    //                 },
    //             },
    //         },
    //         // security: [
    //         //     {
    //         //         token: [],
    //         //     },
    //         // ],
    //     },
    // },
    '/api/users/login': {
        post: {
            tags: ['Auth'],
            summary: 'Login',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Login',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Auth',
                    },
                },
            ],
            responses: {
                '200': {
                    description: 'Success',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
                '400':{
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                }
            },
            // security: [
            //     {
            //         token: [],
            //     },
            // ],
        },
    },
};

export default UserSwagger;
