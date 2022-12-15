import { buildSchemaSync } from 'type-graphql';
import { AuthorResolver } from './resolvers/author.resolver';
import { LibraryTable } from '../generated/models';


export const schema = buildSchemaSync({
    resolvers: [AuthorResolver]
});