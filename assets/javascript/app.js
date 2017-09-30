window.onload = function() {
$("#start").on("click", stopwatch.start);
};

var intervalId;
var clockRunning = false;
var stopwatch = {
  time: 60,
start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;

    }
  },
    stop: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
 count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
if(stopwatch <= 0) {
  clearTimeout(timer);
  alert("Time Up!");
  return false;
}
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);


    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;


  }
};


//setting up the position for my questions
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

//multidimensional array
var questions = [
[ "What is Prince's full given name?", "Roger Black","Nelson Skipper Prince", "Prince Rogers Nelson", "C"],

["What is Prince’s home town?", "Miami","Minneapolis", "Memphis", "B" ],

["How tall is Prince?", "17'4", "2'8", "5'2", "C"],

["Prince reportedly wrote his first tune at the age of 7. What was it called?", "Funk Machine", "I Done a Funk", "Funkogeddon", "A"],

["Which of these women has Prince NOT been romantically linked with?", "Carmen Electra", "Erika Eleniak", "Kim Basinger", "B"],

["Which Madonna songs did Prince pay guitar on?", "Material Girl", "Like a Prayer", "Dear Jessie", "B"],

["Get off…how many positions in a one night stand?", "21", "22", "23", "C"],

["In 2006 Prince was voted…", "World's Sexiest Singer", "World's Sexiest Vegetarian", "World's Sexiest Jehovah's Witness", "B"],

["How many studio albums did Prince release in his life?", "39", "29","49", "A"],

["What is Prince's date of birth?", "January 22, 1958", "June 7, 1958", "July 7, 1958", "B"],

["What was Prince's wife name?", "Maria Grace", "Vanity", "Mayte Garcia","B"], 

["When Doves Cry was a lead single from what album?", "Purple Rain", "Sign o' the Times", "Diamonds and Pearls", "A"],

["What was the release date of Let's Go Crazy?", "May 16, 1984", "November 28, 1984", "July 18, 1984", "C"],

["What was Prince's childhood name?", " The Purple One", " Skipper", "Love Symbol", "B"]
];

function _(x) {
  return document.getElementById(x);
}
function renderQuestion () {
  test = _("test");
  if(pos >= questions.length){
   test.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2>";
  
   _("test_status").innerHTML = "Test Completed";
   pos = 0
   correct = 0;
    return false; //stops rendered funtion
    
  }

  _("test_status").innerHTML = "Question " +(pos+1)+" of "+ questions.length;

// entering data in the varibles to pull the following arrary data after the question.
question = questions[pos][0];  
chA= questions[pos][1];
chB= questions[pos][2];
chC= questions[pos][3];
test.innerHTML = "<h3>"+ question +"</h3>";
//radio buttons for the answer choices
test.innerHTML += "<input type='radio' name='choices' value = 'A'> "+chA+"<br>";
test.innerHTML += "<input type='radio' name='choices' value = 'B'> "+chB+"<br>";
test.innerHTML += "<input type='radio' name='choices' value = 'C'> "+chC+"<br><br>";
test.innerHTML += "<button onclick=  'checkAnswer ()'>Submit Answer</button";
}
function checkAnswer () {
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][4]){
    correct++;
  }
  //shows which question the user is on
pos++;
renderQuestion() ;
}

window.addEventListener("load", renderQuestion, false);



//could not get the stopwatch to stop at 60 seconds.