import { supabase } from '../supabaseClient';

export const ADD_BILL = 'ADD_BILL';
export const ALL_BILLS = 'ALL_BILLS';
export const DELETE_BILL = 'DELETE_BILL';

export const addBillsAction = (formData, resetForm, successMessage) => {
    return async (dispatch) => {
        try {
            const { data: { user } } = await supabase.auth.getUser();

            // Create the main bill record
            const { data: billData, error: billError } = await supabase
                .from('bills')
                .insert([{ date: formData.date, customer_id: formData.customer, user_id: user.id }])
                .select()
                .single();

            if (billError) throw billError;

            // Prepare line items with the new bill's ID
            const lineItems = formData.lineItems.map(item => ({
                bill_id: billData.id,
                product_id: item.product,
                quantity: item.quantity
            }));

            // Insert all line items
            const { error: lineItemsError } = await supabase.from('bill_line_items').insert(lineItems);

            if (lineItemsError) throw lineItemsError;

            // Fetch the complete bill data to update the store
            const { data: newBill, error: newBillError } = await supabase
                .from('bills')
                .select('*, customers(*), bill_line_items(*, products(*))')
                .eq('id', billData.id)
                .single();

            if (newBillError) throw newBillError;

            dispatch({ type: ADD_BILL, payload: newBill });
            resetForm();
            successMessage();
        } catch (err) {
            alert(err.message);
        }
    };
};

export const getAllBillsAction = () => {
    return async (dispatch) => {
        try {
            const { data, error } = await supabase
                .from('bills')
                .select('*, customers(*), bill_line_items(*, products(*))');

            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: ALL_BILLS, payload: data });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};

export const deleteBillsAction = (id) => {
    return async (dispatch) => {
        try {
            const { error } = await supabase.from('bills').delete().eq('id', id);

            if (error) {
                alert(error.message);
            } else {
                dispatch({ type: DELETE_BILL, payload: { id: id } });
            }
        } catch (err) {
            alert(err.message);
        }
    };
};
