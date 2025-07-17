import React, { useState } from 'react'
import { Button,DialogActions,TableCell,TableContainer,TableBody,Dialog, Table,TableHead, TableRow} from '@material-ui/core'
import ReactTOPdf from "react-to-pdf";

const DownloadBill = ({ customerName, myDate, lineItems, products }) => {
    const [open, setOpen] = useState(false);
    const ref = React.createRef();

    // Create a map of product details for easy lookup
    const productMap = products.reduce((acc, product) => {
        acc[product.id] = product;
        return acc;
    }, {});

    // Check if all products for the line items are available
    const allProductsAvailable = lineItems.every(item => productMap[item.product]);

    const FinalAmount = () => {
        if (!allProductsAvailable) return 0;
        return lineItems.reduce((sum, item) => {
            const productDetails = productMap[item.product];
            return sum + (Number(item.quantity) * productDetails.price);
        }, 0);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Download Here
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div ref={ref} style={{padding: '20px'}}>
                    <TableContainer>
                        <h3>Date: {myDate}</h3>
                        <h3>Customer Name: {customerName}</h3>
                        <h2>Total Amount: {FinalAmount()}</h2>
                        {allProductsAvailable ? (
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>SubTotal</TableCell>
                                        <TableCell>Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {lineItems.map((ele, i) => {
                                        const productDetails = productMap[ele.product];
                                        return (
                                            <TableRow key={i}>
                                                <TableCell>{productDetails.name}</TableCell>
                                                <TableCell>
                                                    {productDetails.price * Number(ele.quantity)}
                                                </TableCell>
                                                <TableCell>{ele.quantity}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        ) : (
                            <p>Loading bill details...</p>
                        )}
                    </TableContainer>
                </div>

                <DialogActions>
                    <ReactTOPdf targetRef={ref} >
                        {({ toPdf }) =>
                            <Button onClick={toPdf} variant="contained" color="primary" disabled={!allProductsAvailable}>
                                Download
                            </Button>
                        }
                    </ReactTOPdf>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DownloadBill