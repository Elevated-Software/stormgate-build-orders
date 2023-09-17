'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { ButtonVariantProps } from '@nextui-org/theme';
import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = ({ ...rest }: ButtonProps) => {
  const { status } = useSession();
  const authenticated = status === 'authenticated';

  return (
    <Button
      isDisabled={status === 'loading'}
      onClick={() => {
        console.log('sign in clicked');
        authenticated ? signOut() : signIn();
      }}
      {...rest}>
      {authenticated ? 'Sign Out' : 'Sign In'}
    </Button>
  );
};

export default AuthButton;
