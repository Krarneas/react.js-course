import React from 'react';
import SignUpForm from './SignUpForm'; // Swap with SignInForm if needed

export default function AuthPage() {
  return (
    <div className="auth-container">
      <div className="auth-bg" />
      <div className="auth-form">
        <SignUpForm />
      </div>
    </div>
  );
}