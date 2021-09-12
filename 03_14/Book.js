class Books {
    constructor(
        Title,
        Author,
        genre,
        published_date,
        no_of_books_sold,
        publisher,
    ) {
        this.Title = Title;
        this.Author = Author;
        this.genre = genre;
        this.published_date = published_date;
        this.no_of_books_sold = no_of_books_sold;
        this.publisher = publisher;
    }
    update_no_books(no_of_books) {
        this.no_of_books_sold = no_of_books;
    }

}

export default Books;