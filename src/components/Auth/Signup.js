// src/components/Auth/Signup.js

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithPopup } from 'firebase/auth';
import { auth, providerGoogle, providerFacebook, providerGithub } from '../../firebase'; // Ensure correct imports

const Signup = () => {
    const { signupWithEmail } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to hold error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(''); // Reset error state
        try {
            await signupWithEmail(email, password);
            // Redirect to login page on successful signup
            navigate('/login');
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error("Signup failed:", error.message);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            await signInWithPopup(auth, providerGoogle);
            navigate('/login'); // Redirect on successful signup
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error("Google signup failed:", error.message);
        }
    };

    const handleFacebookSignup = async () => {
        try {
            await signInWithPopup(auth, providerFacebook);
            navigate('/login'); // Redirect on successful signup
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error("Facebook signup failed:", error.message);
        }
    };

    const handleGithubSignup = async () => {
        try {
            await signInWithPopup(auth, providerGithub);
            navigate('/login'); // Redirect on successful signup
        } catch (error) {
            setError(error.message); // Set error message if signup fails
            console.error("GitHub signup failed:", error.message);
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="card p-4 shadow">
                <h2 className="text-center">Signup</h2>
                {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                </form>
                <div className="mt-3">
                    <button className="btn btn-danger w-100 mb-2" onClick={handleGoogleSignup}>
                        Sign Up with Google
                    </button>
                    <button className="btn btn-primary w-100 mb-2" onClick={handleFacebookSignup}>
                        Sign Up with Facebook
                    </button>
                    <button className="btn btn-dark w-100 mb-2" onClick={handleGithubSignup}>
                        Sign Up with GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
