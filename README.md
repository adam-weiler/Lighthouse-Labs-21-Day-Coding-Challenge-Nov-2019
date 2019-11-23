# Lighthouse Labs 21 Day Coding Challenge - November 2019

https://coding-challenge.lighthouselabs.ca

### Challenges

#### Challenge #1 - Door to Door

<details>
<summary>Backstory</summary>
  
Our challenge begins in Codeville, a small but thriving town in Serverside, Canada, where you are the current mayor nearing the end of your first term. Election season is nearing, and this town needs you, so you've decided to run for a second term. However, you need some help to make sure the election and your campaign run smoothly. Enter JavaScript, a coding language sure to help you optimize the many elements of the upcoming election and (hopefully) secure your return as Mayor.

As your election campaign ramps up, you plan to go door to door to talk to the citizens of Codeville. There are quite a few neighbourhoods in Codeville, but lucky for you, we have a dedicated crew of volunteers to help out. Being the fair Mayor that you are, you want to make sure the work is distributed evenly between the team. Let's figure out how many neighbourhoods each volunteer should visit.

</details>

<details>
<summary>Instructions</summary>
  
Given an array of volunteer names and an array of neighbourhood names, complete the **doorToDoor** function so that it returns the number of neighbourhoods each volunteer should visit if the work of going door to door is split evenly amongst them.

</details>

<details>
  <summary>Examples</summary>

##### Input

    const volunteers = [
      'Sally',
      'Jake',
      'Brian',
      'Hamid'
    ];

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

##### Output

    2

</details>

<details>
<summary>Hint</summary>

We can use JavaScript's handy built-in **.length** method to get the length of each array! This will help you figure out how many volunteers and how many neighbourhoods there are.

</details>

#### Challenge #2 - Something to Talk About

<details>
<summary>Backstory</summary>
  
Thanks to your tireless volunteers, the word is out that you're running for a second term, and the local media has come calling!

The Lighthouse Gazette wants to interview you about your campaign, but you're a nervous interviewer! To help prepare for your interview you want to use JavaScript to practice campaign stance on important election topics. The list of possible question categories includes:

- arts funding
- economy
- transportation

</details>

<details>
<summary>Instructions</summary>
  
Given a question topic, complete a function **interviewAnswer(topic)** that returns your stance on that particular election issue. The answer should be returned as a string.

- When asked about arts funding, the function should return **"We'll have to get creative!"**
- When asked about the economy, the function should return **"Time is money."**
- When asked about transportation, the function should return **"It's going to be a long road, so we better get moving."**

If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

</details>

<details>
  <summary>Examples</summary>

##### Input

    const topic = 'economy'

##### Output

    Time is money.

##### Input

    const topic = 'transportation'

##### Output

    It's going to be a long road, so we better get moving.

</details>

<details>
<summary>Hint</summary>

We can use **if-statements** to return different responses depending on what topic is passed as a parameter. We may also want to look at **comparison operators** while we're at it.

</details>

#### Challenge #3 - Securing the Vote

<details>
<summary>Backstory</summary>
  
It looks like you've got a hold of your campaign for now. So you've been asked to turn your attention to making sure the election infrastructure is ready to go! Codeville County is using a new e-voting platform to make elections simpler and more secure. We need to test out the software to make sure it's working correctly before Election Day.

</details>

<details>
<summary>Instructions</summary>
  
When a resident casts their vote, the system will be passed the name of the candidate they voted for and the current standings. It will then update the standings, adding the new vote to the count.

To test the system, we'll need to complete the function **castVote(name, votes)** that takes in the **name** of a candidate and an array of tallied **votes**. The function should return an array with the updated standings.

We will be testing the system with three possible candidates: Tim, Sally and Beth. Each item in the votes array represents the number of votes for a particular candidate:

The first item in the array **votes[0]** are the votes for Tim
The second item in the arry **votes[1]** are the votes for Sally
The third item in the array **votes[2]** are the votes for Beth
For example in this array **[0, 2, 1]** there are 0 votes for Tim, 2 votes for Sally and 1 vote for Beth.

</details>

<details>
  <summary>Examples</summary>

##### Input

    const name = 'Sally';
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ]

##### Output

    [
      0, // Tim
      3, // Sally
      1 // Beth
    ]

##### Input

    const name = 'Tim';
    const votes = [
      1, // Tim
      1, // Sally
      2 // Beth
    ];

##### Output

    [
      2, // Tim
      1 // Sally
      2 // Beth
    ]

</details>

<details>
<summary>Hint</summary>

We'll need to start with an **if statement** to determine who the vote is for. Once we know that we can use the increment operator (++) to increase **votes[0]** for Tim, **votes[1]** for Sally or **votes[2]** for Beth.

For instance, if **name === 'Tim'**, then we want to increment **votes[0]++**.

</details>

#### Challenge #4 - This is How You Remind Me (To Register To Vote)

<details>
<summary>Backstory</summary>
  
