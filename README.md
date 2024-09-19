# Spellings Quiz - A platform to practice your english spellings skills

The Spellings Quiz, is an application mainly created for younger kids, so that they can practice and develop their english spellings skills in a very interesting way.

English is a world language. Most of the schools have this language as a first or second language. Sometimes kids find it easy to speak. But while writting they make lot of mistakes, due to their lagging spellings skills. 

So the 1st purpose of this app, is learning spellings by an innovative method. When solving the quiz Kids won't feel, they are studying. 

Parents will see it as a better option to keep kids busy, instead of watching TV or playing games.

Built to use on the go, on the mobile phone, on a tablet or a computer, it is also a nice online platform for adults, who want to learn english language.

![Image of spellings-quiz app on different screen sizes](/assets/images/responsive.png)

## Features
-   Header
    -   Header at the top of the page, simply consists of a logo and a heading.
    -   The 'abc' logo gives idea that its realted to alphabets.
    -   The heading "Spellings Quiz" clearly states what this application is about.

        ![Image of the header with a heading and scorebord](/assets/images/header-spellings-quiz.png)

-   Instructions Button
    -   Just below the header, 'Instructions' button is placed.
        ![Image of the Instructions Button](/assets/images/instruction-btn.png)

    -   On clicking 'Instructions' button, a modal box will open which will display information about how to play the quiz.
        ![Image of the Instructions Modal Box](/assets/images/instructions.png)

    -   A close button is provided to close the modal box. However if user clicks anywhere outside the box, instructions box will be closed.

-   On screen keyboard
    -   Below the Instructions button, comes alphabets area. 
    
    -   26 buttons are provided for all the english alphabets (A-Z).

    -   As mentioned in the instructions, User must use this on screen keyboard to type the spellings, while solving the quiz. 
        ![Image of the alphabets area](/assets/images/colorful-keyboard.png)

-   Quiz Types
    -   Below the keyboard, 4 Quiz Types are shown in the form of 4 buttons. 

        ![Image of the quiz types](/assets/images/quiz-types.png)

    -   A message is displayed for the user- "Select your quiz:"
    -   To start the quiz, user must select any of the 4 options, by clicking on the button.
    -   Once clicked, color of the button changes to green, so that user can see which quiz is going on.
    -   For example, this is how it looks, when the 'Fruits' quiz is selected.

        ![Image of the quiz type selected](/assets/images/quiz-type_selected.png)

-   Question area
    -   When a quiz is started, an image is displayed in the question area. User has to type name of the currently displayed image.
    -   The spelling typed by the user will be seen in the 'textbox'.
    -   User can delete the wrongly typed character by clicking the 'backspace' button.
    -   Once done user can click the 'Submit' button.
    -   Once Submit button is clicked, current score is updated in the 'Score area' and next image is displayed.
    -   If user wants he can click on 'Try Later' button. Then the image will be displayed again afterwords.    
        ![Image of the question area](/assets/images/question-area.png)

-   Score area
    -   Here the current score is displayed, which includes number of correct answers and number of incorrect answers.    
        ![Image of the score area](/assets/images/score-area.png)

-   Final Score
    -   At the end of the individual quiz final score will be displayed along with a message, commenting about the performance of a participant. Example is shown in the image below.
    -   Different messages will motivate user to do better next time.
        ![Image of the Final score message](/assets/images/final-score-msg.png)


### Features left to implement

-   In the future I would like to add a timer for the quiz. User should answer each question within some fixed number of seconds.When the given time is over next question will appear automatocally.
-   It would be also a nice idea to create login-id for the user. We can save the score for each profile. In this way we could track user's progress when he plays the quiz each time.

## Testing
-   Accessibiliy
    -   I ran the page through Lighthouse and made sure that the performance, accessibility etc. are good.

    ![Image of Lighthouse testing score](/assets/images/lighthouse.png) 

-   I tested and confirmed that the quiz works in different browsers; e.g. Chrome, Edge, Samsung Internet.

-   HTML
    -   I ran the code through the [W3C HTML validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Famrutakulkarni01.github.io%2Fspellings-quiz%2F). No errors or warnings.

    ![Image of W3C HTML validator check](/assets/images/html_validator.png)

