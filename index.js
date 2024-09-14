console.log('working!')

var randN = 0
var choice;
var prev = 16;
// var choice = guidePost[randN];


$(".next").on("click", gameStart);
$(".shuffle").on("click", randGame);

function gameStart() {
    console.log("here")
    if (randN != guidePost.length - 1){
        randN++;
    }
    else {
        randN = 0;
    }
    choice = guidePost[randN];
    $(".number").text(randN + 1);
    $(".post").text(choice);
}
function randGame() {
    console.log("here")
    while (1) {
        randN = Math.floor((Math.random() * guidePost.length));
        if (randN != prev) {
            break;
        }
        prev = randN;
    }

    choice = guidePost[randN];
    $(".number").text(randN + 1);
    $(".post").text(choice);
}


const guidePost = [
    "Relationship",
    "Conflict - What am I fighting for/How am I meddling?",
    "The Moment Before",
    "Humor",
    "Opposites",
    "Discoveries",
    "Communication and Competition",
    "Importance",
    "Find the Event",
    "Place",
    "Game Playing and Role Playing",
    "Mystery and Secret",
    "Mischief",
    "Vulnerability - Am I Revealing? or Am I Concealing?",
    "Architecture",
];