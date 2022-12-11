import { User } from 'react-feather/';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import { getRedirectUrl } from '../../utils/general';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function SignInState() {

    const location = useLocation();
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function handleSignOut() {
        setUser(null);
        localStorage.removeItem('user')
        if (location.pathname.includes("/account")) {
            navigate("/")
        }
        else {
            window.location.reload(false);
        }               
    }

    if (user === null) {
        return <Link to={getRedirectUrl(location)} className='header-sign-in-button m-0  --link-light'>
            <div className='d-flex justify-content-end text-end'><User size={32}/>Sign In</div>
        </Link>
    }

    return <div className='d-flex justify-content-end'>
        <User size={28}/>
        <NavDropdown title={`Hi ${user.username}`} id="topics-nav-dropdown" className='align-self-end'>

            <LinkContainer to="/account/view-comments" className="text-capitalize">
                <NavDropdown.Item>View Your Comments</NavDropdown.Item>
            </LinkContainer>

            <Dropdown.Divider />

            <NavDropdown.Item onClick={()=>{handleSignOut()}}>Sign Out</NavDropdown.Item>
 
        </NavDropdown>
    </div>

}