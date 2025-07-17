import React,{useState} from 'react'
import {useDispatch} from'react-redux'
import ViewProductDetails from './ViewProductDetails'

import {deleteBillsAction} from '../../actions/billsAction'
import {TableRow,TableCell,Button,IconButton,Dialog,DialogActions ,DialogTitle,DialogContent} from '@material-ui/core'
import ViewListIcon from '@material-ui/icons/ViewList';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment'

const BillsListItems=({srNo,customer,total,date,id,customers,products,})=>{
    
    const [open, setOpen] = useState(false);

    const dispatch=useDispatch()

    //get Customer Name
    const getCustomer=(customerId)=>{
        const result=customers.find((ele)=>{
             return ele.id===customerId && { name:ele.name}  
        })
        return result !== undefined && result.name
    }
    //View Bill

    // delete Bill
    const deleteHandle=(id)=>{
        const sure=window.confirm("Are you sure")
        if(sure){
            dispatch(deleteBillsAction(id))
        }
    }
    // for Modal
      const handleClickOpen = () => {
         setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
    };
    //For Parse a Date
    const getParsedDate=(date)=>{
        const result=moment.utc(date)
        const da=result._d.toString()
        const Index=da.indexOf('G')  
        const result1= da.slice(0,Index)  
        return result1
   }

    return (
        <>
        <TableRow>
           <TableCell>{srNo}</TableCell> 
           <TableCell>{getCustomer(customer)}</TableCell>
           <TableCell>{total}</TableCell>
           <TableCell>{getParsedDate(date)}</TableCell>
           <TableCell>
                    <IconButton  onClick={()=>handleClickOpen(id)} edge="end" aria-label="delete">
                         <ViewListIcon />
                     </IconButton>   
           </TableCell>
           <TableCell>
                <IconButton onClick={()=>deleteHandle(id)} edge="end" aria-label="delete">
                            <DeleteIcon />
                </IconButton>   
           </TableCell>

        </TableRow>
            <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
             >
                 <DialogTitle id="alert-dialog-title">View Bill Details</DialogTitle>
                    <DialogContent>

                        <ViewProductDetails id={id} customers={customers} products={products} />
                    
                    </DialogContent>
                    <DialogActions>
                        <Button  color="primary" onClick={handleClose} autoFocus>
                            Go Back
                        </Button>
                    </DialogActions>
            </Dialog>
        </>
    )
}
export default BillsListItems