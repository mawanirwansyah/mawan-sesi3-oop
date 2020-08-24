class Movie {
    constructor(title, duration, category){
        this.title = title;
        this.duration = duration;
        this.category = category;
    }
    watch() {
        return `Kamu Sedang menonton Film ${this.title} dengan kategori ${this.category} berdurasi ${this.duration}` 
    }
}


class Soundtrack extends Movie {
    constructor(title, duration, category, titleSong, singer){
     super(title, duration, category);
     this.titleSong = titleSong;
     this.singer = singer;
    }
    movieSoundtrack() {
        return `Film ${this.title} Memiliki Lagu ${this.titleSong} dengan penyanyi ${this.singer}` 
    }
}

class Channel extends Movie {
    constructor (title, duration, category, channelName){
        super(title, duration, category);
        this.channelName = channelName;
    }
    streamAt() {
        return `Film ${this.title} ditayangkan di ${this.channelName}`
    }
}

let movie = new Movie('Suspicious Partner','60 minutes','Romance');
let soundtrack = new Soundtrack ('Suspicious Partner','60 minutes','Romance','How do you fee','Ridho Majid');
let channel = new Channel ('Suspicious Partner', '60 minutes', 'Romance','Netflix');

console.log(movie.watch());
console.log(soundtrack.movieSoundtrack());
console.log(channel.streamAt());


