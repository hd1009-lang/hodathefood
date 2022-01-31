// const YAML = require('yamljs');
// const path = require('path')
// const swagger_path =  path.resolve(__dirname,'./swagger.yaml');
// const swaggerDocument = YAML.load(swagger_path);
// export default swaggerDocument
import DefaultModel from './Model.swagger';
import UserSwagger from './Users.swagger';
const Swagger = {
    swagger: '2.0',
    info: {
        description: 'Swagger of hodathefood',
        version: '1.0.0',
        title: 'Swagger hodathefood',
    },
    tags: [
        {
            name: 'Auth',
            description: 'Auth web',
        },
    ],
    schemes: ['http', 'https'],
    paths: {
        ...UserSwagger,
    },
    definitions: {
        ...DefaultModel,
    },
    securityDefinitions: {
        token: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        },
    },
    externalDocs: {
        description: 'Used with Swagger. Click to find out more about Swagger ',
        url: 'http://swagger.io',
    },
};

export default Swagger;
