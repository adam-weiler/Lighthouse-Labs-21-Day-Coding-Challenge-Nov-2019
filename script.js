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
const castVote = (candidate, votes) => {
  switch (candidate) {
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

// Day #4: Return an array of updated unregisteredVoters by removing the voter.
const registerToVote = (voter, unregisteredVoters) =>
  unregisteredVoters.filter(n => n !== voter);

// Day #5:
const chooseStations = stations => {
  // Code here!
  // Remember to return a value!
};

// Inputs provided:
// Day #1
const volunteers = ['Sally', 'Jake', 'Brian', 'Hamid'];
const volunteers2 = ['Sally', 'Jake', 'Brian'];

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
const neighbourhoods2 = ['Central Valley', 'Big Mountain', 'Little Bridge'];

// Day #2
const input = 'arts funding';
const input2 = 'economy';
const input3 = 'transportation';
const input4 = 'infidelity';

// Day 3
const candidate = 'Sally';
const candidate2 = 'Tim';
const candidate3 = 'Beth';

const votes = [0, 2, 1];
const votes2 = [1, 1, 2];
const votes3 = [5, 2, 2];

// Day 4
const voter = 'Bradley';
const voter2 = 'Bobby';
const voter3 = 'Floyd';

const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
const unregisteredVoters2 = ['Jimmy', 'Suzie', 'Bobby'];
const unregisteredVoters3 = ['Tomasa', 'Tennille', 'Tayna', 'Eufemia', 'Floyd'];

// Calling functions:
// Day #1
doorToDoor(volunteers, neighbourhoods); // 2
doorToDoor(volunteers2, neighbourhoods2); // 1

// Day #2
interviewAnswer(input); // We'll have to get creative!
interviewAnswer(input2); // Time is money.
interviewAnswer(input3); // It's going to be a long road, so we better get moving.
interviewAnswer(input4); // QUACK

// Day #3
castVote(candidate, [0, 2, 1]); // [0, 3, 1]
castVote(candidate2, [1, 1, 2]); // [2, 1, 2]
castVote(candidate3, [5, 2, 2]); // [5, 2, 3]

// Day #4
registerToVote(voter, unregisteredVoters); // ['Jake', 'Alanna', 'Stephanie']
registerToVote(voter2, unregisteredVoters2); // ['Jimmy', 'Suzie']
registerToVote(voter3, unregisteredVoters3); // ['Tomasa', 'Tennille', 'Tayna', 'Eufemia']
