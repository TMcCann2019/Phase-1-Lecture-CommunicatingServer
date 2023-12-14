# Phase 1 Lecture 4: Communicating With the Server

## Objectives

By the end of today's lecture, you will be able to identify a JSON file and code a `fetch` to grab information from it and then render that information to the screen.

## Lesson Plan

1. Familiarize yourself with the db.json file. Then run `json-server --watch db.json` to start it.
    - What data types do you see within it? Are any of these nested? an array of objects
    - What is **JSON**? JavaScript Object Notation
    - How many endpoints do you see? 4 in this case but can be more
2. Grab the characters from the '/characters' endpoint and console log them.
    - What is a **GET** request? How does it relate to `fetch`? its a specific type of get. get is a request that retrieves information
    - Which port is the server running on? local host 3000
    - Which data type did you retrieve? What might you need to do with this? retrieved an Array. need to add that into the HTML file
3. Render each character's name and image as separate items within the `<li>` tag.
    - Would this code work for an array of any length? Would it work for any db.json file?
    - How could you style this? yes

## Looking Ahead

Tomorrow's lecture will continue our work with `fetch`, this time introducing the POST request to accompany the GET request.