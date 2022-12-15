import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { Author } from '../typedefs/author.typedef';
import { CreateAuthorInput } from '../typedefs/autor-input.typedef';
import { Book } from '../typedefs/book.typedef';
import authros from './author';
import books from './books';

@Resolver(Book)
export class AuthorResolver {


    @Query(() => Book, { nullable: true })
    getBookById (@Arg('id') id: string) {
        return books.filter(book => book.author)
    }

    @Mutation(() => Book)
    addBook(@Arg('data') inputData: CreateAuthorInput) {
        const man = new Author();
        man.lastName = 'patil';
        man.firstName = 'prathamesh';
        man.createdAt = 123;
        man.authorId = '12345'
        man.books = [];
        return man;
    }
}