// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

processKeyEvents = function(event) {
	if (window.event)
	{
		event = window.event;
	}
	 keyDown[event.keyCode] = true;      
};

releaseKey = function(event){
    // MSIE hack
        if (window.event)
        {
            event = window.event;
        }

    keyDown[event.keyCode] = false;
}

MemoryGame.onkeydown = processKeyEvents;
MemoryGame.onkeyup = releaseKey;

$(document).keydown(function(event) {
	var $prev, $next, $current = $("ul li.highlight");
	var key = event.which;

  if(key === 40 && !$current.length) {
     $("ul li:first").addClass("highlight");
  } else if (key === 39) {
     $next = $current.next("li");
    if($next.length) {
      $current.removeClass("highlight");
      $next.addClass("highlight");
    }
    } else if (key === 37) {
        $prev = $current.prev("li");
      if($prev.length) {
         $current.removeClass("highlight");
         $prev.addClass("highlight");
      }
      } else if (key === 38) {
    	$prev = $current.prev("li");
    	if($prev.length) {
         $current.removeClass("highlight");
         $prev.addClass("highlight");
      } 
    } else if (key === 13) {
      flipCard();
    }
 });

function flipCard () {
  var flipped = 0;

  if($(this).attr('id') == 'flip1' || $(this).attr('id') == 'flip2' || $(this).hasClass('good')){
          // to do, click again on flipped card
      }
      else{
        $(this).toggleClass('flip');
          flipped = flipped + 1;
            if(flipped === 1){
              $('#flip1').removeAttr('id', 'flip1');
              $('#flip2').removeAttr('id', 'flip2');
              $(this).attr('id', 'flip1');
              }
            else if(flipped === 2){
              $(this).attr('id', 'flip2');
            if($(this).children('.card-back').children('img').attr('alt') === $('#flip1').children('.card-back').children('img').attr('alt')){
              $(this).addClass('good');
              $('#flip1').addClass('good');
              points++;
            }
            if(points === 10){
              $('body').css('opacity', '50%');
              confirm("you made it baby");
              document.location.reload();
            }
            flipped = 0;
            }
      }

$(this).addClass('flipped');

  if($('.flipped').size()==2){
    setTimeout(checkPattern, 500);
  }
}

function checkPattern() {
  if(isMatch()) {
    $('.flipped').removeClass('flipped').addClass('removed');
    
    $('.removed').bind("webkitTransitionEnd", removeMatched);
  }
  else {
    $('.flipped').removeClass('flipped');
  }
}

function isMatch() {
  var flippedCards = $('.flipped');
  var pattern0 = $(flippedCards[0]).data('pattern');
  var pattern1 = $(flippedCards[1]).data('pattern');
  console.log("$(flippedCards[0]).data('pattern') "+$(flippedCards[0]).data('pattern'));
  console.log("$(flippedCards[1]).data('pattern') "+$(flippedCards[1]).data('pattern'));
  return (pattern0 == pattern1);
}

function removeMatched(){
  $('.removed').remove();
}

//loads the card and clone into the li structure
$(function() {
  var imgSrc = "images/card_bg.gif";
  $("<img />").attr("src", imgSrc).load(function(){
    $(this).clone().prependTo('li');
  });
});

var memoryGame = {}

// an array to remember which key is pressed and which is not.
memoryGame.pressedKeys = [];

$(function() {
	memoryGame.timer = setInterval(MemoryGame, 60);

	// mark down what key is down and up into an array called "pressedKeys"
	$(document).keydown(function(e){
		memoryGame.pressedKeys[e.which] = true;

    });
    $(document).keyup(function(e){
    	memoryGame.pressedKeys[e.which] = false;
	});
});

MemoryGame.cards = [
  cardOne = ('#e6e03b', '#e6e03b'),
  cardTwo = ('#3be6c4', '#3be6c4'),
  cardThree = ('#6f3be6', '#6f3be6'),
  cardFour = ('#4fe63b', '#4fe63b'),
  cardFive = ('#ff5a00', '#ff5a00'),
  cardSix = ('#ff00de', '#ff00de'),
  cardSeven = ('#3b8fe6', '#3b8fe6'),
  cardEight = ('#e63b3b', '#e63b3b')
];

var cardArray = [cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight];

cardArray.map(function(item) {
 
})

// This solution only affects the arr var and not all arrays
var arr = [];
arr.shuffle = function () {
    'use strict';
    var i,
    j,
    tmp;
    for (i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }
  return Array.prototype.shuffle.apply(this, arguments);
}

// lets start by shuffling the array
$(function () {
  console.log(MemoryGame.cards.shuffle());
  var concatinatedArray = MemoryGame.cards.join(concatinatedArray);
  var arrayColours = concatinatedArray;
  var i;
  for(var i = 0; i < arrayColours.length; i++) {
      var test = $("li.item").css(arrayColours[i]);
      console.log(test);
  }
});

MemoryGame.prototype.buildDeck = function (count) {
  var theDeck = $(".theDeck");
  console.log(theDeck);
  this.deck = [];
  for (card in MemoryGame.cards) {
    if(card < parseFloat(count)) {
      console.log(card);
      this.deck.push(this.cards[card]);
      console.log(this.deck.push(this.cards[card]));
    } 
  }
}

// reloads the page when restart button is pressed
$(function() {
	var restartButton = $('.button');
	$(restartButton).click(function() {
    	location.reload();
	});
});

function ReloadPage() { 
   location.reload();
};

(function() {
  'use strict';
  setTimeout("ReloadPage()", 60000000);
  var myCounter;
  var elem = $('.time-counter');
	var count = parseInt(elem.text(), 10);
	myCounter = setInterval(function () {
    count += 1;
    elem.html(count);
}, 1000);
})();

function MemoryGame(score, player, card) {
  'use strict';
	this.score = 0;
	this.player = 0;
  this._name = memoryGame;
  this._version = '0.1';
  //new Player(this);
	this.card = card;
  this.start;

}

MemoryGame.prototype.start = function() {
  var _game = this; 
  this.getScore();
  this.buildDeck();
  this.readConfigFile();
}

MemoryGame.prototype.getScore = function() {
	return this.score;
}

MemoryGame.prototype.setScore = function(score) {
	this.score = score;
}

MemoryGame.prototype.getPlayer = function() {
	return this.player;
}

MemoryGame.prototype.setPlayer = function(player) {
	this.player = player;
}

MemoryGame.prototype.getCard = function() {
	return this.card;
}

MemoryGame.prototype.setCard = function(card) {
	this.card = card;
}

MemoryGame.prototype.readConfigFile = function() {
 $.get("http://labs.funspot.tv/worktest_color_memory/colours.conf", function(data) {
      var result = data.responseText;
      $foo = $('<div>' + result + '</div>');
      $.each($foo.find('p'), function(item) {
        var p = $foo.find('p');
        var s = $(p).html();
        var hexColour = s.match(/#[0-9a-f]{6}/gi);
        var i;
        for(var i = 0; i < hexColour.length; i++) {
          MemoryGame.cards.push(hexColour[i]);
        }
      });
    },
    "html", "text");
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function loaded() {

	//prevent scrolling if app is running full screen
	if (window.navigator.standalone) {

		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
	}

	if ((typeof(window.localStorage) == 'undefined')) {
		alert("Your browser does not support localStorage. You high score will not be saved.");
	}

}

window.addEventListener("load", loaded, true);

var memoryGame = new MemoryGame(score);
memoryGame.start();

