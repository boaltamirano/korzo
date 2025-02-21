import { useState, useCallback, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useAuth } from '@workos-inc/authkit-react';
import { useRouter } from 'src/routes/hooks';


// ----------------------------------------------------------------------

export function SignInView() {
    const router = useRouter();
    const { user, isLoading, signIn, signOut } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            router.push('/');
        }
    }, [user, router]);

    const handleSignIn = useCallback(() => {
        signIn();
    }, [signIn]);

    return (
        <>
            <Box gap={1.5} display="flex" flexDirection="column" alignItems="center" sx={{ mb: 5 }}>
                <Typography variant="h5">Sign in</Typography>
                <Typography variant="body2" color="text.secondary">Welcome! To sign in, please press the button</Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-end">
                <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    color="inherit"
                    variant="contained"
                    onClick={handleSignIn}
                >
                    Sign in
                </LoadingButton>
            </Box>

        </>
    );
}