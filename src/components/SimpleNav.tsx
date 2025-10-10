import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface SimpleNavProps {
    children: ReactNode | ReactNode[];
}

const SimpleNav: FC<SimpleNavProps> = ({ children }: SimpleNavProps) => {
    return (
        <div className='ctn-nav'>
            <nav className='nav-main'>
                <NavLink className={'nav-link'} to={'/'}>
                    Home
                </NavLink>
                <NavLink className={'nav-link'} to={'/users'}>
                    Users
                </NavLink>

                {/* Inject childrens from father */}
                {children}
            </nav>
        </div>
    );
};

export default SimpleNav;