-   CSS
    -   I ran the code through the [W3C CSS Validator](
        https://jigsaw.w3.org/css-validator/validator?uri=+https%3A%2F%2Famrutakulkarni01.github.io%2Fspellings-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en). I discovered 4 warnings as a result of keeping same color for background and border of 'Instruction' button. As a fix, I changed border color slightly.

    ![Image of W3C CSS validator check](/assets/images/css_validator.png)

-   JavaScript
    -   I ran the code through [JS Hint](https://jshint.com/) and discovered 28 warnings of which 4 were missing semicolons. Fixed those and 24 warnings remain of which I can't do anything about as far as I know. No errors.

    ![Image of JS Hint Metrics](/assets/images/js_validator.png)

-   Feature Testing
    -   I tested that the 'Instructions' button is working, Once it is clicked 'Instruction Modal Box' is opening and close button on the modal box is working as well.
    -   I tested that the 'On screen keyboard' is working fine. As expected clicking on the alphabet buttons results in typed alphbet shown in the textbox below.
    -   I tested that only 'On screen keyboard' could be used for typing.
    -   I tested that at any time quiz-type could be changed, by clicking on one of the 4 'quiz-type' buttons.
    -   I tested that all the 4 quiz types are working correctly. This includes loading correct images randomly, spellings getting correctly verified and scores getting updated after each submit event.
    -   I tested that the 'backspace', 'Submit' and 'Try Later' buttons are working correctly.
    -   I tested that at the end of each quiz, final score and a message is displayed.
    -   I tested that when a quiz is not yet selected, clicking on 'alphabet' buttons, 'Submit' button or 'Try Later' button has no effect and a warning is displayed saying 'Please select a quiz'
    -   I tested that hovering effect is working on all the buttons.

## Bugs
-   When I added hovering effect on 'Quiz-type' buttons, I came across a bug that once a 'Quiz-type' button is clicked, next time hovering effect was not seen on that particular button. I fixed this bug by adding '!important' rule.

-   Another bug was found, where even if items in the array were deleted, its length was not being updated. So a quiz was not stopped even if array is empty. Exception was thrown when tried to access the element which was deleted. I fixed this by replacing delete with splice() method on the array.

### Unfixed bugs
-   There are no unfixed bugs

## Deployment

### Version Control

-   The site was created using Gitpod editor and pushed to Github to the remote repository 'spellings-quiz'.
-   Git commands were used throughout the development to push the code to the remote repository. The following git commands were used:
    -   git add . - to add the files to the staging area before being committed.
    -   git commit -m "commit message" - to commit changes to the local repository queue that are ready for the final step.
    -   git push - to push all committed code to the remote repository on Github.

### Deployment to Github pages

-   The site was deployed to Github pages as follows:
    -   In the Github repository, I navigated to Settings tab
    -   From the source section drop-down menu, I selected the Master branch and Save
    -   Once the Master branch was selected, the page provided the link to the website
-   The live link: [spellings-quiz](https://amrutakulkarni01.github.io/spellings-quiz/)


### Cloning of the Repository Code locally

-   Go to the Github repository that you want to clone
-   Click on the Code button located above all the project files
-   Click on HTTPS and copy the repository link
-   Open the IDE of your choice and and paste the copied git url into the IDE terminal
-   The project is now created as a local clone

## Credits
-   A special heartfelt thanks to my Mentor, Spencer Barriball, for all the support he provided and for answering all my questions. With his help I could surely bring my project to the next level.

### Content

-   My 8 year old daughter inspired me to create such a quiz app. She is fond of solving quizes. Hence I thought of creating a quiz application which will make kids learn something.
-   I took idea of creating Modal Box and its styling from https://www.w3schools.com/

### Media

-  The 'abc-block' image used as 'Favicon' in the title of the page as well as 'logo' in the heading was taken from [flaticon] ("https://www.flaticon.com/free-icons/coexistence")
-  The icon on the button 'Backspace' was taken from [Font-awesome](https://fontawesome.com/)
-  All the images used in the Animals, Birds and Fruits quiz and also the smily icon were taken from [flaticon](https://www.flaticon.com/)


