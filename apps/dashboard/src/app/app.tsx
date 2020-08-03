import React from "react";
import { App as Interpret } from "../interpret/App";
import { App as Fairlearn } from "../fairlearn/App";
import { Route, Link } from "react-router-dom";

export default class App extends React.Component {
    public render(): React.ReactNode {
        return (
            <div>
                <div role="navigation">
                    <ul>
                        <li>
                            <Link to="/fairlearn">Fairlearn</Link>
                        </li>
                        <li>
                            <Link to="/interpret">Interpret</Link>
                        </li>
                    </ul>
                </div>
                <Route path="/fairlearn" exact component={Fairlearn} />
                <Route path="/interpret" exact component={Interpret} />
            </div>
        );
    }
}
