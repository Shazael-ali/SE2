import { Item, ItemCategory } from "./Item.model";

export class Book implements Item {
    getCategory(): ItemCategory {
         return ItemCategory.BOOK;
    }

    private id: string;
    private bookTitle: string;
    private author: string;
    private genre: string;
    private format: string;
    private language: string;
    private publisher: string;
    private specialEdition: string;
    private packaging: string;


    constructor(
        id: string,
        bookTitle: string,
        author: string,
        genre: string,
        format: string,
        language: string,
        publisher: string,
        specialEdition: string,
        packaging: string,
       
    ) {
        this.id = id;
        this.bookTitle = bookTitle;
        this.author = author;
        this.genre = genre;
        this.format = format;
        this.language = language;
        this.publisher = publisher;
        this.specialEdition = specialEdition;
        this.packaging = packaging;
        
    }

    getId(): string { return this.id; }
    getBookTitle(): string { return this.bookTitle; }
    getAuthor(): string { return this.author; }
    getGenre(): string { return this.genre; }
    getFormat(): string { return this.format; }
    getLanguage(): string { return this.language; }
    getPublisher(): string { return this.publisher; }
    getSpecialEdition(): string { return this.specialEdition; }
    getPackaging(): string { return this.packaging; }


}