# BuildIT ~ *Build your online presence here*
[![builditlogo.jpg](https://i.postimg.cc/V6cbFp1p/builditlogo.jpg)](https://postimg.cc/rdQmVhDN)

## Table of content

- [Inspiration](#inspiration)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Features](#features)
    - [Song Selection](#song-selection)
    - [Words To Explore](#words-to-Explore)
    - [Linguistic Breakdown and Highlighting Of Selected Words](#linguistic-breakdown-and-highlighting-of-selected-words)
    - [Submit interpretations and view past submissions](#submit-interpretations-and-view-past-submissions)
    - [Suggest a Song Form](#suggest-a-song)
- [API](#API)
- [Future](#future)
- [Attributions](#attributions)
- [The Team](#the-team)

## Inspiration
In the final month before graduating from Alx-Holberton software Engineering program we were straggling to build and deploy our own portfolio webiste. let alone the straggle to choose the perfect design of for our portfolio project, It 
This is why we created **BuildIT**. A web builder that you helps you to create your portfolio project in just few munitues.
### Context
This project is our Portfolio Project, concluding our Foundations Year at Holberton School. We were able to choose who we wanted to work with and what we wanted to work on, as long as we present a working program at the end of the three weeks of development.

[**BuildIT**](https://letsbuidit.netlify.app/) website builder website 

## Technologies
### Tools

[![technologies.png](https://i.postimg.cc/R0jNZnZY/technologies.png)](https://postimg.cc/McmWsHR0)
### Architecture

[![auth2.png](https://i.postimg.cc/PqpBM8JP/auth2.png)](https://postimg.cc/67KjWqdX)



## Getting Started

To start using this web application, visit lyricsforlearning.net. To install it, simply clone this repository. You can start the app by running `web_app.app` and `api.v1.app` as Python modules in separate terminal windows. Please note, in order to run this app, you will need to install necessary dependencies as well as pass in the correct MySQLdb and Words API credentials respectively.

## Features

### **Song selection**

Lyrics For Learning provides a selection of "clean" and vocabulary-rich songs to explore from a variety of different genres. The data for each song is fetched from the internal RESTful API and is used to fill each Bootstrap card. The song's id is used as the id for the "View" button within the song's card. This allows for the correct song details to be fetched when the user clicks on the button since the id becomes part of the URL for the song.

# ![song-selection](https://i.imgur.com/h3m9fko.png)

### **Words To Explore**

When a user selects a song, they are re-directed to a song-specific page where the song's details are fetched from the internal RESTful API. This includes a list of words to explore that appear in the lyrics for the song. Event listeners are setup on each word so that the linguistic breakdown of it can be fetched from an external API and so that it can be highlighted within the lyrics.

# ![words-to-explore](https://i.imgur.com/JBlT2hx.png)

### **Linguistic Breakdown and Highlighting of Words**


When a user selects a specific word from a song, the linguistic breakdown is fetched from the external Words API. The JS script will then create a menu based the number of entries available for the word. When a user clicks on one of the entries, the script will then see what sections are available for that entry (ex: "Definition", "Synonyms", "Examples"). The available sections and their content will populate a dynamic tabbed interface for the user to browse. In addition, the word is highlighted in the lyrics. This was made possible by first parsing the lyrics and adding span elements around words that appear in the "Pick a word to explore!" list. The spans have aligned classes added to them that allow them to be targeted and thus highlighted when a word is selected.

# ![linguistic-breakdown-and-highlighting-of-words](https://i.imgur.com/YKhWuCj.png)

### **Submit Interpretations and View Past Interpretations**

After exploring the linguistic breakdown of a word, the user can share what they think the artist means by the word. When they press "Submit", their interpretation is sent as a `POST` request to the internal RESTful API. The `better-profanity` module is then used to check the interpretation for profanity and if so, the submission is not stored in the database and a warning dialog is displayed to the user. If there is no profanity, the submission is stored in the database and can be seen in the "Latest Interpretations" section, which is an accordian-style display.

# ![submit-interpretations-and-view-past-interpretations](https://i.imgur.com/lAmK39I.png)

### **Suggest a Song Form**

If a user would like to suggest a song to be added to the collection of songs to learn from, they can visit the "Suggest a Song" page and fill out the form. The form will ask for all necessary attributes for creating a new Song object including the song's artist, title, and words to learn from. The user must also submit their email and name so they can be notified if the song is added to the collection and receive credit for their contribution.

# ![suggest-a-song-form](https://i.imgur.com/jspGhrb.png)

## API

I built an internal RESTful API for this web application so that data can be flexibly retreived from the MySQLdb. All available endpoints can be found in the `api.v1.views` directory. Here's a description of each endpoint:

/api/v1/interpretations/<word_id>/<song_id>

* GET: Retrieves all Interpretation objects for a word from a song and returns a list containing
    all of them
    
* POST: Creates an interpretation for a word from a song

/api/v1/interpretations/<interpretation_id>

* PUT: Updates an Interpretation object

/api/v1/songs/<song_id>/words

* GET: Retrieves all words from a song and returns a list containing
    all of them

/api/v1/songs

* GET: Retrieves all Song objects from database and returns a list containing
    all of them

/api/v1/songs/<text>
  
* GET: Retrieves Song object from database and returns a dictionary

/api/v1/songs/genre/<genre>
  
* GET: Retrieves all Song objects from database with a specified genre

/api/v1/suggestions/

* GET: Retrieves all Suggestion objects from database and returns a list containing
    all of them
    
* POST: Creates a Suggestion object

/api/v1/words/<text>
  
* GET: Retrieves word_id based on word

/api/v1/words_api/<text>

* GET: Retrieves data for word from external API and returns response to client-side.
     By passing in API credentials from the command line when running the API and 
     using the internal API for the fetch, it prevents credentials from being exposed
     on the front-end.
     
## Future

Beyond this initial MVP which was built in 2 weeks, I would like to continue to add many more features to Lyrics For Learning. In particular, I would like to setup an authentication system. With this, I would also like to enable users to have profiles so they can check out their past progress and further personalize the experience by suggesting songs and words to explore based on past use. In addition, I'd like to allow users to edit past submissions and upvote each other's interpretations as well. I am also considering adding a "Top Users" board on the homepage too.

If you have any feedback (ex: feature ideas) or would like to contribute to this project, please feel free to contact me.

## Attributions

Shout-out to [Open Lyrics Database](https://github.com/Lyrics/lyrics) for the lyrics shown!

Licenses for images from Wikimedia Commons:

* [The xx at the Alcatraz.jpg](https://commons.wikimedia.org/wiki/File:The_xx_at_the_Alcatraz.jpg)
* [Adele Live 2016 tour.jpeg](https://commons.wikimedia.org/wiki/File:Adele_Live_2016_tour.jpeg)
* [Paul Simonon The Clash September 20 1979 Palladium NYC.jpg](https://commons.wikimedia.org/wiki/File:Paul_Simonon_The_Clash_September_20_1979_Palladium_NYC.jpg)
## The Team
We are three dog enthusiasts who are passionate about coding but also like to keep it fun!

* **Natnael Girma** [@Natnael](https://) - Software Enginineer
* **Tihitina Sisay** [@Tihitina](https://) - Software Engineer
* **Tihitina Sisay** [@Tihitina]() - Software Enginineer
* **Abdisa Gemechu** [@Abdisa](https://linkedin/abdisa-gemechu) -Software Enginineer
