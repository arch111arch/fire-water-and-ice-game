# Fire Water & Ice
Fire Water & Ice is a fantasy version of the classic game Rock Paper & Scissors. People can play a casual game of rock, paper, scissors against the computer to see how many points they can reach before the game is over. It is for everyone who has a few minutes to spare on a computer or on a smartphone.

The goal of the site is to be clearly themed, easy to use and to be fully responsive. It was important to make the site unique to stand out from other Rock, Paper & Scissors style-games by incorporating additional features.

The gamemechanics should be intuitive and the game should give audiovisual feedback to the user via buttons, popups, text and sound.

![Fire, Water & Ice Am I responsive screenshot](/amiresponsive_screen.PNG)

## Design Philosophy

The site is centered around good vs evil and has a clear Fantasy-theme running throughout. The main colors are the three elemental powers used represented by Yellow/Red = Fire, Blue = Water and White = Ice.
This is mirrored in the Logo wich has each word in the correspodning color.

The screen is covered with wither a transparent green or red at the end of each Round and at the end of the game to give direct visual feedback. The colors instantly lets the player know if he wins or looses.

It was key that the site was fully responsive. To acheive this, every important area, icon and text was scaled and positioned to share a near identical look ragardless of screen-size.
In order to be adaptive, each element has a class that can be easily altered in each @media-bracket. This took time, but was absolutely vital to the functionality of the gameloop.

![The Logo of the site](/fwi_logo_menu.PNG)

- Icons all have a distinct medeval look to them as well as the stone-backgrounds used for all important areas during the game.
- The portraits of the player and computer are AI-generated with the desired outcome to be like a fantasy card-game.
- The soundeffects were chosen to be short and not too modern or elaborate to avoid being irritating over time.


## Features 

### Existing Features

- __Navigation Bar__

  - The navigaition is simple and to the point. It is resposive and easy for the user to understand. Since this is about the game itself, the About section and Socials were all that was needed.


- __The Game Board__

  - The styling is a fantasy setting with two opposing cards, one for the player and one for the computer. 
  - Each player is color-coded. Red for the computer, Green for the player.
  - The total Score as well as the current Highscore is allways visible just above the cardarea.
  - Each card shows the number of Lives for each player.

![The GameBoard](/fwi_screenshot1.PNG) 

  - The human player has icons for Gold, Diamonds and a Shield. Both gold and diamond is followed by a number that shows the current amount the player has.
  - Each card has an orb at the bottom. They mirror what the computer and player chooses each Turn of the game. These are greyed out at the start of each Turn. 
 
#### Rock, Paper & Scissors

![The Logo of the site](/fwi_choices.PNG)

- The player makes a choice by clicking on on the the three orbs.
  - The result of who won the Turn is displayed in the middle of the screen. The Score for the Turn is visible as a large number just below each card.
- When a player has won 3 Turns, he wins that Round. Depending on who won, a popup appears with informative text.
  - Then the next Round begins when the player clicks the screen.

![The player won the Round](/fwi_playerwon.PNG)![The computer won the Round](/fwi_compwon.PNG)

#### The Loot System

Each Round the player will get loot from a random list. This can be a life, gold, a diamond o a shield. The item is added to the players inventory and visible in the card.
If the player allready has a Shield, the generator rolls again.

The computer has a 50% chance of Lifesteal when it wins. If that happens, the player loosses 1 life and the computer gains 1 life.

However, if the player has a Shield equipped when the computer wins the Round, that life is saved and the Shield is discarded.

#### The Shop

By clicking the green-bordered shop-button at any time during play, the player opens the Shop-window. 
![The Shop](/fwi_shop.PNG)

Here the player can buy a Lifepotion to get more lives or a Shield, given he do not allready have one, by clicking on the icon.
Items in the shop can only be bought if sufficient gold has been found as a loot-drop.

#### The rules of the Game
As a game of chance, winning is based on Luck. Choose one of the 3 choices and hope for the best.
Fire melts Ice. Water puts out fire. Ice freezes water. If players choose the same thing, it´s a draw and they choose again.

When the player clicks a button, the computer chooses one at random and they are compared to determined the winner of that Turn. This is repeated untill the player or the computer has won three times in one Round.

