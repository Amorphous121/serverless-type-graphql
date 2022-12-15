import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'; //highlight-line
import { schema } from './graphql/schema';
import { DynamoDb } from './service/aws';
import { LibraryTable } from "./generated/models";

const dyno = DynamoDb.getInstance();

let server = new ApolloServer({
  schema
});


export const graphqlHandler = startServerAndCreateLambdaHandler(server);