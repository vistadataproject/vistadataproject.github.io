---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Lab_Section_Print-69_2 

<dl>
<dt>id</dt><dd>Lab_Section_Print-69_2</dd>
<dt>fmId</dt><dd>69.2</dd>
<dt>label</dt><dd>Lab Section Print</dd>
<dt>location</dt><dd>^LRO(69.2,</dd>
<dt>description</dt><dd>This file used to hold print headers for anatomic path reports and as a temporary holding file for path cumulative, incomplete and complete reports.<br/> It may also be used for any accession area file since the NAME (.01) field is a pointer to the accession area file (68).</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of the Lab section print pointed to the Accession file.{:/} | POINTER |  | REQUIRED, INDEXED | Accession-68 | 
| abbreviation | .02 | Abbreviation | {::nomarkdown}Abbreviation to the name of the Lab section print{:/} | STRING |  | REQUIRED, INDEXED |  | 
| report_header_1 | .03 | Report Header 1 | {::nomarkdown}First header in path report after Post operative Diagnosis.  The routine used is LRSPRPT (CY/EM/SP patient report).{:/} | STRING |  |  |  | 
| report_header_2 | .04 | Report Header 2 | {::nomarkdown}Second header in path report after Post operative Diagnosis.  The routine used is LRSPRPT (CY/EM/SP patient report).{:/} | STRING |  |  |  | 
| print_snomed_icd_codes | .05 | Print Snomed/icd Codes | {::nomarkdown}If lower case is to be printed for SNOMED and ICD9CM codes enter 1 or LOWER CASE.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>UPPER CASE</dd><dt>1</dt><dd>LOWER CASE</dd></dl>{:/} | 
| gross_description_spacing | .06 | Gross Description Spacing | {::nomarkdown}If double spacing, gross descriptions for anatomic path microscopic examinations will be double spaced, otherwise single spacing will be used.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>D</dt><dd>DOUBLE</dd><dt>S</dt><dd>SINGLE</dd></dl>{:/} | 
| lines_in_a_label | .07 | Lines In A Label | {::nomarkdown}The number of lines from the top of one label to the top of the<br/> next label.  This is used as the default value when printing<br/> various labels.{:/} | NUMERIC |  |  |  | 
| accession_prefix | .08 | Accession Prefix | {::nomarkdown}If accession prefix is entered the path report will<br/> have the accession number printed as follows:<br/> PREFIX yr accession#<br/> Ex. If S entered for the prefix, accession # is 123 and year 87<br/> the path report will print the accession as S87 123<br/> If you want a space after S enter a space after the 'S'.<br/> To eliminate the prefix and date delete the entry. (ex. S//@ ).{:/} | STRING |  |  |  | 
| print_sf515_lines | .09 | Print Sf-515 Lines | {::nomarkdown}YES- Prints all dashed lines in the SF-515 form<br/> NO- Does not print all lines{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| ask_tc_codes | .1 | Ask Tc Codes | {::nomarkdown}Allows coding cases for tissue committee{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| routine_procedure_1 | .11 | Routine Procedure 1 | {::nomarkdown}Number of times procedure is routinely performed.<br/> For EM the number of thick sections made per block.{:/} | NUMERIC |  |  |  | 
| routine_procedure_2 | .12 | Routine Procedure 2 | {::nomarkdown}Number of times routine procedure is performed.<br/> For EM the number of grids routinely made per block.{:/} | NUMERIC |  |  |  | 
| report_header_3 | .13 | Report Header 3 | {::nomarkdown}Third header in path report after Post operative Diagnosis.  The <br/>routine used is LRSPRPT CY/EM/SP patient report).<br/> For surgical pathology this header will be the frozen section report.{:/} | STRING |  |  |  | 
| report_header_4 | .14 | Report Header 4 | {::nomarkdown}Fourth header in path report after post op dx.<br/> The routine used is LRSPRPT.<br/> For surgical pathology this header will be the diagnosis field.{:/} | STRING |  |  |  | 
| new_pg_for_supplementary_rpt | .21 | New Pg For Supplementary Rpt | {::nomarkdown}If a page feed is wanted before printing the supplementary report a <br/>'YES' is entered.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| slide_label | .3 | Slide Label | {::nomarkdown}Enter the name of the type of preparation or technique used for specimens.{:/} | [OBJECT] |  |  | [Slide_Label-69_22](#Slide_Label-69_22)  | 
| incomplete_reports_queue | 1 | Incomplete Reports Queue | {::nomarkdown}Here are stored the temporary list of specimens logged-in for printing at time of microscopic exam.  The report will contain all past specimens with their SNOMED coding in free text form for Surg path, cytopath, and EM.<br/> If there are gross descriptions they will be part of the print-out.{:/} | [OBJECT] |  |  | [Incomplete_Reports_Queue-69_21](#Incomplete_Reports_Queue-69_21)  | 
| completed_reports_queue | 2 | Completed Reports Queue | {::nomarkdown}This is a temporary list of final path reports to be printed on demand.<br/> Entries automatically are entered when the microscopic diagnoses or supplementary are entered for Surg path, Cytopath or Electron microscopy.{:/} | [OBJECT] |  |  | [Completed_Reports_Queue-69_23](#Completed_Reports_Queue-69_23)  | 
| interim_report_number | 3 | Interim Report Number | {::nomarkdown} This field contains the numeric sequence of this particular interim report.{:/} | [OBJECT] |  |  | [Interim_Report_Number-69_29](#Interim_Report_Number-69_29)  | 
| reports_on_demand | 4 | Reports On Demand | {::nomarkdown}Name of the report on demand from the Lab Data file{:/} | [OBJECT] |  |  | [Reports_On_Demand-69_27](#Reports_On_Demand-69_27)  | 
| entry_number | 5 | Entry Number | {::nomarkdown}Entry number to appropriate file{:/} | [OBJECT] |  |  | [Entry_Number-69_24](#Entry_Number-69_24)  | 
| generic_list | 6 | Generic List | {::nomarkdown}Generic label name{:/} | [OBJECT] |  |  | [Generic_List-69_26](#Generic_List-69_26)  | 
| user_request_list | 7 | User Request List | {::nomarkdown}Names of users from file 200{:/} | [OBJECT] |  |  | [User_Request_List-69_28](#User_Request_List-69_28)  | 
| file | 8 | File | {::nomarkdown}Files for temporary lists of entries.{:/} | [OBJECT] |  |  | [File-69_31](#File-69_31)  | 
| labels | 9 | Labels | {::nomarkdown}ID number of label{:/} | [OBJECT] |  |  | [Labels-69_25](#Labels-69_25)  | 
| snomed__tc_coding | 10 | Snomed & Tc Coding | {::nomarkdown}Text entered here will appear on the preliminary pathology report <br/>after the cum path summary.{:/} | STRING |  |  |  | 
| topography_category | 11 | Topography Category | {::nomarkdown}SNOMED coded topography categories{:/} | [OBJECT] |  |  | [Topography_Category-69_211](#Topography_Category-69_211)  | 
| morphology_entry | 12 | Morphology Entry | {::nomarkdown}SNOMED morphology entries{:/} | [POINTER] |  |  | {id:Morphology_Field-61_1} | 
| test_list_number | 60 | Test List Number | {::nomarkdown}The list number for a group of selected lab tests.{:/} | [OBJECT] |  |  | [Test_List_Number-69_33](#Test_List_Number-69_33)  | 
| topography | 61 | Topography | {::nomarkdown}For entries the most recent results of tests selected below will be displayed or printed. <br/> Ex. You may want to know the results of selected chemistries for a patient who has just had a liver biopsy.  Topography entered would be LIVER<br/> For blood bank the tests entered will be displayed whenever a <br/> crossmatch is ordered or when components are displayed.{:/} | [OBJECT] |  |  | [Topography-69_61](#Topography-69_61)  | 
| data_change_date | 999 | Data Change Date | {::nomarkdown}Date of the Data change{:/} | [OBJECT] |  |  | [Data_Change_Date-69_299](#Data_Change_Date-69_299)  | 

## <a name="Slide_Label-69_22"></a>Slide_Label-69_22 

<dl>
<dt>id</dt><dd>Slide_Label-69_22</dd>
<dt>label</dt><dd>Slide Label</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| slide_label | .01 | Slide Label |  | STRING |  | REQUIRED, INDEXED |  | 
| print_name | .02 | Print Name | {::nomarkdown}Enter the actual text you want printed on the slide label.{:/} | STRING |  |  |  | 

## <a name="Incomplete_Reports_Queue-69_21"></a>Incomplete_Reports_Queue-69_21 

<dl>
<dt>id</dt><dd>Incomplete_Reports_Queue-69_21</dd>
<dt>label</dt><dd>Incomplete Reports Queue</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| lrdfn | .01 | Lrdfn |  | NUMERIC |  | REQUIRED |  | 
| inverse_date | 1 | Inverse Date |  | NUMERIC |  | REQUIRED |  | 
| accession_date | 2 | Accession Date | {::nomarkdown}When specimen was accessioned. Stored in external date format.<br/> Usually only the year will be present.{:/} | STRING |  |  |  | 

## <a name="Completed_Reports_Queue-69_23"></a>Completed_Reports_Queue-69_23 

<dl>
<dt>id</dt><dd>Completed_Reports_Queue-69_23</dd>
<dt>label</dt><dd>Completed Reports Queue</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| lrdfn | .01 | Lrdfn | {::nomarkdown}This is a temporary list of final path reports to be printed on demand.  Entries automatically are entered when the microscopic diagnoses or supplementary are entered for Surg path, Cytopath or Electron microscopy.{:/} | NUMERIC |  | REQUIRED |  | 
| inverse_date | 1 | Inverse Date |  | NUMERIC |  |  |  | 
| accession_date | 2 | Accession Date | {::nomarkdown}When specimen accessioned. Stored in external date format.<br/> Usually only the year will be stored.{:/} | STRING |  |  |  | 

## <a name="Interim_Report_Number-69_29"></a>Interim_Report_Number-69_29 

<dl>
<dt>id</dt><dd>Interim_Report_Number-69_29</dd>
<dt>label</dt><dd>Interim Report Number</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| interim_report_number | .01 | Interim Report Number |  | NUMERIC |  | REQUIRED |  | 
| location | 1 | Location |  | STRING |  | REQUIRED, INDEXED |  | 

## <a name="Reports_On_Demand-69_27"></a>Reports_On_Demand-69_27 

<dl>
<dt>id</dt><dd>Reports_On_Demand-69_27</dd>
<dt>label</dt><dd>Reports On Demand</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reports_on_demand | .01 | Reports On Demand | {::nomarkdown} Pointer to LAB DATA file (#63).{:/} | POINTER |  | REQUIRED | Lab_Data-63 | 
| name | .02 | Name |  | STRING |  |  |  | 
| sex | .03 | Sex |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
| dob | .04 | Dob | {::nomarkdown}  Date of Birth.{:/} | DATE-TIME |  |  |  | 
| id-_1 | .1 | Id | {::nomarkdown} Usually the SSN of the patient.{:/} | STRING |  |  |  | 

## <a name="Entry_Number-69_24"></a>Entry_Number-69_24 

<dl>
<dt>id</dt><dd>Entry_Number-69_24</dd>
<dt>label</dt><dd>Entry Number</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| entry_number | .01 | Entry Number |  | NUMERIC |  | REQUIRED |  | 
| parent_file | .02 | Parent File |  | NUMERIC |  |  |  | 
| name | .03 | Name | {::nomarkdown} Name of the patient.{:/} | STRING |  | INDEXED |  | 

## <a name="Generic_List-69_26"></a>Generic_List-69_26 

<dl>
<dt>id</dt><dd>Generic_List-69_26</dd>
<dt>label</dt><dd>Generic List</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| generic_label | .01 | Generic Label | {::nomarkdown} The name of the generic label.{:/} | STRING |  | REQUIRED |  | 
| item_2 | .02 | Item 2 | {::nomarkdown} First line of the label.{:/} | STRING |  |  |  | 
| item_3 | .03 | Item 3 | {::nomarkdown} The second line of the label.{:/} | STRING |  |  |  | 
| item_4 | .04 | Item 4 | {::nomarkdown} Third line of the label.{:/} | STRING |  |  |  | 
| item_5 | .05 | Item 5 | {::nomarkdown} The forth line of the label.{:/} | STRING |  |  |  | 

## <a name="User_Request_List-69_28"></a>User_Request_List-69_28 

<dl>
<dt>id</dt><dd>User_Request_List-69_28</dd>
<dt>label</dt><dd>User Request List</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| user | .01 | User | {::nomarkdown} Points to the NEW PERSON file (#200).{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| last_date_used | .02 | Last Date Used | {::nomarkdown} The last date this was printed.{:/} | DATE-TIME |  |  |  | 
| lrdfn | 1 | Lrdfn |  | [OBJECT] |  |  | {id:Lrdfn-69_3,fmId:69.3,label:Lrdfn,properties:[{id:lrdfn,fmId:.01,label:Lrdfn,description: Internal file number in the LAB DATA file (#63).,datatype:POINTER,required:true,range:{id:Lab_Data-63}},{id:patient_name,fmId:.02,label:Patient Name,description: Patient's name.,datatype:STRING,indexed:true},{id:sex,fmId:.03,label:Sex,datatype:ENUMERATION,range:{MALE:M,FEMALE:F}},{id:dob,fmId:.04,label:Dob,description: Date of birth.,datatype:DATE-TIME},{id:location,fmId:.05,label:Location,datatype:STRING},{id:va_patient_number,fmId:.06,label:VA Patient Number,description:If patient is entered in file 2 the internal file number (DFN)\r for file 2 will appear here.,datatype:POINTER,range:{id:Patient-2}},{id:id-_1,fmId:.1,label:Id,datatype:STRING},{id:patient_group,fmId:1,label:Patient Group,description:To print only a specific group of patients enter that group name here.,datatype:STRING,indexed:true}]} | 
| lab_test_group | 60 | Lab Test Group |  | [OBJECT] |  |  | {id:Lab_Test_Group-69_35,fmId:69.35,label:Lab Test Group,properties:[{id:lab_test_group,fmId:.01,label:Lab Test Group,description:You can have one or more groups. Each group can have up to 7 tests.,datatype:NUMERIC,required:true},{id:test,fmId:1,label:Test,datatype:[OBJECT],range:{id:Test-69_36,fmId:69.36,label:Test,properties:[{id:number,fmId:.001,label:Number,datatype:IEN},{id:test,fmId:.01,label:Test,description:Up to 7 tests allowed.  The number will determine placement of the\r test on the display or print.,datatype:POINTER,required:true,range:{id:Laboratory_Test-60}}]}}]} | 

## <a name="File-69_31"></a>File-69_31 

<dl>
<dt>id</dt><dd>File-69_31</dd>
<dt>label</dt><dd>File</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| file | .01 | File | {::nomarkdown}List of selected entries in a file.{:/} | NUMERIC |  | REQUIRED |  | 
| start_date | .02 | Start Date |  | STRING |  |  |  | 
| end_date | .03 | End Date |  | STRING |  |  |  | 
| user | .04 | User | {::nomarkdown}Person who created list of entries{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| file_entry | 1 | File Entry |  | [OBJECT] |  |  | {id:File_Entry-69_32,fmId:69.32,label:File Entry,properties:[{id:number,fmId:.001,label:Number,datatype:IEN},{id:file_entry_name,fmId:.01,label:File Entry Name,description:Enter the name of the entry in the file (.01 field),datatype:STRING,indexed:true,required:true},{id:entry_comment,fmId:.02,label:Entry Comment,description:Description to identify the specific entry,datatype:STRING},{id:date,fmId:1,label:Date,datatype:[OBJECT],range:{id:Date-69_321,fmId:69.321,label:Date,properties:[{id:date,fmId:.01,label:Date,datatype:DATE-TIME,required:true},{id:related_text,fmId:.02,label:Related Text,datatype:STRING},{id:more_related_text,fmId:.03,label:More Related Text,datatype:STRING},{id:date_entry_printed,fmId:.04,label:Date Entry Printed?,description:If entry was printed then 'YES' should be entered.\r If entry was not printed then it should not be deleted.,datatype:BOOLEAN,range:{false:0,true:1}},{id:comment,fmId:1,label:Comment,datatype:[STRING]}]}}]} | 

## <a name="Labels-69_25"></a>Labels-69_25 

<dl>
<dt>id</dt><dd>Labels-69_25</dd>
<dt>label</dt><dd>Labels</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| label_id | .01 | Label Id |  | STRING |  | REQUIRED |  | 
| line_1 | .02 | Line 1 |  | STRING |  |  |  | 
| line_2 | .03 | Line 2 |  | STRING |  |  |  | 
| line_3 | .04 | Line 3 |  | STRING |  |  |  | 
| line_4 | .05 | Line 4 |  | STRING |  |  |  | 

## <a name="Topography_Category-69_211"></a>Topography_Category-69_211 

<dl>
<dt>id</dt><dd>Topography_Category-69_211</dd>
<dt>label</dt><dd>Topography Category</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| topography_category | .01 | Topography Category | {::nomarkdown}Provides a default list of topography selections for anatomic pathology <br/>searches and reports.  For example if 28 is a selection then all <br/>SNOMED coded topographies beginning with 28 will be selected.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| comment | .02 | Comment | {::nomarkdown}Enter a comment associated with the topography category entry.{:/} | STRING |  | REQUIRED |  | 

## <a name="Test_List_Number-69_33"></a>Test_List_Number-69_33 

<dl>
<dt>id</dt><dd>Test_List_Number-69_33</dd>
<dt>label</dt><dd>Test List Number</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| test_list_number | .01 | Test List Number |  | NUMERIC |  | REQUIRED |  | 
| test | 1 | Test |  | [OBJECT] |  |  | {id:Test-69_34,fmId:69.34,label:Test,properties:[{id:number,fmId:.001,label:Number,datatype:IEN},{id:test,fmId:.01,label:Test,datatype:POINTER,required:true,range:{id:Laboratory_Test-60}},{id:specimen,fmId:.02,label:Specimen,datatype:POINTER,required:true,range:{id:Topography_Field-61}},{id:value,fmId:.03,label:Value,datatype:STRING,required:true}]} | 

## <a name="Topography-69_61"></a>Topography-69_61 

<dl>
<dt>id</dt><dd>Topography-69_61</dd>
<dt>label</dt><dd>Topography</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| topography | .01 | Topography | {::nomarkdown}Enter here the specimen or organ/tissue that will be associated with the preselected tests to be displayed or printed.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| test_to_display | 1 | Test To Display | {::nomarkdown}Most recent results, if any, will be displayed for tests selected associated with a specific topography indicated above when that organ or tissue is submitted to anatomic pathology.{:/} | [OBJECT] |  |  | {id:Test_To_Display-69_62,fmId:69.62,label:Test To Display,properties:[{id:number,fmId:.001,label:Number,datatype:IEN},{id:test_to_display,fmId:.01,label:Test To Display,description:Most recent results, if any, will be displayed for tests selected \r associated with a specimen.,datatype:POINTER,required:true,range:{id:Laboratory_Test-60}},{id:specimen,fmId:.02,label:Specimen,datatype:POINTER,required:true,range:{id:Topography_Field-61}}]} | 
| test_to_print | 2 | Test To Print |  | [OBJECT] |  |  | {id:Test_To_Print-69_63,fmId:69.63,label:Test To Print,properties:[{id:number,fmId:.001,label:Number,datatype:IEN},{id:test_to_print,fmId:.01,label:Test To Print,datatype:POINTER,required:true,range:{id:Laboratory_Test-60}},{id:specimen,fmId:.02,label:Specimen,datatype:POINTER,required:true,range:{id:Topography_Field-61}}]} | 

## <a name="Data_Change_Date-69_299"></a>Data_Change_Date-69_299 

<dl>
<dt>id</dt><dd>Data_Change_Date-69_299</dd>
<dt>label</dt><dd>Data Change Date</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| data_change_date | .01 | Data Change Date | {::nomarkdown}Date the data was changed.{:/} | DATE-TIME |  | REQUIRED |  | 
| person_changing_data | .02 | Person Changing Data |  | STRING |  |  |  | 
| data_element | .03 | Data Element | {::nomarkdown} Name of the test being edited.{:/} | STRING |  |  |  | 
| old_value | .04 | Old Value | {::nomarkdown} Previous test result.{:/} | STRING |  |  |  | 
| new_value | .05 | New Value | {::nomarkdown} New test result.{:/} | STRING |  |  |  | 
| file | .06 | File | {::nomarkdown} File where the data is stored.{:/} | STRING |  |  |  | 
| file_entry | .07 | File Entry | {::nomarkdown} The numeric entry of the file.{:/} | STRING |  |  |  | 
| internal_file_number | .08 | Internal File # | {::nomarkdown} The internal number where the data is stored.{:/} | STRING |  |  |  | 
| subfile_field_name | 1 | Subfile Field Name |  | [OBJECT] |  |  | {id:Subfile_Field_Name-69_37,fmId:69.37,label:Subfile Field Name,properties:[{id:subfile_field_name,fmId:.01,label:Subfile Field Name,datatype:STRING,indexed:true,required:true},{id:subfile_field_entry,fmId:.02,label:Subfile Field Entry,datatype:STRING},{id:subfile_field_number,fmId:.03,label:Subfile Field #,datatype:STRING}]} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:27:43 pm</p>{:/}