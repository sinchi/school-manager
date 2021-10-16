import React, {lazy, Suspense} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

const StudentManager = lazy( () => import("../components/StudentManager"));
const TeacherManager = lazy( () =>  import("../components/TeacherManager"));
const ParentManager = lazy( () =>  import("../components/ParentManager"));

const history = createBrowserHistory();
const Loading = () => <div>Loading ...</div>
const SchoolManager = () => <h1>School Manager Container</h1>
const App = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Loading/>}>
                <SchoolManager />
                <Switch>
                    <Route path="/student" component={StudentManager} />
                    <Route path="/teacher" component={TeacherManager} />
                    <Route path="/parent" component={ParentManager} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;