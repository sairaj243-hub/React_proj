import { memo } from "react";
function Button({ handleClick, Text }) {
    console.log('button called')
    return (
        <button onClick={handleClick}>{Text}</button>
    )

}
export default memo(Button);