import '../css/NavBar.css'

const NavBar = () => {
    return (
        <ul id='nav-ul'>
            <div className='topnav-left'>
            <li id='nav-li'>
               <a href=''>test1</a>
            </li>
            <li id='nav-li'>
            <a href=''>test2</a>
            </li>
            <li id='nav-li'>
            <a href=''>test3</a> 
            </li>
            <li id='nav-li'>
            <a href=''>test4</a>
            </li>
            </div>
            <div className='topnav-right'>
            <li id='nav-li'>
               <a href=''>Login</a>
            </li>
            </div>           
        </ul>
    )
}

export default NavBar;