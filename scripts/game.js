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


// based on http://stackoverflow.com/a/962890/90670
Array.prototype.shuffle = function() {
	var tmp, current, top = this.length;

    if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = this[current];
        this[current] = this[top];
        this[top] = tmp;
    }

    return this;
};


/*var keyDown = new Array();
	for (var i = 0; i<256; i++) {
		keyDown[i] = false;
	}*/

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
      cardClicked();
    }
 });

function cardClicked () {
  if($('.flipped').size > 1) {
    alert('come on')
    return;
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

/*for(var i = 0; i < cardArray.length; i++) {
  alert(cardArray[i]);
}*/

MemoryGame.cardDeck = function() {

  var cards = new Array();
  cards[0] = card('#e6e03b', '#e6e03b');
  cards[1] = card('#3be6c4', '#3be6c4');
  cards[2] = card('#6f3be6', '#6f3be6');
  cards[3] = card('#4fe63b', '#4fe63b');
  cards[4] = card('#ff5a00', '#ff5a00');
  cards[5] = card('#ff00de', '#ff00de');
  cards[6] = card('#3b8fe6', '#3b8fe6');
  cards[7] = card('#e63b3b', '#e63b3b');

  var randomNumber = Math.floor(Math.random() * 11)

  return card[randomNumber];
}

// This solution only affects the arr var and not all arrays
var arr = [];
arr.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }
  return Array.prototype.shuffle.apply(this, arguments);
}

// lets start by shuffling the array
$(function () {
  console.log(MemoryGame.cards.shuffle());
});

MemoryGame.buildDeck = function () {
  var test = $(".theDeck").html('');
  this.deck = [];
  for (card in this.cards) {
    if(card < parseFloat(count)) {
      this.deck.push(this.card[card]);
      alert(this.deck.push(this.card[card]));
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
  setTimeout("ReloadPage()", 60000000);
  var elem = $('.time-counter');
	var count = parseInt(elem.text());
	myCounter = setInterval(function () {
    count += 1;
    elem.html(count);
}, 1000);
})();

function MemoryGame(score, player, card) {
	this.score = 0;
	this.player = 0;
  this._name = memoryGame;
  this._version = '0.1';
  //new Player(this);
	this.card = card;
  //this.start();

}

function Player() {
	this.points = 0;
}

MemoryGame.prototype.start = function() {
  var _game = this; 
  this.getScore();
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

function ScoreKeeper() {
  this.score = 0;
  $("#score").html("Score: 0");
}

ScoreKeeper.prototype.makeSelection = function () {

}

MemoryGame.prototype.readConfigFile = function() {
 'use strict'
 $.get("http://labs.funspot.tv/worktest_color_memory/colours.conf", function(data) {
      var result = data.responseText;
      $foo = $('<div>' + result + '</div>');
      $.each($foo.find('p'), function(item) {
        var p = $foo.find('p');
        var s = $(p).html();
        var stringy = "You should probably list all your requirements before wasting my #abcd4f time because my time is really #808080 valuable to me and I don't have enough #123456 free time as it is.";
        var hexColour = s.match(/#[0-9a-f]{6}/gi).join(", ");
        alert(hexColour);
        console.log('hello');
        var i;
        for ( i = 0, item; item = hexColour[i]; i++) {
    
        }
        //return hexColour;
      });
    },
    "html", "text");
}

	//Function to convert hex format to a rgb color
	function hex2rgb(rgb) {
 		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 		qreturn + "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

  function hasHex(str) {
    return str.match(/^#[a-f0-9]{6}$/i) !== null;
}

	function hex(x) {
  		return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 	}


MemoryGame.prototype.endGame = function () {
			// Show fancy notication and reload page
			if ($(this.options.selector.card, this.element).length === $(this.options.selector.empty).length) {
				$(this.options.selector.notification_text).text(nrAttempts);
				$(this.options.selector.notification_area)
					.show()
					.animate(
						{ width:0, height:0, left:"50%", top:"50%", fontSize:0 },
						this.options.timeout_notification,
						this.reloadPage
					);
			}
};


var cardOne;
var cardTwo;

// event handler function attached to the flip button
// checks if the colours are the same and updates the score


var score = function() {

	var selectedCount = 0;
	var selectedArray = [];
	for (var i = 0; i < cardArray.length; i++)
	{
		if (cardArray[i].selected)
		{
			selectedCount = selectedCount + 1;
			selectedArray.push(cardArray[i]);
		}
	}
	if (selectedCount == 2)
	{
		selectedArray[0].flip();
		selectedArray[1].flip();
		// if the values of the two cards are the same
		if (selectedArray[0].value == selectedArray[1].value)
		{
			selectedArray[0].disableBtn();
			selectedArray[1].disableBtn();
			addPoints();
		}
		else
		{
			// There is an issue here with setTimeout when you try to call a method in your 'class'
			// The addition of an extra argument solves the problem, but maybe not in IE
			setTimeout(function(thisObj) { selectedArray[0].unselect(); }, 1000, this)
			setTimeout(function(thisObj) { selectedArray[1].unselect(); }, 1000, this)
		}
	}
	else
		alert("Please select two cards!");
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

