# React- Movies Application

## Description:

The aim of this project is to build a movie app / mobile web with responsive UI using React. There are 2 parts that need to build:

**First Part: Create a Home screen with list of available movies:**

* Ordered by release date (default), alphabetical, rating - can use dropdown
* Pull to refresh
* Load when scrolled to bottom
* Each movie to include:
   * Poster/Backdrop image
   * Title
   * Popularity

**Second Part: Display the movie details which consists of the following:**

* Synopsis
* Genres
* Language
* Duration
* Book the movie (lead to external website)

**Design Outcome**

**Movie App Homepage**
![Movie App Homepage](https://github.com/ChiuYein/react-movie-app/blob/main/design%20images/movie-app-homepage.jpg)


**Movie Details**
![Movie Details](https://github.com/ChiuYein/react-movie-app/blob/main/design%20images/movie_details.png)

**Design Inspiration**
The aim of the design is to keep it simple and clean. Here are the component that can be found in the homepage:

* Search Input and Button : User able to look for the movie they type and click search
* 3 Filter Buttons that display movies based on the criteria below
   * Released Date (The movies are filter based on the latest released date)
   * Alphabetically (The movies are filter based on the movie's title)
   * Popularity (The movies are filter based on popularity from The Movie Database (TMDb))
* Movie Card : This is every movie that produced from the search, each movie card consist of movie title, released date, and popularity
* Movie Details button: This button can show the details of the movies

Components in the movie details:
* Poster
* Movie title
* Genres
* Synopsis
* Duration
* Close Button : This will back to homepage
* Book The Movie Button: This will lead to external website

**Technologies used:**
* [React](https://reactjs.org/)
* [React Popup](https://react-popup.elazizi.com/)
