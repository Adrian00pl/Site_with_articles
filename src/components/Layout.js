import { Outlet } from "react-router-dom"
import NavbarCom from './NavbarCom';

const Layout = () => {
    return (
        <div className="App">
            <NavbarCom/>
            <div className="App-body">
            <Outlet />
            </div>
        </div>
    )
}

export default Layout
