import React from "react";
import NoteItems from "./coponents/NoteItems";
import AllNotes from "./coponents/AllNotes";

function App() {

    return (
        <div className="container">
            <NoteItems isNotesActive={true} showHeaderWithoutNotes={true}/>
            <AllNotes/>
            <h5 className="pt-4 text-center">Archive</h5>
            <NoteItems  isNotesActive={false} showHeaderWithoutNotes={false}/>
        </div>
    );
}

export default App;
