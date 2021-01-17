create database Company;

Use Company;
 /* Create a new Table*/
Create Table Department (
  DeptNo int Primary Key,
  DeptName varchar(200) not null,
  Location varchar(200) not null
);

/*Add Column*/
Alter table Department Add Column Capacity int not null;


Insert into Department Values(10, 'IT', 'Pune',300);
Insert into Department Values(20, 'HRD', 'Pune',30);
Insert into Department Values(30, 'ADMIN', 'Pune',10);
Insert into Department Values(40, 'ACCOUNTS', 'Pune',20);
Insert into Department Values(50, 'SALES', 'Pune',70);

Select * from Department;


Create Table Employee (
  EmpNo int Primary Key,
  EmpName varchar(200) Not null,
  Designation varchar(200) Not null,
  Salary int not null,
  DeptNo int not null,
  Constraint FK_DEPTNO
  Foreign Key (DeptNo) References Department (DeptNo)
);


insert into Employee Values(101, 'Mahesh', 'Manager', 120000, 10);
insert into Employee Values(102, 'Vivek', 'Manager', 120000, 20);
insert into Employee Values(103, 'Mukesh', 'Manager', 120000, 30);
insert into Employee Values(104, 'Satish', 'Manager', 120000, 40);
insert into Employee Values(105, 'Vinay', 'Lead', 120000, 10);
insert into Employee Values(106, 'Tejas', 'Lead', 120000, 20);
insert into Employee Values(107, 'Tushar', 'Lead', 120000,30);
insert into Employee Values(108, 'Kaushubh', 'Lead', 120000, 40);
insert into Employee Values(109, 'Nainish', 'Staff', 120000, 10);
insert into Employee Values(110, 'AArav', 'Staff', 120000, 20);
insert into Employee Values(111, 'Krushna', 'Staff', 120000, 30);
insert into Employee Values(112, 'Sujay', 'Staff', 120000, 40);
insert into Employee Values(113, 'Amit', 'Assistant', 120000, 10);
insert into Employee Values(114, 'Abhijit', 'Assistant', 120000, 20);
insert into Employee Values(115, 'Ajit', 'Assistant', 120000, 30);
insert into Employee Values(116, 'Krutanjay', 'Assistant', 120000, 40);
insert into Employee Values(117, 'Nandu', 'Operator', 120000, 10);
insert into Employee Values(118, 'Anil', 'Operator', 120000, 20);
insert into Employee Values(119, 'Abhay', 'Operator', 120000, 30);
insert into Employee Values(126, 'Krutanjay', 'Assistant', 350000, 40);
insert into Employee Values(122, 'Nandu', 'Operator', 690000, 10);
insert into Employee Values(123, 'Anil', 'Operator', 480000, 20);
insert into Employee Values(124, 'Abhay', 'Operator', 510000, 30);
insert into Employee Values(125, 'Sanjay', 'Operator', 200000, 40);


select * from Employee ;


DELIMITER //
CREATE PROCEDURE getEmployees
(IN desig varchar(200))
BEGIN
  SELECT EmpNo, EmpName, Salary  FROM Employee
  WHERE Designation = desig;
END //
DELIMITER ;

CALL getEmployees('Manager');



DELIMITER $$

CREATE PROCEDURE sp_insertdept(IN DeptNo int
, IN DeptName VARCHAR(200)
, IN Location VARCHAR(200)
, IN Capacity int
)
BEGIN

INSERT INTO Department (
DeptNo
, DeptName
, Location
, Capacity
)

    VALUES (DeptNo
, DeptName
, Location
, Capacity);

END$$
# change the delimiter back to semicolon
DELIMITER ;

CALL sp_insertdept(60, 'Training', 'Pune', 230);


SELECT 
    *
FROM
    Department;

DELIMITER //
CREATE PROCEDURE getEmployeesInDept
(IN dNo INT)
BEGIN
  SELECT Employee.EmpNo, Employee.EmpName, Employee.Salary,
  Employee.Designation,Department.DeptName  FROM Employee
  JOIN Department on Employee.DeptNO=Department.DeptNo
  WHERE Employee.DeptNo=dNo;
END //
DELIMITER ;

call getEmployeesInDept(30);
  

DELIMITER //
CREATE PROCEDURE calculateTax()
BEGIN
select EmpNo ,EmpName,salary,if(salary < 200000 ,salary*0.1, 
	if(salary < 500000, salary*0.2, salary*0.3)) AS Tax from employee;
END //
DELIMITER ;
call calculateTax();


