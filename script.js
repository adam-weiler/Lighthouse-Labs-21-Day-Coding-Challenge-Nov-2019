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

// Day #3: Return an array of updated votes based on the name of the selected candidate.
const castVote = (name, votes) => {
  switch (name) {
    case 'Tim': {
      votes[0]++;
      break;
    }
    case 'Sally': {
      votes[1]++;
      break;
    }
    case 'Beth': {
      votes[2]++;
      break;
    }
  }
  return votes;
};

// Day #4: Return an array of updated unregisteredVoters by removing the name of the person voting.
const registerToVote = (name, unregisteredVoters) => {
  // Code here!
  // Remember to return a value!
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

// Day 3
const name = 'Sally';
const name2 = 'Tim';
const name3 = 'Beth';

const votes = [0, 2, 1];
const votes2 = [1, 1, 2];
const votes3 = [5, 2, 2];

// Calling functions:
// Day #1
doorToDoor(volunteers, neighbourhoods);

// Day #2
interviewAnswer(input);
interviewAnswer(input2);
interviewAnswer(input3);
interviewAnswer(input4);

// Day #3
castVote(name, [0, 2, 1]);
castVote(name2, [1, 1, 2]);
castVote(name3, [5, 2, 2]);
