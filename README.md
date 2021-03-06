# README_Generator
Command-line application that dynamically generates a professional README.md file from a user's input.

## Description
OpenWeather is a Third-party API that provides weather data. This webpage retrieves a 5 day forecast for a given city. Once the user searches a city, it is added to the local storage, and retrieved upon reload. Each city in the search list has a click event built in, that populates the api city url with the text content of that list item, allowing the user to navigate through cities in their history.

The first challenge came from the city variable in the api url. It needs to respond to both search history list item clicks, as well as the search button click itself. I therefore added a conditional setting the text content of the searchterm to the input value in the event that local storage is empty, which would be the case if the user visited the site for the first time.

Additionally, retrieving the UV Index required a seperate API call as my first API did not include UV Index values. 

This site features dynamically updated HTML and CSS.

**[Check it out Here!](https://raseward14.github.io/Weather-Dashboard/)**

Retrieving data from API's, and working with more complex local storage were the biggest takeaways from this project. The end product is actually pretty cool, so feel free to check it out!

## Table of Contents
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Usage
* **The Finished Product**  
![Weather Dashboard](assets/images/weatherdashboard-sm.png)

## Credits
Here are a few resources that helped me get this project knocked out!
* [choosealicense.com](https://choosealicense.com/)
* [README.md](https://github.com/microsoft/vscode/blob/main/README.md)
* [Markdown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## License
©2021 Richard Seward. All Rights Reserved.
