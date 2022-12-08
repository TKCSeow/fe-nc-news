import { User } from 'react-feather/';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../contexts/User';
import { getRedirectUrl } from '../../utils/general';

export function SignInState() {

    const location = useLocation();
    const { user, setUser } = useContext(UserContext);

    function handleSignOut() {
        setUser(null);
        localStorage.removeItem('user')
        window.location.reload(false);
    }

    if (user === null) {
        return <Link to={getRedirectUrl(location)} className='header-sign-in-button m-0  --link-light'>
            <div className='d-flex justify-content-end mt-3 text-end'><User/>Sign In</div>
        </Link>
    }

    return <div className='header-sign-in-button mt-2' style={{fontSize:"1.3rem"}}>
        <div className='text-end'><User/><span className='mx-1'>Hi {user.username}</span></div>
        <Link onClick={() => {handleSignOut()}} className='--link-dark-alt' style={{fontSize:"1rem"}} >
            <p className='m-0 text-end'>(Sign Out)</p>
        </Link>
    </div>

}