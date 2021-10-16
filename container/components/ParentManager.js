import React, {useEffect, useRef} from 'react'
import {useHistory} from "react-router-dom";
import {mount} from "parent/ParentManager";

const ParentManager = () => {
    const history = useHistory();
    const ref = useRef();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({nextPathname}) => {
                const pathname = history.location;
                if(nextPathname !== pathname) {
                    location.push(nextPathname)
                }
            }
        })
        history.listen(onParentNavigate);
    }, [])

    return <div ref={ref}></div>
}

export default ParentManager;