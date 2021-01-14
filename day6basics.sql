CREATE database hospital;
use hospital;
show databases;

-- to delete database
-- DROP database hospital;

-- creating a table with mentioned columns
CREATE table Doctors(
	DoctorRowId INT auto_increment primary key,
    DoctorId varchar(10) unique not null,
    DoctorName varchar(100) not null,
    Degree varchar(100) not null,
	Specialization varchar(100) not null,
    ContactNumber int not null,
    EmailId varchar(50)
);
-- to delete table
-- Drop table doctors;

-- alter table to modify table
Alter table Doctors Add column City varchar(30) Not null;
Alter Table Doctors change Specialization SpecialIn varchar(30);
Alter table Doctors  modify column ContactNumber BIGINT;

-- inserting values in table one by one
insert into doctors values("1",'DOC-101','Dr. Pal','MD','General physician', 9876543210 , 'dr_Pal@mail.com', 'Indore');
insert into doctors values('2','DOC-102','Dr. Dolly','MS','gynacologist', '87655554328','drDolly@mail.com','Ratlam');

-- inserting multiple values 
insert into Doctors Values
 ( 3,'Doc-103', 'Dr. Govind', 'MD', 'Diabetic', 58881111, 'drgovind@myhospital.com', 'Pune' ),
 ( 4,'Doc-104', 'Dr. Mahesh', 'MBBS', 'Heart', 218881111, 'drmahesh@myhospital.com', 'Kolhapur' ),
 ( 5,'Doc-105', 'Dr. Piyush', 'BHMS', 'Cancer', 18881111, 'drpiyush@myhospital.com', 'Mumbai' ),
 ( 6,'Doc-106', 'Dr. Farhan', 'MD', 'ENT', 68881111, 'drfarhan@myhospital.com', 'Satara' );
 -- another way of inserting values
 -- using this we can enter data in specific columns also
 insert into Doctors(DoctorId, DoctorName, Degree,SpecialIn, ContactNumber, EmailId,City)
values
 ('Doc-1007', 'Dr. Akash', 'MBBS', 'ENT', 78881111, 'drakash@myhospital.com', 'Pune' );
 
-- fetching data from DB
SELECT * from Doctors;

-- creating table with conatraint added seperately
Create Table Patients(
	PatientRowId int auto_increment primary Key,
    PatientId varchar(10) Not null,
    PatientName varchar(100) Not Null,
    Address varchar(200) not null,
    ContactNo bigint not null,
    Email varcharacter(100) ,
    Age Int not null,
    Gender varchar(20) not null,
    Constraint PatientId_unique unique(PatientId) 
);
 
 -- Modifying table by adding columns in it
 Alter table Patients add column City varchar(50) not null, 
 add column EmergencyContact bigint not null,
 add column landlineNo int;

-- drop column
-- Alter table Patients DROP COLUMN LandLineNo;

-- drop multiple columns
-- Alter table Patients DROP COLUMN EmergencyContact,  DROP COLUMN City;
 
create table WardMaster (
  WardId int NOT NULL AUTO_INCREMENT,
  WardName varchar(200) not null,
  Constraint wardid_primary_key  Primary key (WardId)
);

-- working of auto_increment
insert into WardMaster(WardName) values('General');

Select * from  wardmaster;

-- Explicitely adding the value for WardId, the AUTO_INCREMENT
-- the default will be overwritten
insert into WardMaster(WardId, WardName) values(101,'infant');
insert into WardMaster(WardName) values('Cancer');
insert into WardMaster(WardName) values('Special');

-- update wrardId for wardIdName general
Update wardmaster set wardId=100 where wardId=1;

-- Establish Relationship Across Tableas using Foreign Key Constraints

 -- REFERENCES WardMaster(WardId) means that the WardId column
 -- from the WardMaster table is linked with the WardId column
 -- of the RoomsMaster with Referential inregrity
 -- If the WardId is deleted the rooms will also be deleted
Create Table RoomsMaster(
	RoomUniqueId int Primary Key,
    RoomId varchar (100) Unique not null,
    RoomType Varchar(100) not null,
    BedsCount int not null,
    WardId int not null,
    Constraint fk_ward_id FOREIGN KEY (WardId)
    REFERENCES WardMaster(WardId)
    On DELETE Cascade
);

insert into RoomsMaster values(10001, 'Gen-0001', 'Single', 1, 100) ;

insert into RoomsMaster values(10002, 'Gen-0002', 'Double', 2, 101) ;

insert into RoomsMaster values(10003, 'Inf-0001', 'Single', 1, 102) ;

insert into RoomsMaster values(10004, 'Inf-0002', 'Multi', 4, 103) ;

insert into RoomsMaster values(10005, 'ENT-0001', 'Multi', 5, 104); 

-- The above insert statement will produce error
-- because teh WardId=104 is not present in WardMaster table
-- hence it  breaks the Referential Integrity aka Foreign Key Constraint 

-- Taking an experience for the Cascade Delete
-- Corrensponding Rooms from the RoomsMaster will be deleted
delete from WardMaster where WardId =100;

select * from RoomsMaster;

Select * from Patients;
-- where cluse will execute a condition on each row of the table
-- this condition if eveluated to true then only the resultant will be displayed

Select * from Doctors where City = 'Pune';

-- Read values from the table by eliminating the duplicate records from table
select DISTINCT City from Doctors;

select Distinct DoctorName from DOctors;
 
 -- Hoe many number of doctors per city
 
 select City, Count(*) from Doctors Group by City;
 -- Displaying Doctors order by the name of the City 
 Select * from Doctors order by City;
 
 -- Display MBBS Doctors only
 select DoctorName, Degree from Doctors where Degree = 'MBBS' ;
 
 -- Display Doctors in Kolhapur and Mumbai
 
 select DoctorName, City from Doctors where City = 'Mumbai' or City = "Kolhapur";
 -- using IN Operator
 select DoctorName, city from Doctors where City IN ('Mumbai', 'Satara');

