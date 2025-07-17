# Project Documentation: Billing Application

This document provides a detailed analysis of the files and components of the React billing application.

## Project Structure

The project is organized into the following main directories:

-   `/public`: Contains the `index.html` file and other static assets.
-   `/src`: Contains the main source code of the application.
    -   `/actions`: Redux actions for managing the application's state.
    -   `/reducers`: Redux reducers for updating the state based on actions.
    -   `/store`: Redux store configuration.
    -   `/components`: Reusable React components.
    -   `/Assets`: Images and other static assets.

## Core Application Files

### `src/index.js`

This is the entry point of the application. It performs the following tasks:

-   Imports the necessary dependencies, including React, ReactDOM, and Redux.
-   Configures the Redux store using the `configureStore` function.
-   Wraps the `App` component with the Redux `Provider` and `BrowserRouter` to enable state management and routing.
-   Renders the `App` component to the DOM.

### `src/App.js`

This is the main component of the application. It renders the `Navigation` component, which handles the application's routing and navigation.

### `src/store/configureStore.js`

This file configures the Redux store. It combines all the reducers into a single root reducer and applies the `thunk` middleware to allow for asynchronous actions.

## Redux: Actions and Reducers

The application uses Redux to manage its state. The actions and reducers are organized by feature (bills, customers, products, user).

### Actions

-   **`billsAction.js`**: Defines actions for adding, getting, and deleting bills.
-   **`customersAction.js`**: Defines actions for adding, getting, deleting, and editing customers.
-   **`productsAction.js`**: Defines actions for adding, getting, deleting, and editing products.
-   **`userAction.js`**: Defines actions for user registration, login, and getting account information.

### Reducers

-   **`billsReducers.js`**: Handles state updates for bills.
-   **`customersReducers.js`**: Handles state updates for customers.
-   **`productsReducers.js`**: Handles state updates for products.
-   **`userReducers.js`**: Handles state updates for the user.

## Components

### `Navigation.js`

This component manages the application's routing and navigation. It displays different links in the navigation bar based on whether the user is logged in or not.

### `PageNotFound.js`

This component is displayed when the user navigates to a route that does not exist.

### `Home` Directory

-   **`index.js`**: The main component for the home page. It renders the `Banner` component.
-   **`Banner/Banner.js`**: A container component that arranges the `TextComponent` and `ImageComponent` in a grid.
-   **`Banner/ImageComponent.js`**: Displays a static image of a receipt.
-   **`Banner/TextComponent.js`**: Displays a heading and an animated typing effect to showcase the application's services.

### `Login` Directory

-   **`index.js`**: The main container for the login page. It dispatches the login action and displays success or error messages.
-   **`LoginUser.js`**: The login form, which includes fields for email and password, as well as validation.

### `Register` Directory

-   **`index.js`**: The main container for the registration page. It dispatches the register action and displays a success message.
-   **`RegisterUser.js`**: The registration form, which includes fields for username, email, and password, as well as validation.

### `DashBoard` Directory

This directory contains the components for the main dashboard, which is displayed after the user logs in.

-   **`DashBoard.js`**: The main dashboard component. It fetches all the necessary data (customers, products, bills, user info) and renders the `Profile`, `HeaderList`, and `TabsComponent`.
-   **`Profile.js`**: Displays the user's information in a dropdown menu.
-   **`HeaderList.js`**: Displays summary cards for customers, products, bills, and the total amount.
-   **`TabsComponent.js`**: Organizes the dashboard content into three tabs: "Details," "Contents," and "Graph."

#### `Details` Tab

-   **`Details.js`**: The main component for the "Details" tab. It renders the `Daily`, `Week`, and `TopFive` components.
-   **`Daily/Daily.js`**: Displays the daily transactions in a table.
-   **`Week/DateSelection.js`**: A form with two date pickers for selecting a start and end date.
-   **`Week/GetWeekData.js`**: Filters the bills based on the selected date range and displays them in a table.
-   **`TopFiveCustomer/TopFive.js`**: A container that renders the `TopFiveList`.
-   **`TopFiveCustomer/TopFiveList.js`**: Sorts the bills to find the top five customers by their total spending and displays them in a table.

#### `Contents` Tab (`TabsTwo` Directory)

-   **`ContentOfTable.js`**: Displays a table of all customers.
-   **`ContentOfTableList.js`**: Renders a row in the customer table and includes a "View Bill" button that opens a modal dialog.
-   **`ModalData.js`**: Displays the contents of the modal, which is a table of the products in the customer's bill.
-   **`ModalDataView.js`**: Renders a single row in the modal's product table.

#### `Graph` Tab

-   **`Graph.js`**: The main component for the "Graph" tab. It renders the `DailyChart` component.
-   **`DailyChart.js`**: Prepares the data for the daily chart and renders both the `DailyChartItem` and the `WeeklyChart`.
-   **`DailyChartItem.js`**: Uses the `recharts` library to display a bar chart of the daily sales data.
-   **`WeeklyChart.js`**: Uses the `DateSelection` component to get a date range from the user and then passes it to the `GetWeekChart` component.
-   **`GetWeekChart.js`**: Filters the bills based on the selected date range and then renders the `GetWeekChartList` component.
-   **`GetWeekChartList.js`**: Uses the `recharts` library to display a line chart of the weekly sales data.
-   **`Graph/Helper.js`**: Contains the logic to process the bills and group them by date to generate the data for the daily chart.

### `Customers` Directory

-   **`index.js`**: The main component for the customers page. It displays the `CustomersList` and `AddCustomer` components side-by-side.
-   **`AddCustomer.js`**: Dispatches an action to add a new customer.
-   **`CustomersForm.js`**: A form for adding a new customer, with validation.
-   **`CustomersList.js`**: Displays a list of all customers with options to search, sort, and paginate the data.
-   **`CustomersListItem.js`**: Renders a single customer in the list and includes buttons to edit, delete, and view the customer's details.
-   **`Customers/Helper.js`**: Contains helper functions for searching and sorting the customer list.

### `Products` Directory

-   **`index.js`**: The main component for the products page. It displays the `ProductsList` and `AddProducts` components side-by-side.
-   **`AddProducts.js`**: Dispatches an action to add a new product.
-   **`ProductsForm.js`**: A form for adding a new product, with validation.
-   **`ProductsList.js`**: Displays a list of all products with options to search, sort, and paginate the data.
-   **`ProductsListItem.js`**: Renders a single product in the list and includes buttons to edit and delete the product.
-   **`Products/Helper.js`**: Contains helper functions for searching and sorting the product list.

### `Bills` Directory

-   **`index.js`**: The main component for the bills page. It fetches the customers and products data and displays the `BillsList` and `AddBill` components side-by-side.
-   **`AddBill.js`**: Dispatches an action to add a new bill.
-   **`BillForm.js`**: A complex form for creating a new bill. It allows the user to select a customer, a date, and multiple products. It also calculates the total amount and includes a "Download Bill" feature.
-   **`BillsList.js`**: Displays a list of all bills with options to search, sort, and paginate the data.
-   **`BillsListItem.js`**: Renders a single bill in the list and includes buttons to view the bill details and delete the bill.
-   **`CartItem.js`**: Represents a single item in the bill's line items, allowing the user to increment, decrement, or remove the item.
-   **`DownloadBill.js`**: Uses the `react-to-pdf` library to generate a PDF of the bill.
-   **`ViewProductDetails.js`**: Displays the details of a single bill, including the customer's information, the products purchased, and the total amount.
