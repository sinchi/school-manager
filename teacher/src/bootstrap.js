import React from "react";
import {createBrowserHistory, createMemoryHistory} from "history";
import App from "./App";
import * as ReactDOM from "react-dom";

const mount = (el, { onNavigate,  defaultBrowser }) => {
    const history = defaultBrowser || createMemoryHistory()
    if(onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(<App history={history} />, el );

    return {
        onParentNavigate: ({nextPathname}) => {
            const pathname = history.location;
            if(nextPathname !== pathname) {
                history.push(nextPathname);
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#teacher-app');
    if(devRoot) {
        mount(devRoot, {
            defaultBrowser: createBrowserHistory()
        })
    }
}

export { mount }