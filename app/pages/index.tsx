import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect= () => {
 const router = useRouter();

 useEffect(() => {
    router.push('/home');
 }, []);

 return null;
};

export default HomeRedirect;
