---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Lab_Section_Print-69_2
# Lab Section Print (69.2)
This file used to hold print headers for anatomic path reports and as a temporary holding file for path cumulative, incomplete and complete reports.  It may also be used for any accession area file since the NAME (.01) field is a pointer to the accession area file (68).

<dl>
<dt>Global</dt><dd>^LRO(69.2,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of the Lab section print pointed to the Accession file. | POINTER | INDEXED<br/>REQUIRED | [Accession-68](Accession-68)
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | .02 | Abbreviation to the name of the Lab section print | STRING | INDEXED<br/>REQUIRED | 
**Report Header 1**{::nomarkdown}<pre><code>  report_header_1</code></pre>{:/} | .03 | First header in path report after Post operative Diagnosis.  The routine used is LRSPRPT (CY/EM/SP patient report). | STRING |  | 
**Report Header 2**{::nomarkdown}<pre><code>  report_header_2</code></pre>{:/} | .04 | Second header in path report after Post operative Diagnosis.  The routine used is LRSPRPT (CY/EM/SP patient report). | STRING |  | 
**Print Snomed/icd Codes**{::nomarkdown}<pre><code>  print_snomed_icd_codes</code></pre>{:/} | .05 | If lower case is to be printed for SNOMED and ICD9CM codes enter 1 or LOWER CASE. | ENUMERATION |  | {::nomarkdown}UPPER CASE: <em><strong>0</strong></em><br/>LOWER CASE: <em><strong>1</strong></em>{:/}
**Gross Description Spacing**{::nomarkdown}<pre><code>  gross_description_spacing</code></pre>{:/} | .06 | If double spacing, gross descriptions for anatomic path microscopic examinations will be double spaced, otherwise single spacing will be used. | ENUMERATION |  | {::nomarkdown}DOUBLE: <em><strong>D</strong></em><br/>SINGLE: <em><strong>S</strong></em>{:/}
**Lines In A Label**{::nomarkdown}<pre><code>  lines_in_a_label</code></pre>{:/} | .07 | The number of lines from the top of one label to the top of the<br/> next label.  This is used as the default value when printing<br/> various labels. | NUMERIC |  | 
**Accession Prefix**{::nomarkdown}<pre><code>  accession_prefix</code></pre>{:/} | .08 | If accession prefix is entered the path report will<br/> have the accession number printed as follows:<br/> PREFIX yr accession#<br/> Ex. If S entered for the prefix, accession # is 123 and year 87<br/> the path report will print the accession as S87 123<br/> If you want a space after S enter a space after the 'S'.<br/> To eliminate the prefix and date delete the entry. (ex. S//@ ). | STRING |  | 
**Print Sf-515 Lines**{::nomarkdown}<pre><code>  print_sf515_lines</code></pre>{:/} | .09 | YES- Prints all dashed lines in the SF-515 form<br/> NO- Does not print all lines | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Ask Tc Codes**{::nomarkdown}<pre><code>  ask_tc_codes</code></pre>{:/} | .1 | Allows coding cases for tissue committee | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Routine Procedure 1**{::nomarkdown}<pre><code>  routine_procedure_1</code></pre>{:/} | .11 | Number of times procedure is routinely performed.<br/> For EM the number of thick sections made per block. | NUMERIC |  | 
**Routine Procedure 2**{::nomarkdown}<pre><code>  routine_procedure_2</code></pre>{:/} | .12 | Number of times routine procedure is performed.<br/> For EM the number of grids routinely made per block. | NUMERIC |  | 
**Report Header 3**{::nomarkdown}<pre><code>  report_header_3</code></pre>{:/} | .13 | Third header in path report after Post operative Diagnosis.  The <br/>routine used is LRSPRPT CY/EM/SP patient report).<br/> For surgical pathology this header will be the frozen section report. | STRING |  | 
**Report Header 4**{::nomarkdown}<pre><code>  report_header_4</code></pre>{:/} | .14 | Fourth header in path report after post op dx.<br/> The routine used is LRSPRPT.<br/> For surgical pathology this header will be the diagnosis field. | STRING |  | 
**New Pg For Supplementary Rpt**{::nomarkdown}<pre><code>  new_pg_for_supplementary_rpt</code></pre>{:/} | .21 | If a page feed is wanted before printing the supplementary report a <br/>'YES' is entered. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Slide Label**{::nomarkdown}<pre><code>  slide_label</code></pre>{:/} | .3 | Enter the name of the type of preparation or technique used for specimens. | OBJECT |  | [Slide_Label-69_22](#Slide_Label-69_22)
**Incomplete Reports Queue**{::nomarkdown}<pre><code>  incomplete_reports_queue</code></pre>{:/} | 1 | Here are stored the temporary list of specimens logged-in for printing at time of microscopic exam.  The report will contain all past specimens with their SNOMED coding in free text form for Surg path, cytopath, and EM.<br/> If there are gross descriptions they will be part of the print-out. | OBJECT |  | [Incomplete_Reports_Queue-69_21](#Incomplete_Reports_Queue-69_21)
**Completed Reports Queue**{::nomarkdown}<pre><code>  completed_reports_queue</code></pre>{:/} | 2 | This is a temporary list of final path reports to be printed on demand.<br/> Entries automatically are entered when the microscopic diagnoses or supplementary are entered for Surg path, Cytopath or Electron microscopy. | OBJECT |  | [Completed_Reports_Queue-69_23](#Completed_Reports_Queue-69_23)
**Interim Report Number**{::nomarkdown}<pre><code>  interim_report_number</code></pre>{:/} | 3 |  This field contains the numeric sequence of this particular interim report. | OBJECT |  | [Interim_Report_Number-69_29](#Interim_Report_Number-69_29)
**Reports On Demand**{::nomarkdown}<pre><code>  reports_on_demand</code></pre>{:/} | 4 | Name of the report on demand from the Lab Data file | OBJECT |  | [Reports_On_Demand-69_27](#Reports_On_Demand-69_27)
**Entry Number**{::nomarkdown}<pre><code>  entry_number</code></pre>{:/} | 5 | Entry number to appropriate file | OBJECT |  | [Entry_Number-69_24](#Entry_Number-69_24)
**Generic List**{::nomarkdown}<pre><code>  generic_list</code></pre>{:/} | 6 | Generic label name | OBJECT |  | [Generic_List-69_26](#Generic_List-69_26)
**User Request List**{::nomarkdown}<pre><code>  user_request_list</code></pre>{:/} | 7 | Names of users from file 200 | OBJECT |  | [User_Request_List-69_28](#User_Request_List-69_28)
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | 8 | Files for temporary lists of entries. | OBJECT |  | [File-69_31](#File-69_31)
**Labels**{::nomarkdown}<pre><code>  labels</code></pre>{:/} | 9 | ID number of label | OBJECT |  | [Labels-69_25](#Labels-69_25)
**Snomed &amp; Tc Coding**{::nomarkdown}<pre><code>  snomed__tc_coding</code></pre>{:/} | 10 | Text entered here will appear on the preliminary pathology report <br/>after the cum path summary. | STRING |  | 
**Topography Category**{::nomarkdown}<pre><code>  topography_category</code></pre>{:/} | 11 | SNOMED coded topography categories | OBJECT |  | [Topography_Category-69_211](#Topography_Category-69_211)
**Morphology Entry**{::nomarkdown}<pre><code>  morphology_entry</code></pre>{:/} | 12 | SNOMED morphology entries | POINTER |  | [Morphology_Field-61_1](Morphology_Field-61_1)
**Test List Number**{::nomarkdown}<pre><code>  test_list_number</code></pre>{:/} | 60 | The list number for a group of selected lab tests. | OBJECT |  | [Test_List_Number-69_33](#Test_List_Number-69_33)
**Topography**{::nomarkdown}<pre><code>  topography</code></pre>{:/} | 61 | For entries the most recent results of tests selected below will be displayed or printed. <br/> Ex. You may want to know the results of selected chemistries for a patient who has just had a liver biopsy.  Topography entered would be LIVER<br/> For blood bank the tests entered will be displayed whenever a <br/> crossmatch is ordered or when components are displayed. | OBJECT |  | [Topography-69_61](#Topography-69_61)
**Data Change Date**{::nomarkdown}<pre><code>  data_change_date</code></pre>{:/} | 999 | Date of the Data change | OBJECT |  | [Data_Change_Date-69_299](#Data_Change_Date-69_299)

### Subfile
#### <a name="Slide_Label-69_22"></a>Slide Label

<dl>
<dt>ID</dt><dd>Slide_Label-69_22</dd>
<dt>File Type</dt><dd>69.22</dd>
<dt>Label</dt><dd>Slide Label</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Slide Label**{::nomarkdown}<pre><code>  slide_label</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Print Name**{::nomarkdown}<pre><code>  print_name</code></pre>{:/} | .02 | Enter the actual text you want printed on the slide label. | STRING |  | 

#### <a name="Incomplete_Reports_Queue-69_21"></a>Incomplete Reports Queue

<dl>
<dt>ID</dt><dd>Incomplete_Reports_Queue-69_21</dd>
<dt>File Type</dt><dd>69.21</dd>
<dt>Label</dt><dd>Incomplete Reports Queue</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lrdfn**{::nomarkdown}<pre><code>  lrdfn</code></pre>{:/} | .01 |  | NUMERIC | REQUIRED | 
**Inverse Date**{::nomarkdown}<pre><code>  inverse_date</code></pre>{:/} | 1 |  | NUMERIC | REQUIRED | 
**Accession Date**{::nomarkdown}<pre><code>  accession_date</code></pre>{:/} | 2 | When specimen was accessioned. Stored in external date format.<br/> Usually only the year will be present. | STRING |  | 

#### <a name="Completed_Reports_Queue-69_23"></a>Completed Reports Queue

<dl>
<dt>ID</dt><dd>Completed_Reports_Queue-69_23</dd>
<dt>File Type</dt><dd>69.23</dd>
<dt>Label</dt><dd>Completed Reports Queue</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lrdfn**{::nomarkdown}<pre><code>  lrdfn</code></pre>{:/} | .01 | This is a temporary list of final path reports to be printed on demand.  Entries automatically are entered when the microscopic diagnoses or supplementary are entered for Surg path, Cytopath or Electron microscopy. | NUMERIC | REQUIRED | 
**Inverse Date**{::nomarkdown}<pre><code>  inverse_date</code></pre>{:/} | 1 |  | NUMERIC |  | 
**Accession Date**{::nomarkdown}<pre><code>  accession_date</code></pre>{:/} | 2 | When specimen accessioned. Stored in external date format.<br/> Usually only the year will be stored. | STRING |  | 

#### <a name="Interim_Report_Number-69_29"></a>Interim Report Number

<dl>
<dt>ID</dt><dd>Interim_Report_Number-69_29</dd>
<dt>File Type</dt><dd>69.29</dd>
<dt>Label</dt><dd>Interim Report Number</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Interim Report Number**{::nomarkdown}<pre><code>  interim_report_number</code></pre>{:/} | .01 |  | NUMERIC | REQUIRED | 
**Location**{::nomarkdown}<pre><code>  location</code></pre>{:/} | 1 |  | STRING | INDEXED<br/>REQUIRED | 

#### <a name="Reports_On_Demand-69_27"></a>Reports On Demand

<dl>
<dt>ID</dt><dd>Reports_On_Demand-69_27</dd>
<dt>File Type</dt><dd>69.27</dd>
<dt>Label</dt><dd>Reports On Demand</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reports On Demand**{::nomarkdown}<pre><code>  reports_on_demand</code></pre>{:/} | .01 |  Pointer to LAB DATA file (#63). | POINTER | REQUIRED | [Lab_Data-63](Lab_Data-63)
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .02 |  | STRING |  | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | .03 |  | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Dob**{::nomarkdown}<pre><code>  dob</code></pre>{:/} | .04 |   Date of Birth. | DATE-TIME |  | 
**Id**{::nomarkdown}<pre><code>  id-_1</code></pre>{:/} | .1 |  Usually the SSN of the patient. | STRING |  | 

#### <a name="Entry_Number-69_24"></a>Entry Number

<dl>
<dt>ID</dt><dd>Entry_Number-69_24</dd>
<dt>File Type</dt><dd>69.24</dd>
<dt>Label</dt><dd>Entry Number</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Entry Number**{::nomarkdown}<pre><code>  entry_number</code></pre>{:/} | .01 |  | NUMERIC | REQUIRED | 
**Parent File**{::nomarkdown}<pre><code>  parent_file</code></pre>{:/} | .02 |  | NUMERIC |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .03 |  Name of the patient. | STRING | INDEXED | 

#### <a name="Generic_List-69_26"></a>Generic List

<dl>
<dt>ID</dt><dd>Generic_List-69_26</dd>
<dt>File Type</dt><dd>69.26</dd>
<dt>Label</dt><dd>Generic List</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Generic Label**{::nomarkdown}<pre><code>  generic_label</code></pre>{:/} | .01 |  The name of the generic label. | STRING | REQUIRED | 
**Item 2**{::nomarkdown}<pre><code>  item_2</code></pre>{:/} | .02 |  First line of the label. | STRING |  | 
**Item 3**{::nomarkdown}<pre><code>  item_3</code></pre>{:/} | .03 |  The second line of the label. | STRING |  | 
**Item 4**{::nomarkdown}<pre><code>  item_4</code></pre>{:/} | .04 |  Third line of the label. | STRING |  | 
**Item 5**{::nomarkdown}<pre><code>  item_5</code></pre>{:/} | .05 |  The forth line of the label. | STRING |  | 

#### <a name="User_Request_List-69_28"></a>User Request List

<dl>
<dt>ID</dt><dd>User_Request_List-69_28</dd>
<dt>File Type</dt><dd>69.28</dd>
<dt>Label</dt><dd>User Request List</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | .01 |  Points to the NEW PERSON file (#200). | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Last Date Used**{::nomarkdown}<pre><code>  last_date_used</code></pre>{:/} | .02 |  The last date this was printed. | DATE-TIME |  | 
**Lrdfn**{::nomarkdown}<pre><code>  lrdfn</code></pre>{:/} | 1 |  | OBJECT |  | [Lrdfn-69_3](#Lrdfn-69_3)
**Lab Test Group**{::nomarkdown}<pre><code>  lab_test_group</code></pre>{:/} | 60 |  | OBJECT |  | [Lab_Test_Group-69_35](#Lab_Test_Group-69_35)

#### <a name="Lrdfn-69_3"></a>Lrdfn

<dl>
<dt>ID</dt><dd>Lrdfn-69_3</dd>
<dt>File Type</dt><dd>69.3</dd>
<dt>Label</dt><dd>Lrdfn</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lrdfn**{::nomarkdown}<pre><code>  lrdfn</code></pre>{:/} | .01 |  Internal file number in the LAB DATA file (#63). | POINTER | REQUIRED | [Lab_Data-63](Lab_Data-63)
**Patient Name**{::nomarkdown}<pre><code>  patient_name</code></pre>{:/} | .02 |  Patient's name. | STRING | INDEXED | 
**Sex**{::nomarkdown}<pre><code>  sex</code></pre>{:/} | .03 |  | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Dob**{::nomarkdown}<pre><code>  dob</code></pre>{:/} | .04 |  Date of birth. | DATE-TIME |  | 
**Location**{::nomarkdown}<pre><code>  location</code></pre>{:/} | .05 |  | STRING |  | 
**VA Patient Number**{::nomarkdown}<pre><code>  va_patient_number</code></pre>{:/} | .06 | If patient is entered in file 2 the internal file number (DFN)<br/> for file 2 will appear here. | POINTER |  | [Patient-2](Patient-2)
**Id**{::nomarkdown}<pre><code>  id-_1</code></pre>{:/} | .1 |  | STRING |  | 
**Patient Group**{::nomarkdown}<pre><code>  patient_group</code></pre>{:/} | 1 | To print only a specific group of patients enter that group name here. | STRING | INDEXED | 

#### <a name="Lab_Test_Group-69_35"></a>Lab Test Group

<dl>
<dt>ID</dt><dd>Lab_Test_Group-69_35</dd>
<dt>File Type</dt><dd>69.35</dd>
<dt>Label</dt><dd>Lab Test Group</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Lab Test Group**{::nomarkdown}<pre><code>  lab_test_group</code></pre>{:/} | .01 | You can have one or more groups. Each group can have up to 7 tests. | NUMERIC | REQUIRED | 
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | 1 |  | OBJECT |  | [Test-69_36](#Test-69_36)

#### <a name="Test-69_36"></a>Test

<dl>
<dt>ID</dt><dd>Test-69_36</dd>
<dt>File Type</dt><dd>69.36</dd>
<dt>Label</dt><dd>Test</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | .01 | Up to 7 tests allowed.  The number will determine placement of the<br/> test on the display or print. | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)

#### <a name="File-69_31"></a>File

<dl>
<dt>ID</dt><dd>File-69_31</dd>
<dt>File Type</dt><dd>69.31</dd>
<dt>Label</dt><dd>File</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | .01 | List of selected entries in a file. | NUMERIC | REQUIRED | 
**Start Date**{::nomarkdown}<pre><code>  start_date</code></pre>{:/} | .02 |  | STRING |  | 
**End Date**{::nomarkdown}<pre><code>  end_date</code></pre>{:/} | .03 |  | STRING |  | 
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | .04 | Person who created list of entries | POINTER |  | [New_Person-200](New_Person-200)
**File Entry**{::nomarkdown}<pre><code>  file_entry</code></pre>{:/} | 1 |  | OBJECT |  | [File_Entry-69_32](#File_Entry-69_32)

#### <a name="File_Entry-69_32"></a>File Entry

<dl>
<dt>ID</dt><dd>File_Entry-69_32</dd>
<dt>File Type</dt><dd>69.32</dd>
<dt>Label</dt><dd>File Entry</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**File Entry Name**{::nomarkdown}<pre><code>  file_entry_name</code></pre>{:/} | .01 | Enter the name of the entry in the file (.01 field) | STRING | INDEXED<br/>REQUIRED | 
**Entry Comment**{::nomarkdown}<pre><code>  entry_comment</code></pre>{:/} | .02 | Description to identify the specific entry | STRING |  | 
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | 1 |  | OBJECT |  | [Date-69_321](#Date-69_321)

#### <a name="Date-69_321"></a>Date

<dl>
<dt>ID</dt><dd>Date-69_321</dd>
<dt>File Type</dt><dd>69.321</dd>
<dt>Label</dt><dd>Date</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | .01 |  | DATE-TIME | REQUIRED | 
**Related Text**{::nomarkdown}<pre><code>  related_text</code></pre>{:/} | .02 |  | STRING |  | 
**More Related Text**{::nomarkdown}<pre><code>  more_related_text</code></pre>{:/} | .03 |  | STRING |  | 
**Date Entry Printed?**{::nomarkdown}<pre><code>  date_entry_printed</code></pre>{:/} | .04 | If entry was printed then 'YES' should be entered.<br/> If entry was not printed then it should not be deleted. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | 1 |  | STRING |  | 

#### <a name="Labels-69_25"></a>Labels

<dl>
<dt>ID</dt><dd>Labels-69_25</dd>
<dt>File Type</dt><dd>69.25</dd>
<dt>Label</dt><dd>Labels</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Label Id**{::nomarkdown}<pre><code>  label_id</code></pre>{:/} | .01 |  | STRING | REQUIRED | 
**Line 1**{::nomarkdown}<pre><code>  line_1</code></pre>{:/} | .02 |  | STRING |  | 
**Line 2**{::nomarkdown}<pre><code>  line_2</code></pre>{:/} | .03 |  | STRING |  | 
**Line 3**{::nomarkdown}<pre><code>  line_3</code></pre>{:/} | .04 |  | STRING |  | 
**Line 4**{::nomarkdown}<pre><code>  line_4</code></pre>{:/} | .05 |  | STRING |  | 

#### <a name="Topography_Category-69_211"></a>Topography Category

<dl>
<dt>ID</dt><dd>Topography_Category-69_211</dd>
<dt>File Type</dt><dd>69.211</dd>
<dt>Label</dt><dd>Topography Category</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Topography Category**{::nomarkdown}<pre><code>  topography_category</code></pre>{:/} | .01 | Provides a default list of topography selections for anatomic pathology <br/>searches and reports.  For example if 28 is a selection then all <br/>SNOMED coded topographies beginning with 28 will be selected. | STRING | INDEXED<br/>REQUIRED | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | .02 | Enter a comment associated with the topography category entry. | STRING | REQUIRED | 

#### <a name="Test_List_Number-69_33"></a>Test List Number

<dl>
<dt>ID</dt><dd>Test_List_Number-69_33</dd>
<dt>File Type</dt><dd>69.33</dd>
<dt>Label</dt><dd>Test List Number</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Test List Number**{::nomarkdown}<pre><code>  test_list_number</code></pre>{:/} | .01 |  | NUMERIC | REQUIRED | 
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | 1 |  | OBJECT |  | [Test-69_34](#Test-69_34)

#### <a name="Test-69_34"></a>Test

<dl>
<dt>ID</dt><dd>Test-69_34</dd>
<dt>File Type</dt><dd>69.34</dd>
<dt>Label</dt><dd>Test</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | .01 |  | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | .02 |  | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | .03 |  | STRING | REQUIRED | 

#### <a name="Topography-69_61"></a>Topography

<dl>
<dt>ID</dt><dd>Topography-69_61</dd>
<dt>File Type</dt><dd>69.61</dd>
<dt>Label</dt><dd>Topography</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Topography**{::nomarkdown}<pre><code>  topography</code></pre>{:/} | .01 | Enter here the specimen or organ/tissue that will be associated with the preselected tests to be displayed or printed. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Test To Display**{::nomarkdown}<pre><code>  test_to_display</code></pre>{:/} | 1 | Most recent results, if any, will be displayed for tests selected associated with a specific topography indicated above when that organ or tissue is submitted to anatomic pathology. | OBJECT |  | [Test_To_Display-69_62](#Test_To_Display-69_62)
**Test To Print**{::nomarkdown}<pre><code>  test_to_print</code></pre>{:/} | 2 |  | OBJECT |  | [Test_To_Print-69_63](#Test_To_Print-69_63)

#### <a name="Test_To_Display-69_62"></a>Test To Display

<dl>
<dt>ID</dt><dd>Test_To_Display-69_62</dd>
<dt>File Type</dt><dd>69.62</dd>
<dt>Label</dt><dd>Test To Display</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Test To Display**{::nomarkdown}<pre><code>  test_to_display</code></pre>{:/} | .01 | Most recent results, if any, will be displayed for tests selected <br/> associated with a specimen. | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | .02 |  | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)

#### <a name="Test_To_Print-69_63"></a>Test To Print

<dl>
<dt>ID</dt><dd>Test_To_Print-69_63</dd>
<dt>File Type</dt><dd>69.63</dd>
<dt>Label</dt><dd>Test To Print</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Test To Print**{::nomarkdown}<pre><code>  test_to_print</code></pre>{:/} | .01 |  | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | .02 |  | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)

#### <a name="Data_Change_Date-69_299"></a>Data Change Date

<dl>
<dt>ID</dt><dd>Data_Change_Date-69_299</dd>
<dt>File Type</dt><dd>69.299</dd>
<dt>Label</dt><dd>Data Change Date</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Data Change Date**{::nomarkdown}<pre><code>  data_change_date</code></pre>{:/} | .01 | Date the data was changed. | DATE-TIME | REQUIRED | 
**Person Changing Data**{::nomarkdown}<pre><code>  person_changing_data</code></pre>{:/} | .02 |  | STRING |  | 
**Data Element**{::nomarkdown}<pre><code>  data_element</code></pre>{:/} | .03 |  Name of the test being edited. | STRING |  | 
**Old Value**{::nomarkdown}<pre><code>  old_value</code></pre>{:/} | .04 |  Previous test result. | STRING |  | 
**New Value**{::nomarkdown}<pre><code>  new_value</code></pre>{:/} | .05 |  New test result. | STRING |  | 
**File**{::nomarkdown}<pre><code>  file</code></pre>{:/} | .06 |  File where the data is stored. | STRING |  | 
**File Entry**{::nomarkdown}<pre><code>  file_entry</code></pre>{:/} | .07 |  The numeric entry of the file. | STRING |  | 
**Internal File #**{::nomarkdown}<pre><code>  internal_file_number</code></pre>{:/} | .08 |  The internal number where the data is stored. | STRING |  | 
**Subfile Field Name**{::nomarkdown}<pre><code>  subfile_field_name</code></pre>{:/} | 1 |  | OBJECT |  | [Subfile_Field_Name-69_37](#Subfile_Field_Name-69_37)

#### <a name="Subfile_Field_Name-69_37"></a>Subfile Field Name

<dl>
<dt>ID</dt><dd>Subfile_Field_Name-69_37</dd>
<dt>File Type</dt><dd>69.37</dd>
<dt>Label</dt><dd>Subfile Field Name</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Subfile Field Name**{::nomarkdown}<pre><code>  subfile_field_name</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Subfile Field Entry**{::nomarkdown}<pre><code>  subfile_field_entry</code></pre>{:/} | .02 |  | STRING |  | 
**Subfile Field #**{::nomarkdown}<pre><code>  subfile_field_number</code></pre>{:/} | .03 |  | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}