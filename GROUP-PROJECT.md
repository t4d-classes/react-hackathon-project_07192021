# React Hackathon

## Objective

Each team will build a new form, a new table of form submissions and some functionality to collect and remove form submissions. All three groups will be updating one application in a GitHub repo to build a single application with all three forms.

There is NO official completed version of this project. This project and its result is what you choose it to be. The only solution is the one you all create.

## Team 1

Add a new Admin page to the site. On the Admin page each team will place a link to the page that displays a table of for submission. Please construct this page early in the hackathon so other teams can place their links on it.

Implement the following form in React:

https://business.libertymutualgroup.com/business-insurance/contact/agency-appointment-request

The form needs to be accessed via a link from the menu bar. Enforce all required field validations before submitting the form. If a required field is left empty, display appropriate error messages.

When the form is saved, post the submission to the JSON Server REST API. You will need to create a new endpoint and decide on a data structure.

On the Admin page configure a new link, create a new page, and create a new component to display a table of the submitted form entry. Please use a table and select 3-5 fields from the form to display as columns in the table. Finally, on each table row, place a button labeled "Delete". When the Delete button is clicked, remove the form submission from the REST API. Ensure the table updates to reflect the latest data in the REST API.

Bonus: If you finish early, please use the extra time to clean up the Coverages page some. Make the styling and page content look a little nicer.


## Team 2

Implement the following form in React:

https://business.libertymutualgroup.com/business-insurance/Pages/LMG%20Forms/LeadIntake.aspx

The form needs to be accessed via a link from the menu bar. Enforce all required field validations before submitting the form. If a required field is left empty, display appropriate error messages.

When the form is saved, post the submission to the JSON Server REST API. You will need to create a new endpoint and decide on a data structure.

On the Admin page (created by team 1) configure a new link, create a new page, and create a new component to display a table of the submitted form entry. Please use a table and select 3-5 fields from the form to display as columns in the table. Finally, on each table row, place a button labeled "Delete". When the Delete button is clicked, remove the form submission from the REST API. Ensure the table updates to reflect the latest data in the REST API.

Ensure the Program Resources sidebar content matches the content in the original forms. Another team will work on the Small Business Appetite Guide.

Bonus: If you finish early, please use the extra time to clean up the Regions page some. Make the styling and page content look a little nicer.


## Team 3

Implement the following form in React:

https://business.libertymutualgroup.com/business-insurance/Pages/LMG%20Forms/LeadIntakeGeneral.aspx

The form needs to be accessed via a link from the menu bar. Enforce all required field validations before submitting the form. If a required field is left empty, display appropriate error messages.

When the form is saved, post the submission to the JSON Server REST API. You will need to create a new endpoint and decide on a data structure.

On the Admin page (created by team 1) configure a new link, create a new page, and create a new component to display a table of the submitted form entry. Please use a table and select 3-5 fields from the form to display as columns in the table. Finally, on each table row, place a button labeled "Delete". When the Delete button is clicked, remove the form submission from the REST API. Ensure the table updates to reflect the latest data in the REST API.

Build a React component that displays the Small Business Appetite Guide (in the sidebar) using a React component and the data from the REST API.

Bonus: If you finish early, please use the extra time to clean up the Home page some. Maybe add some links and descriptions to the three form you all have created. Make the styling and page content look a little nicer.

## Hackathon Rules

### Source Code

The starting code for the project is the class demonstration/lab code we have been using all week. I have posted the official version for this Hackathon here:

https://github.com/t4d-classes/react-hackathon-project_07192021

The primary branch is the "main" branch. The "main" branch is what I will demo from when we do the presentations. No one has permissions to push directly to the "main" branch. All changes must be done by pull requests and reviewed by 1 other team member (and member on any team can be used for the review). You may not review you own pull requests (it will not let you). If you are not sure how to do this, please ask a fellow team member or the instructor.

There is a `starter` folder that contains some sample HTML for the various form controls used on the forms. The HTML was extracted from the SharePoint version of the forms.

**IMPORTANT:** Teams should work together to ensure the web application source code is updated in an orderly way. Any problems should be resolved through the team captains.

### Dividing Work

Each team has three parts that can be worked on independently from each other. The programmer coding the table does not need to wait for the form to be completed and vice versa. Divide the work as it makes sense for the experience level of the members of your team. If you have lots of experience, please tackle the harder tasks. If you are really brand new, then either take simpler task or pair program with a more experienced developer if you would like. Pair programming, swarm programming, mob programming and such is recommend so long as everyone is engaged in creating the solution.

This is a TEAM project. The TEAM succeeds or fails TOGETHER. While practical limitations may require some to do a little extra individual effort - the project is a TEAM project not an individual project. I will not be pleased if one person does all of the work while everyone else is doing other stuff.

Also, the goal is not to finish first. The goal is to meet the requirements and for everyone to learn more and gain more React experience.

### Outside of Class Hours

Teams are more than welcome to work on the project outside of class hours but there is no requirement to do so.

## Project Timings

- Project starts at 11am EDT on Thurday.
- Project ends at 2:30pm EDT on Friday. Sometimes I grant an extension but do not count on it.
- Project presentations start at 2:30pm EDT on Friday.
- Do not forget you have your special presentation at 1pm - 2:30pm EDT on Thursday. Plan that into your project execution plan.
- Project presentations will end at 4pm on Friday, and our final topics will be covered.

## Project Presentations

- I will pull the code down from the main branch and run it
- Each team will walk me through what they did, I will be driving the web site
- I will be reviewing both the user experience and the underlying code
- I will ask each team member what part they contributed to the project
