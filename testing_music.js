function Library (name, creator) {
    this.name = name,
    this.creator = creator
    this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
    this.playlists.push(playlist)

}

function Playlist (name) {
    this.name = name,
    this.tracks = [];

}

Playlist.prototype.overallRating = function() {
    let total = this.tracks.length;
    let sum = 0;
    this.tracks.forEach((element) => {
        sum += element.rating;        
    });
    return sum / total 
}

Playlist.prototype.totalDuration = function() {
    let sum = 0;
        this.tracks.forEach((element) => {
            sum += element.duration
        });
        return sum
}

Playlist.prototype.addTrack = function(track){
    this.tracks.push(track);
    return this;
}


function Track(title, rating, duration) {
    this.title = title,
    this.rating = rating, 
    this.duration = duration
}

//Some tracks;
track1 = new Track("Track 01", 4, 180)
track2 = new Track("Track 02", 2, 155)
track3 = new Track("Track 02", 2, 220)

//Create a playlist
playlist1 = new Playlist("My First PlayList");
playlist2 = new Playlist("My Second Playlist");

playlist1.addTrack(track1)
playlist1.addTrack(track2)
playlist1.addTrack(track3)

library1 = new Library("Music Library", "Alefiya")

library1.addPlaylist(playlist1);
library1.addPlaylist(playlist2)

console.log(library1)
//console.log(playlist1.overallRating())
//console.log("the total duration", playlist1.totalDuration())
//console.log("Library ", library1);


