// My Functions:
// Day #1: Return the number of neighbourhoods each volunteer should visit to split the work evenly.
const doorToDoor = (volunteers, neighbourhoods) =>
  neighbourhoods.length / volunteers.length;

// Day #2: Return the appropriate response based on the topic asked.
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
      votes[0] += 1;
      break;
    }
    case 'Sally': {
      votes[1] += 1;
      break;
    }
    case 'Beth': {
      votes[2] += 1;
      break;
    }
  }
  return votes;
};

// Day #4: Return an array of updated unregisteredVoters by removing the voter.
const registerToVote = (voter, unregisteredVoters) =>
  unregisteredVoters.filter(n => n !== voter);

// Day #5: Return an array of stations where capacity is at least 20,
// and venue is a school or community centre.
const chooseStations = stations =>
  stations
    .filter(
      s => s[1] >= 20 && (s[2] === 'school' || s[2] === 'community centre')
    )
    .map(s => s[0]);

// Day #6: Compares voter signatures to voter ids and returns a message.
const voterTurnout = (voter_signatures, voter_ids) => {
  // If there are not the same number of signatures to ids.
  if (voter_signatures.length !== voter_ids.length) {
    return false;
  }

  let isSame = voter_signatures.every((n, i) => n === voter_ids[i]);

  // If signatures and ids are the same, it's good. Otherwise there is fraud.
  return isSame ? 'All clear, we can count the votes!' : 'FRAUD!';
};

// Day #7: Return an array that counts how many times each topic
// was mentioned in surveys (smart city, arts funding, transportation).
const termTopics = interviews => [
  interviews.filter(t => t === 'smart city').length,
  interviews.filter(t => t === 'arts funding').length,
  interviews.filter(t => t === 'transportation').length
];

// Day #8: Return an object containing the updated number of items
// in each bin (waste, recyling, compost).
const smartGarbage = (trash, bins) => {
  bins[trash] += 1;
  return bins;
};

// Day #9: Return an object containing the updated time recorded and speed
// of each car passing the sensor.
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

// Day #12: Return a string that calculates if the pollution in the samples
// exceeds the air quality threshold.
const checkAir = (samples, threshold) => {
  const dirty = samples.filter(v => v === 'dirty').length;
  return dirty / samples.length > threshold ? 'Polluted' : 'Clean';
};

// Day #13:
// Return an array with all the lights turned on.
const lightsOn = lights => {
  for (let [i, v] of Object.entries(lights)) {
    lights[i].on = true;
  }
  return lights;
};

// A better solution:
// const lightsOn = lights => lights.map(({ id }) => ({ id, on: true }));

// Return an array with all the lights turned off.
const lightsOff = lights => {
  for (let [i, v] of Object.entries(lights)) {
    lights[i].on = false;
  }
  return lights;
};

// Return an array that turns lights off or on based on lightsAreOn.
const toggleLights = (lights, lightsAreOn) => {
  return lightsAreOn ? lightsOff(lights) : lightsOn(lights);
};

// Day #14:
const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  let total = 1 + distanceTraveled * 0.25;

  if (numberOfPeople >= 30) {
    total += 0.25;
  }

  return `$${total.toFixed(2)}`;
};

// Day #15:
const finalPosition = moves => {
  const x =
    moves.filter(v => v === 'east').length -
    moves.filter(v => v === 'west').length;
  const y =
    moves.filter(v => v === 'north').length -
    moves.filter(v => v === 'south').length;
  return [x, y];
};

// Day #16:
const festivalColours = color1 => {
  const color2 = (color1 + 150) % 360;
  const color3 = (color1 + 210) % 360;
  return [color2, color3];
};

// Day #17:
const judgeVegetable = (vegetables, metric) => {
  const max = vegetables.reduce((prev, current) => {
    return prev.redness > current.redness ? prev : current;
  });
  return max.submitter;
};

// Day #18:
const countTickets = tickets => {
  return {
    red: tickets.filter(t => t === 'red').length,
    green: tickets.filter(t => t === 'green').length,
    blue: tickets.filter(t => t === 'blue').length
  };
};

