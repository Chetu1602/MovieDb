import React from "react";
import FontAwesomeIcon from "react-fontawesome";
const NavBarList =({items})=>{
    const getItem=(item)=>{
        let itemList=null;
        switch(item.type){
            case 'logo':
                itemList = <img className="navimg"  src={item.src}  alt={item.name}  height='20' width='154'/>
                break;
            case 'laungague':
                itemList = <p className="laungague">{item.name}</p>
                break;
            case 'icon':
                itemList = <FontAwesomeIcon className="iconstyle" name={item.name}/>
                break;
                case 'search':
                    itemList = <img className='searchicon'src={item.src} alt={item.name} />
                    break;
            

            default:
                itemList =<p>{item.name}</p>
                break;
        }
        return itemList
    }
    return( 
        <ul className="navbarlistul"> 
        {items.map(item=>{
            return <li key={item.name}>{getItem(item)}</li>
        })}
    </ul>)
    
}
export default NavBarList;