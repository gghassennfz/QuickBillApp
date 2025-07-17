# QuickBillApp

QuickBillApp is a modern billing and invoice management application designed for shop owners to efficiently track customers, manage products, and generate bills. View daily and weekly reports, manage your inventory, and keep all your billing data organized in one place.

**Recent Updates:**
- Project initialized and pushed to GitHub.
- Full project source is now version-controlled.
- Now uses Supabase for authentication and backend data management.

# Tech Stack
- JavaScript (ES6)
- React.js, Redux, Redux-Thunk
- Supabase (Authentication & Database)
- Git | Markdown
- [Material-UI](https://material-ui.com/), [Material-ICON](https://material-ui.com/components/material-icons/), [axios](https://www.npmjs.com/package/axios), [lodash](https://www.npmjs.com/package/lodash), [moment](https://www.npmjs.com/package/moment), [React-router-dom](https://www.npmjs.com/package/react-router-dom), [react-select](https://www.npmjs.com/package/react-select), [React-tabs](https://www.npmjs.com/package/react-tabs), [React-to-pdf](https://www.npmjs.com/package/react-to-pdf), [react-typing-effect](https://www.npmjs.com/package/react-typing-effect), [Rechart](https://recharts.org/en-US/api/BarChart), [redux](https://redux.js.org/), [webfontloader](https://www.npmjs.com/package/webfontloader), [uuid](https://www.npmjs.com/package/uuid), [validator](https://www.npmjs.com/package/validator), [sweetalert2](https://www.npmjs.com/package/sweetalert2)

# Supabase Integration
This project uses [Supabase](https://supabase.com/) as a backend-as-a-service for authentication and database operations. All user, product, and billing data are securely stored and managed using Supabase. Authentication flows and data fetching are handled via Supabase client integration (see `src/supabaseClient.js`).

**To configure Supabase:**
1. Create a project on [Supabase](https://supabase.com/).
2. Copy your Supabase URL and public API key.
3. Add them to your environment variables or directly in `src/supabaseClient.js`.

# Project Features

# DEMO
- Here you can see Live DEMO of the website [DEMO](https://determined-mayer-4e72fd.netlify.app/)
# DEMO IMAGES
- Pending Image and GIFS
# FEATURES
+ Authentication 
  - User can Sign up and login 
  - JWT is used for Authorization 
  - Router guarding is implemented
  - Authentication is implemented 
  - Custom Validation is implemented
+ Backend 
  - Backend is created with node js ,Already Built in
  - using  React js implemented server side manipulation
+ Categories 
  - All customer are asociated with customer Category  
  - All Products are associated with Product category
  - All Bills are assocaited with Bill category
  - Review of all Trancation are assocaited with Dashboard  category
  - View of profile
+ Customer
  -  The Logged in user/owner can able to create a customer 
  -  user can able view the customer details
  -  user can able to delete the customer (Not nessasory to deleted we always keep user details) 
  -  user can able to edit the customer
  -  validation is implemented 
  
+ Product
  - user can able to add a product
  - user can able view a product
  - user can able to to delete
  - user can able to Edit the product details
  - Validation is implemented 
+ Bills
  -  user can able to selet a date
  -  user can able to select customer 
  -  user can able to add products cart
  -  user can ablet to add multiple products
  -  user can able to remove the products from a cart and even he can able to increment quantity
  -  user can able to delete the products before creating a bill
  -  can able to create a bill
  -  Validation is implemented 
+ Bill Details
  - can able to view customer and total amount
  - he can view the total bill with including sub amount and total amount
  - Download as PDF is implemented
+ Dashboard
  - All the details of customer,products,bills and Total amount
  - Implemented all Customer bill details
  - Implemented Daily Transaction
  - implemented Week Transaction
  - Implemented Top Five customer List
+ Graph 
  -  implemented graphs with daily report 
  -  implemented graph with weekly details
# Contributors
  ### Ghassen Nefzi

