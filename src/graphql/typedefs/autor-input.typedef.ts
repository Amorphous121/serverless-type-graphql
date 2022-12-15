import { InputType, Field } from 'type-graphql';
import { IsString, IsDefined } from 'class-validator';
import { Author } from "./author.typedef";

@InputType({ description: 'Input data for adding new author.' })
export class CreateAuthorInput implements Partial<Author> {
    @IsString()
    @IsDefined()
    @Field(type => String)
    firstName: string

    @IsString()
    @IsDefined()
    @Field(type => String)
    lastName: string
}