const UserSwagger = {
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
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
    '/api/users/register': {
        post: {
            tags: ['Auth'],
            summary: 'Register',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Register',
                    required: true,
                    schema: {
                        $ref: '#/definitions/Register',
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
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
    '/api/users/update-bmi': {
        post: {
            tags: ['Auth'],
            summary: 'Update BMI',
            description: '',
            produces: ['application/json'],
            parameters: [
                {
                    in: 'body',
                    name: 'body',
                    description: 'Update BMI',
                    required: true,
                    schema: {
                        $ref: '#/definitions/BMI',
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
                '400': {
                    description: 'Error',
                    schema: {
                        $ref: '#/definitions/ApiResponse',
                    },
                },
            },
        },
    },
};

export default UserSwagger;