import { useAuth } from '@workos-inc/authkit-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type UserOrNull = ReturnType<typeof useAuth>['user'];

export const useUser = (): UserOrNull => {
    const { user, isLoading, signIn } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (!isLoading && !user) {
            signIn({ state: { returnTo: location.pathname } });
        }
    }, [isLoading, user, location.pathname, signIn]); // Agregar location.pathname y signIn

    return user;
};
