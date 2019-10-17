# webDevWorkshop
## HTML/CSS focused Activities
### webDevWorkshop/cssActivity
Intended as the first activity for the course. This is an introduction to css styling. There exists a commented spec in the html file, instructing students to implement the desired style elements. The styling is only done on html tags, no classes are required.

#### Reflections
Currently the style is expected to be written in the html file, but for the sake of future activities it may be simpler to introduce the css file to ensure consistency throughout the day in which we interact with the content. Furthermore, some of the spec is confusing to those without a css or computer science background. Things like 
‘paragraph line height should be 1.8 times the height of the text;’
Should be removed. It is incredibly important this activity is simple and easy. Confusing spec should be moved to a different section to reduce stress to younger students. 

### webDevWorkshop/ExampleBlog
Contains blog.html and blog.css
Simple enough to be written live. Intended as an open ended activity for students to play with HTML and CSS. Encourage students to make modifications to the existing code.
Feature ideas
Change background image
Change colours 
Made more ‘card’ content
Replace profile image
Change font for title elements without affecting body elements
#### Reflections
The blog was originally intended to be a small part of the course, but when presented with a younger than anticipated audience, became the main activity. Students currently are given the entire blog to build off of as an activity, however they could be given even less to start off with, as some students struggle to build off the current base besides some aesthetic changes. 


## Javascript Activities
### webDevWorkshop/WriteTheJS/
### webDevWorkshop/WriteTheJSAnswers
WriteTheJS is the files given to students, WriteTheJSAnswers is a sample completed exercise for the tutors to study/have ready. The idea of the activity, is that the HTML/CSS is already styled. The page is a bunch of buttons, which will call javascript functions. All the javascript functions needed to complete the tasks exist as stubs. Helper functions have been written. 
#### Activity 1 - Increment The Counter
Retrieve the current text in the answer field. If it is a number, increase it by 1. Else set it to 0.
Advanced students can look at the getCurrentAnswer/setAnswer functions to get an idea of how JS is interacting with the HTML. 
#### Activity 2 - Change the Background Colour
Pick a random colour from the list and change the background colour of the html page. Originally students were just given a list of colours and some hint math functions, but getting a random item from a JS array isn’t that intuitive so i’ve updated the helper code to actually include everything they need, they just need to copy and paste it down correctly. The bonus activity is still there to complete. 
#### Activity 3 - PlusMinus
Quite literally this hackerrank problem (https://www.hackerrank.com/challenges/plus-minus/problem)
Given an array of positive, negative, and zero values, return an array containing the percentage of positive, negative, and zero values as separate entries,
    such that:
        answer[0] is the percentage of positive values
        answer[1] is the percentage of negative values 
        answer[2] is the percentage of zero values
checkPlusMinus does the checking. checkPlusMinus1 and checkPlusMinus2 give checkPlusMinus the user’s result and the sample answer.
All kids need to complete is plusMinus(data)


#### Activity 4 - GetTime
  Write the current day and time in the answer field, in the format:
    'Today is : Wednesday.' 
    'Current Time : 2 PM : 57 : 38' (Hours, Minutes, Seconds)
Research / Make an estimated guess on how to use the Date object to get the data you need.
You will need to convert 24 hour time to 12 hour time.

More sample code from the answer might need to be injected into what is given to the students.

#### Activity 5 - Reverse Number
Prompt the user for a number, take that number as a string and reverse it. 
Reflections
This is a great format for learning JS, though the activities aren’t perfect, they’re very modular. Think of a better activity, simply replace or add a button to the HTML/CSS. Some of these activities are great for all skill levels, some less so. The sample code given to the first workshop students is less than is currently in the repo, but more might still be needed, as students struggled with the jump to a whole new programming language. An even easier activity might be necessary before this one (Though I might argue an entire day on JS might be necessary). Either way, this is excellent content and teaching material if used correctly.


### webDevWorkshop/CookieClicker/
The game loop is mainly defined in updateScore(). This will handle most of the HTML/CSS for JS focused students, along with calling the achievement helper. The game concept, if you’ve never played Cookie Clicker, is to automate the creation of cookies for the simple sake of getting more. Factories generate Cookies per second, clicking generate a cookie per click, and both can ideally be upgraded. 
Achievements
Students can add a variety of achievements to be obtained throughout their game. An example achievement, getTenCookies has already been fully implemented. A walkthrough on how to add achievements is recommended if you foresee students having the skill level to participate. Perhaps an HTML/CSS extension activity would be implementing some way to view past achievements. 
Achievements are added by:
Create a function (e.g getTenCookies) that checks for your desired achievement condition (e.g, getting 10 cookies for the first time) and checks if the achievement hasn’t already been achieved. 
Use the createAchievementAlert(Title, Msg) helper function to create an achievement alert
Add your function name to the achievements list at the top of the file, and make the value false.
You are done. A helper function (checkAchievements) will iterate the achievements list on every tick, and call the achievement functions. This is why it is important the function name is the same as what is in the achievement list. 

The Shop
More things could be added to the shop, though the current css styling needs some fixing to make this easier for students. 

Items could be:
Giga factory - Even more Cookies per Second
Grandmas - Cheaper than factory but less Cookies per second
Retirement Home - Boost efficiency of Grandmas (increase their Cps) 
Industrial Era - Boost efficiency of Factories (increase their Cps) 

An Inventory
Not implemented in any sense currently, but more HTML/CSS students could find ways to show what is currently owned. Will involve a lot more styling. 

#### Reflections
A pretty challenging exercise. Some students simply changed the cookie image and html title to indicate the game was another kind of clicker, like ‘RamenClicker’ or ‘AlienClicker’, etc. Very modular and a great way to end the day if the audience is up to the task. Otherwise. Substantial changes should be made to even consider this kind of activity for year 7’s. 

Achievements are actually easy to implement, but without a focused walkthrough by the tutor students will not likely understand. 

