import { ObjectType, ID, Field } from 'type-graphql';
import { IsNotEmpty, IsNumber, IsDefined, IsString } from 'class-validator';
import { Book } from './book.typedef';

@ObjectType()
export class Author {
    @Field(type => ID)
    authorId: string

    @IsString()
    @IsDefined()
    @Field(type => String)
    firstName: string

    @IsString()
    @IsDefined()
    @Field(type => String)
    lastName: string

    @IsDefined()
    @IsNumber()
    @Field(type => Number)
    createdAt: number

    @Field(type => [Book])
    books: Book[]
}