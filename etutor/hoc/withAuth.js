import { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../context';
import Loader from "react-loader-spinner";

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
    if (typeof window !== 'undefined') {
      const router = useRouter();
      const auth = useAppSelector((state) => state.auth);

      if (!auth.jwt) {
        router.replace('/login');
        return <Loading />;
      }
      return <Component {...props}/>
    }
    return <Loading />;
  }
}

export default withAuth;