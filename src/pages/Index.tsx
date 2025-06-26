import React from 'react';
import BackgroundWrapper from '@/components/layout/BackgroundWrapper';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main login page for the application.
 * This page assembles the layout and the central login form.
 * It utilizes the BackgroundWrapper for the full-screen colored background
 * and centering, and the LoginForm for the user interaction card.
 */
const LoginPage: React.FC = () => {
  return (
    <BackgroundWrapper>
      <LoginForm />
    </BackgroundWrapper>
  );
};

export default LoginPage;
