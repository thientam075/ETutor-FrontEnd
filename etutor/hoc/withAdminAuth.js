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

const withAdminAuth = (Component) => {
  return (props) => {
    const router = useRouter();
    const { setAction } = useContext(AppContext);
    const auth = useAppSelector((state) => state.auth);

    useEffect(() => {
      const authData = localStorage.getItem('auth');
      if (authData) {
        const parsedData = JSON.parse(authData);
        if (parsedData.user.TypeAccount === 0) {
          setAction(Actions.UPDATE_AUTH, JSON.parse(authData));
          return;
        }
        localStorage.removeItem('auth');
      }
      router.replace('/login');
    }, []);

    if (!auth.jwt) {
      return <Loading />;
    }
    return <Component {...props}/>
  }
}

export default withAdminAuth;