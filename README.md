# Would You Rather Project
It is a React - Redux front end for the application. created using the Create-React-App.
It is a multi player game that lets the user create and answer would you rather questions . Any changes made will dynamically update to every user.  

## Installation
 <ol>
      <li>once youve cloned the files open command line in the file directory by using : </li>
         <code>> cd '{FILE_PATH}'</code>
      <li>run command</li>
        <code>> npm install</code>
      <li>Once all the required files are installed you can then start by running:</li>
        <code>> npm start</code>
    </ol>

## Login Flow
We always want to make sure we know who the logged in user is, so information about the logged in user should appear on the page. If someone tries to navigate anywhere by entering the address in the address bar, the user is asked to sign in and then the requested page is shown. The application allows the user to log out and log back in

## Application Functionality
Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
<ol>
<li>The details of the poll are available at <code>questions/:question_id</code>.</li>
<li>When a poll is clicked on the home page, the following is shown:
  <ul>
<li>the text “Would You Rather”;</li>
<li>the picture of the user who posted the polling question; and</li>
<li>the two options.</li>
</ul>
</li>
<li>For answered polls, each of the two options contains the following:<ul>
<li>the text of the option;</li>
<li>the number of people who voted for that option;</li>
<li>the percentage of people who voted for that option.</li>
</ul>
</li>
<li>The option selected by the logged in user should be clearly marked. </li>
<li>When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.</li>
<li>The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.) </li>
</ol>

## Pool
<ol>
<li>Upon voting in a poll, all of the information of the answered poll is displayed. </li>
<li>The user’s response is recorded and is clearly visible on the poll details page.</li>
<li>When the user comes back to the home page, the polling question appears in the “Answered” column.</li>
<li>The voting mechanism works correctly, and the data on the leaderboard changes appropriately.</li>
</ol>

## Adding new questions
<ol>
<li>The form is available at<code>/add</code>.</li>
<li>The application shows the text “Would You Rather” and has a form for creating two options. </li>
<li>Upon submitting the form, a new poll is created and the user is taken to the home page. </li>
<li>The new polling question appears in the correct category on the home page.</li>
</ol>

## Leaderboard
<ol>
<li>The Leaderboard is available at<code>/leaderboard</code>.</li>
<li>Each entry on the leaderboard contains the following:<ul>
<li>the user’s name;</li>
<li>the user’s picture;</li>
<li>the number of questions the user asked; and </li>
<li>the number of questions the user answered.</li>
</ul>
</li>
<li>Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.</li>
</ol>


## Navigation
<p>The app contains a navigation bar that is visible on all of the pages.</p>
<p>The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.</p>

## Working with BackEnd
<p>The data that’s initially displayed is populated correctly from the backend.</p>
<p>Each user’s answer and each new poll is correctly recorded on the backend.</p>
