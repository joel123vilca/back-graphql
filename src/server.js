import {grahpQLServer} from 'grahpql-yoga';
import path from 'path';
import resolvers from './grahpql/resolvers';

const server = new grahpQLServer({
    typeDefs: path.join(__dirname,'graphql/schema.graphql'),
    resolvers
})