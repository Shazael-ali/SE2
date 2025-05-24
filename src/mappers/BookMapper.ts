import { BookBuilder } from "../model/builders/book.builder";
import { Book } from "../model/Book.model";
import { IMapper } from "./IMapper";

export class JSONBookMapper implements IMapper<{} | [], Book> {
    map(data: {} | []): Book {
        const parsingObject = Object.values(data);
        return BookBuilder.newBuilder()
                            .setBookTitle(parsingObject[1])
                            .setAuthor(parsingObject[2])
                            .setGenre(parsingObject[3])
                            .setFormat(parsingObject[4])
                            .setLanguage(parsingObject[5])
                            .setPublisher(parsingObject[6])
                            .setSpecialEdition(parsingObject[7])
                            .setPackaging(parsingObject[8])
                            .build();
    }
}