// import { useState } from 'react';
// import { Input, Button, Card, Text } from "@nextui-org/react";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase/config';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// export default function SignUp() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       setError("Passwords don't match");
//       return;
//     }

//     try {
//       setError('');
//       setLoading(true);
//       await createUserWithEmailAndPassword(auth, email, password);
//       router.push('/'); // Redirect to home page after successful signup
//     } catch (error: any) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md p-8 bg-gray-800">
//         <Text h1 size="2xl" className="text-center mb-6 text-white">
//           Create Account
//         </Text>
        
//         {error && (
//           <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
//             <Text color="danger">{error}</Text>
//           </div>
//         )}

//         <form onSubmit={handleSignUp} className="space-y-4">
//           <Input
//             type="email"
//             label="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             className="text-white"
//           />
          
//           <Input.Password
//             label="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             className="text-white"
//           />
          
//           <Input.Password
//             label="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             bordered
//             fullWidth
//             color="primary"
//             size="lg"
//             className="text-white"
//           />

//           <Button
//             type="submit"
//             color="primary"
//             size="lg"
//             className="w-full"
//             disabled={loading}
//           >
//             {loading ? 'Creating account...' : 'Sign Up'}
//           </Button>
//         </form>

//         <div className="mt-6 text-center">
//           <Text className="text-gray-400">
//             Already have an account?{' '}
//             <Link href="/login" className="text-primary hover:underline">
//               Log in
//             </Link>
//           </Text>
//         </div>
//       </Card>
//     </div>
//   );
// } 