const bestOdds = (tickets, raffleEntries) => {
  let ticketCounts = countTickets(tickets);

  let odds = {
    red: raffleEntries.red / ticketCounts.red,
    green: raffleEntries.green / ticketCounts.green,
    blue: raffleEntries.blue / ticketCounts.blue
  };

  const bestBet = Object.keys(odds).reduce((a, b) =>
    odds[a] < odds[b] ? a : b
  );

  return `You have the best odds of winning the ${bestBet} raffle.`;
};

// Day #19:
const pumpkinSpice = money => {
  const order = [];
  const pie = { cost: 5, spice: 30 };
  const latte = { cost: 3, spice: 15 };
  const macaron = { cost: 1, spice: 3 };

  order[0] = Math.floor(money / pie.cost);

  order[1] = Math.floor((money - order[0] * pie.cost) / latte.cost);

  order[2] = Math.floor(
    (money - order[0] * pie.cost - order[1] * latte.cost) / macaron.cost
  );

  order[3] =
    order[0] * pie.spice + order[1] * latte.spice + order[2] * macaron.spice;

  return order;
};

// Day #20:
const sphereVolume = function(radius) {
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
};

const coneVolume = function(radius, height) {
  return (Math.PI * Math.pow(radius, 2) * height) / 3;
};

const prismVolume = function(height, width, depth) {
  return height * width * depth;
};

const totalVolume = function(solids) {
  let volTotal = 0;

  solids.forEach(s => {
    if (s.type === 'sphere') {
      volTotal += sphereVolume(s.radius);
    } else if (s.type === 'cone') {
      volTotal += coneVolume(s.radius, s.height);
    } else if (s.type === 'prism') {
      volTotal += totalVolume(s.height, s.width, s.depth);
    }
  });

  return volTotal;
};

// Day #21:
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  return recipes.find(recipe => {
    return recipe.ingredients.every(ingredient => {
      return bakeryA.concat(bakeryB).includes(ingredient);
    });
  }).name;
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

// Day #8
const trash = 'recycling';
const trash2 = 'waste';
const trash3 = 'compost';

const bins = { waste: 4, recycling: 2, compost: 5 };
const bins2 = { waste: 2, recycling: 4, compost: 10 };
const bins3 = { waste: 2, recycling: 2, compost: 3 };

// Day #9
const cars = [
  { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 }
];

const speed = 38;

// Day #10
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

// Day #11
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

// Day #12
const samples = [
  'clean',
  'clean',
  'dirty',
  'clean',
  'dirty',
  'clean',
  'clean',
  'dirty',
  'clean',
  'dirty'
];
const samples2 = ['clean', 'clean', 'clean', 'clean', 'clean'];
const samples3 = [
  'dirty',
  'clean',
  'clean',
  'dirty',
  'clean',
  'clean',
  'clean'
];
const samples4 = ['dirty', 'clean', 'dirty', 'clean', 'clean', 'clean'];

const threshold = 0.3;
const threshold2 = 0.5;
const threshold3 = 0.1;
const threshold4 = 0.4;

// Day #13
const lights = [
  { id: 1, on: false },
  { id: 2, on: false },
  { id: 3, on: false },
  { id: 4, on: false },
  { id: 5, on: false }
];
const lights2 = [
  { id: 1, on: true },
  { id: 2, on: true },
  { id: 3, on: true },
  { id: 4, on: true },
  { id: 5, on: true }
];

const lightsAreOn = true;
const lightsAreOn2 = false;

// Day #14
const numberOfPeople = 15;
const distanceTraveled = 10;

const numberOfPeople2 = 35;
const distanceTraveled2 = 5;

// Day #15
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
const moves2 = ['west', 'west', 'west', 'east', 'east', 'east', 'west', 'east'];
const moves3 = ['north', 'north', 'north', 'north', 'north', 'north', 'south'];

// Day #16
const color1 = 100;

// Day #17
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const vegetables2 = [
  { submitter: 'A', d: 5 },
  { submitter: 'B', d: 10 },
  { submitter: 'C', d: 25 }
];

const metric = 'redness';
const metric2 = 'd';

// Day #18
const tickets1 = ['red', 'red', 'green', 'blue', 'green'];
const tickets2 = ['green', 'green', 'green', 'blue', 'green'];
const tickets3 = ['red', 'blue', 'green', 'blue', 'green'];

