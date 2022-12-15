import { Table } from "@ginger.io/beyonce"

export const LibraryTable = new Table({
  name: "Library",
  partitionKeyName: "pk",
  sortKeyName: "sk",
  encryptionBlacklist: ["id", "author"]
})

export enum ModelType {
  Author = "Author",
  Book = "Book"
}

export interface Author {
  model: ModelType.Author
  authorId: string
  firstName: string
  lastName: string
  createdAt: number
}

export interface Book {
  model: ModelType.Book
  bookId: string
  title: string
  createdAt: number
  author: string
}

export const AuthorModel = LibraryTable.model<Author>(ModelType.Author)
  .partitionKey("Author", "id")
  .sortKey("Author", "id")

export const BookModel = LibraryTable.model<Book>(ModelType.Book)
  .partitionKey("Author", "author")
  .sortKey("Book", "id")

export type Model = Author | Book

export const AuthorsPartition = LibraryTable.partition([AuthorModel, BookModel])
