---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Fh_Site_Parameters-119_9
# Fh Site Parameters (119.9)
This file contains an extensive set of site parameters designed to indicate characteristics of the Nutrition and Food Service and/or different methods by which the Service wishes the program to perform.

<dl>
<dt>Global</dt><dd>^FH(119.9,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site**{::nomarkdown}<pre><code>  site</code></pre>{:/} | .01 | This value is always 1.<br/>Number of the File Manager. | NUMERIC | INDEXED<br/>REQUIRED | 
**Label Printers**{::nomarkdown}<pre><code>  label_printers</code></pre>{:/} | 3 | This is a list of printers using label stock. | OBJECT |  | [Label_Printers-119_93](#Label_Printers-119_93)
**Outpatient Meals Diet1**{::nomarkdown}<pre><code>  outpatient_meals_diet1</code></pre>{:/} | 4 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the first<br/>allowable diet for ordering outpatient meals.  This first field will be<br/>used as the default diet when ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet2**{::nomarkdown}<pre><code>  outpatient_meals_diet2</code></pre>{:/} | 5 | The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the second<br/>allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet3**{::nomarkdown}<pre><code>  outpatient_meals_diet3</code></pre>{:/} | 6 | The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the third<br/>allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet4**{::nomarkdown}<pre><code>  outpatient_meals_diet4</code></pre>{:/} | 7 | The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the fourth<br/>allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet5**{::nomarkdown}<pre><code>  outpatient_meals_diet5</code></pre>{:/} | 8 | The outpatient meals will allow diet selection from 5 site parameter<br/>fields to be set up at the individual site.  This field will be the fifth<br/>allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Authorizor 1**{::nomarkdown}<pre><code>  authorizor_1</code></pre>{:/} | 9 | This field will be used to store the name of the first authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 2**{::nomarkdown}<pre><code>  authorizor_2</code></pre>{:/} | 10 | This field will be used to store the name of the second authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 3**{::nomarkdown}<pre><code>  authorizor_3</code></pre>{:/} | 11 | This field will be used to store the name of the third authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 4**{::nomarkdown}<pre><code>  authorizor_4</code></pre>{:/} | 12 | This field will be used to store the name of the fourth authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 5**{::nomarkdown}<pre><code>  authorizor_5</code></pre>{:/} | 13 | This field will be used to store the name of the fifth authorizor for<br/>special meals.  When a special meal is requested, if the requestor does<br/>not have the authorization to print a special meal ticket, an alert will<br/>be sent to the authorizors for action.  These 15 authorizors will also<br/>need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Employee Class**{::nomarkdown}<pre><code>  employee_class</code></pre>{:/} | 14 | This field stores whether or not the site assigns a charge to the<br/>Employee Class. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Paid Class**{::nomarkdown}<pre><code>  paid_class</code></pre>{:/} | 15 | This field stores whether or not the site assigns a charge to the Paid Class. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Ood Class**{::nomarkdown}<pre><code>  ood_class</code></pre>{:/} | 16 | This field stores whether or not the site assigns a charge to the<br/>OOD (Officer of the Day) Class. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Volunteer Class**{::nomarkdown}<pre><code>  volunteer_class</code></pre>{:/} | 17 | This field stores whether or not the site assigns a charge to the<br/>Volunteer Class. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Gratuitous Class**{::nomarkdown}<pre><code>  gratuitous_class</code></pre>{:/} | 18 | This field stores whether or not the site assigns a charge to the<br/>Gratuitous Class. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Multidivisional Site?**{::nomarkdown}<pre><code>  multidivisional_site</code></pre>{:/} | 22 | This field will be used to determine if a site is multidivisional or not.<br/>If set to YES, the multidivisional enhancements released in patch FH*5.0*39<br/>will be used, which involves prompting for Communication Office.  If set to<br/>NO, then the non-multidivisional routines, fields and files will be used. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Employee Breakfast Charge**{::nomarkdown}<pre><code>  employee_breakfast_charge</code></pre>{:/} | 25 | This field stores the cost for the employee breakfast meal. | NUMERIC |  | 
**Employee Noon Charge**{::nomarkdown}<pre><code>  employee_noon_charge</code></pre>{:/} | 26 | This field stores the cost for the employee noon meal. | NUMERIC |  | 
**Employee Evening Charge**{::nomarkdown}<pre><code>  employee_evening_charge</code></pre>{:/} | 27 | This field stores the cost for the employee evening meal. | NUMERIC |  | 
**Paid Breakfast Charge**{::nomarkdown}<pre><code>  paid_breakfast_charge</code></pre>{:/} | 28 | This field stores the cost for the paid breakfast meal. | NUMERIC |  | 
**Paid Noon Charge**{::nomarkdown}<pre><code>  paid_noon_charge</code></pre>{:/} | 29 | This field stores the cost for the paid noon meal. | NUMERIC |  | 
**Paid Evening Charge**{::nomarkdown}<pre><code>  paid_evening_charge</code></pre>{:/} | 30 | This field stores the cost for the paid evening meal. | NUMERIC |  | 
**Ood Breakfast Charge**{::nomarkdown}<pre><code>  ood_breakfast_charge</code></pre>{:/} | 31 | This field stores the cost for the OOD breakfast meal. | NUMERIC |  | 
**Ood Noon Charge**{::nomarkdown}<pre><code>  ood_noon_charge</code></pre>{:/} | 32 | This field stores the cost for the OOD noon meal. | NUMERIC |  | 
**Ood Evening Meal**{::nomarkdown}<pre><code>  ood_evening_meal</code></pre>{:/} | 33 | This field stores the cost for the OOD evening meal. | NUMERIC |  | 
**Volunteer Breakfast Charge**{::nomarkdown}<pre><code>  volunteer_breakfast_charge</code></pre>{:/} | 34 | This field stores the cost for the volunteer breakfast meal. | NUMERIC |  | 
**Volunteer Noon Charge**{::nomarkdown}<pre><code>  volunteer_noon_charge</code></pre>{:/} | 35 | This field stores the cost for the volunteer noon meal. | NUMERIC |  | 
**Volunteer Evening Charge**{::nomarkdown}<pre><code>  volunteer_evening_charge</code></pre>{:/} | 36 | This field stores the cost for the volunteer evening meal. | NUMERIC |  | 
**Gratuitous Breakfast Charge**{::nomarkdown}<pre><code>  gratuitous_breakfast_charge</code></pre>{:/} | 37 | This field stores the cost for the gratuitous breakfast meal. | NUMERIC |  | 
**Gratuitous Noon Charge**{::nomarkdown}<pre><code>  gratuitous_noon_charge</code></pre>{:/} | 38 | This field stores the cost for the gratuitous noon meal. | NUMERIC |  | 
**Gratuitous Evening Charge**{::nomarkdown}<pre><code>  gratuitous_evening_charge</code></pre>{:/} | 39 | This field stores the cost for the gratuitous evening meal. | NUMERIC |  | 
**Outpatient Meals Diet6**{::nomarkdown}<pre><code>  outpatient_meals_diet6</code></pre>{:/} | 40 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>sixth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet7**{::nomarkdown}<pre><code>  outpatient_meals_diet7</code></pre>{:/} | 41 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>seventh allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet8**{::nomarkdown}<pre><code>  outpatient_meals_diet8</code></pre>{:/} | 42 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>eighth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet9**{::nomarkdown}<pre><code>  outpatient_meals_diet9</code></pre>{:/} | 43 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>ninth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet10**{::nomarkdown}<pre><code>  outpatient_meals_diet10</code></pre>{:/} | 44 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>tenth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet11**{::nomarkdown}<pre><code>  outpatient_meals_diet11</code></pre>{:/} | 45 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>eleventh allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet12**{::nomarkdown}<pre><code>  outpatient_meals_diet12</code></pre>{:/} | 46 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>twelfth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet13**{::nomarkdown}<pre><code>  outpatient_meals_diet13</code></pre>{:/} | 47 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>thirteenth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet14**{::nomarkdown}<pre><code>  outpatient_meals_diet14</code></pre>{:/} | 48 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>fourteenth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Outpatient Meals Diet15**{::nomarkdown}<pre><code>  outpatient_meals_diet15</code></pre>{:/} | 49 | The outpatient meals will allow diet selection from 15 site parameter<br/>fields to be set up at the individual site.  This field will be the <br/>fifteenth allowable diet for ordering outpatient meals. | POINTER |  | [Diets-111](Diets-111)
**Authorizor 6**{::nomarkdown}<pre><code>  authorizor_6</code></pre>{:/} | 50 | This field will be used to store the name of the sixth authorizor<br/>for special meals.  When a special meal is requested, if the requestor<br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15<br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 7**{::nomarkdown}<pre><code>  authorizor_7</code></pre>{:/} | 51 | This field will be used to store the name of the seventh authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 8**{::nomarkdown}<pre><code>  authorizor_8</code></pre>{:/} | 52 | This field will be used to store the name of the eighth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 9**{::nomarkdown}<pre><code>  authorizor_9</code></pre>{:/} | 53 | This field will be used to store the name of the ninth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 10**{::nomarkdown}<pre><code>  authorizor_10</code></pre>{:/} | 54 | This field will be used to store the name of the tenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 11**{::nomarkdown}<pre><code>  authorizor_11</code></pre>{:/} | 55 | This field will be used to store the name of the eleventh authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 12**{::nomarkdown}<pre><code>  authorizor_12</code></pre>{:/} | 56 | This field will be used to store the name of the twelfth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 13**{::nomarkdown}<pre><code>  authorizor_13</code></pre>{:/} | 57 | This field will be used to store the name of the thirteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 14**{::nomarkdown}<pre><code>  authorizor_14</code></pre>{:/} | 58 | This field will be used to store the name of the fourteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Authorizor 15**{::nomarkdown}<pre><code>  authorizor_15</code></pre>{:/} | 59 | This field will be used to store the name of the fifteenth authorizor<br/>for special meals.  When a special meal is requested, if the requestor   <br/>does not have the authorization to print a special meal ticket,<br/>an alert will be sent to the authorizors for action.  These 15 <br/>authorizors will also need to be given the FHAUTH security key. | POINTER |  | [New_Person-200](New_Person-200)
**Assessment Default Units**{::nomarkdown}<pre><code>  assessment_default_units</code></pre>{:/} | 70 | This field contains the default unit of measurement to be used<br/>in performing Nutrition Assessments | ENUMERATION |  | {::nomarkdown}METRIC: <em><strong>M</strong></em><br/>ENGLISH: <em><strong>E</strong></em>{:/}
**# Of Days To Obtain Lab Data**{::nomarkdown}<pre><code>  number_of_days_to_obtain_lab_data</code></pre>{:/} | 71 | This field contains the number of days backward for which a search<br/>of laboratory data will be made. That is, only data obtained within<br/>the last # of days will be displayed. | NUMERIC |  | 
**Print Profile After Screening?**{::nomarkdown}<pre><code>  print_profile_after_screening</code></pre>{:/} | 74 | This parameter determines whether the Nutrition Profile is printed<br/>immediately following the printing of a screening form. If 'A' is<br/>selected, the user will be asked to make a selection at the time<br/>of printing screening forms. | ENUMERATION |  | {::nomarkdown}ASK USER: <em><strong>A</strong></em><br/>YES: <em><strong>Y</strong></em><br/>NO: <em><strong>N</strong></em>{:/}
**Optional Screening Line**{::nomarkdown}<pre><code>  optional_screening_line</code></pre>{:/} | 75 | This field may contain a line of text which will be printed as<br/>the last line of the S portion of the Nutrition Screening<br/>form. | STRING |  | 
**Lab Test**{::nomarkdown}<pre><code>  lab_test</code></pre>{:/} | 80 | This multiple contains a list of laboratory tests which<br/>are of interest to clinicians. | OBJECT |  | [Lab_Test-119_9001](#Lab_Test-119_9001)
**Drug Classifications**{::nomarkdown}<pre><code>  drug_classifications</code></pre>{:/} | 85 | This multiple contains drug classifications of interest<br/>to clinicians. | OBJECT |  | [Drug_Classifications-119_985](#Drug_Classifications-119_985)
**Heading On Bottom Of Ticket?**{::nomarkdown}<pre><code>  heading_on_bottom_of_ticket</code></pre>{:/} | 99 | This field is optional and it is used to indicate whether the<br/>heading should be printed on the bottom of the tray tickets and<br/>diet cards. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Will You Use Tray Tickets?**{::nomarkdown}<pre><code>  will_you_use_tray_tickets</code></pre>{:/} | 100 | This field is optional and it is used to indicate whether the user<br/>wants to use the Tray Tickets or not.  If the answer is Yes, you will<br/>be asked whether you want the heading for the Tray Tickets to<br/>be printed on the bottom or not and also you will be receiving a<br/>no diet pattern message on diet activity for patients that do<br/>not have a diet pattern which is related to the tray tickets.<br/>If the answer is No, you will not be asked the question and<br/>receive the message. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Outpatient Meals Installed**{::nomarkdown}<pre><code>  outpatient_meals_installed</code></pre>{:/} | 101 | Field to note if outpatient meals build has been installed previously. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

### Subfile
#### <a name="Label_Printers-119_93"></a>Label Printers

<dl>
<dt>ID</dt><dd>Label_Printers-119_93</dd>
<dt>File Type</dt><dd>119.93</dd>
<dt>Label</dt><dd>Label Printers</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Label Printers**{::nomarkdown}<pre><code>  label_printers</code></pre>{:/} | .01 | This field is a pointer to the Device File and indicates a printer used<br/>for printing diet labels, tubefeeding labels, supplemental feeding labels<br/>or other labels. | POINTER | INDEXED<br/>REQUIRED | [Device-3_5](Device-3_5)
**Size Of Labels**{::nomarkdown}<pre><code>  size_of_labels</code></pre>{:/} | 1 | This field indicates the size and type of label stock on the printer.<br/>You may choose from the following selections:<br/><br/>1)  3-1/2 x 15/16 - Single strip track-fed labels.<br/>2)  4 x 1-7/16    - Single strip track-fed labels.<br/>3)  2-5/8 x 1 - Laser label sheets, ie AVERY 5160, 30 labels per sheet.<br/>4)  4 x 1-1/3 - Laser label sheets, ie AVERY 5162, 14 labels per sheet. | ENUMERATION |  | {::nomarkdown}4 x 1-1/3 (Laser labels - 14 labels per sheet): <em><strong>4</strong></em><br/>2-5/8 x 1 (Laser labels - 30 labels per sheet): <em><strong>3</strong></em><br/>3-1/2 x 15/16 (Single strip labels): <em><strong>1</strong></em><br/>4 x 1-7/16 (Single strip labels): <em><strong>2</strong></em>{:/}

