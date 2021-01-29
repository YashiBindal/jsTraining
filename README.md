# jsTraining

# Hands-on-Labs

# Day 1:

-Code in Day1Calculator Project

Create a Calculator using JavaScript like Calculator Desktop application on Windows Machine.

# Day 2:

-Code in Day 2 Folder

-Create a String Object with multiple statements in it. Minimum 10 statements. The result should be shown on UI.
The string must be accepted from the UI. e.g james bond is a mi 16 spy works for her majesty's govt.
he has license to kill.
his code is 007.Write a JavaScript reference function with following operations on the string.

      -Change the first character of each statement in uppercase

      -Change the string in title-case (first character of each word in upper case)

      -Find out all words having 'a', 'i' in it.

      -Reverse each word in the string.

      -Replace blank space of the string using - character.

-Create a CRUD application for Products and modify logic.js for following

      -do not accept duplicate records for Product based on ProductId

      -if the duplicate record exists then validate it on the 'change' event
       of the ProductId input element do not accept -ve values for Price

      -Price validations
            -Minimum Price of Category ECT is 1000
            -For ECL is 20
            -FOD is 10
            -Show error message if the Price validations fails

      -Update the selected Product

           -Either select Product from TableRow and show its details in the
            input elements and CategoryName in select element
            OR on change event of the ProductId search the Product object
            if it exists then load its details in the input elements and CategoryName in select element
            Use the save button for Creating new Product as well as updating existing product

      -Generalize the Table HEader and Rows creation for product table

# ES6

# Day 3:

-Code in es6/day3Collections

        -Create a map with Products Information based on Id, Name, Category, Price, Manufacturer.

        -Create Map() object and call set() method and pass the Product JSON object to it (4) records
        Create a HTML Table from the Map. The table should show all records from Map.

        -Iterate over the Map() using for.loop, for..of.
         Inside loop generate and inside display property for each product record

        -Use Template string to generate Rows and Headers for the table.
         <tr><td>${prd.ProductId}</td><td>${prd.ProductName}</td></tr>

        -Add a Input Text element and Select element above the Table.
         The select element must show the properties of the Product object.
         Read all properties from product object from Map() using Object.keys() Iterate over these keys
         and generate for in the iteration (for loop)
         When the user select a specific property from the select and
         enter the value for the property in Textbox (input element),
         the table should show data based on data entered in input element.
         E.g. If the 'Category' is selected from select element and
         the value entered in input element is 'ECT', then the table
         should show only records for ECT category. (Immediately)

        -Add two radio buttons beside the input element for SORT and REVERSE.
        Based on the property selected from the select element the table should be sorted
        or reversed when corresponding radiobutton is clicked.
        e.g. is property selected from select element is ProductName and
        sort radio button is clicked then table should show all products sorted by ProductName (at most tomorrow)

# Day 4:

-Code in es6/day4classesInJs/day4.js

        -Create a class that performs following operations
            -Should contain a method to create a Map() of employees
              EmpNo, EmpName, DeptNo, Designation, Salary
            -Should contain Map() for Department as follows
              DeptNo, DeptName, Location and Capacity
        -The class must have a private method of name Validate(emp) that performs following
              -Make sure that the EmpNo is Positive and Unique
              -Make sure that the EmpName start from Uppercase
              -Make sure that if the Department has the capacity to accept new employee,
               if the capacity of the Department is full must throw the Error
              -The Salary should not be -Ve
        -The class must have following public methods
              -AddEmployee(emp)
              -UpdateEmployee(key, emp)
              -DeleteEmployee(key)
              -GetAllEmployees(condition)
        -Condition could be as follows
              -DeptName
                  -Returns all Employees by DeptName
              -Location
                  -Returns all Employees of a location
              -Designation
                  -Returns all Employees having a specific designation
              -EmpName
                  -Return All Employees having Same EmpName
              -DeptName and Designation
                  -Return all Employees of specific Department having specific Designation
        -Write a method to Return All Employees Having Max Salary Per Department

# Day 5:

-code in es6/day5PromisesProxy

        -Create a HTML Page that will use XMLHttprequest object for performing
        AJAX Calls GET /POST/ PUT /DELETE

        -Perform following operations on the Product object having following Key

        -ProductRowId, ProductId, ProductName, Description, Manufacturer, BasePrice

        -Create a Proxy object that will Proxy for Product Object for making sure that,
        the ProductId should be passed as string, BasePrice as Number, the ProductName has length less than 30

# Day 6:

-queries in day6basics.sql file

        - 1. Insert records in DoctorPatientIPD and DoctorPatientOPD tables
        - 2. Find out Patients assigned to each doctor in separate result from both tables
            - Hint: For each distinct DoctorId read patient ids and then based on patient id
            - display their names
        - 3. Find out how many number of heart patients are in IPD
            - Query to DoctorPatientIPD and Doctors table find out the DoctorID having Specialization
            - as Heart ane then from DoctorPatientIPD read Patient id for heart specialist and display
            - their names

# NodeJS

# Day 7:

-code in NodeJs/day7/day7server.js

        -Create a HTTP Server, that will respond the Products Information as
                -ProductId, ProductName, CategoryName,Price
        -The HTTP Server must have capability to create a new record in Products
         and return the newly created record.
        -Generate ProductId as AUTO_GENERATED key on HTTP Server.
        -Accept the data for search from the client (POSTMAN / Advanced REST CLIENT (ARC))
         and return the Products info based on search criteria.
         (pass this criteria either through Body else through header)

