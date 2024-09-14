import React from 'react';

function Wrapper(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Wrapper;