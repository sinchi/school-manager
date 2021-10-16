import React, { Suspense } from "react";
import {Route, Router, Switch} from "react-router-dom";

const Loading = () => <div>Loading ...</div>
const StudentManager = () => <h1>Students Manager App</h1>
const App = ({history}) => {
    return (
        <Router history={history}>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" component={StudentManager} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;