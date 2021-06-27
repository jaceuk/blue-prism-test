# README #

Thank you for giving me the opportunity to take this test.

Preview URL: https://distracted-bose-f02ff5.netlify.app/
(please make sure you're running the mock server locally on port 3000)

### My approach ###

Here's a quick summary of my approach:

* Read the brief thoroughly then, when done, I went though it again ... several times in fact.
* Built a bare bones minimum viable product to get the functionality and error handling working clear of presentational clutter.
* Created and implemented the design along with supporting markup.
* Added 'nice to have' features.
* Setup basic testing (unit/component and snapshot) with JEST and React Testing Library.
* Thorough manual testing took place throughout along with constantly going back to the brief.

The initial minimum viable product was created using:

* create-react-app
* ESLint with AirBnB defaults along with a few tweaks
* Redux, whilst this is a small project it's just too useful

I decided to use SASS over styled components. On a project this size with minimal separate components and styles it made more sense. Also it's a personal preference.

Components wise I decided to only break out the components that would need to be updated with a state change. Anything more granular would have been overkill for this project.

### Technologies/tools used ###

Thew usual suspects really:

* React
* Redux
* ESLint
* HTML
* SASS
* Jest/React Testing Library
* Git
* VS Code with a handful of extensions
* Figma

### Highlights ###

I'd like to highlight a few areas that I covered:

* Uses semantic HTML.
* Fully responsive.
* Meets WCAG 2.0 (AA) accessibility requirements.
* Error handling covering API being down and no results found.
* Setup testing (unit and snapshot) with JEST.
* Can filter log entries by status
* Can sort log entries by a wide variety of options
* The log entries filter and sort work together so you can sort the filtered log entries and vice versa
* Can filter schedules by day of the week

I also added a loading animation to the api calls but decided not to deploy the changes as I HAD to stop tinkering! :)

Thank you for you time and I appreciate any feedback.
