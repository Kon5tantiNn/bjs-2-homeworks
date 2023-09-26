class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = type;
    }
    fix(){
        this.state *= 1.5;
        if(this.state >= 100) {
            return this.state = 100;
        }

    }
    set setNewState(value) {
        if(value < 0) {
            this.state = 0;
        } else if (value > 100) {
            this.state = 100;
        } else {
            this.state = value
        }
    }
    get showstate() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
        this.state = 100;
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book"
        this.state = 100;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)    
            this.type = "novel"
            this.author = author
            this.state = 100;
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
            this.type = "sci-fi"
            this.author = author
            this.state = 100;
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount)
            this.type = "detective"
            this.author = author
            this.state = 100;
    }
}

const book1 = new PrintEditionItem("All Quiet on the Western Front", "02.04.1928", 288);
const book2 = new PrintEditionItem("The Return of the King", "01.02.1950", 464)
const magazine1 = new Magazine("Auto Review", "21.01.2002", 54)
const book3 = new Book("Робинзон Крузо", "11.08.1930", 400)
const novelBook1 = new NovelBook("Master and Margaret", "12.04.1967", 277, "M. Bulgakov")
const detective1 = new DetectiveBook("Снеговик", "23,03,2018", 427, "Ю. Несбё")
const fantastic1 = new FantasticBook("Solaris", "23.05.1970", 377, "Stanislaw Lem")




fantastic1.setNewState = 32
fantastic1.fix()
fantastic1.fix()
console.log(fantastic1.showstate)
console.log(fantastic1.state)
console.log(detective1)
console.log(novelBook1)
book1.setNewState = 10
console.log(book1)
novelBook1.setNewState = 15
console.log(novelBook1.showstate)

novelBook1.fix()
novelBook1.fix()
novelBook1.fix()
novelBook1.fix()
novelBook1.fix()
console.log(novelBook1)
console.log(detective1)

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.showstate > 30){
        this.books.push(book)
        }
    }
}

const classicLibrary = new Library("Библиотека классической литературы 20 века")
classicLibrary.addBook(new NovelBook("Над пропастью во ржи", "12.03.1978", 300, "Джером Дэвид Сэлинджер"))
console.log(classicLibrary.books)

