import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation  from "./components/Navigation";
import Directory from "./pages/Directory.js";
import Form from "./components/Form";

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path="/" component={Directory} />
                <Route exact path="/directory" component={Directory} />
                <Form />
            </div>
        </Router>
    );
}

export default App;