#### <a name="Lab_Test-119_9001"></a>Lab Test

<dl>
<dt>ID</dt><dd>Lab_Test-119_9001</dd>
<dt>File Type</dt><dd>119.9001</dd>
<dt>Label</dt><dd>Lab Test</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lab Test**{::nomarkdown}<pre><code>  lab_test</code></pre>{:/} | .01 | This field is a pointer to File 60, Lab Tests, and is a test<br/>of interest to clinicians. | POINTER | INDEXED<br/>REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | 1 | This field points to the specimen/typology file and indicates which<br/>specimen of the selected lab test is desired. | STRING | REQUIRED | 
**Print On Assessment?**{::nomarkdown}<pre><code>  print_on_assessment</code></pre>{:/} | 2 | This field, when answered YES, will permit printing of the lab<br/>results on the Nutrition Assessment form. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Print On Screening?**{::nomarkdown}<pre><code>  print_on_screening</code></pre>{:/} | 3 | This field, when answered YES, will permit printing of the lab<br/>results on the Nutrition Screening form. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | 4 | This number, called Print Order:<br/>(a) will allow grouping of similar lab tests;<br/>(b) will allow selection of only the lab test with the latest value from<br/>among the group of tests with the same number;<br/>(c) will also specify the print order of the lab test  in Nutrition<br/>Profile report.<br/>If the value of Print Order is not defined for the test then the system<br/>first prints all numbered tests and then prints tests without numbers in<br/>order providing by Lab package. | NUMERIC |  | 
**Serum Albumin?**{::nomarkdown}<pre><code>  serum_albumin</code></pre>{:/} | 5 | This field, if answered YES, indicates that the lab test<br/>is a serum albumin test. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}

#### <a name="Drug_Classifications-119_985"></a>Drug Classifications

<dl>
<dt>ID</dt><dd>Drug_Classifications-119_985</dd>
<dt>File Type</dt><dd>119.985</dd>
<dt>Label</dt><dd>Drug Classifications</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Drug Classifications**{::nomarkdown}<pre><code>  drug_classifications</code></pre>{:/} | .01 | This field is a pointer to File 50.605, VA Drug Classification<br/>and is a classification of interest to clinicians. | POINTER | INDEXED<br/>REQUIRED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Print On Assessment**{::nomarkdown}<pre><code>  print_on_assessment</code></pre>{:/} | 3 | If answer Yes and patient has a drug under this classification, <br/>information will be printed in the Nutrition report. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Print On Screening/profile**{::nomarkdown}<pre><code>  print_on_screening_profile</code></pre>{:/} | 4 | If set to YES and patient is taking this type of drug, it will be printed <br/>in Print Screening report. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | 5 | This is a print order of a specific Drug Classification. | NUMERIC |  | 
**Create Alert**{::nomarkdown}<pre><code>  create_alert</code></pre>{:/} | 6 | If set to YES, alert will be created for patient that is taking <br/>medication with this type of Drug. | BOOLEAN |  | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}