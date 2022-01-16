# patrickaregan.github.io/challenge-03/

## Description
- This project is a password generator built with HTML, CSS and JavaScript. It asks for five
pieces of information to generate a password. The first is the length of the password between
8 and 128 characters. The second through fifth questions are whether to include lowercase,
uppercase, numeric or special characters.
- A complex password generator is necessary today as we do so much online and need many different
passwords. It can be challenging to think up a password that is completely random so a generator
is helpful.
- I learned about JavaScript in class and made use of objects and functions to complete this project.
- I used functions to prompt for password criteria and stored all the selections in an object.
- The functions made it easy to call the logic again if any of the requirements were not met. For example, I checked if at least one character set was selected and if not I started over and called all the prompt functions again.
- For the password generation I created two buckets, a character bucket and a password bucket. The character bucket holds all the characters from all the character sets selected in the prompting phase. For example if the user selects lowercase and uppercase then I put all those characters in the character bucket. That made them available to be chosen randomly. Then I looped as many times as the password length the user selected and randomly picked a character from the character bucket and put it in the password bucket. This worked very well but I had to go one step further to validate that the password bucket contained at least one character from every character type the user selected.
- To validate the password bucket I created a password validation function (passwordBucketIsValid) that looped through all the character arrays that the user selected and looked for each character in the password bucket. I stored the count in a counter and if there was at least one in each then I marked the password valid.
- The final step in the password generation was to use th join function to turn the passwword array into a string so I could display it to the user.

## Screenshot
![Patrick Regan Portfolio](assets/images/screenshot.png)


## Link
[https://patrickaregan.github.io/challenge-03/](https://patrickaregan.github.io/challenge-03/)

## Credits

UT Coding Bootcamp. (January 14, 2022). Random number function.
Retrieved January 14, 2022,
from [https://courses.bootcampspot.com/courses/925/pages/3-dot-4-4-use-the-math-object?module_item_id=399356](https://courses.bootcampspot.com/courses/925/pages/3-dot-4-4-use-the-math-object?module_item_id=399356)