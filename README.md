## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info

ORIGINAL - 1800Habits
---------------------
This browser based web application to help users overcome their bad habits and replace them with good habits through tracking and reminders.

Anson Chan - Programmer
Arian Sharif - Programmer
Johnny Hui -  Programmer

REVISED - 1800Reminders
----------------------
I wanted something like a to-do list so I edited the app to do so

Anson Chan - Programmer
	
## Technologies
Technologies used for this project:
* HTML, CSS, JS
* JQuery
* Bootstrap 
* Google Firebase
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
├── board.html               # post it corkboard to send and receive encouragement
├── calendar.html            # creates a calender to update streak
├── discussions.html         # creates a discussion post (post it)
├── login.html               # log in page
├── reminders.html           # read reminders, write reminders, delete reminders
├── tutorial.html            # tutorial page
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── images                   # Folder for images
    /sticky_note.png         # For corkboard post-it board page
├── scripts                  # Folder for scripts
    /databaseAPI.js          # connects firebase to the app
    /board.js                # gives corkboard functionality
    /calendar.js             # gives calendar functionality
    /discussions.js          # allows user to create post-it notes
    /login.js                # log in with firebase
    /nodal.js                # nodals
    /reminders.js            # functionality for reminder cards
    /streak.js               # reads streak from database to update progress
├── styles                   # Folder for styles
    /calendar.css            # style for calendar
    /discussions.css         # style for discussion page (post-it creation)
    /index.css               # style for main page after login
    /login.css               # style for login page
    /postboard.css           # style of corkboard
    /reminders.css           # style for reminders

Firebase hosting files: 
├── .firebaserc...


```

Tips for file naming files and folders:
* use lowercase with no spaces
* use dashes (not underscore) for word separation