const raffleEntries1 = { red: 10, green: 30, blue: 15 };
const raffleEntries2 = { red: 10, green: 4, blue: 15 };
const raffleEntries3 = { red: 100, green: 24, blue: 5 };

// Day #19
const money1 = 9;
const money2 = 22;

// Day #20
const sphere1 = {
  type: 'sphere',
  radius: 2
};
const sphere2 = {
  type: 'sphere',
  radius: 3
};
const sphere3 = {
  type: 'sphere',
  radius: 4
};
const largeSphere = {
  type: 'sphere',
  radius: 40
};
const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone1 = {
  type: 'cone',
  radius: 3,
  height: 5
};
const cone2 = {
  type: 'cone',
  radius: 2,
  height: 6
};
const cone3 = {
  type: 'cone',
  radius: 6,
  height: 6
};

const prism1 = {
  type: 'prism',
  height: 3,
  width: 4,
  depth: 5
};
const prism2 = {
  type: 'prism',
  height: 4,
  width: 4,
  depth: 4
};
const prism3 = {
  type: 'prism',
  height: 7,
  width: 2,
  depth: 4
};

const duck = [largeSphere, smallSphere, cone1];

// Day 21:
const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
const bakeryB = ['milk', 'butter', 'cream cheese'];
const recipes1 = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

const bakeryC = ['a', 'b', 'c'];
const bakeryD = ['d', 'e', 'f'];
const recipes2 = [
  { name: 'A', ingredients: ['a', 'g'] },
  { name: 'B', ingredients: ['f', 'j'] },
  { name: 'C', ingredients: ['e', 'b'] }
];

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

// Day #12
checkAir(samples, threshold); // 'Clean'
checkAir(samples2, threshold2); // 'Clean'
checkAir(samples3, threshold3); // 'Polluted'
checkAir(samples4, threshold4); // 'Clean'

// Day #13
lightsOn(lights); // {"id":1,"on":true},{"id":2,"on":true},{"id":3,"on":true},{"id":4,"on":true},{"id":5,"on":true}
lightsOff(lights2); // {"id":1,"on":false},{"id":2,"on":false},{"id":3,"on":false},{"id":4,"on":false},{"id":5,"on":false}
toggleLights(lights, lightsAreOn); // {"id":1,"on":false},{"id":2,"on":false},{"id":3,"on":false},{"id":4,"on":false},{"id":5,"on":false}
toggleLights(lights2, lightsAreOn2); // {"id":1,"on":false},{"id":2,"on":false},{"id":3,"on":false},{"id":4,"on":false},{"id":5,"on":false}

// Day #14
dynamicPricing(numberOfPeople, distanceTraveled); // '$3.50'
dynamicPricing(numberOfPeople2, distanceTraveled2); // '$2.50'

// Day #15
finalPosition(moves); // [-1, 4]
finalPosition(moves); // [0, 0]
finalPosition(moves); // [0, 5]

// Day #16
festivalColours(color1); // [250, 310]

// Day #17
judgeVegetable(vegetables, metric);
judgeVegetable(vegetables2, metric2);

// Day #18
bestOdds(tickets1, rafleEntries1); // `You have the best odds of winning the red raffle.`
bestOdds(tickets2, rafleEntries2); // `You have the best odds of winning the green raffle.`
bestOdds(tickets3, rafleEntries3); // `You have the best odds of winning the blue raffle.`

// Day #19
pumpkinSpice(money1); // [1, 1, 1, 48]
pumpkinSpice(money2); // [4, 0, 2, 126]

// Day #20
sphereVolume(sphere1.radius); // 33.5102
coneVolume(cone1.radius, cone1.height); // 47.12385
prismVolume(prism.height, prism.width, prism.depth); // 60
totalVolume(duck); // 272318.48720091925
totalVolume(cone2, prism3); // 146.54866776461628 ?
totalVolume(prism2, sphere2, cone2); // 202.23007675795088

// Day #21
chooseRecipe(bakeryA, bakeryB, recipes1);
chooseRecipe(bakeryC, bakeryD, recipes2);
