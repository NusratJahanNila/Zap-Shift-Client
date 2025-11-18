import React, { use } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';

const useAuth = () => {
    const authData = use(AuthContext);
    return authData;
};

export default useAuth;