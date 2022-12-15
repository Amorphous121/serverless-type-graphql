import { ObjectType, ID, Field } from 'type-graphql';
import { IsNotEmpty, IsNumber, IsDefined, IsString } from 'class-validator';
import { Author } from './author.typedef';

@ObjectType()
export class Book {
    @Field(type => ID)
    bookId: string;

    // @IsString()
    // @IsNotEmpty()
    @Field(type => String)
    title: string;

    @IsDefined()
    @IsNumber()
    @Field(type => Number)
    createdAt: number;

    @Field(type => Author)
    author: Author
}