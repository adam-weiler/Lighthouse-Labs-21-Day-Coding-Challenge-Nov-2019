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