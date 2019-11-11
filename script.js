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

// Day #5: Return an array of stations where capacity is at least 20, and venue is a school or community centre.
const chooseStations = stations =>
  stations
    .filter(s => s[1] >= 20 && (s[2] == 'school' || s[2] == 'community centre'))
    .map(s => s[0]);

// Day #6: Compares voter signatures to voter ids and returns a message.
const voterTurnout = (voter_signatures, voter_ids) => {
  // If there are not the same number of signatures to ids.
  if (voter_signatures.length != voter_ids.length) {
    return false;
  }

  let isSame = voter_signatures.every((n, i) => n === voter_ids[i]);

  return isSame ? 'All clear, we can count the votes!' : 'FRAUD!'; // If signatures and ids are the same, it's good. Otherwise there is fraud.
};

// Day #7: Return an array that counts how many times each topic was mentioned in surveys (smart city, arts funding, transportation).
const termTopics = interviews => [
  interviews.filter(t => t == 'smart city').length,
  interviews.filter(t => t == 'arts funding').length,
  interviews.filter(t => t == 'transportation').length
];

// Day #8: Return an object containing the updated number of items in each bin (waste, recyling, compost).
const smartGarbage = (trash, bins) => {
  bins[trash] += 1;
  return bins;
};

// Day #9: Return an object containing the updated time recorded and speed of each car passing the sensor.
const carPassing = (cars, speed) => [...cars, { time: Date.now(), speed }];

// Day #10: Return an array index where vehicle can park if a spot is available.
const whereCanIPark = (spots, vehicle) => {
  let options = { regular: 'R', small: 'RS', motorcycle: 'RSM' };
  let answer = false;

  spots.some((n, i) => {
    n.some((m, j) => {
      if (options[vehicle].includes(spots[i][j])) {
        answer = [i, j];
      }
    });
  });
  return answer;
};

// Day #11: Return an object that calculates how long until a bus arrives at each stop.
const busTimes = buses => {
  for (let [k] of Object.entries(buses)) {
    buses[k] = buses[k].distance / buses[k].speed;
  }

  return buses;
};

//
//
// ***Inputs provided***:
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

// Day #3
const candidate = 'Sally';
const candidate2 = 'Tim';
const candidate3 = 'Beth';

const votes = [0, 2, 1];
const votes2 = [1, 1, 2];
const votes3 = [5, 2, 2];

// Day #4
const voter = 'Bradley';
const voter2 = 'Bobby';
const voter3 = 'Floyd';

const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
const unregisteredVoters2 = ['Jimmy', 'Suzie', 'Bobby'];
const unregisteredVoters3 = ['Tomasa', 'Tennille', 'Tayna', 'Eufemia', 'Floyd'];

// Day #5
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// Day #6
const voter_signatures = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Fake McFakerson',
  'Jane Janesford'
];
const voter_signatures2 = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];
const voter_signatures3 = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];

const voter_ids = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];
const voter_ids2 = [
  'Bill Billiamson',
  'Kate Etak',
  'Brandon Brandonus',
  'Simon Simonson',
  'Jane Janesford'
];
const voter_id3 = [
  'Bill Billiamson',
  'Kate Etak',
  'Simon Simonson',
  'Brandon Brandonus'
];

// Day #7
const interviews = [
  'smart city',
  'rebuild the lighthouse',
  'arts funding',
  'transportation',
  'arts funding',
  'rebuild the lighthouse',
  'sports funding',
  'tax cuts',
  'smart city',
  'arts funding',
  'smart city'
];

// Day 8
const trash = 'recycling';
const trash2 = 'waste';
const trash3 = 'compost';

const bins = { waste: 4, recycling: 2, compost: 5 };
const bins2 = { waste: 2, recycling: 4, compost: 10 };
const bins3 = { waste: 2, recycling: 2, compost: 3 };

// Day 9
const cars = [
  { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 }
];

const speed = 38;

// Day 10
const spots = [
  //COLUMNS ARE X
  //0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'R', 'M'], // 1
  ['s', 'M', 's', 'S', 'R', 'm'], // 2
  ['S', 'r', 's', 'm', 'R', 'M'], // 3
  ['S', 'r', 's', 'm', 'R', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S'] //  5
];

const vehicle = 'regular'; // possible options are 'regular', 'small', or 'motorcycle'

// Day 11
const buses = {
  pickadilly: {
    distance: 10,
    speed: 5
  },
  uptown: {
    distance: 13,
    speed: 10
  }
};

//
//
// ***Calling functions***:
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

// Day #5
chooseStations(stations); // [['Bright Lights Elementary', 50, 'school'], ['Moose Mountain Community Centre', 45, 'community centre']]

// Day #6
voterTurnout(voter_signatures, voter_ids); // 'FRAUD!'
voterTurnout(voter_signatures2, voter_ids2); // 'All clear, we can count the votes!'
voterTurnout(voter_signatures3, voter_ids3); // false

// Day #7
termTopics(interviews); // [3,1,1]

// Day #8
smartGarbage(trash, bins); // { waste: 4, recycling: 3, compost: 5 }
smartGarbage(trash2, bins2); // { waste: 3, recycling: 4, compost: 10 }
smartGarbage(trash3, bins3); // { waste: 2, recycling: 2, compost: 4 }

// Day #9
carPassing(cars, speed); // Something like [ { time: 1568329654807, speed: 40 }, { time: 1568329821632, speed: 42 }, { time: 1568331115463, speed: 35 }, { time: 1568431216417, speed: 38 } ];

// Day #10
whereCanIPark(spots, vehicle); // Something like [4, 0]

// Day #11
busTimes(buses); // { pickadilly: 2, uptown: 1.3 }
