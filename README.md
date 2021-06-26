# README #

Thank you for giving me the opportunity to take this test.

All feedback greatly appreciated, regardless of the actual outcome of the process.

### My approach ###

Here's a quick summary of my process.

* Read the brief thoroughly then, when done, I went though it again ... several times in fact.
* Before doing anything I set up a new repository for my code.
* First up I setup the mock server as per the instructions (after updating my node version).
* Setup my project using create-react-app and removed the unneeded boiler plate files.
* Installed ESLint using AirBnB defaults with a few tweaks.
* Added Redux. Whilst this is a small project is too useful not to include.
* Built an MVP free using the simplest of markup to get the functionality and error handling working clear of presentational clutter.
* Created a design.
* Implemented the design along with supporting markup.
* Added 'nice to have' features.
* Setup basic testing (unit/component and snapshot) with JEST and React Testing Library.

### Rational ###

Used SASS over styled components
On a project this size with minimal separate components and minimal styles it made more sense. Also it's a personal preference.

Kept things simple components wise
I decided to only break out the components that would need to be updated with a state change. I could have gone more granular but it seemed like overkill for this project.

### Technologies/tools used ###

Thew usual suspects really:

* React
* Redux
* HTML
* SASS
* Git
* VS Code with a handful of handy extensions
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