-- Create a DoctorPatientOPD Table
-- DoctorPatientOPD table is chaild of 
-- Doctors and Patients Tables 
Create table DoctorPatientOPD(
	RegistrationUniqueId int Auto_INCREMENT not null,
    RegistrationId varchar(100) not null,
    PatientRowId int not null,
    DoctorRowId int not null,
    Fees int not null,
    Constraint fk_patient_row_is FOREIGN KEY (PatientRowId)
    References Patients (PatientRowId),
    Constraint fk_doctor_row_id Foreign Key (DoctorRowId)
    References Doctors (DoctorRowId),
    Constraint pk_registretion_unique_id Primary Key (RegistrationUniqueId)
);

-- Create a DoctorPatientOPD Table
-- DoctorPatientOPD table is chaild of 
-- Doctors and Patients, RoomsMaster Tables 

Create table DoctorPatientIPD(
	RegistrationUniqueId int Auto_INCREMENT not null,
    RegistrationId varchar(100) not null,
    PatientRowId int not null,
    DoctorRowId int not null,
    RoomUniqueId int not null,
    Constraint fk_patient_rowroom_is FOREIGN KEY (PatientRowId)
    References Patients (PatientRowId),
    Constraint fk_doctor_rowroom_id Foreign Key (DoctorRowId)
    References Doctors (DoctorRowId),
	Constraint fk_room_unique_id Foreign Key (RoomUniqueId)
    References RoomsMaster (RoomUniqueId),
    Constraint pk_registretion_unique_id Primary Key (RegistrationUniqueId)
);

Create table HouseKeepingStaff (
	StaffId int Primary key,
    StaffName varchar(200) not null,
    Address varchar(200) not null,
    City varchar(200) not null,
    Salary int not null
);

insert into HouseKeepingStaff values(101, 'A', 'Ad1', 'Kothroud', 20000);
insert into HouseKeepingStaff values(102, 'B', 'Ad2', 'Shivajinagar', 12000);
insert into HouseKeepingStaff values(103, 'C', 'Ad3', 'Bavdhan', 18000);
insert into HouseKeepingStaff values(104, 'D', 'Ad4', 'Navi Peth', 24000);
insert into HouseKeepingStaff values(105, 'E', 'Ad5', 'Vanaz', 9000);

drop table housekeepingstaff;
select * from HouseKeepingStaff;

-- select second max salary of the staff


select max(Salary) as maxsal from HouseKeepingStaff
where salary < (Select max(salary) from HouseKeepingStaff);
-- computed column value
select (Salary * 0.02) as Tax from HouseKeepingStaff;
-- -------------------------------handson lab-----------------------------------------------
insert into patients values(1,'P001','Raj','abc,Pune',987654321,'raj@mail.com',49,'male');
insert into patients values(2,'P002','Geeta','abc,mumbai',987654321,'raj@mail.com',49,'female');
insert into patients values(3,'P003','Rahul','abc,Pune',987654321,'raj@mail.com',49,'male');
insert into patients values(4,'P004','Seeta','abc,Nagpur',987654321,'raj@mail.com',49,'female');
insert into patients values(5,'P005','Sangita','abc,pune',987654321,'raj@mail.com',49,'female');
insert into patients values(6,'P006','Arjun','abc,mumbai',987654321,'raj@mail.com',60,'male');

update patients set age=55 where patientRowId=2; 
update patients set age=16 where patientRowId=3; 
update patients set age=42 where patientRowId=4; 
update patients set age=50 where patientRowId=5; 

select * from patients;
select * from doctors;

insert into doctorpatientopd values(101,'RGS-0001',1,1,150);
insert into doctorpatientopd values(102,'RGS-0002',2,5,200);
insert into doctorpatientopd values(103,'RGS-0003',3,7,350);

select * from doctorpatientopd;

-- drop table doctorpatientopd;

insert into doctorpatientIpd values(1001,'RGS-0004',4,2,10002);
insert into doctorpatientIpd values(1003,'RGS-0005',6,4,10003);
insert into doctorpatientIpd values(1002,'RGS-0005',5,4,10004);
select * from doctorpatientipd;

insert into doctors values(8,'Doc-108', 'Dr. Yashi', 'MBBS', 'Heart', 218881111, 'Yashi@myhospital.com', 'Indore');

select PatientId,PatientName from Patients where PatientRowId in 
(select PatientRowId from doctorpatientopd where DoctorRowId =4);

-- searching by doctor name
select Patients.PatientId,Patients.PatientName,doctors.doctorName from Patients, doctors where Patients.PatientRowId in 
(select PatientRowId from doctorpatientopd where DoctorRowId in (select DoctorRowId from doctors where DoctorName= 'dr. Akash' ) ) 
and (DoctorRowId in (select DoctorRowId from doctors where DoctorName= 'dr. Akash' )) ;

-- searching by doctor row id;
select Patients.PatientId,Patients.PatientName,doctors.doctorName from Patients, doctors where Patients.PatientRowId in 
(select PatientRowId from doctorpatientIpd where DoctorRowId =4 ) and (DoctorRowId=4);

-- count of patients seeing heart specialist;
select count(patientRowId) from doctorpatientipd where DoctorRowId in
 (select DoctorRowId from doctors where specialIn="heart");

 -- heart specialist doctors
 select doctorId, doctorName  from doctors where specialIn="heart";
 
 -- name of patients who are seeing heart specialist
 select patientName from patients where 
 PatientRowId in (select patientRowId from doctorpatientipd where DoctorRowId in 
 (select DoctorRowId from doctors where specialIn="heart"));

