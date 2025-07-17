import React ,{useState,useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {allCustomerListAction} from '../../actions/customersAction'
import {getAllProducts} from '../../actions/productsAction'
import {getAllBillsAction} from '../../actions/billsAction'
import {accoutAction} from '../../actions/userAction'

import {Container} from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile'
import HeaderList from './HeaderList'
import TabsComponent from './TabsComponent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:'30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

const DashBoard=()=>{
      const [profile,setProfile]=useState({})
      const [allCustomers,setAllCustomers]=useState([])
      const [allProducts,setAllProducts]=useState([])
      const [allBills,setAllBills]=useState([])

      const classes = useStyles();
      const dispatch=useDispatch()

      const {user, customers,products,bills}=useSelector((state)=>{
        return state
      })

      useEffect(()=>{
          dispatch(allCustomerListAction())
          dispatch(getAllProducts())
          dispatch(getAllBillsAction())
          dispatch(accoutAction())
      },[dispatch])

      useEffect(()=>{
          setProfile(user)
          setAllCustomers([...customers])
          setAllProducts([...products])
          setAllBills([...bills])
      },[user,customers,products,bills])

      const totalAmount = () => {
        if (!bills || bills.length === 0 || !products || products.length === 0) {
            return 0;
        }

        const productMap = products.reduce((acc, product) => {
            acc[product.id] = product;
            return acc;
        }, {});

        return bills.reduce((total, bill) => {
            const billTotal = bill.bill_line_items.reduce((subTotal, item) => {
                const product = productMap[item.product_id];
                return subTotal + (product ? item.quantity * product.price : 0);
            }, 0);
            return total + billTotal;
        }, 0);
    };

   
    return(
        <div className={classes.root} >
          <br/>
          <Profile  profile={profile}/>  
          <br/>
             <Container maxWidth="lg" style={{marginTop:'50px'}}>
              <HeaderList totalAmount={totalAmount} 
                    allCustomers={allCustomers}
                    allBills={allBills}
                    allProducts={allProducts}
                    classes={classes}
              />
              <TabsComponent 
                   allCustomers={allCustomers}
                   allBills={allBills}
                   allProducts={allProducts}
              />
              
             
          </Container>
        </div>
    )
}
export default DashBoard