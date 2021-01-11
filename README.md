# jsTraining
#Hands-on-Labs
Day 1: Create a Calcuator using JavaScript like Calculator Desktop application on Windows Machine.

Day 2: 
  -Create a String Object with multiple statements in it. Minimum 10 statements. The result should be shown on UI.
   The string must be accepted from the UI. e.g james bond is a mi 16 spy works for her majesty's govt. he has license to kill.
   his code is 007.Write a JavaScript reference function with following operations on the string.

      -Change the first character of each statement in uppercase

      -Change the string in title-case (first chcracter of each word in upper case)

      -Find out all words having 'a', 'i' in it.

      -Reverse each word in the string.

      -Replace blankspace of the string using - character.

  -Create a CRUD application for Products and modify logic.js for following

      -do not accept duplicate records for Product based on ProductId

      -if the duplicate record exicts then validate it on the 'change' event of the ProductId input element
        do not accept -ve values for Price

      -Price validations
            -Minimum Price of Category ECT is 1000
            -For ECL is 20
            -FOD is 10
            -Show error message if the Price vaidations fails

      -Update the selected Product

           -Either select Product from TableRow and show its details in the input elements and CategoryName in select element
            OR on change event of the ProductId search the Product object if it exists then load its details in the input elements and CategoryName in select element
            Use the save button for Creating new Product as well as updating existing product

      -Generalize the Table HEader and Rows creation for product table

Day 3:

        -Create a map with Products Infromation based on Id, Name, Category, Price, Manufacturer.

        -Create Map() object and call set() method and pass the Product JSON object to it (4) records Create a HTML Table from the Map. The table should show all records from Map.

        -Iterate over the Map() using for.loop, for..of. INside loop generate and inside display property for each product record

        -Use Tamplate string to generate Rows and Heades for the table. <tr><td>${prd.ProductId}</td><td>${prd.ProductName}</td></tr>

        -Add a Input Text element and Select element above the Table.
         The select element must show the properties of the Product object. Read all proprties from product object from Map() using Object.keys() Iterate over these keys and generate for in the iteration (for loop)
         When the user select a specific property from the select and enter the value for the property in Textbox (input element), the table should show data based on data entered in input element. E.g. If the 'Category' is selected from select element and the value entered in input element is 'ECT', then the table shoud how only recodrs for ECT category. (Immediately)

        -Add two radio buttons beside the input element for SORT and REVERSE. Based on the property selected from the select element the table should be sorted or reversed when corresponding radiobutton is clicked. e.g. is property selectd from select element is ProductName and sort radio button is clicked then table should show all products sorted by ProductName (at most tomorrow)

Day 4:

        -Create a class that performs following operations
            -Should contain a method to create a Map() of employees
              EmpNo, EmpName, DeptNo, Designation, Salary
            -Should contain Map() for Deptrtment as follows
              DeptNo, DeptName, Location and Cacapity
        -The class must have a private method of name Validate(emp) that perorms following
              -Make sure that the EmpNo is Positive and Unique
              -Make sure that the EmpName start from Uppercase
              -Make sure that if the Department has the capacity to accept new employee, if the capacity of the Department is full must throw the Error
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
                  -Return all Employees of specifc Department having specific Designation
        -Write a method to Return All Employees Having Max Salary Per Department

Day 5:

        -Create a HTML Page that will use XMLHttprequest object for performing AJAX Calls GET /POST/ PUT /DELETE

        -Peroform following operations on the Product object having following Key

        -ProductRowId, ProductId, ProductName, Description, Manufacturer, BasePrice

        -Create a Proxy object that will Proxy for Product Object for making sure that, the ProductId should be passed as string, BasePrice as Number, the ProductName has length less than 30
