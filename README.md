# ALX Project: 0x14 - MoviesDatabase API Integration

## API Overview
The MoviesDatabase API allows developers to access a wide range of movie and TV data. It includes features such as searching for movies and TV shows, retrieving detailed information, accessing trending content, and getting actor profiles and filmographies.

## Version
v1

## Available Endpoints
- **GET /titles/search/title** - Search for movies or TV shows by title.
- **GET /titles/{titleId}** - Get detailed information about a specific title.
- **GET /titles/random** - Fetch a random movie or TV show.
- **GET /actors/{actorId}** - Get details about a specific actor.
- **GET /actors/{actorId}/filmography** - Retrieve an actor’s filmography.
- **GET /titles/trending** - List trending titles.

## Request and Response Format

### Example Request
```http
GET https://moviesdatabase.p.rapidapi.com/titles/search/title?title=Inception
Headers:
  X-RapidAPI-Key: your_api_key
  X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
# alx-project-0x14
