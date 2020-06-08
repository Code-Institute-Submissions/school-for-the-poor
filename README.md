# **Miss Kate's Academy**

# introduction

This project has been created so that users can play a game that tests their English language skills as well 
as their memories. 
It is currently based around rearranging questions, a notoriously difficult part of English language learning, 
in the form of a memory game. The idea of using a game is to show that language learning can also be fun. 
The site provides the information about the bricks and mortar English language schools, which the users can then 
visit in person to talk face-to-face or contact through the site/by phone to enquire about English classes.  

The site provides contact details and a form so customers can quickly and easily contact the school. 
There is also a map showing the schools’ locations so potential students can visit. 

# ux

-  **strategy** - the site is simple, with a fun design that reflects learning from a blackboard
in an old school classroom. The instructions for the game are clear and it offers multiple levels to reflect
the differing abilities of users and to add progression. The game shows an entertaining element to language 
learning. The concept of including a game is to show that the users can anticipate that lessons in the 
real-life classrooms won't be boring. 
The site is simple with functional content that achieves the site owner's and users' goals. The site is for B2C 
customers, with a compelling design that stands out from other language centre sites. It's easy to
contact the business to enquire about the bricks and mortar schools and lessons. 
The target age range is broad due to a fun design for younger users (7/8+) to adult students who will 
enjoy the nostalgia of blackboards and chalk from their school days. The game is available on the landing page, 
so the user can play straight away. The gameplay is also simple enough that younger children can do it on their 
own. Once a level is completed the user has a clear option to move up a level, at the same time (like once all 
the levels are completed) the user is offered direction to the contact-us page to enquire about face-to-face 
lessons.
For the user it’s easy to find out more about the schools and teachers as the menu and footer are always
 visible during the game, and by clicking either “Home” or the site logo/title the user is brought 
 back to the game. 
- **scope** - the features currently offered provide the user and owner with what they need, and they are simple 
to implement and use. Future releases can add value in bite-size increments, such as increasing the number of 
questions available, adding incremental levels, adding a mixture of questions and sentences to the game, 
adding a timer / scoring system.  

- **structure** - the site has a consistent theme and style with the site name as a home page link and 
a menu at the top right. All clickable links have clear actions and responses. The site is designed over 
multiple pages and the key information for each pages’ content is clear. It is easy to know where you are, 
or how to get where you want to be. 
The navbar and footer items change colour on hover, making it clear that they are clickable links. 
- **skeleton** - information is revealed across a small number of pages, with the key feature of the site on 
the homepage.  The limited number of pages keeps the site simple and easy to navigate beyond the game to find the 
information the user needs. Choices are simple so the user is not overwhelmed with options, and each click 
provides specific content.
- **surface** - the site has a clear identity presenting a connection between the blackboard background and chalk 
style font with school-learning. The colours, background and font are consistent throughout the site, 
including in the alerts. The elements and features are clear and legible. 
The key elements are easy to recognise and disclosed progressively over different pages. 

## user stories

Site User wants to
- play a game that challenges their memory and language skills 

    - the main feature of the site is a memory game that tests the user’s ability to remember a set of 
    words that must be reformed into a question with the correct word order. The game is fun and progresses 
    from easy questions to harder questions as the students move up through the levels. The correct word order
     is shown in the success alert to reinforce the language point.

- learn English

    - the aim of the game is to encourage the user to think about improving their language skills and 
    show new questions forms that they may not have encountered before. The repetitive element of trying to 
    remember the word order further helps to reinforce the language point. 

- see that the business has a solid background and reputation and works to a high standard
    
    - by seeing a professional-looking, consistent site with key information about the schools, with profiles 
    of current teachers and testimonials from students

Site Owner wants to
- grow their schools’ business and increase their student base by attracting them through a game

    - the main feature, the memory game, shows that the schools can make learning fun. 
    The game is designed to encourage students to want to improve their language skills further by 
    signing up to face-to-face lessons. 

- highlight the features of the business

    - these are shown through the schools and teachers pages, which give additional information that a 
    potential student would be looking for. 

- demonstrate their quality and customer satisfaction

    - by including student testimonials potential students can see the customer satisfaction level

- give the clients a quick and easy way for them to contact the business

    - this is achieved with the contact us and schools pages, as well as including contact details in the footer


# features

Features include:
- **memory game** - the key feature of the site, to attract users and get them interested in practising their 
language skills
- **schools** - school info (map location and address) so users can continue their learning experience through 
face-to-face classes
- **teachers** - about the senior teaching team to personalise the business and show the level of experience 
available
- **testimonials** - the quality of services in the words of existing students with photos to personalise it
- **contact us form** - so users can easily get in touch with the business about English classes

Future features:
- **increase game database and functionality** - increase game number of questions in the database, potentially 
adding transitional levels (elementary and upper intermediate as per standard language learning frameworks), 
adding statements as well as questions, adding multiple answer options (e.g. “Have you not done that yet?” = 
“Have you not yet done that?”), vocabulary memory games with specific themes, adding a hint button to enable more 
complex questions and sentence structures, saving progress, a score system for time and/or number of tries 
on a questions, adding contractions to make more natural questions and statements
- **online resources** - a YouTube channel with fun, language skills videos that users can subscribe to, 
a complete social media profile 
- **automatic response** - if the user enters a phone number in the contact-us form then an automated text 
message will be sent to the customer to acknowledge receipt of the request. 
- **chat bot** - so user can have immediate and direct communication with the business  


# technologies used

