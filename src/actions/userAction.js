import { supabase } from '../supabaseClient';

export const ACCOUNT_INFO = 'ACCOUNT_INFO';

export const registerAction = (formData, successMessage, setSavedDetails, moveLink) => {
    return async (dispatch) => {
        try {
            const { error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        username: formData.username
                    }
                }
            });

            if (error) {
                alert(error.message);
            } else {
                setSavedDetails();
                successMessage();
                moveLink.push('/login');
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const loginAction = (formData, moveLink, successMessage, errorMessage, handleLoginStatus) => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                errorMessage({ errors: error.message });
            } else if (data.user) {
                localStorage.setItem('token', data.session.access_token);
                successMessage();
                moveLink.push('/dashboard');
                handleLoginStatus();
            }
        } catch (err) {
            errorMessage({ errors: err.message });
        }
    };
};

export const accoutAction = () => {
    return async (dispatch) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                dispatch({ type: ACCOUNT_INFO, payload: user });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};