# Day 8:

-code in NodeJs/day8/UpdatedDay8.js for task 1 and NodeJs/day8/Q

        -Create a Node.js Web Server, that will render the Products.html.
         This page will have UI for Accepting the product data, use the tag
         and submit the form with the Product Information.
         Once this page is posted, received the posted data
         and the data has to be added in the server in Products array.
         Display this products array in the table back to the page.
         HINT: https://www.dotnetcurry.com/nodejs/1216/using-nodejs-process-post-data

        -Create a Node.js app that will perform Async operations
         for Reading / Writing data to external service using 'Q' library

# Day 9:

-code in NodeJs/day9/ExpressRestApi.js

        -Create an Express.js Web Application.
         This application will render HTML pages based on Express Routes.
         Create REST APIs using Express.js that will perform CRUD Operations
         to the Persistable Store in memory.
         Create an Array of UserName and Password, make sure that the user
         is able to perform REST API calls based on valid credentials

# Day 10:

-code in NodeJs/day10/day10SqlOrm.js

        Create a REST API that will have following operations to be performed using REST Calls

        Perform CRUD operations on Employee with following
        verify the column validations in Application Server before sending request to DB using ORM
        Validate all constraints in the Application Server, e.g. Not Null, FOreign Key, etc.
        If the validation Failed the return the error response
        Create a Get Request that will return All Employees in Specific DeptName with structure of response as
        EmpNo, EmpName, DeptName, Designation, Salary
        Create a Get Request that will return Tax for each employee as
        10% of salary from 1L to 2L
        20% of salary from 2L to 5L
        30% more that 5L
        HINT: Create a Stored Proc or write the logic in Application Server in REST APIs

# ReactJS

# day 11:

-code in reactjsapp/components/day11
-Simple calculator using react Class components

# day 12:

-code in reactjsapp/components/day12

        -Create a GridComponent in React.js using HTML element with the following specifications -

            -The Table should accept the DataSource property from parent
             of the type array to generate Rows and Columns (mandatory today)

            -Make sure that the the DataSource in not undefined or empty,
             if it is, then return a message that Grid Cannot be generated to parent (mandatory today)

            -When a row is selected from the GridComponent,
             the data of the selected row must be passed to the parent component.
             so that parent component can update it(mandatory today)

            -The GridComponent, can accept the 'canDelete' prop type form parent as boolean.
             If the 'canDelete' is true, then each row must generate the delete button
             and when this button is clicked, the row must be deleted from the array
             of the parent component. (mandatory today)

            -The GridComponent can accept isSort boolean prop type and sortKey prop type.
             If isSort is true, then the data in the GridComponent must be sorted
             in ascending order of the 'sortKey' value - if isSort = true and sortKey=ProductName, then the data in GridComponent must be shown in sorted order of the ProductName (mandatory today)

            -GridComponent accept props type to show number of rows based on
             rowCount prop type passed from parent. The parent may keep of changing
             value of the rowCount and based on the rowCount, the GridComponent
             should show the records. (optional)

# day13:

-code in reactjsapp/components/day13

         -Form Validation using react components

# day14:

-code in reactapp/src/routing

        -Create MySQL-Express-React-Node Application with the following specifications

        -Create Database Component with Department and Employee Tables (Already Done)

        -Create REST APIs using Express + Node for Performing CRUD operations on

                -Department and Employee tables using MySQL + Sequelize (Already Done)

        -Create a React Single Page Application for perform CRUD Operations by calling   REST APIs for Department (Done by Trainer Mahesh Sabnis) and Employee in React application

        -Create HTTP Service using axios for get/post/put/delete for Employee REST API

        -Create Components for
                -List Employees

                -Should Have Search Functionality for Employee Based on DeptName / EmpName / Designation

                -The Employee List should show all employees by default, then it should filter employees based on search

                -Employee List must have Edit and Delete Buttons for Navigating to Edit and Delete Components

                -Create Employee must have validation check with Validation Summary (Use Validation Summary Component)

                -Edit component will edit employee with all validations

                -Delete component is just a read-only component that will be used by end-user to see which employee is being deleted

        -Each component must have link for going back to List Employee component if end-use does-not want to create/edit/delete

# day 16

-code in reactapp/redux and index page is index_day16_reducers.js

        -create an action 'SELECT_EMPLOYEE', dispatch this action on the onClick() event of the table row in ListEmployeesComponent. The selected, employee must be displayed inside the CreateEmployeeComponent.

# day17

- code in reactapp/sagaApp and index page is index_saga_day17.js

        -Hands-on of the day

                -Recap the code for Redux-SAGA
                -Modify the SAGA middleware for PUT and DELETE operations

# day18

- code in NodeJs/security and reactapp/src/services/secureService

        -Authentication using JWT tokens And Session

# day19

       - Exercise Microservice

        -Create separate REST APIs those are doing CRUD operations on MySQL instance on AWS RDS

        -Dockerize each REST API in separate docker image

        -Use Docker-compose to deploy and run both the microservices at a time inside the docker env.

        -CReate a RabbitMQ subscription in the Microservices and communicate data across them

        -e.g. The EMployee will be created in the department if the department exists and the Capacity of the department is not full
