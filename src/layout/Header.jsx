import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/mynavigate">MY Comp</Link>
            <Link to="/mycontext">MyContext</Link>
            <Link to="/callbackex">CallBackEx</Link>
            <Link to="/datamap">DataMap</Link>
            <Link to="formhandling">FormHandling</Link>
            <Link to="apiconnectivity">ApiConnectivity</Link>
            <Link to="lcm">LCMethod</Link>
            <Link to="uc">UnControlled</Link>
            {/* <Link to="zustand">Zustand</Link> */}
            <Link to="usezustand">UseZustand</Link>
        </>

    );
}

export default Header;