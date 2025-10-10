import { useState, useEffect } from 'react';
import SimpleNav from '../components/SimpleNav';
import Loader from '../components/Loader';
import UserCardContainer from '../components/UserCardContainer';

export default function UserPage() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='container page users-page'>
            <SimpleNav />

            {loading === true ? <Loader /> : <UserCardContainer />}
        </div>
    );
}