Now that you've squashed all the bugs in the city's new voting software, it's time to jump back on the campaign trail. The election is coming up soon! You need to send out reminders to all Codeville citizens to encourage them to vote, but you don't want to spam people who have already registered. Use JavaScript to remove all registered voters from your contact list.

</details>

<details>
<summary>Instructions</summary>
  
Complete the function **registerToVote(name, unregisteredVoters)** that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

</details>

<details>
  <summary>Examples</summary>

##### Input

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];

##### Output

    ['Jake', 'Alanna', 'Stephanie']

</details>

<details>
<summary>Hint</summary>

If we initialize a new empty array within our function, **let mailingList = []**, we can use a
[for-loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement) and an [if-statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to [push](https://www.w3schools.com/jsref/jsref_push.asp) the right names into it.

Or if we're feeling adventurous, let's take a look at JavaScript's [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) function. You can see an example of how to remove an item from an array using filter [here](https://stackoverflow.com/a/20690490).

</details>

#### Challenge #5 - Voting Station Calculation

<details>
<summary>Backstory</summary>
  
The election is looming, and the dutiful City of Codeville staff has finalized most of the details, except for one thing: where will citizens vote? There are hundreds of buildings in town, but there are very specific requirements for what constitutes an acceptable voting station. With very little time to decide, the city needs our help to sort through the building data.

</details>

<details>
<summary>Instructions</summary>
  
 Complete the function **chooseStations(stations)** that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a **capacity of at least 20**, and be a **school** or **community centre**.

</details>

<details>
  <summary>Examples</summary>

##### Input

    const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];

##### Output

    ['Bright Lights Elementary', 'Moose Mountain Community Centre']

</details>

<details>
<summary>Hint</summary>

You'll need to try out some new [comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison) for this. Take a look at how to do greater-than, not-equal, and logical-AND with JavaScript.

Much like the previous challenge, one way we could solve this is by initializing a new array within our function (**let goodStations = []**) and [push](https://www.w3schools.com/jsref/jsref_push.asp) the stations that meet the requirements to it as we loop through them.

See two of the Lighthouse Labs team pair program this challenge below:
[The Road to Codeville: Breaking Down Challenge 5 of the 21-Day Coding Challenge (Nov 2019)](https://www.youtube.com/watch?v=16UXovpvyf8)

</details>

#### Challenge #6 - Turn Out For What

<details>
<summary>Backstory</summary>
  
Phew, with our help the city staff were able to select the voting stations on time and the election went off without a hitch! Now that the votes have been cast, the Election staff needs to verify the votes by matching each voter's signature to their voter ID.

</details>

<details>
<summary>Instructions</summary>
  
Complete the function **voterTurnout()**, that will take in two arrays. The first array is a list of voter ids, and the second array is a list of voter signatures, which correspond to the voter ids. Our task here is to first check that each array have the same number of items and then confirm that each of the voter ids matches the corresponding voter signature.

If the arrays do not contain the same number of items, then we know something is amiss and our function should return **false**. If they contain the same number of elements, then we should proceed to check if the two arrays are identical, meaning they contain the same names in the same order. If they are, our function should return **"All clear, we can count the votes!"**, if they are not it should return **"FRAUD!"**.

</details>

<details>
  <summary>Examples</summary>

##### Input

    const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Fake McFakerson',
        'Jane Janesford'
      ]

    const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
    ]

##### Output

    FRAUD!

##### Input

    const voter_signatures = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
      ]

      const voter_ids = [
        'Bill Billiamson',
        'Kate Etak',
        'Brandon Brandonus',
        'Simon Simonson',
        'Jane Janesford'
    ]

##### Output

    'All clear, we can count the votes!

</details>

<details>
<summary>Hint</summary>

We need to determine if the two arrays are identical by comparing them to one another. First, we'll need to make sure they are the same length. We can do this by using [.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) and the strict inequality (**!==**) operator.

Next, we'll need to loop through one of the arrays, comparing each item of one array to the same item in the second array using the index. You can a see step by step breakdown of how to compare two arrays [here](https://gomakethings.com/how-to-check-if-two-arrays-are-equal-with-vanilla-js/)

</details>

#### Challenge #7 - You Choose, (You Don't) Lose

<details>
<summary>Backstory</summary>
  
The people of Codeville have spoken, and you have been elected mayor once again! Now it's time to get back to work. You need to decide which issues to focus on first for your new term in office. Using the dataset from voter surveys, determine the top three issues voters were most concerned about when choosing the new Codeville leadership.

</details>

<details>
<summary>Instructions</summary>
  
We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

Our **termTopics** function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: **smart city**, **arts funding**, and then **transportation**.

</details>

<details>
  <summary>Examples</summary>

##### Input

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
    ]

##### Output

    [
      3, // smart city
      3, // arts funding
      1  // transportation
    ]

</details>

<details>
<summary>Hint</summary>

Similar to yesterday's question, we may need a for-loop to go through each entry in the interview responses.

Whenever we need to decide which value to increase, we could use an if-statement or switch statement to make that decision.

</details>
