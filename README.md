# daily-planner-app

## About + Usage
I coded a simple calendar application that allows a user to save events for each hour of the day. It is colour-coded so that you can see past, present, and future events within the calendar. 

## Made with:
- JQuery
- Bootstrap
- JavaScript
- CSS
- HTML
- Moment.js

## To note:
I accidently saved and commited dozens of messages onto another repo thinking I was doing it to this repo, so I will list some of the main messages I made onto here:

- Added a closing div to each parent table div since I forgot to do so previously.
- Since moment JS time processes numerics from 0-23, I changed the id of the time-blocks to match that. Example: my old id was "1pm", and then I changed it to "hour-13".
- Debugged the code many times
- added if statement to compare hours for past, present, future. then added css to change background colour
- parsed an attribute in my script then split it so that I could use the value of it in my if statement.

## Screenshot
![Calendar screen](./assets/images/05-third-party-apis-homework-demo.gif)

## License
MIT.
