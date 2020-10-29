import * as actionTypes from "./actionTypes";

// actions for user authentication
export const authenticateUserStart = (credentials) => ({
	type: actionTypes.AUHTENTICATE_USER_START,
	payload: credentials,
});

export const authenticateUserSuccess = (token) => ({
	type: actionTypes.AUHTENTICATE_USER_SUCCESS,
	payload: token,
});

export const authenticateUserFailure = (err) => ({
	type: actionTypes.AUHTENTICATE_USER_FAILURE,
	payload: err,
});

// actions for fetching user data
export const fetchUserStart = () => ({
	type: actionTypes.FETCH_USER_START,
});

export const fetchUserSuccess = (userData) => ({
	type: actionTypes.FETCH_USER_SUCCESS,
	payload: userData,
});

export const fetchUserFailure = (err) => ({
	type: actionTypes.FETCH_USER_FAILURE,
	payload: err,
});

// actions for user registration
export const registerUserStart = (userData) => ({
	type: actionTypes.REGISTER_USER_START,
	payload: userData,
});

export const registerUserSuccess = (token) => ({
	type: actionTypes.REGISTER_USER_SUCCESS,
	payload: token,
});

export const registerUserFailure = (err) => ({
	type: actionTypes.REGISTER_USER_FAILURE,
	payload: err,
});

// action for logging user out
export const logoutUserStart = () => ({
	type: actionTypes.LOGOUT_USER_START,
});

export const logoutUserSuccess = () => ({
	type: actionTypes.LOGOUT_USER_SUCCESS,
});

export const logoutUserFailure = (err) => ({
	type: actionTypes.LOGOUT_USER_FAILURE,
	payload: err,
});

// action for cleaning the error message
export const clearError = () => ({
	type: actionTypes.CLEAR_USER_ERROR,
});

// action for setting user signed in
export const setStaySignedIn = (status) => ({
	type: actionTypes.SET_STAY_SIGNED_IN,
	payload: status,
});
