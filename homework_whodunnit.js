// Episode 1 //
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// This function should run okay and return the string to the console
// -> The murderer is Miss Scarlet.


// Episode 2 //
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
// Function will fail here as it will not allow you to reassign the value of murderer due to const declaration
const verdict = declareMurderer();
console.log(verdict);


// Episode 3 //
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
// Will return :
// -> First Verdict: Mrs. Peacock
// Has access to the new declared value of murder inside declareMurderer

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// Will return:
// -> Second Verdict: Professor Plum
// Because it only has access to the original declaration of murderer and not the change with declareMurderer()



// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// Will Return:
// -> The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// This is because it is taking the new value of suspectThree from the function declareAllSuspects().
console.log(`Suspect three is ${suspectThree}.`);
// Will Return:
// -> Suspect three is Mrs. Peacock.
// This is because the value is not changed by outside of the function declareAllSuspects().



// Episode 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// Will return:
// -> The weapon is the Revolver.
// This is because even although the scenario is set as a const, you can still mutate the values within the object even if you cant change the data type.



// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Will return:
// -> The murderer is Mrs. White.
// This is because both times we have changed the variable murderer to a global variable meaning it could be changed from anywhere.

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// Will Return:
// -> The murderer is Mr. Green.
// i beleive this is due to fact that everything inside plotTwist() is lost outside of the function due to the let murderer variable meaning it will pick up the value of murderer from inside changeMurderer().


// Episode 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// Will Return:
// -> The weapon is Candle Stick
// This is because when changeScenario() is called, it will then call plotTwist() to change the room to Dining Room followed by plotTwist() calling unexpectedOutcome() which will further mutate the scenario to set the murder weapon as Candle Stick.


// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// Will Return:
// -> The murderer is Professor Plum
// This is because the variable inside the if statement will never be changed outside the statement as it is not returning the new murderer name, nor is it changing the anything other than inside the statement.
