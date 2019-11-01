// My Functions:
// Day #1: Return the number of neighbourhoods each volunteer should visit to split the work evenly.
const doorToDoor = (volunteers, neighbourhoods) =>
  neighbourhoods.length / volunteers.length;

// Inputs provided:
// Day #1
const volunteers = ['Sally', 'Jake', 'Brian', 'Hamid'];

// Day #1
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

// Calling functions:
// Day #1
doorToDoor(volunteers, neighbourhoods);
