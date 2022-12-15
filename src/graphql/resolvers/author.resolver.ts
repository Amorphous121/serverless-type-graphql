import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Author } from '../typedefs/author.typedef';
import { CreateAuthorInput } from '../typedefs/autor-input.typedef';
import authros from './author';
import books from './books';

import { Beyonce } from '@ginger.io/beyonce';
import { LibraryTable, AuthorModel, BookModel } from '../../generated/models';
import { DynamoDb } from '../../service/aws';


@Resolver(Author)
export class AuthorResolver {

    beyonce = new Beyonce(LibraryTable, DynamoDb.getInstance());

    @Query(() => Author, { nullable: true })
    getAuthorById (@Arg('id') id: string) {
        return authros.find(aut => aut.id == id);
    }

    @Mutation(() => Author)
    async createAuthor(@Arg('data') inputData: CreateAuthorInput) {
        try {
            
            // const author = AuthorModel.create({
            //     authorId: '' + Math.random(),
            //     firstName: inputData.firstName,
            //     lastName: inputData.lastName,
            //     createdAt: Date.now()
            // });

            // const data = await this.beyonce.put(author);
            
            // console.dir(data);
            

            const man = new Author();
            man.lastName = 'patil';
            man.firstName = (await (DynamoDb.getInstance()).listTables().promise())[0];
            man.createdAt = 123;
            man.authorId = '12345'
            man.books = [];
            return man; 
        } catch (e) {
            console.log("eeeeeeeee ======> ", e.message);
            throw e;
        }
    }

    @FieldResolver({ nullable: true, description: 'books of authors' })
    books(@Root() parent: Author) {
        let result = books.filter(book=> book.author == parent.authorId)
        return books
    }
}