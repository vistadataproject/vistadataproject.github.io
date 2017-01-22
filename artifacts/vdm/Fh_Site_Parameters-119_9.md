---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Fh_Site_Parameters-119_9 

 property | value 
--- | --- 
 id | Fh_Site_Parameters-119_9
 fmId | 119.9
 label | Fh Site Parameters
 location | ^FH(119.9,
 description | {::nomarkdown}This file contains an extensive set of site parameters designed to<br/>indicate characteristics of the Nutrition and Food Service and/or<br/>different methods by which the Service wishes the program to perform.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site | .01 | Site | {::nomarkdown}This value is always 1.<br/>Number of the File Manager.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| label_printers | 3 | Label Printers | {::nomarkdown}This is a list of printers using label stock.{:/} | [OBJECT] |  |  | [Label_Printers-119_93](#Label_Printers-119_93)  | 
| outpatient_meals_diet1 | 4 | Outpatient Meals Diet1 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the first<br/>allowable diet for ordering outpatient meals.  This first field will be<br/>used as the default diet when ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet2 | 5 | Outpatient Meals Diet2 | {::nomarkdown}The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the second<br/>allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet3 | 6 | Outpatient Meals Diet3 | {::nomarkdown}The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the third<br/>allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet4 | 7 | Outpatient Meals Diet4 | {::nomarkdown}The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the fourth<br/>allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet5 | 8 | Outpatient Meals Diet5 | {::nomarkdown}The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the fifth<br/>allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| authorizor_1 | 9 | Authorizor 1 | {::nomarkdown}This field will be used to store the name of the first authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_2 | 10 | Authorizor 2 | {::nomarkdown}This field will be used to store the name of the second authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_3 | 11 | Authorizor 3 | {::nomarkdown}This field will be used to store the name of the third authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_4 | 12 | Authorizor 4 | {::nomarkdown}This field will be used to store the name of the fourth authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_5 | 13 | Authorizor 5 | {::nomarkdown}This field will be used to store the name of the fifth authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| employee_class | 14 | Employee Class | {::nomarkdown}This field stores whether or not the site assigns a charge to the<br/>Employee Class.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| paid_class | 15 | Paid Class | {::nomarkdown}This field stores whether or not the site assigns a charge to the Paid Class.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| ood_class | 16 | Ood Class | {::nomarkdown}This field stores whether or not the site assigns a charge to the<br/>OOD (Officer of the Day) Class.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| volunteer_class | 17 | Volunteer Class | {::nomarkdown}This field stores whether or not the site assigns a charge to the<br/>Volunteer Class.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| gratuitous_class | 18 | Gratuitous Class | {::nomarkdown}This field stores whether or not the site assigns a charge to the<br/>Gratuitous Class.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| multidivisional_site | 22 | Multidivisional Site? | {::nomarkdown}This field will be used to determine if a site is multidivisional or not.<br/>If set to YES, the multidivisional enhancements released in patch FH*5.0*39<br/>will be used, which involves prompting for Communication Office.  If set to<br/>NO, then the non-multidivisional routines, fields and files will be used.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| employee_breakfast_charge | 25 | Employee Breakfast Charge | {::nomarkdown}This field stores the cost for the employee breakfast meal.{:/} | NUMERIC |  |  |  | 
| employee_noon_charge | 26 | Employee Noon Charge | {::nomarkdown}This field stores the cost for the employee noon meal.{:/} | NUMERIC |  |  |  | 
| employee_evening_charge | 27 | Employee Evening Charge | {::nomarkdown}This field stores the cost for the employee evening meal.{:/} | NUMERIC |  |  |  | 
| paid_breakfast_charge | 28 | Paid Breakfast Charge | {::nomarkdown}This field stores the cost for the paid breakfast meal.{:/} | NUMERIC |  |  |  | 
| paid_noon_charge | 29 | Paid Noon Charge | {::nomarkdown}This field stores the cost for the paid noon meal.{:/} | NUMERIC |  |  |  | 
| paid_evening_charge | 30 | Paid Evening Charge | {::nomarkdown}This field stores the cost for the paid evening meal.{:/} | NUMERIC |  |  |  | 
| ood_breakfast_charge | 31 | Ood Breakfast Charge | {::nomarkdown}This field stores the cost for the OOD breakfast meal.{:/} | NUMERIC |  |  |  | 
| ood_noon_charge | 32 | Ood Noon Charge | {::nomarkdown}This field stores the cost for the OOD noon meal.{:/} | NUMERIC |  |  |  | 
| ood_evening_meal | 33 | Ood Evening Meal | {::nomarkdown}This field stores the cost for the OOD evening meal.{:/} | NUMERIC |  |  |  | 
| volunteer_breakfast_charge | 34 | Volunteer Breakfast Charge | {::nomarkdown}This field stores the cost for the volunteer breakfast meal.{:/} | NUMERIC |  |  |  | 
| volunteer_noon_charge | 35 | Volunteer Noon Charge | {::nomarkdown}This field stores the cost for the volunteer noon meal.{:/} | NUMERIC |  |  |  | 
| volunteer_evening_charge | 36 | Volunteer Evening Charge | {::nomarkdown}This field stores the cost for the volunteer evening meal.{:/} | NUMERIC |  |  |  | 
| gratuitous_breakfast_charge | 37 | Gratuitous Breakfast Charge | {::nomarkdown}This field stores the cost for the gratuitous breakfast meal.{:/} | NUMERIC |  |  |  | 
| gratuitous_noon_charge | 38 | Gratuitous Noon Charge | {::nomarkdown}This field stores the cost for the gratuitous noon meal.{:/} | NUMERIC |  |  |  | 
| gratuitous_evening_charge | 39 | Gratuitous Evening Charge | {::nomarkdown}This field stores the cost for the gratuitous evening meal.{:/} | NUMERIC |  |  |  | 
| outpatient_meals_diet6 | 40 | Outpatient Meals Diet6 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>sixth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet7 | 41 | Outpatient Meals Diet7 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>seventh allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet8 | 42 | Outpatient Meals Diet8 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>eighth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet9 | 43 | Outpatient Meals Diet9 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>ninth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet10 | 44 | Outpatient Meals Diet10 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>tenth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet11 | 45 | Outpatient Meals Diet11 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>eleventh allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet12 | 46 | Outpatient Meals Diet12 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>twelfth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet13 | 47 | Outpatient Meals Diet13 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>thirteenth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet14 | 48 | Outpatient Meals Diet14 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>fourteenth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| outpatient_meals_diet15 | 49 | Outpatient Meals Diet15 | {::nomarkdown}The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>fifteenth allowable diet for ordering outpatient meals.{:/} | POINTER |  |  | Diets-111 | 
| authorizor_6 | 50 | Authorizor 6 | {::nomarkdown}This field will be used to store the name of the sixth authorizor<br/>for special meals.  When a special meal is requested, if the requestor<br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15<br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_7 | 51 | Authorizor 7 | {::nomarkdown}This field will be used to store the name of the seventh authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_8 | 52 | Authorizor 8 | {::nomarkdown}This field will be used to store the name of the eighth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_9 | 53 | Authorizor 9 | {::nomarkdown}This field will be used to store the name of the ninth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_10 | 54 | Authorizor 10 | {::nomarkdown}This field will be used to store the name of the tenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_11 | 55 | Authorizor 11 | {::nomarkdown}This field will be used to store the name of the eleventh authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_12 | 56 | Authorizor 12 | {::nomarkdown}This field will be used to store the name of the twelfth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_13 | 57 | Authorizor 13 | {::nomarkdown}This field will be used to store the name of the thirteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_14 | 58 | Authorizor 14 | {::nomarkdown}This field will be used to store the name of the fourteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| authorizor_15 | 59 | Authorizor 15 | {::nomarkdown}This field will be used to store the name of the fifteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| assessment_default_units | 70 | Assessment Default Units | {::nomarkdown}This field contains the default unit of measurement to be used<br/>in performing Nutrition Assessments{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>METRIC</dd><dt>E</dt><dd>ENGLISH</dd></dl>{:/} | 
| number_of_days_to_obtain_lab_data | 71 | # Of Days To Obtain Lab Data | {::nomarkdown}This field contains the number of days backward for which a search<br/>of laboratory data will be made. That is, only data obtained within<br/>the last # of days will be displayed.{:/} | NUMERIC |  |  |  | 
| print_profile_after_screening | 74 | Print Profile After Screening? | {::nomarkdown}This parameter determines whether the Nutrition Profile is printed<br/>immediately following the printing of a screening form. If 'A' is<br/>selected, the user will be asked to make a selection at the time<br/>of printing screening forms.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>A</dt><dd>ASK USER</dd><dt>Y</dt><dd>YES</dd><dt>N</dt><dd>NO</dd></dl>{:/} | 
| optional_screening_line | 75 | Optional Screening Line | {::nomarkdown}This field may contain a line of text which will be printed as<br/>the last line of the S portion of the Nutrition Screening<br/>form.{:/} | STRING |  |  |  | 
| lab_test | 80 | Lab Test | {::nomarkdown}This multiple contains a list of laboratory tests which<br/>are of interest to clinicians.{:/} | [OBJECT] |  |  | [Lab_Test-119_9001](#Lab_Test-119_9001)  | 
| drug_classifications | 85 | Drug Classifications | {::nomarkdown}This multiple contains drug classifications of interest<br/>to clinicians.{:/} | [OBJECT] |  |  | [Drug_Classifications-119_985](#Drug_Classifications-119_985)  | 
| heading_on_bottom_of_ticket | 99 | Heading On Bottom Of Ticket? | {::nomarkdown}This field is optional and it is used to indicate whether the<br/>heading should be printed on the bottom of the tray tickets and<br/>diet cards.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| will_you_use_tray_tickets | 100 | Will You Use Tray Tickets? | {::nomarkdown}This field is optional and it is used to indicate whether the user<br/>wants to use the Tray Tickets or not.  If the answer is Yes, you will<br/>be asked whether you want the heading for the Tray Tickets to<br/>be printed on the bottom or not and also you will be receiving a<br/>no diet pattern message on diet activity for patients that do<br/>not have a diet pattern which is related to the tray tickets.<br/>If the answer is No, you will not be asked the question and<br/>receive the message.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| outpatient_meals_installed | 101 | Outpatient Meals Installed | {::nomarkdown}Field to note if outpatient meals build has been installed previously.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Label_Printers-119_93"></a>Label_Printers-119_93 

 property | value 
--- | --- 
 id | Label_Printers-119_93
 label | Label Printers

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| label_printers | .01 | Label Printers | {::nomarkdown}This field is a pointer to the Device File and indicates a printer used<br/>for printing diet labels, tubefeeding labels, supplemental feeding labels<br/>or other labels.{:/} | POINTER |  | REQUIRED, INDEXED | Device-3_5 | 
| size_of_labels | 1 | Size Of Labels | {::nomarkdown}This field indicates the size and type of label stock on the printer.<br/>You may choose from the following selections:<br/><br/>1)  3-1/2 x 15/16 - Single strip track-fed labels.<br/>2)  4 x 1-7/16    - Single strip track-fed labels.<br/>3)  2-5/8 x 1 - Laser label sheets, ie AVERY 5160, 30 labels per sheet.<br/>4)  4 x 1-1/3 - Laser label sheets, ie AVERY 5162, 14 labels per sheet.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>4</dt><dd>4 x 1-1/3 (Laser labels - 14 labels per sheet)</dd><dt>3</dt><dd>2-5/8 x 1 (Laser labels - 30 labels per sheet)</dd><dt>1</dt><dd>3-1/2 x 15/16 (Single strip labels)</dd><dt>2</dt><dd>4 x 1-7/16 (Single strip labels)</dd></dl>{:/} | 

## <a name="Lab_Test-119_9001"></a>Lab_Test-119_9001 

 property | value 
--- | --- 
 id | Lab_Test-119_9001
 label | Lab Test

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| lab_test | .01 | Lab Test | {::nomarkdown}This field is a pointer to File 60, Lab Tests, and is a test<br/>of interest to clinicians.{:/} | POINTER |  | REQUIRED, INDEXED | Laboratory_Test-60 | 
| specimen | 1 | Specimen | {::nomarkdown}This field points to the specimen/typology file and indicates which<br/>specimen of the selected lab test is desired.{:/} | STRING |  | REQUIRED |  | 
| print_on_assessment | 2 | Print On Assessment? | {::nomarkdown}This field, when answered YES, will permit printing of the lab<br/>results on the Nutrition Assessment form.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| print_on_screening | 3 | Print On Screening? | {::nomarkdown}This field, when answered YES, will permit printing of the lab<br/>results on the Nutrition Screening form.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| print_order | 4 | Print Order | {::nomarkdown}This number, called Print Order:<br/>(a) will allow grouping of similar lab tests;<br/>(b) will allow selection of only the lab test with the latest value from<br/>among the group of tests with the same number;<br/>(c) will also specify the print order of the lab test  in Nutrition<br/>Profile report.<br/>If the value of Print Order is not defined for the test then the system<br/>first prints all numbered tests and then prints tests without numbers in<br/>order providing by Lab package.{:/} | NUMERIC |  |  |  | 
| serum_albumin | 5 | Serum Albumin? | {::nomarkdown}This field, if answered YES, indicates that the lab test<br/>is a serum albumin test.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 

## <a name="Drug_Classifications-119_985"></a>Drug_Classifications-119_985 

 property | value 
--- | --- 
 id | Drug_Classifications-119_985
 label | Drug Classifications

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| drug_classifications | .01 | Drug Classifications | {::nomarkdown}This field is a pointer to File 50.605, VA Drug Classification<br/>and is a classification of interest to clinicians.{:/} | POINTER |  | REQUIRED, INDEXED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| print_on_assessment | 3 | Print On Assessment | {::nomarkdown}If answer Yes and patient has a drug under this classification, <br/>information will be printed in the Nutrition report.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| print_on_screening_profile | 4 | Print On Screening/profile | {::nomarkdown}If set to YES and patient is taking this type of drug, it will be printed <br/>in Print Screening report.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| print_order | 5 | Print Order | {::nomarkdown}This is a print order of a specific Drug Classification.{:/} | NUMERIC |  |  |  | 
| create_alert | 6 | Create Alert | {::nomarkdown}If set to YES, alert will be created for patient that is taking <br/>medication with this type of Drug.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:36 am</p>{:/}