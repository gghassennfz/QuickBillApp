import { supabase } from '../supabaseClient';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addProductsAction = (formData, successMessage, setResetFormHandle) => {
    return async (dispatch) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            const { data, error } = await supabase
                .from('products')
                .insert([{ ...formData, user_id: user.id }])
                .select();

            if (error) {
                alert(error.message);
            } else if (data) {
                dispatch({ type: ADD_PRODUCT, payload: data[0] });
                successMessage();
                setResetFormHandle();
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase.from('products').select('*');
            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: ALL_PRODUCTS, payload: data });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const deleteProductAction = (_id) => {
    return async (dispatch) => {
        try {
            const { error } = await supabase.from('products').delete().eq('id', _id);
            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: DELETE_PRODUCT, payload: { _id: _id } });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const editProductAction = (formData, _id) => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase
                .from('products')
                .update(formData)
                .eq('id', _id)
                .select();

            if (error) {
                alert(error.message);
            } else if (data) {
                dispatch({ type: EDIT_PRODUCT, payload: data[0] });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};