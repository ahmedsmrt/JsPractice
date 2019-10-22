// Function constructor

// var ahmed = { 
//     name: 'Ahmed',
//     yearOfBirth: 1992,
//     job: 'Developer'
// };


// Function Constructor
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// // This Shows Prototypal Inheritance

// Person.prototype.lastName = 'Smith';


// // Instantiation 
// var ahmed = new Person('Ahmed', 1992, 'Developer');
// var jane = new Person('Jane', 1969, 'Designer');
// var mark = new Person('Mark', 1986, 'Pimp');

// ahmed.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(ahmed);

// Current Date Project
// new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);


var date = new Date();
var days = date.getDay();

var month = date.getMonth() + 1;


var year = date.getFullYear();

var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var actualDay = day[days];


for (var years = 2014; years <= 2050; years++) {
    var d = new Date(years, 0, 1);
    if(d.getDay() === 0) {
        console.log('1st January is being a Sunday ' + years);
    }
}


var prepand = (hours >= 12)? "PM": "AM";
if (hours === 0 && prepand === 'PM') {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepand = 'Noon';
    }
 else {
    hour =12;
    prepand = 'PM';
}
}
if (hours === 0 && prepand === 'AM') {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        prepand = 'Midnight';
    }
 else {
    hour =12;
    prepand = 'AM';
}
}







console.log(`Today is: ${actualDay}. Current time is ${hours}:${minutes}:${seconds} ${prepand}.`);
console.log(`${month}/${days}/${year}`);
// Excercise 2
// console.log(window);
// alert('Welcome To My triangle Area Calculator!');
// var side1 = prompt('What is side 1?');
// console.log(side1);
// var side2 = prompt('What is side 2?');
// console.log(side2);
// var side3 = prompt('What is side 3?');
// console.log(side3);
// var p = ((parseInt(side1) + parseInt(side2) + parseInt(side3)))/2;
// var answer = Math.sqrt((p*(p-side1)*(p-side2)*(p-side3))).toFixed(2);
// alert(`The area of your triangle is ${answer}!`);
// console.log(p);

// Excercise 3 

function animateString(id) {

    var el = document.getElementById(id);
    var textNode = el.childNodes[0];
    var text = prompt("What is your Message?");


    // setInterval(function() {
    //     text = text[text.length - 1] + text.substring(0, text.length - 1);
    //     textNode.data = text;
    //     console.log(text[text.length - 1]); 
    // }, 100);
    var newText = '';
    var newArr = [];
    var newArr2 = [];
    var count = 0;
    for ( var i = 0; i < text.length; i++) {
        newText += text[(text.length - 1) - i]; 
        newArr.push(text[(text.length - 1) - i]);
        newArr2.push(text[i]);
        console.log(newText);
        if(newArr[i] == 'e') { 
            count = count + 1;
        }
    }

    // var newArr = [];
    // for( var i = 0; i < text.length; i++) {
    //     newArr.push(text[(text.length - 1) - i]);
    // }
    
console.log(text.length);
    console.log(text)
    console.log(newText);
    console.log(newArr2);
    console.log(newArr);
    console.log(count);

}


var ahmed = {
    name: 'Ahmed',
    age: 27,
    job: 'Developer',
    presentation: function(style, timeofDay) {
        if (style === 'formal') {
            console.log(`Good ${timeofDay}, Ladies and Gentleman I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`);
        } else if (style === 'friendly') {
            console.log(`Hey what's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old., have a good ${timeofDay}.`);
        }
    }
};

var michelle = {
    name: 'Michelle',
    age: 25,
    job: 'Designer',
};


ahmed.presentation('formal', 'afternoon');
ahmed.presentation.call(michelle, 'friendly', 'Morning');


function Question(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
}

var q1 = new Question('What is my name?', 
['Ahmed', 'Mike', 'Dat Nigga'],
'Dat Nigga');

var q2 = new Question('What is my first cats name?', 
['Shelly', 'Rick', 'Tiddles', 'Victor'],
'Victor');

var q3 = new Question('What is my favorite color?', 
['Red', 'Dark Blue', 'Green', 'Yellow'],
'Green');

var q4 = new Question('What does my bank account look like right now?', 
['Scrugglin but not broke', 'In need of love', 'Stacked like it should be'],
'Scrugglin but not broke');

var q5 = new Question('Will I ever find true love?', 
['With some Cheetos maybe', 'Of course, shes on bumble bruh', 'After you stop being homeless, maybe'],
'Of course, shes on bumble bruh');

var questionArr = [q1,q2,q3,q4,q5];
var answerArr = [q1.]
var randomNum = Math.floor(Math.random()*5);
var randomQ = questionArr[randomNum].question
// var answer = prompt(randomQ);
console.log(randomNum);
console.log(randomQ);
console.log(answer);
    































































