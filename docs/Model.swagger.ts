const Auth = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
    },
};
const ApiResponse = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
        },
    },
};
const Register = {
    type: 'object',
    required: ['username', 'password', 'name'],
    properties: {
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
    },
};
const BMI = {
    type: 'object',
    required: ['height', 'weight', 'gender', 'yearOfBirth', 'activity'],
    properties: {
        height: {
            type: 'number',
        },
        weight: {
            type: 'number',
        },
        gender: {
            type: 'number',
        },
        yearOfBirth: {
            type: 'number',
        },
        activity: {
            type: 'number',
        },
    },
};
const CategoryPost = {
    type: 'object',
    required: ['name'],
    properties: {
        name: {
            type: 'string',
        },
    },
};
const User = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int64',
        },
        username: {
            type: 'string',
        },
        firstName: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
        userStatus: {
            type: 'integer',
            format: 'int32',
            description: 'User Status',
        },
    },
    xml: {
        name: 'User',
    },
};
const Tag = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            format: 'int64',
        },
        name: {
            type: 'string',
        },
    },
    xml: {
        name: 'Tag',
    },
};
const Pet = {
    type: 'object',
    required: ['name', 'photoUrls'],
    properties: {
        id: {
            type: 'integer',
            format: 'int64',
        },
        category: {
            $ref: '#/definitions/Category',
        },
        name: {
            type: 'string',
            example: 'doggie',
        },
        photoUrls: {
            type: 'array',
            xml: {
                name: 'photoUrl',
                wrapped: true,
            },
            items: {
                type: 'string',
            },
        },
        tags: {
            type: 'array',
            xml: {
                name: 'tag',
                wrapped: true,
            },
            items: {
                $ref: '#/definitions/Tag',
            },
        },
        status: {
            type: 'string',
            description: 'pet status in the store',
            enum: ['available', 'pending', 'sold'],
        },
    },
    xml: {
        name: 'Pet',
    },
};

const DefaultModel = {
    Auth,
    Register,
    BMI,
    CategoryPost,
    ApiResponse,
};
export default DefaultModel;
