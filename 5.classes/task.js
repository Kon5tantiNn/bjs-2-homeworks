class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state
        this.type = type;
    }
    fix(){
        this.state *= 1.5;
        if(this.state >= 100) {
            return this.state = 100
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
        if(this.state){
        return this.state
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100) {
        super(name, releaseDate, pagesCount, state)    
            this.type = "novel"
            this.author = author
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100) {
        super(name, releaseDate, pagesCount, state);
            this.type = "sci-fi"
            this.author = author
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author, state = 100) {
        super(name, releaseDate, pagesCount, state)
            this.type = "detective"
            this.author = author
    }
}

const book1 = new PrintEditionItem("All Quiet on the Western Front", "02.04.1928", 288);
const book2 = new PrintEditionItem("The Return of the King", "01.02.1950", 464)
const magazine1 = new Magazine("Auto Review", "21.01.2002", 54)
const book3 = new Book("Робинзон Крузо", "11.08.1930", 400)
const novelBook1 = new NovelBook("Master and Margaret", "12.04.1967", 277, "Bulgakov")
const detective1 = new DetectiveBook("Снеговик", "23,03,2018,", 427, "Ю. Несбё")
const fantastic1 = new FantasticBook("Solaris", "23.05.1970", 377, "Stanislaw Lem")




fantastic1.setNewState = 32
fantastic1.fix()
fantastic1.fix()
console.log(fantastic1.showstate)
console.log(fantastic1.state)
console.log(detective1)
console.log(novelBook1)
