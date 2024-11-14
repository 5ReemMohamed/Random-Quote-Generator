
var quoteDisplay=document.getElementById("quote");
var authorDisplay=document.getElementById("author");
var lastIndex = -1 ;
function displayQuote() {
    var quotes =[
        {
            text: '“Be yourself everyone else is already taken.”',
            author:"― Oscar Wilde"
        },
        {
            text: '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
            author: "― Albert Einstein"
        },
        {
            text:'“You only live once, but if you do it right, once is enough.”',
            author:"― Mae West"
        },
        {
            text:'“If you tell the truth, you do not have to remember anything.”',
            author: "― Mark Twain"
        },
        {
            text: '“The only true wisdom is in knowing you know nothing.”',
            author: "― Socrates"
        },
        {
            text: '“Believe you can and you are halfway there.”',
            author: "― Theodore Roosevelt"
        },
        {
            text: '“The future belongs to those who believe in the beauty of their dreams.”',
            author:'― eleanor roosevelt '
        },
        {
            text: '“Success is not final, failure is not fatal: it is the courage to continue that counts."',
            author: "― Winston Churchill"
        },
        {
            text: '“Do something today that your future self will thank you for.”',
            author: "― Sean Patrick Flanery"
        },
        {
            text: '“You miss 100% of the shots you do not take.”',
            author: "― Wayne Gretzky"
        }
    ];
    var randomIndex;
    do{
        randomIndex = Math.floor(Math.random() * quotes.length);    
    }
    while(randomIndex === lastIndex);
    lastIndex = randomIndex;
    console.log(quotes[randomIndex].text, "random quote"); 

    quoteDisplay.innerHTML = quotes[randomIndex].text;
    authorDisplay.innerHTML = quotes[randomIndex].author;
}


