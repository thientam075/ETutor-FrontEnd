import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useAppSelector } from '../context';
import Loader from "react-loader-spinner";
import { AppContext } from '../context';
import { Actions } from '../context/action';

const Loading = () => (
  <div style={{ display: 'flex', height: '80vh', justifyContent: 'center', alignItems: 'center' }}>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={75}
      width={75}
      timeout={0}
    />
  </div>
);

const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    const { setAction } = useContext(AppContext);

    useEffect(() => {
      const authData = localStorage.getItem('auth');
      if (authData) {
        setAction(Actions.UPDATE_AUTH, JSON.parse(authData));
      } else {
        router.replace('/login');
      }
    }, []);

    if (typeof window !== 'undefined') {
      const auth = useAppSelector((state) => state.auth);
      if (!auth.jwt) {
        return <Loading />;
      }
      return <Component {...props}/>
    }
    return <Loading />;
  }
}

export default withAuth;