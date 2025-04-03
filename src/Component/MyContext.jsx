import React, { useContext } from "react";

const color = React.createContext("yellow");
function MyContext() {
    const theme = useContext(color);
    return (
        <>
            <h4 style={{ color: theme }}>Hello to RCB fam</h4>
        </>
    )
}
export default MyContext;