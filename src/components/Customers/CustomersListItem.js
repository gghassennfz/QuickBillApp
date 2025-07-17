import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import validator from 'validator'

import { Paper,TableRow,DialogTitle,DialogActions,Button,IconButton,Dialog,TextField,TableCell} from '@material-ui/core'

import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ViewListIcon from '@material-ui/icons/ViewList';
import Draggable from 'react-draggable';
import Swal from 'sweetalert2'

import {deleteCustomerAction} from '../../actions/customersAction'

import { editCustomerAction } from '../../actions/customersAction'

function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
}));

const CustomersListItem=({id ,srNo,name:Ename,mobile:Emobile,email:Eemail,createdAt})=>{
    
    const [open,setOpen]=useState(false)

    const [name,setName]=useState(Ename? Ename: '')
    const [mobile,setMobile]=useState(Emobile ? Emobile :'')
    const [email,setEmail]=useState(Eemail ? Eemail:'') 
    const [errorObj,setErrorObj]=useState({})
    
    let errors={}

    const classes = useStyles();

    const dispatch=useDispatch()

 


    //For open and close of handle

    const handleOpen=()=>{
        setOpen(true);
     }      

     const handleClose = () => {
         setErrorObj({})
        setOpen(false);
     };

    const handleView=(id)=>{
        if(id){
            Swal.fire(
                  `Name:${Ename} Email:${Eemail}`,
                  `Mobile:${Emobile}`,  
                  'success'
              )
        }
    }
    // delete Handle
    const deleteHandle=(id)=>{
        const sure=window.confirm("Most commonly Customer are not deleted")
            if(sure){
                    dispatch(deleteCustomerAction(id))
            }
       }    

      const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="name"){
               setName(e.target.value) 
        }
        else if(attr==="mobile"){
            setMobile(e.target.value)
        }else if(attr==="email"){
            setEmail(e.target.value)
        }
      }
     
      const runValidator=()=>{

        if(name.length===0){
            errors.name="Name can't be blank"
        }

        if(mobile.length===0){
            errors.mobile="Mobile can't be blank"
        }
        else if(mobile.length !==10){
            errors.mobile="Mobile should be 10 digit"
        }

        if(email.length===0){
            errors.email="Email can't be blank"
        }
        else if(!validator.isEmail(email)){
            errors.email="Email is not valid"
        }
    }
        //form submission

      const handleSubmit=(e)=>{
        e.preventDefault()
        runValidator()
        if(Object.keys(errors).length===0){
            setErrorObj({})
            const formData={
                name:name,
                mobile:mobile,
                email:email
          }
        
          dispatch(editCustomerAction(formData,id))
          handleClose() // Close dialog on success
        
        }else{
            setErrorObj(errors)
        }
    }

    return(
        <>
             <TableRow >
             <TableCell scope="row">{srNo}</TableCell>

             <TableCell>{Ename}</TableCell>
             <TableCell>{Eemail}</TableCell>

             <TableCell>{Emobile}</TableCell>
             <TableCell>
                         <IconButton edge="end"  onClick={handleOpen} aria-label="view">
                                        <EditIcon title="Edit" />
                        </IconButton>                       
             </TableCell>
                  <TableCell>
                            <IconButton edge="end"  onClick={()=>deleteHandle(id)} aria-label="delete">
                                    <DeleteIcon title="Delete" />
                            </IconButton>
                 </TableCell>
                      <TableCell>
                            <IconButton edge="end" onClick={()=>handleView(id)}  aria-label="view">
                                    <ViewListIcon  title="View" />
                            </IconButton>
                       </TableCell>
                        
            </TableRow>
            <Dialog
                open={open}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleClose();
                    }
                }}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
             >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Edit from
                    </DialogTitle>

                    <form onSubmit={handleSubmit} className={classes.root}>
                        <TextField type="text" label="Name" name="name" placeholder="Enter name" value={name} onChange={handleChange}/><br/>
                        <span>{errorObj.name && <span style={{color:'red'}}>{errorObj.name}</span>}</span>
                        <br/>
                        <TextField type="text" label="Mobile" name="mobile" placeholder="Enter mobile" value={mobile} onChange={handleChange}/>
                        <br/>
                        <span>{errorObj.mobile && <span style={{color:'red'}}>{errorObj.mobile}</span>}</span>
                 
                        <br/>
                         <TextField type="text" label="Email" name="email" placeholder="Enter email" value={email} onChange={handleChange}/>
                         <br/>
                         <span>{errorObj.email && <span style={{color:'red'}}>{errorObj.email}</span>}</span>

                        <br/>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Edit
                            </Button>
                        </DialogActions>
                    </form>     
            </Dialog>
        </>
    )
}
export default CustomersListItem