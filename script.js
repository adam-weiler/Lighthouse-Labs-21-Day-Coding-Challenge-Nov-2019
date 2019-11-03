// My Functions:
// Day #1: Return the number of neighbourhoods each volunteer should visit to split the work evenly.
const doorToDoor = (volunteers, neighbourhoods) =>
  neighbourhoods.length / volunteers.length;

// Day 2: Return the appropriate response based on the topic asked.
const interviewAnswer = topic => {
  switch (topic) {
    case 'arts funding': {
      return "We'll have to get creative!";
    }
    case 'economy': {
      return 'Time is money.';
    }
    case 'transportation': {
      return "It's going to be a long road, so we better get moving.";
    }
    default: {
      return 'QUACK';
    }
  }
};

// Inputs provided:
// Day #1
const volunteers = ['Sally', 'Jake', 'Brian', 'Hamid'];

const neighbourhoods = [
  'Central Valley',
  'Big Mountain',
  'Little Bridge',
  'Bricktown',
  'Brownsville',
  "Paul's Boutique",
  'Clay Park',
  'Fox Nest'
];

// Day #2
const input = 'arts funding';
const input2 = 'economy';
const input3 = 'transportation';
const input4 = 'infidelity';

// Calling functions:
// Day #1
doorToDoor(volunteers, neighbourhoods);

// Day #2
interviewAnswer(input);
interviewAnswer(input2);
interviewAnswer(input3);
interviewAnswer(input4);
