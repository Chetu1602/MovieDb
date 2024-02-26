import NavBarList from "./navBarList";
import {navItemsLeft,navItemsRight} from "./navItems.js";
const NavBar=()=>{
    return (
    <div className='headercontent'>
    <nav className="navbg">
        <NavBarList items={navItemsLeft}/>
        <NavBarList items={navItemsRight}/>
    </nav> 
    </div> 
    
    )
    
}
export default NavBar;