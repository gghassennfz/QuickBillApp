import { supabase } from '../supabaseClient';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const ALL_CUSTOMER = 'ALL_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER';

export const addCustomerAction = (formData, successMessage, setResetFormHandle) => {
    return async (dispatch) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { data, error } = await supabase
                .from('customers')
                .insert([{ ...formData, user_id: user.id }])
                .select();

            if (error) {
                alert(error.message);
            } else if (data) {
                successMessage();
                dispatch({ type: ADD_CUSTOMER, payload: data[0] });
                setResetFormHandle();
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const allCustomerListAction = () => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase.from('customers').select('*');
            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: ALL_CUSTOMER, payload: data });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const deleteCustomerAction = (_id) => {
    return async (dispatch) => {
        try {
            const { error } = await supabase.from('customers').delete().eq('id', _id);
            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: DELETE_CUSTOMER, payload: { id: _id } });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const editCustomerAction = (formData, _id) => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase
                .from('customers')
                .update(formData)
                .eq('id', _id)
                .select();

            if (error) {
                alert(error.message);
            } else if (data) {
                dispatch({ type: EDIT_CUSTOMER, payload: data[0] });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};