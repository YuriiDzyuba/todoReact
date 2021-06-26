import React, {useState} from "react";
import Header from "./coponents/Header";
import EditNote from "./coponents/EditNote";
import ActiveItems from "./coponents/ActiveItems";

function App() {
    console.log("App")

    return (

        <div className="container">
            <Header/>
            <ActiveItems/>

        </div>

    );
}

export default App;
