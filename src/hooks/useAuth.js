import React, { useContext } from 'react';
import  AuthContext  from '@/context/AuthContext';

const UseAuth = () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window !== "undefined";
  if (!isClient && !auth) return {};
  if (!auth) {
    throw new Error("auth provider issue");
  }
  return auth;
};

export default UseAuth;
