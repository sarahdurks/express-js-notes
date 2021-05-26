![Frame 29](https://user-images.githubusercontent.com/77648727/114291845-787ce400-9a3f-11eb-9748-fc2b7db553ce.png)

### Express.js Notetaker 🤓

This is an application that can be used to write and save notes. This application uses an Express.js backend and will save and retrieve note data from a JSON file.

See the application live [here](https://note-taker-sarah.herokuapp.com/)
#### Built With / Using 🧰

- [x] Express.js
- [x] HTML
- [x] JSON
- [x] CSS
- [x] UUID

### Work Completed 🔨
- JSON file on the back end that stores and retrieve notes
- The following HTML routes were created: GET /notes returns the notes.html file. GET * returns the index.html file.
- The following API routes were  created: GET /api/notes read the db.json file and return all saved notes as JSON. POST /api/notes receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client

#### Visuals 👀

From assignment:
![image](https://user-images.githubusercontent.com/77648727/114291556-49657300-9a3d-11eb-9218-894bc02b7d8d.png)

Live implementation:

<img width="900" alt="Screen Shot 2021-05-26 at 3 25 51 PM" src="https://user-images.githubusercontent.com/77648727/119739176-afb02480-be36-11eb-9729-0bd7ed79d8a0.png">


#### User Story 📖

> AS A small business owner           
> I WANT to be able to write and save notes      
> SO THAT I can organize my thoughts and keep track of tasks I need to complete    

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

## Resources 🤝

- [UUID Documentaton](https://www.npmjs.com/package/uuid)
