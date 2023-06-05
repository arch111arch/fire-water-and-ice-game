# Fire Water & Ice
Fire Water & Ice is a fantasy version of the classic game Rock Paper & Scissors. People can play a casual game of rock, paper, scissors against the computer to see how many points they can reach before the game is over. It is for everyone who has a few minutes to spare on a computer or on a smartphone.

The goal of the site is to be clearly themed, easy to use and to be fully responsive. It was important to make the site unique to stand out from other Rock, Paper & Scissors style-games by incorporating additional features.

The gamemechanics should be intuitive and the game should give audiovisual feedback to the user via buttons, popups, text and sound.

![Fire, Water & Ice Am I responsive screenshot](/amiresponsive_screen.PNG)

## Design Philosophy

The site is centered around good vs evil and has a clear Fantasy-theme running throughout. The main colors are the three elemental powers used represented by Yellow/Red = Fire, Blue = Water and White = Ice.
This is mirrored in the Logo wich has each word in the correspodning color.

The screen is covered with wither a transparent green or red at the end of each Round and at the end of the game to further give feedback to the player.

![The Logo of the site](/fwi_logo_menu.PNG)

- Icons all have a distinct medeval look to them as well as the stone-backgrounds used for all important areas during the game.
- The portraits of the player and computer are AI-generated with the desired outcome to be like a fantasy card-game.
- The soundeffects were chosen to be short and not too modern or elaborate to avoid being irritating over time.


## Features 

### Existing Features

- __Navigation Bar__

  - The navigaition is simple and to the point. It is resposive and easy for the user to understand. Since this is about the game itself, the About section and Socils were all that was needed.


- __The Game Board__

  - The styling is a fantasy setting with two opposing cards, one for the player and one for the computer. 
  - Each player is color-coded. Red for the computer, Green for the player.
  - The total Score as well as the current Highscore is allways visible just above the cardarea.
  - Each card shows the number of Lives for each player.

![The GameBoard](/fwi_screenshot1.PNG) 

  - The human player has icons for Gold, Diamonds and a Shield, when equipped.
  - Each card has an orb at the bottom. They mirror what the computer and player chooses each Turn of the game. These are greyed out at the start of each Turn. 
 
#### Rock, Paper & Scissors

![The Logo of the site](/fwi_choices.PNG)
- The player makes a choice by clicking on on the the three orbs.
  - The result of who won the Turn is displayed in the middle of the screen. The Score for the Turn is visible as a large number just below each card.
- When a player has won 3 Turns, he wins that Round. Depending on who won, a popup appears with inforative text.
  - Then the next Round begins when the player clicks the screen.
  - 
![The player won the Round](/fwi_playerwon.PNG)![The computer won the Round](/fwi_compwon.PNG)

#### The Loot System

Each Round the player will get loot from a random list. This can be a life, gold, a diamond o a shield. The item is added to the players inventory and visible in the card.
If the player allready has a Shield, the generator rolls again.
The computer has a 50% chance of Lifesteal when it wins. If that happens, the player loosses 1 life and the computer gains 1 life.

However, if the player has a Shield equipped and the player wind the Round, that life is saved and the Shield is disscarded.

#### The Shop

By clicking the shop-button at any time during play, the player opens the Shop-window. 
![The Shop](/fwi_shop.PNG)

Here the player can buy a Lifepotion to get an extra-life or a Shield, given he do not allready have one, by clicking on the icon.
They can only be bought if sufficient gold has been found as a loot-drop.

#### The rules of the Game
As a game of chance, winning is based on Luck. Choose one of the 3 choices and hope for the best.
Fire melts Ice. Water puts out fire. Ice freezes water. If players choose the same thing, it´s a draw and they choose again.

![rules](/fwi_rules.PNG)

#### Game over
When the player lost all lives the Defeatscreen will pop up.
He will score based on how much gold and diamonds he found before the end.

![defeat screen](/fwi_defeat.PNG)

However, to really beat the game and end up on the Highscore, the pleyer needs to win. When the computer lost all lives, the Victoryscreen will pop up.
Here the final score sums up remaining lives, gold, diamonds, basescore and a Victory Bonus.
If the new score is higher that the previous Highsore, it will replace it as the new Highscore.

![victory screen](/fwi_victory.PNG)

In both cases the Gameboard and all score and loot will be reset and the player will be asked to play again.

- __The Footer__ 

 - The footer contains a mail-link and relevant links to social media that opens up i a new tab. 
![socials](/fwi_socials.PNG)

- __The About Section__

  - This contains a short introduction to the game Rock, Paper, Scissors and how it i played. 

### Features Left to Implement

- Various computer opponents and a permanent Leaderboard.
- Being able to play against a human opponent.
- More loot and more powers/abilities.

## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
  - The validator found that the use of percentage, % is a bad value. However, this practice is not deprecated on images. I did not want to use CSS for these images and opted for percentages instead. It works fine in browsers tested.  [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

- The site www.w3schools.com was a very good source for inspiration and help with many topics. https://www.w3schools.com/

### Content 

- The images used for social media comes from font awesome. [Font Awesome](https://fontawesome.com/)

### Media

- The images are AI-generated.
