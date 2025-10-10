import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import UserCardContainer from '../components/UserCardContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <Header />
            <main>{loading === true ? <Loader /> : <UserCardContainer />}</main>
            <Footer />
        </div>
    );
}
