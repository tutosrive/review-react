import { NavLink } from 'react-router-dom';

export default function SimpleNav() {
    return (
        <div className='ctn-nav'>
            <nav className='nav-main'>
                <NavLink className={'nav-link'} to={'/'}>
                    Home
                </NavLink>
                <NavLink className={'nav-link'} to={'/users'}>
                    Users
                </NavLink>
            </nav>
        </div>
    );
}
