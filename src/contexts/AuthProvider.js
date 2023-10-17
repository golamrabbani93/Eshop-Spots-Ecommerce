import React, {createContext, useEffect, useState} from 'react';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
// !get auth from FirebaseError.config.js
const auth = getAuth(app);
// !Google Provider
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
	// !set sign in user
	const [user, setUser] = useState({});
	const [loader, setLoader] = useState(true);

	//! Sign up with email and password
	const userSignUp = (email, password) => {
		setLoader(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// !sign in with email and password
	const userSignIn = (email, password) => {
		setLoader(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	//! update user
	const updateUser = (userInfo) => {
		return updateProfile(auth.currentUser, userInfo);
	};

	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	// !Check Sign In user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoader(false);
		});

		return () => unsubscribe();
	}, []);

	// !user Log out
	const logOut = () => {
		return signOut(auth);
	};

	const authInfo = {user, loader, userSignUp, updateUser, userSignIn, googleSignIn, logOut};
	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
