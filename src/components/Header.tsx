import { NavLink } from 'react-router-dom';
import SimpleNav from './SimpleNav';

export default function Header() {
    return (
        <header>
            <SimpleNav>
                <NavLink className={'nav-link'} to={'/links'}>
                    Links
                </NavLink>
                <NavLink className={'nav-link'} to={'/about'}>
                    About
                </NavLink>
            </SimpleNav>
        </header>
    );
}