![rules](/fwi_rules.PNG)

#### Game over
When the player has lost all his lives, the Defeatscreen will pop up.
The Total Score is based on how much gold and diamonds he found before the end.

![defeat screen](/fwi_defeat.PNG)

However, to really beat the game and end up on the Highscore, the player needs to win the game. When the computer has lost all it´s lives, the Victoryscreen will pop up.
Here the final score sums up remaining lives, gold, diamonds, basescore and a Victory Bonus.
If the new Total Score is higher that the previous Highscore, it will replace it as the new Highscore.

![victory screen](/fwi_victory.PNG)

In both cases the Gameboard and all score and loot will be reset and the player will be asked to play again.

- __The About Section__

  - A short backstory sets the mood for the game as a duel between good and evil.
  - The rules and objective of the game is presented in detail.
  - The features of the Shop and the Loot-system are allso explained here. 

- __The Footer__ 

 - The footer has en email-link and social media links that opens up in a new tab. 

![socials](/fwi_socials.PNG)

### Button feedback
- To give visual feedback: 
 - The choicebuttons are animated to scale up slightly when the mouse hovers over them.
 - When a choicebutton is clicked, it scales down to indicate it is being pressed.

### Sound Design
- Sounds were added give feedback when the player presses one of the choice-buttons.
- Distinctly different sounds play when a player wins or looses a Round.
- Distinctly different sounds play when a game is Lost, and when a game is Won.
- The shop has a sound for Lifepotion and a sound for the Shield.

### Features Left to Implement

- Various computer opponents and a permanent Leaderboard.
- Being able to play against a human opponent.
- More loot and more powers/abilities.

## Testing 

The features, functions and buttons as well as sounds were tested and iterated several times. Some functions and classes were re-written in order to make all elements work for a responsive design.
Others were scrapped.

An example of a function that needed testing and rework was the Shop and Lifesteal. In order to permit Lifesteal, the code was made into its own function that had its own conditions. On top of that, if the pleyr had a shiled, the Lifesteal would not work, so that needed to be adressed.

The shield could only be bought and found if the player did not have one. So a check was done to make sure a player can never buy 2 shields. The buttons in the Shop had to only work when needed, and when a player won a Round and found Loot, the Loot-generator would only ever give a shield if the player did not have one.
All this led to some trial end error.

The site is tested on several screens both in the inspector and on a PC, phone and a tablet to make sure everything flowed the same regardless of device.

One thing the wc3-validator did not like was the use of % for images in the HTML. The code allways worked in every browser , but to be safe rather than sorry, those images were instead styled with CSS and that removed the issue.


### Validator Testing 

- HTML
  - The validator found no errors.  [WC3 HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Farch111arch.github.io%2Ffire-water-and-ice-game%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Farch111arch.github.io%2Ffire-water-and-ice-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

### Unfixed Bugs

As far as I am aware, there are no bugs in the code. 

## Deployment
![Deploy to GitHub Pages](/deploy.PNG)
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, click Settings.
  - Click General from the menu to the left.
  - Then as Source, choose main branch.
  - Once the branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://arch111arch.github.io/fire-water-and-ice-game/

## Credits 

- The site www.w3schools.com was a very good source for inspiration and help with many topics. [WC3 Schools]https://www.w3schools.com/
- Several solutions came about by doing the excercises on Code Institute.
- Inspiration came from a large number of forum-threads and articles, but no code was copied, only used as a way to solve a problem along the way.

### Content 

- The images used for social media comes from font awesome. [Font Awesome](https://fontawesome.com/)

### Media

- The portraits used were generated on the AI-site Lexica.art. [Lexica AI ART](https://lexica.art/)
- The Icons used are from the site Freepik by the artist upklyak. [Freepik assets](https://www.freepik.com/free-vector/game-icons-with-bomb-sword-gold-cup-skull-coins-bag-vector-cartoon-set-signs-gui-rpg-computer-game-diamond-hammer-playing-cards-box-treasure-chest_24417268.htm#&position=4&from_view=collections)
- The sounds used were found at Pixabay. [Pixabay royaltyfree assets](https://pixabay.com/sound-effects/)