- HTML: layout and content 
- CSS: styling
- JS: memory game, removing and showing info, google maps API, contact us/email, accessing and processing json file
- JSON: for the game question database
- Font Awesome: icons that visually represent the services the business offers https://fontawesome.com
- Google Fonts: a back-up font family that represents the style and design of the business https://fonts.google.com
- Bootstrap (CSS, JavaScript and JQuery) for the functionality of the navbar, hamburger menu 
    and the grid structuring of the site https://bootstrapcdn.com

# testing

- links

All links have been checked - links to sections in the menu and links to local images. 
The links to external sites display a "coming soon" image as the social media for the business
has not yet been created. 
Internal links, such as button clicks, have all been verified that they perform as requested. 

- contact us form

On submission the form comes up with an error if it hasn't been filled in correctly (email address), 
or if required information (name, email address and details in the text box) is missing. A success message is 
displayed
The form data is sent as an email to the site owner. The email received contains all the submitted data 
(name, email, phone (optional) and the help request). Email receipt has been verified in the associated account. 
A success message is shown only when the form is successfully submitted. 

- responsiveness

At every stage of the development process the responsiveness of the site has been checked through chrome 
developer tools.
The grid structuring uses responsive parameters for display effectiveness in the divs that are created for
 game play, the info on the teachers page, testimonials, and also for the navbar e.g. collapsing below medium 
 screen widths. For example, the teacher info boxes are displayed as a single column on mobile and as two 
 columns for a medium screen width and three columns for a large screen width. There are also font size changes
  for increased responsiveness. 
The site has also been tested on different browsers e.g. Chrome, Firefox, Edge.  

- memory game

At all stages of the development testing was done using chrome developer tools to identify where issues 
arose in the code. 
There were several issues throughout the development of the game itself that had to be addressed or the code 
otherwise manipulated. One example was the use of apostrophes in the questions, which resulted in a syntax error 
when the value was pushed to the game variable. The questions had to be revised to not include contracted forms, 
meaning from a language point of view the structures are limited and exclude e.g. tag questions.
Also, the length of question was a factor, as questions became longer the game became almost impossible, 
so a limit to the number of words had to be imposed at this stage. With an additional release including e.g. 
a hint, then these could be added later.  
Another issue arose on the initial coding for moving up a level. If the user progressed directly from one level to 
another through gameplay then on hitting “Restart” the user was taken back to the first question on the initial 
level rather than the beginning of the current questions. After several failed attempts to rectify this, 
it was decided to display a level complete congratulations and offer the option to move up to the next level. 

- general tests

The html and css files were validated through the W3C Markup Validator and did not throw up any issues that 
haven’t been resolved. The JavaScript files were validated through JSHint with the only errors being the use of 
functionality only with ES6 (for which a comment was added) and apparent unused functions, however these are 
all invoked within other functions or button clicks, likewise the apparent undefined variables are all defined 
and utilised. I am not sure why these are coming out as errors. The two functions in scramble-game-w-json.js 
referencing outer scoped variables work successfully, so haven’t been altered. 

# deployment

The project can be accessed at https://github.com/junokili/school-for-the-poor

The project was created through two separate GitHub repositories as, due to repeated attempts to resolve 
blocking issues, the number of free hours of coding time in GitPod ran out. The project was transferred to a 
different account owned by the developer, and subsequently back again, as a new month’s allowance began. 
This has resulted in the evident jumps in commit stages. (However, the interim repository can be found here:
 https://github.com/KateParkin/supreme-couscous)

The site was ultimately deployed on the developer's GitHub site through GitHub Pages: https://github.com/junokili/school-for-the-poor

An initial commit was made using the Code Institute template. 

Development was then carried out in GitPod. During the build process files were incrementally added from GitPod 
to the GitHub repository (git add) before being committed (git commit -m “info”) and pushed to GitHub (git push). 

Firstly, once an html framework was added this was committed. Subsequently, on creation of the additional page 
frameworks, a “testing” page, a basic randomiser function and a testing code snippet to access and display the 
json data, furthers commit was made. These commits were added to with the google maps API, as the game development 
progressed (and various successes in desired outcome were achieved e.g. the basic gameplay, adding alerts and a 
restart button etc.)

A similar number of commits were then made in the second repository, including a significant change to the 
structure of the gameplaying script, and a modified json database to work with the new script, following a 
number of issues in trying to access the data without breaking the game, including syntax errors due to 
apostrophes in the json data, and the updated css file. 

The working files were then copied back into the original repository and modified to include further updates to 
gameplay after an issue with the move up level function was identified. Outdated files were then deleted to tidy 
up the repository prior to submitting the project. A few additional commits were made after e.g. adding the 
testimonial feature, editing the footer, validating the code, adding the original mockups etc. until a final 
commit was made with the game working to the best of the developer’s current skills, the site pages completed 
as planned and a completed README file. 


# credits

- **content:** the content and code is the developer's own except where otherwise attributed  
(and commented accordingly in scrable-game-w-json.js):
w3schools: teacher profile flip boxes modified from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_flip_card


- **font:** DK crayon crumble font is attributed to Hanoded:
https://www.dafont.com/dk-crayon-crumble.font

- **media:** the images used in this site are the developer’s own  
    - the background chalkboard image is designed by Freepik:
http://www.freepik.com
    - VectorStock: coming-soon.jpg https://www.vectorstock.com/royalty-free-vector/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321

- **acknowledgments:** the inspiration for this project has come from the life of the developer as an EFL teacher 
and also a language learner. I’d like to thank my mentor for his suggestions to improve the site and greatly 
assisting when I was stuck on the project. 
