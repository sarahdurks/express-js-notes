![Frame 29](https://user-images.githubusercontent.com/77648727/114291845-787ce400-9a3f-11eb-9748-fc2b7db553ce.png)


## Name

### Express.js Notetaker 🤓

Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

#### Built With 🧰

- [x]
### Installation & Usage


```
demo code
```


#### Visual

![image](https://user-images.githubusercontent.com/77648727/114291553-41a5ce80-9a3d-11eb-8aa5-23fa9077ee76.png)
![image](https://user-images.githubusercontent.com/77648727/114291556-49657300-9a3d-11eb-9218-894bc02b7d8d.png)


   
#### User Story 📖

AS A small business owner    
I WANT to be able to write and save notes    
SO THAT I can organize my thoughts and keep track of tasks I need to complete    

#### Acceptance Criteria ✅

> GIVEN a note-taking application    
> WHEN I open the Note Taker    
> THEN I am presented with a landing page with a link to a notes page    
> WHEN I click on the link to the notes page    
> THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column    
> WHEN I enter a new note title and the note’s text    
> THEN a Save icon appears in the navigation at the top of the page    
> WHEN I click on the Save icon    
> THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes    
> WHEN I click on an existing note in the list in the left-hand column    
> THEN that note appears in the right-hand column    
> WHEN I click on the Write icon in the navigation at the top of the page    
> THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column    

## Acknowledgement, & Resources 🤝

#### Information and Resources Used

- [y](x)

The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
