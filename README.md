# Do You Sudoku?

![Do You Sudoku? Mockup Images](assets/readme-files/responsive-site.PNG)

[View the live project here](https://irishbecky91.github.io/Do-you-Sudoku/)

## Table of contents
1. [Introduction](#Introduction)
2. [UX](#UX)
    1. [Ideal User Demographic](#Ideal-User-Demographic)
    2. [User Stories](#User-Stories)
    3. [Development Planes](#Development-Planes)
    4. [Design](#Design)
3. [Features](#Features)
    1. [Design Features](#Design-Features) 
    2. [Existing Features](#Existing-Features)
    3. [Features to Implement in the future](#Features-to-Implement-in-the-future)
4. [Issues and Bugs](#Issues-and-Bugs)
5. [Technologies Used](#Technologies-Used)
    1. [Main Languages Used](#Main-Languages-Used)
    3. [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)
6. [Testing](#Testing)
    1. [Testing User Stories](#Testing-User-Stories)
    2. [Manual Testing](#Manual-Testing)
    3. [Automated Testing](#Automated-Testing) 
        - [Code Validation](#Code-Validation)
        - [Browser Validation](#Browser-Validation)
    4. [User Testing](#User-Testing)
7. [Deployment](#Deployment)
    1. [Deploying on GitHub Pages](#Deploying-on-GitHub-Pages)
8. [Credits](#Credits)
    1. [Content](#Content)
    2. [Media](#Media)
    3. [Code](#Code)
9. [Acknowledgements](#Acknowledgements)
***


## Introduction

This website was made to allow the user to play sudoku using a range of difficulty settings. In addition to this, the site was also created as a dedication to the life of Maki Kaji, the "Father of Sudoku". Maki recently passed away from cancer on August 10th 2021.

This website was made for the second of five Milestone projects required to complete the Diploma in Software development (eCommerce Applications) program at The Code Institute. 

The main requirements of this project are to build a responsive and interactive front-end site all the technologies learned so far, namely HTML5, CSS3 and JavaScript.

[Back to top ⇧](#)



## UX
### Ideal User Demographic
The ideal user for this website is:
* New user
* Gaming user

#### New User Goals
1. As a new user, I want to easily navigate the site intuitively. 
2. As a new user, I want the instructions to be easily found, clear and concise.
3. As a new user, I want attractive and relevant visuals and colour schemes that work with the content.

#### Current User
1. As a current user, I want to have a variety of difficulty options, to challenge myself.
2. As a current user, I want to have an option of a timed game.
3. As a current user, I want to see randomly generated puzzle boards for each difficulty level.

### Development-Planes
To create an interactive website that allows the user to play the game Sudoku, with the option of several game setting to challenge and entertain the user.

#### Strategy
Strategy incorporates user needs as well as product objectives. This website will focus on the following target audience, divided into three main categories:
- **Roles:**
    - New users
    - Current users

- **Demographic:**
    - All ages
    - All puzzle playing levels

- **Psychographic:**
    - Lifestyles:
        - Interest in games
        - Interest in numbers
        - Interest in puzzles
    - Personality/Attitudes:
        - Focused
        - Forward-Thinking
        - Arithmetically minded
    
The website needs to enable the **user** to:
- play the game sudoku with their choice of game settings:
    - Difficulties of easy, normal, hard or hardcore.
    - Timer lengths of 3 minutes, 5 minutes or 10 minutes.
    - Page themes of light, dark, coffee and unicorn.
- generate a new board on each play-through:
    - Randomly generated boards using an algorithm.
    - Premade boards based on difficulty
    
With the above information in mind, a strategy table was created to show the trade-offs between what is important and what is viable with the following results.


<details>
<summary>Strategy Plane - Viability/Feasibility Table</summary>

![Strategy Table](assets/readme-files/strategy-table.PNG)

</details>


#### Scope
The scope plane is about defining requirements based on the goals established on the strategy plane. Using the information in the strategy plane, the identified required features have been broken into the following two categories.
- Content Requirements:
    - The user will be looking for:
        - Clear and concise instructions.
        - Choice of puzzle layouts; easy, normal, hard or hardcore.
        - Choice of timer length; 3 minutes, 5 minutes or 10 minutes.
        - Choice of page theme; light , dark, coffee and unicorn.
- Functionality Requirements:
    - The user will be able to:
        - Be able to easily navigate the site to find the play instructions.
        - Be able to tailor the game to their preferences.

#### Structure
The information above was then organized in a hierarchical tree structure, a site map, showing how users can navigate through the site with ease and efficiency, with the following results:


<details>
<summary>Site Map</summary>

![Site Map](assets/readme-files/sitemap.PNG)

</details>


#### Skeleton
Wireframes were made to showcase the appearance of the site pages while keeping a positive user experience in mind. The wireframes were created using a desktop version of [Balsamiq](https://balsamiq.com/).


<details>
<summary>Balsamiq Wireframes</summary>
    
![Site Wireframes](assets/readme-files/Balsamiq-Wireframes.PNG)

</details>


### Design
#### Colour Scheme
The default colour scheme throughout the site was chosen to have a warm and comforting appearance. The warm tones and simple design are designed to encourage the user to take a little time and enjoy a relaxing puzzle. 

On the game page, the user is given the option of four themes use while playing the game, making the experience more personalised. The light and dark themes are designed to give a simple, minimilistic platform to play on. There is little to no colour aside from the whites and dark greys in these themes. This will allow the user to focus solely on the puzzle without distraction.

The coffee theme is meant to resemble a cup of coffee a user may be enjoying while using the puzzle on a quick break. The colours are warm and inviting, creating a perfectly relaxing platform for play.

The unicorn theme is designed to represent a little more fun. The bright and varied colours, used in a gradient, form a rainbow across the body of the page. This theme is to appeal to users with a sense of fun and whimsy. It is also designed to give visual stimulation to users who may need a busy screen to be able to focus.


#### Typography
The typography pairing used on the site are [Rampart One](https://fonts.google.com/specimen/Rampart+One?query=ramp) and [Roboto](https://fonts.google.com/specimen/Roboto), imported from [Google Fonts](https://fonts.google.com/). A backup of Sans-Serif had been applied in case of import failure.

Rampart One was chosen for all headers, with Open Sans being used for standard text. This offers a clear font which is easy to read, while still having a nice design.

#### Imagery
The ![image](assets/readme-files/maki-kaji-portrait.png) on the home page was sourced from an article on The Sydney Morning Herald's website. A note was placed below the image, with a link to the article for the user to follow.

[Back to top ⇧](#)



## Features
### Design Features
Each page within the site has a consistent and responsive navigation system. The details of features on the site are detailed below.
- The **Header** is across the top of the page. It is not static as this would cover too much of the screen.
- The **Navigation Bar** is positioned directly below the header.
- The **Footer** stays at the bottom of the screen at all times, on all screen sizes. Both social media links on the footer open in a new tab. Additionally, both links opens to the developer's profiles in LinkedIn and GitHub. The icons are positioned on either side of some text showing "Created by Rebecca Rayner".

<dl>
    <dt><a href="https://irishbecky91.github.io/Do-you-Sudoku/index.html" target="_blank" alt="Home Page">Home Page</a></dt>
    <dd>
        The <em>Home Page</em> is a scrollable page with the main content divided into two columns on larger screens, shifting into a single column on smaller screens.
        <ul>
            <li>
                <em>Image</em> - This image shows the businessman Maki Kaji, to whom the site is dedicated to. there is also a link below the image to the site the image was sourced from. 
            </li>
            <li>
                <em>Introduction</em> - This text-only section tells the user about the origin of Sudoku, and of the man that created it.
            </li>            
        </ul>
    </dd>
</dl>
<dl>
    <dt><a href="https://irishbecky91.github.io/Do-you-Sudoku/instructions.html" target="_blank" alt="Instructions Page">Instructions Page</a></dt>
    <dd>
        The <em>Instructions Page</em> is a scrollable text-only page. It shows the users the rules of playing Sudoku.
        <ul>
            <li>
                <em>Instructions</em> - This text-only section introduces the user to the rules of playing Sudoku. 
            </li>
        </ul>
    </dd>
</dl>
<dl>
    <dt><a href="https://irishbecky91.github.io/Do-you-Sudoku/game.html" target="_blank" alt="Game Page">Game Page</a></dt>
    <dd>
        The <em>Game Page</em> is a scrollable page which generates a Sudoku game based on the users chosen game settings.
        <ul>
            <li>
                <em>Game Options</em> - This is a bar below the navigation bar which shows the three different settings available to the user, shown below. 
            </li>
            <li>
                <em>Difficulty Settings</em> - This input section allows the user to select the difficulty level of sudoku puzzle they wish to play. There are four pre-programmed board layouts available; easy, medium, hard and hardcore. The options are labeled using icons from <a href="https://fontawesome.com/" aria-label="Link to Font Awesome's Website" target="_blank">Font Awesome</a>.
            </li>
            <li>
                <em>Timer Settings</em> - This input section allows the user to select the length of time they wish to play for. There are three available options; 3 minutes, 5 minutes and 10 minutes.
            </li>
            <li>
                <em>Theme Settings</em> - This input section allows the user to select the theme they wish to see while playing the game. There are four available options; Light, Dark, Coffee and Unicorn.
            </li>
            <li>
                <em>Start New Game Button</em> - This button, when clicked, starts the game with the users desired settings. This button triggers the JavaScript function which generates a Sudoku board based on saved board layouts and solutions.
            </li>
            <li>
                <em>Timer</em> - This section contains a countdown timer, using the users chosen time selection. If the time runs out, the game is lost.
            </li>
            <li>
                <em>Remaining Lives</em> - This section shows the number of remaining lives, as well as the win or lose message when a game ends. If the user runs out of lives, the game is lost.
            </li>
            <li>
                <em>Sudoku Grid</em> - This grid of 9x9 squares is created using a JavaScript function when the Start New Game button is clicked. A series of Sudoku board and solution pairs were saved as seperate arrays, one for each difficulty setting. If both a square within the grid and a number from the number selector is clicked, the number from the selector is inserted into the square. If the user fills in the entire grid with lives and time remaining, the game is won.
            </li>
            <li>
                <em>Number Selector</em> - This section contains nine divs with numbers, from 1 to 9, in each box. When a number and a square are both clicked, the number transfers to the square
            </li>
        </ul>
    </dd>
</dl>

### Existing Features
- **Header** - Appearing on every page for brand recognition.
- **Navigation Bar** - Appearing on every page for a consistently easy and intuitive navigable system.
- **Social Media Icons** - Appearing on every page, the icons are appropriate representations of the Social Media platforms, linking users to the developers GitHub and LinkedIn accounts. The icons appear in the centre of the footer, on either side of some text.
- **[Home Page](https://irishbecky91.github.io/Do-you-Sudoku/index.html "Do You Sudoku? - Home Page")** - Introducing the user to a very brief history of Sudoku.
- **[Intructions Page](https://irishbecky91.github.io/Do-you-Sudoku/instructions.html "Do You Sudoku? - Instructions Page")** - Informing the user of the rules of playing Sudoku.
- **[Game Page](https://irishbecky91.github.io/Do-you-Sudoku/game.html "Do You Sudoku? - Game Page")** - Creates a custom Sudoku game using the users chosen settings.

### Features to Implement in the future
- **Sudoku Grid Generator**
     - **Feature** - Uses an algorithm to produce solvable sudoku puzzles based on the users chosen difficulty settings.
     - **Reason for not featuring in this release** - A lack of experience and time prevented the developer from making this feature upon release. This feautre will be developed and implemented in the future to improve repeat play by users.

[Back to top ⇧](#)



## Issues and Bugs 
The developer ran into several issues during the development of the website, with the noteworthy ones listed below, along with solutions or ideas to implement in the future.

**Grid Difficulty Bug** - A bug was detected early in development as the numbers on the grid did not change when other difficulties weere selected. It was found the developer had used .click instead of .checked when coding the event handler. Once changed, the problem was resolved.

**Square Selection Bug** - A bug was detected where an empty square, when clicked on, did not register the click. The cause of this was found to be a mislabelling of an element. Instead of a "p" element, the selected class in css should have been a "div element. Once this and the square's element was changed to a div, the problem was resolved.

**Number Transfer Bug** - A bug was detected which affected the squares, causing the number chosen in the number selector to not transfer to the selected square. The problem was the variable selected on line 232 was incorrect, selectedNumber was used insetead of selectedSquare. Once this was replaced for the correct variable, the issue was resolved.

**Game Won Early Bug** - A bug was detected when playing the game as the game would complete a win sequence early if the first available square was filled in before any others. The problem was the function checkGridComplete was only checking to see if the first square in the grid was filled in correctly. This required a complete reworking of the function, creating an empty array to check for and store empty squares. Once the array is emptied, the game is won. This was the final bug which has now been rectified.

[Back to top ⇧](#)



## Technologies Used
### Main Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "Link to JavaScript Wiki")

### Frameworks, Libraries & Programs Used
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the fonts "Special Elite", "Open Sans", "Oswald" and "Nosifer" into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used on almost all pages throughout the website to import icons (e.g. social media icons) for UX purposes.
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
     - GitPod was used for writing code, commiting, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing
- [Balsamiq](https://balsamiq.com/ "Link to Balsamiq homepage")
     - Balsamiq was used to create the wireframes during the design phase of the project.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

[Back to top ⇧](#)



## Testing
### Testing User Stories

#### Current User Goals:
1. As a current user, I want to see regular updates to the information and breaking news as the situation develops.
  
  - The Home Page has a World News section which, if the site were real, would be updated regularly.
  - The Home Page has a Live News Feed section which, if the site were real, would have all the latest breaking news listed.
  - The Home Page also has a Twitter Feed section which, if the site were real, would link directly to twitter posts tagged with a certain hashtag.

2. As a current user, I want to easily navigate through the site and access the information I require with ease.

  - The navigation bar is clearly defined and easily navigable for users to find and use.
  - The hamburger menu is also clearly defined and easily navigable for users to find and use.
  - The footer menu is easy to use with appropriate icons for easy identification.

3. As a current user, I want to easily navigate to content I have previously viewed within a small number of steps.

  - On all site pages there is a naviagtion bar, or hambuger menu, with links to each required page.
  - Each information page has links that bring the user to each section of the page.

#### New User Goals:
1. As a new user, I want to easily navigate the entire site intuitively.

  - The navigation bar is clearly defined and easily navigable for users to find and use.
  - The hamburger menu is also clearly defined and easily navigable for users to find and use.
  - The footer menu is easy to use with appropriate icons for easy identification.

2. As a new user, I want the information I seek to be easily accessible and relevant.

  - The navigation bar is clearly defined and easily navigable for users to find and use.
  - The hamburger menu is also clearly defined and easily navigable for users to find and use.
  - The footer menu is easy to use with appropriate icons for easy identification.

3. As a new user, I want attractive and relevant visuals and colour schemes that work with the content.

  - An attractive colour palette was created using [Color Mind](http://colormind.io/ "Link to Color Mind Home Page").
  - Relavant images were found using [Unsplash](https://unsplash.com "Link to Unsplash Home Page") and [Pixabay](https://pixabay.com "Link to Pixabay Home Page").

#### Survivalist Goals:
1. As a survivalist, I want to factually correct and relevant information.

  - All information used on the site was either gathered from reliable sources (see credits section of README.md file)

2. As a survivalist, I want the information I seek to be easily accessible and relevant.
  
  - On all site pages there is a naviagtion bar, or hambuger menu, with links to each required page.
  - Each information page has links that bring the user to each section of the page.
  
3. As a survivalist, I want to see instructional images and/or videos with user controls relevant to the information.

- Relavant images were found using [Unsplash](https://unsplash.com "Link to Unsplash Home Page") and [Pixabay](https://pixabay.com "Link to Pixabay Home Page").
- Relavant videos were sourced from [YouTube](https://youtube.com "Link to YouTube Home Page").

[Back to top](#Survival-Guild---Testing)

## Manual Testing

### Common Elements Testing
Manual testing was conducted on the following elements that appear on every page:

- Hovering over the Hamburger Menu will trigger `hover` effect, highlighting the icon for the user.

     ![Hamburger Menu hover effect - unhovered](assets/testing-files/social-nav/hamburger.gif)
     
- Clicking on the Navigation Bar's links will bring the user to the specified page.

     ![Navigation Bar page links](assets/testing-files/social-nav/nav-bar.gif)
     
- Clicking on the Social Media links will open a new tab

     Facebook:

![Facebook Social Media link](assets/testing-files/social-nav/facebook.gif)
     
     Instagram:

![Instagram Social Media link](assets/testing-files/social-nav/instagram.gif)

     Twitter:

![Twitter Social Media link](assets/testing-files/social-nav/twitter.gif)

     YouTube:

![YouTube Social Media link](assets/testing-files/social-nav/youtube.gif)
     
     GitHub:

![GitHub Social Media link](assets/testing-files/social-nav/github.gif)
     
### Home Page
Manual testing was conducted on the following elements of the [Home Page](index.html):

- Clicking the competition banner below the introduction text will bring you to the competition page.

![Competition Banner - Home Page](assets/testing-files/home/banner-home.gif)

- Clicking the Back-to-top button, located at the bottom right of the screen, will bring the user to the top of the page.

![Back-To-Top Button - Home Page](assets/testing-files/home/btt-home.gif)

- Clicking on the "See More..." links in the Live News Feed section will open a new tab to a Zombie-themed story on the Sky News website.

!["See More" Link - Home Page](assets/testing-files/home/news-link-home.gif)

- The responsiveness of the Home page

![Responsiveness - Home Page](assets/testing-files/home/responsive-home.gif)
     
### Survival Tips Page
Manual testing was conducted on the following elements of the [Survival Tips Page](survival-tips.html):

- Clicking the competition banner below the introduction text will bring you to the competition page.

![Competition Banner - Survival Tips Page](assets/testing-files/survival/banner-survival.gif)
     
- Clicking the Back-to-top button, located at the bottom right of the screen, will bring the user to the top of the page.

![Back-To-Top Button - Survival Tips Page](assets/testing-files/survival/btt-survival.gif)
     
- Clicking the Page Link Buttons will move the user down the page to their desired section.

![Page Link Buttons - Survival Tips Page](assets/testing-files/survival/buttons-survival.gif)
     
- Clicking on the YouTube video controls will allow the user to play and pause the video, among other controls.

![YouTube Video Controls - Survival Tips Page](assets/testing-files/survival/videos-survival.gif)
     
- The responsiveness of the Survival Tips page

![Responsiveness - Survival Tips Page](assets/testing-files/survival/responsive-survival.gif)
     
### Camp Setup Page
Manual testing was conducted on the following elements of the [Camp Setup Page](camp-setup.html):

- Clicking the competition banner below the introduction text will bring you to the competition page.

![Competition Banner - Camp Setup Page](assets/testing-files/camp/banner-camp.gif)
     
- Clicking the Back-to-top button, located at the bottom right of the screen, will bring the user to the top of the page.

![Back-To-Top Button - Camp Setup Page](assets/testing-files/camp/btt-camp.gif)
     
- Clicking the Page Link Buttons will move the user down the page to their desired section.

![Page Link Buttons - Camp Setup Page](assets/testing-files/camp/buttons-camp.gif)
     
- Clicking on the YouTube video controls will allow the user to play and pause the video, among other controls.

![YouTube Video Controls - Camp Setup Page](assets/testing-files/camp/video-camp.gif)
     
- Clicking on the external link in the Bunker paragraph will bring the user to the external website in a new tab.

![External Link - Camp Setup Page](assets/testing-files/camp/external-link-camp.gif)
     
- The responsiveness of the Camp Setup page

![Responsiveness - Camp Setup Page](assets/testing-files/camp/responsive-camp.gif)
     
### The Infected Page
Manual testing was conducted on the following elements of the [The Infected Page](infected.html):

- Clicking the competition banner below the introduction text will bring you to the competition page.

![Competition Banner - The Infected Page](assets/testing-files/infected/banner-infected.gif)

- Clicking the Back-to-top button, located at the bottom right of the screen, will bring the user to the top of the page.

![Back-To-Top Button - The Infected Page](assets/testing-files/infected/btt-infected.gif)
     
- Clicking the Page Link Buttons will move the user down the page to their desired section.

![Page Link Buttons - The Infected Page](assets/testing-files/infected/buttons-infected.gif)
     
- Clicking on the link in the Variants Section introduction paragraph will bring the user to the contacts page in the same tab.

![Contact Page Link - The Infected Page](assets/testing-files/infected/links-infected.gif)
     
- The responsiveness of the Infected page

![Responsiveness - The Infected Page](assets/testing-files/infected/responsive-infected.gif)
     
     ### Contact Page
Manual testing was conducted on the following elements of the [Contact Page](contact.html):

- When filling out the contact form, the user must complete all fields before submitting. Hovering over the submit button will trigger `hover` effect, highlighting the button for the user.

![Form required fields - Contact Page](assets/testing-files/contact/form-contact.gif)
     
- Clicking on the mailto email link will open a new email with the address filled in. Clicking on the tel telephone link will open the users call function, populating the telephone number to call. 

![Mailto and Tel Links - Contact Page](assets/testing-files/contact/mailto-tel-contact.gif)
     
- Clicking and dragging on the map will move the area shown on the map. Clicking the plus and minus buttons changes the zoom of the map.

![Map Functionality - Contact Page](assets/testing-files/contact/map-contact.gif)
     
- The responsiveness of the Contact page

![Responsiveness - Contact Page](assets/testing-files/contact/responsive-contact.gif)
     
     ### Competition Page
Manual testing was conducted on the following elements of the [Competition Page](contact.html):

- When filling out the contact form, the user must complete all fields before submitting. Hovering over the submit button will trigger `hover` effect, highlighting the button for the user.

![Form required fields - Competition Page](assets/testing-files/competition/form-competition.gif)
     
- The User can scroll through the Terms and Conditions box to read all details without moving down the page. 

![Terms and Conditions Box - Competition Page](assets/testing-files/competition/terms-competition.gif)
     
- The responsiveness of the Competition page

![Responsiveness - Competition Page](assets/testing-files/competition/responsive-competition.gif)
     
     ### Error Pages
          
- The responsiveness of the error pages.
     
![Responsiveness - All Error Pages](assets/testing-files/error-pages/responsive-error.gif)

     #### 404 Page
     
- By entering an incorrect address into the address bar, the user is brought to the 404 page.

![Reaching the 404 Page](assets/testing-files/error-pages/reaching-404.gif)
     
- The 404 page has two links, one brings the user to the next page in the "story", the other brings the user to the home page.

![Links - 404 Page](assets/testing-files/error-pages/links-404.gif)
     
- The user chooses to continue the story or go to the home page. The story bring the user from an abandoned bicycle on a path to an abandoned house. If the user chooses to go inside, they are eaten. There is now only a single link that brings the user to the home page.

![Story - 404 Page](assets/testing-files/error-pages/story-404.gif)
     
     #### 500 Page
- The 500 page has two links, one brings the user to the next page in the "story", the other brings the user to the home page.

![Links - 500 Page](assets/testing-files/error-pages/links-500.gif)
     
- The user chooses to continue the story or go to the home page. The story bring the user from an abandoned bicycle on a path to an abandoned house. If the user chooses to go inside, they are eaten. There is now only a single link that brings the user to the home page.

![Story - 500 Page](assets/testing-files/error-pages/story-500.gif)

     #### House Page
- The House page has two links, one brings the user to the next page in the "story", the other brings the user to the home page.

![Links - House Page](assets/testing-files/error-pages/links-house.gif)
     
     #### Final Story Page - Dead Page 
- The Final page has one link that brings the user to the home page.

![Links - Final Page](assets/testing-files/error-pages/links-dead.gif)
     
[Back to top](#Survival-Guild---Testing)

## Automated Testing

### Code Validation
The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the `HTML` and `CSS` code used.

**Results:**

- Home Page

     ![Home Page HTML Validation Results](assets/testing-files/validate/validate-home.gif)

- Survival Tips Page

     ![Survival Tips Page HTML Validation Results](assets/testing-files/validate/validate-survival.gif)

- Camp Setup Page

     ![Camp Setup Page HTML Validation Results](assets/testing-files/validate/validate-camp.gif)

- The Infected Page

     ![EPK Page HTML Validation Results](assets/testing-files/validate/validate-infected.gif)

- Contact Page

     ![Contact Page HTML Validation Results](assets/testing-files/validate/validate-contact.gif)
     
- Competition Page

     ![Competition Page HTML Validation Results](assets/testing-files/validate/validate-competition.gif)
     
- Contact Form Dump Page

     ![Contact Form Dump Page HTML Validation Results](assets/testing-files/validate/validate-dump-contact.gif)
     
- Competition Form Dump Page

     ![Competition Form Dump Page HTML Validation Results](assets/testing-files/validate/validate-dump-comp.gif)
     
- 404 Page

     ![404 Page HTML Validation Results](assets/testing-files/validate/validate-404.gif)
     
- 500 Page

     ![500 Page HTML Validation Results](assets/testing-files/validate/validate-500.gif)
     
- House Story Page

     ![House Story Page HTML Validation Results](assets/testing-files/validate/validate-house.gif)
     
- Final Story Page

     ![Final Story Page HTML Validation Results](assets/testing-files/validate/validate-dead.gif)

- CSS stylesheet

     ![Style sheet validation results](assets/testing-files/validate/validate-css.gif)

### Browser Validation
- Chrome - [test image](assets/testing-files/browser/validate-chrome.PNG)
- Edge - [test image](assets/testing-files/browser/validate-edge.PNG)
- Opera - [test image](assets/testing-files/browser/validate-opera.PNG)
- Firefox - [test image](assets/testing-files/browser/validate-firefox.PNG)

## User testing 
My husband and the lovely people of Slack were asked to review the site and documentation to point out any bugs and/or user experience issues. Their helpful advice throughout the process led to a few small UX changes in order to create a better experience. 

## Deployment

This project was developed using [GitPod](https://www.gitpod.io/ "Link to GitPod site"), which was then committed and pushed to GitHub using the GitPod terminal.

### Deploying on GitHub Pages
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/Irishbecky91/survival-guild "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "Pages" section.
5. Under "Source" click the drop-down menu labelled "None" and select "Main".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Scroll back down to the "Pages" section to retrieve the deployed link.
    

    
## Credits 

### Content
- Some of the text used in the the various pages were borrowed and adapted from various sites, listed below.
    - [Reserve America](https://www.reserveamerica.com/outdoors/how-to-start-a-campfire.html "Link to Reserve America - How to Start a Campfire")
    - [Seeker](https://www.seeker.com/top-ways-to-purify-water-in-the-wilderness-1765491027.htmlhttps://www.seeker.com/top-ways-to-purify-water-in-the-wilderness-1765491027.html "Link to Seeker - Purifying Water")
    - [Survival Freedom]( https://survivalfreedom.com/10-ways-to-build-a-shelter-out-of-natural-resources/ "Link to Survival Freedom - Building Shelter from Natural Resources")

### Media
- Almost all images were sourced from the various artists from [Unsplash](https://unsplash.com/ "Link to Unsplash") and [Pixabay](https://pixabay.com/ "Link to Pixabay").
- The images of "The infected" were sourced from [Soufiane Idrassi](https://www.artstation.com/cgsoufiane "Link to Soufiane Idrassi's account on Art Station") through the website [Art Station](https://www.artstation.com/ "Link to Art Station Home Page").
- All videos were sourced from various channels on [YouTube](https://youtube.com/ "Link to YouTube Home Page")

### Code 
The developer consulted multiple sites in order to better understand the code they were trying to implement. For code that was copied and edited, the developer made sure to reference this with the code. The following sites were used on a more regular basis:
- [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow page")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")

[Back to top ⇧](#)

## Acknowledgements

- I would like to thank my family for their valued opinions and critic during the process of design and development.
- I would like to thank my tutor, Kasia, and my mentor, Seun, for their invaluable help and guidance throughout the process.
- Lastly, I would like to extend my deepest gratitude to the amazing people in Slack who helped me rigorously test every aspect of my site.

[Back to top ⇧](#)