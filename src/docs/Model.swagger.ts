const Auth = {
    type: 'object',
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
const Category = {
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
        name: 'Category',
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
    Category,
    User,
    Tag,
    Pet,
    ApiResponse,
};
export default DefaultModel;
