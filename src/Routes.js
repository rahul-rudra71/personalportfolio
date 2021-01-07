import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import AVR from "./pages/AVR";
import Contact from "./pages/Contact";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route exact path="/Projects">
                    <Projects />
                </Route>
                <Route exact path="/AVresearch">
                    <AVR />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }