var songs = [
    "La La Land",
    "Myself",
    "Up",
    "Candy Paint"
];

var artists = [
    "NAV",
    "NAV",
    "NAV",
    "Post Malone"
];

var images = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Bryce_Vine_-_La_La_Land.png/220px-Bryce_Vine_-_La_La_Land.png",
    "https://i.ytimg.com/vi/f9gfqGoPGaU/maxresdefault.jpg",
    "https://images.genius.com/02794f15f7d5ae41cd9b27aba4803bb8.500x500x1.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/PostMaloneCandyPaint.jpg/220px-PostMaloneCandyPaint.jpg"
];

var links = [
    "https://www.youtube.com/watch?v=f9gfqGoPGaU",
    "https://www..com/watch?v=KRaPykuwCiw",
    "https://www.youtube.com/watch?v=0GP7LJxFN84",
    "https://www.youtube.com/watch?v=aJGaZbRL1y0"
];

var lengths = [
    "02: 37",
    "03:11",
    "03:41",
    "03:48"
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();

