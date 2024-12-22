// components/SignUpPage.jsx
import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white"
          />
          <Input.Password
            clearable
            underlined
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-white"
          />
          <Button type="submit" color="gradient" auto>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;