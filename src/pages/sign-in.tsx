import { useAuth } from '@workos-inc/authkit-react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { useRouter } from 'src/routes/hooks';

import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {

  const { user, isLoading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (user) {
      router.push("/"); // Redirigir a la página de inicio de sesión si no está autenticado
    }
  }, [user, isLoading, router]);

  return (
    <>
      <Helmet>
        <title> {`Sign in - ${CONFIG.appName}`}</title>
      </Helmet>

      <SignInView />
    </>
  );
}
