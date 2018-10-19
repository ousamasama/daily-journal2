console.log("hello")

const journalEntries = [
   {
       date: "07/24/2018",
       concept: "Array methods",
       entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
       mood: "Ok"
   },
   {
       date: "10/19/2018",
       concept: "Brendan Tips",
       entry: "I owe brendan money",
       mood: "Sad"
   },
   {
       date: "10/24/2018",
       concept: "Birthday",
       entry: "Today is my birthday!",
       mood: "Happy"
   },
]

/*
   Purpose: To create, and return, a string template that
   represents a single journal entry object as HTML
   Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = function(journalEntry) {
   // Create your own HTML structure for a journal entry
   return `
   <div class="form-post">
       <h1>${journalEntry.date}</h1>
       <h2>${journalEntry.concept}</h2>
       </p>${journalEntry.entry}</p>
       <p>${journalEntry.mood}</p>
   </div>
   `
}

/*
   Purpose: To render all journal entries to the DOM
   Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
   for(let i = 0; i < journalEntries.length; i++) {
       document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries[i]);
   }
}

// Invoke the render function
renderJournalEntries(journalEntries)