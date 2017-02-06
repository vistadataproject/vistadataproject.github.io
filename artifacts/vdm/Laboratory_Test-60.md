---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Laboratory_Test-60 

<dl>
<dt>id</dt><dd>Laboratory_Test-60</dd>
<dt>fmId</dt><dd>60</dd>
<dt>label</dt><dd>Laboratory Test</dd>
<dt>location</dt><dd>^LAB(60,</dd>
<dt>description</dt><dd>This is the file that holds the names and ordering, display of tests.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the Laboratory test you are defining in this entry.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| test_cost | 1 | Test Cost | {::nomarkdown}Enter the cost of the test.{:/} | NUMERIC |  |  |  | 
| synonym | 2 | Synonym | {::nomarkdown}This is another name for the test.  It may be the locally preferred name,<br/>or a common misspelling.{:/} | [STRING] |  |  |  | 
| type-3 | 3 | Type | {::nomarkdown}I == (Input) test can be ordered but not displayed by the computer.<br/>O == (Output) test can be displayed but never ordered by itself.<br/>B == (Both) test can be ordered and displayed.<br/>N == (Neither) test is internal to lab only.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>B</dt><dd>BOTH</dd><dt>I</dt><dd>INPUT (CAN BE ORDERED)</dd><dt>N</dt><dd>NEITHER</dd><dt>O</dt><dd>OUTPUT (CAN BE DISPLAYED)</dd></dl>{:/} | 
| subscript | 4 | Subscript | {::nomarkdown}SUBSCRIPT is the pointer to the legal subscripts in the LR SUBSCRIPT file.  CH for Chem, Hem, Tox, Ser, Ria, etc., MI for Microbiology, BB for Blood Bank, EM for Electron Microscopy, SP for Surgical Pathology, CY for Cytology, AU for Autopsy.<br/>This field is required for all orderable tests.<br/> Bank, EM for Electron Microscopy, SP for Surgical Pathology, CY for<br/> Cytology, AU for Autopsy.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>BB</dt><dd>BLOOD BANK</dd><dt>EM</dt><dd>ELECTRON MICROSCOPY</dd><dt>SP</dt><dd>SURGICAL PATHOLOGY</dd><dt>CY</dt><dd>CYTOLOGY</dd><dt>MI</dt><dd>MICROBIOLOGY</dd><dt>CH</dt><dd>CHEM, HEM, TOX, SER, RIA, ETC.</dd><dt>WK</dt><dd>WORKLOAD</dd><dt>AU</dt><dd>AUTOPSY</dd></dl>{:/} | 
| location_data_name | 5 | Location (data Name) | {::nomarkdown}LOCATION (DATA NAME) is the exact character representation of the <br/>corresponding entry in the RESULTS file.  The input transform receives<br/>from SUBSCRIPT of the previously defined piece, as well as the node and <br/>piece information from the data definition file for the result.{:/} | STRING |  | INDEXED |  | 
| accession_area | 6 | Accession Area | {::nomarkdown}This is the appropriate institution/division this test is performed at.<br/> panel, all tests<br/>on that panel will be assigned to the entered accession area.  If some of<br/>the panel's tests go to other accession areas, leave this field blank.<br/>This will be the default accession area for this test.{:/} | [OBJECT] |  |  | [Accession_Area-60_11](#Accession_Area-60_11)  | 
| unique_accession_number | 7 | Unique Accession # | {::nomarkdown}If this field contains YES then this test will have a unique accession number whenever it is accessioned, even though it may be ordered with other tests.  If the test may be performed with other tests on the same specimen, this field should be blank.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| unique_collection_sample | 8 | Unique Collection Sample | {::nomarkdown}This field should be entered only if the test is never done on any other<br/>collection sample than the ONE designated in Select COLLECTION SAMPLE:<br/>The system will then not bother asking if the sample is the correct one.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| lab_collection_sample | 9 | Lab Collection Sample | {::nomarkdown}This entry, for the given Laboratory Test, is THE collection sample brought<br/>back on routine phlebotomy collection by the lab when they make rounds<br/>on the wards.  If blank, the test CANNOT be ordered for routine collection.{:/} | POINTER |  |  | Collection_Sample-62 | 
| required_test | 10 | Required Test | {::nomarkdown}This field should be YES if this is a mandatory test, i.e., if no data is reported, the default status is \pending\.<br/> reported, the default status is \pending\.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| field | 13 | Field | {::nomarkdown}Data Dictionary field in file 63.{:/} | STRING |  |  |  | 
| procedure_snomed | 14 | Procedure (snomed) | {::nomarkdown}This is the SNOMED name or code of this test.{:/} | POINTER |  |  | Procedure_Field-61_5 | 
| quick_index | 15 | *quick Index | {::nomarkdown}No longer used.  Will be deleted after this version.<br/>index list.  Enter YES to include, @ to delete.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| extra_labels | 16 | Extra Labels | {::nomarkdown}If blank, the minimum number of labels (accounting for required volume) is<br/>generated.  Enter a positive number for extra copies, -1 if NO label is<br/>desired.{:/} | NUMERIC |  |  |  | 
| highest_urgency_allowed | 17 | Highest Urgency Allowed | {::nomarkdown}The highest urgency allowed must be stored here.<br/>The smaller the number, the more urgent.{:/} | POINTER |  | REQUIRED | Urgency-62_05 | 
| forced_urgency | 18 | Forced Urgency | {::nomarkdown}This specifies the default urgency status of this test.<br/>It points to the URGENCY file.{:/} | POINTER |  |  | Urgency-62_05 | 
| print_name | 51 | Print Name | {::nomarkdown}Default test heading for cumulative results reports.  (May be different in LAB REPORTS file 64.5.)<br/>in LAB REPORTS file 64.5){:/} | STRING |  | REQUIRED, INDEXED |  | 
| reserved | 52 | Reserved | {::nomarkdown}Reserved for future use.{:/} | STRING |  |  |  | 
| print_code | 53 | Print Code | {::nomarkdown}Represents MUMPS code for extraction or justification of the value that<br/>is in the file.  It's particularly useful for displaying abbreviated<br/>information for sets.  It could be used to append trailing zeros after a<br/>decimal point.{:/} | STRING |  |  |  | 
| pretty_print_entry | 54 | Pretty Print Entry | {::nomarkdown}This is the Pretty Print Routine (see next field) line entry point.<br/>Some programs have more than one entry to give a \special\ display.{:/} | STRING |  |  |  | 
| pretty_print_routine | 55 | Pretty Print Routine | {::nomarkdown}If no entry is made, (and the test is type 'O'utput or 'B'oth), display<br/>output from the [LRGEN] menu option is a general cumulative.  With a<br/>program name here, [LRGEN] instead runs the alternate program for display.{:/} | STRING |  |  |  | 
| print_order | 56 | Print Order | {::nomarkdown}This is the print order of the test within its accession area.{:/} | NUMERIC |  |  |  | 
| national_va_lab_code | 64 | National VA Lab Code | {::nomarkdown}This field is used to map tests in file 60 to the VA National<br/>Lab codes found in file 64.{:/} | POINTER |  | INDEXED | Wkld_Code-64 | 
| result_nlt_code | 64.1 | Result Nlt Code | {::nomarkdown}This is the workload procedure code associated with this test.  It is used<br/>in compiling laboratory workload statistics.{:/} | POINTER |  |  | Wkld_Code-64 | 
| catalog_item | 64.2 | Catalog Item | {::nomarkdown}This field is used to indicate that this entry is to be included in the<br/>Electronic Catalog.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| edit_code | 98 | Edit Code | {::nomarkdown}Points to EXECUTE CODE file.{:/} | POINTER |  |  | Execute_Code-62_07 | 
| batch_data_code | 99.1 | *batch Data Code | {::nomarkdown}No longer used.  Will be deleted after 1/89.{:/} | POINTER |  |  |  | 
| execute_on_data_review | 99.2 | Execute On Data Review | {::nomarkdown}At the time a test or panel of tests is reviewed, the execute code is run.{:/} | POINTER |  |  | Execute_Code-62_07 | 
| site_specimen | 100 | Site/specimen | {::nomarkdown}Processing specimen type for each entry in the Lab Collection Sample field.<br/>Example:  Sodium can be determined on serum and urine.  Entries in <br/>this field are not appropriate (or even used) if the test is a panel of<br/> tests.{:/} | [OBJECT] |  |  | [Site_specimen-60_01](#Site_specimen-60_01)  | 
| general_processing_inst | 110 | General Processing Inst. | {::nomarkdown}This may include any processing instructions pertinent to this test.{:/} | STRING |  |  |  | 
| lab_test_included_in_panel | 200 | Lab Test Included In Panel | {::nomarkdown}Enter only if this is a panel of other tests, e.g. if the \Laboratory Test\<br/>is ELECTROLYTES, the entries here might be, NA, CL, K, CO2.  If it's an<br/>ADMIT PROFILE, they might be ELECTROLYTES, LIVER FUNCTION, CARDIAC ENZYMES.{:/} | [OBJECT] |  |  | [Lab_Test_Included_In_Panel-60_02](#Lab_Test_Included_In_Panel-60_02)  | 
| collection_sample | 300 | Collection Sample | {::nomarkdown}Enter the appropriate collection sample(s) for standard processing in the<br/>lab.  These are the common names that the phlebotomists and ward personnel<br/>would recognize.  The first entry is the \default\ collection sample.{:/} | [OBJECT] |  |  | [Collection_Sample-60_03](#Collection_Sample-60_03)  | 
| general_ward_instructions | 310 | General Ward Instructions | {::nomarkdown}Text to be seen by the ward each time the test is ordered regardless of<br/>the type of collection sample.{:/} | STRING |  |  |  | 
| required_comment | 320 | Required Comment | {::nomarkdown}Points to EXECUTE CODE file.{:/} | POINTER |  |  | Execute_Code-62_07 | 
| data_name | 400 | Data Name | {::nomarkdown}If the test is a panel, skip this entry!  If it is an individual test,<br/>AND IS PART OF THE CHEM, HEM, TOX, SER, RIA, ETC. area, in order to<br/>be able to ENTER results, must have an entry!  Micro, Blood Bank,<br/>Anatomic Path, excluded.{:/} | POINTER |  |  | Lab_Data-63 | 
| culture_id_prefix | 412 | Culture Id Prefix | {::nomarkdown} Used by the Vitek to make the accession number unique for down load.<br/>  This number should be zero to nine. This number is appended to the <br/>front of the accession number.<br/>   If there is no entry in this field, this test will not be downloaded.{:/} | NUMERIC |  |  |  | 
| verify_wkld_code | 500 | Verify Wkld Code | {::nomarkdown}The College of American Pathologists Workload codes for<br/> the test/procedure are entered here.{:/} | [OBJECT] |  |  | [Verify_Wkld_Code-60_12](#Verify_Wkld_Code-60_12)  | 
| accession_wkld_code | 500.1 | Accession Wkld Code | {::nomarkdown} This subfile holds the WKLD codes to be credited during the accession<br/>process.{:/} | [OBJECT] |  |  | [Accession_Wkld_Code-60_13](#Accession_Wkld_Code-60_13)  | 
| ask_amis_cap_codes | 501 | *ask Amis/cap Codes | {::nomarkdown} This field is not longer used by AMIS/WORKLOAD. It will be made obsolete with<br/>V5.2 and will be deleted in later release. Consult the section on workload<br/>in your implementation guide.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| combine_test_during_order | 503 | Combine Test During Order | {::nomarkdown}   This field works in conjunction with combine test field in 69.9<br/>If you do not want this to be combined with any other test answer<br/>  NO --- A NULL ANSWER MEANS YES{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>YES</dd><dt>1</dt><dd>NO</dd></dl>{:/} | 
| cis_test_code | 504 | Cis Test Code | {::nomarkdown} This field is used by Clinical Information System such as those<br/>found in MICU. This field is not used with the laboratory package it<br/>self but is a special field for interface with external system computer<br/>systems.{:/} | STRING |  |  |  | 
| site_notes_date | 505 | Site Notes Date | {::nomarkdown} This is the date of this particular note.{:/} | [OBJECT] |  |  | [Site_Notes_Date-60_0505](#Site_Notes_Date-60_0505)  | 
| default_site_specimen_cpt | 506 | Default Site/specimen Cpt | {::nomarkdown}If a CPT cannot be determined by the SPECIMEN CPT (#96) field within the <br/>SITE/SPECIMEN (#100) multiple, or by the HCPCS CODE (#507) field, or by<br/>locating an active CPT Code in the WKLD CODE file (#64) entry pointed to<br/>by the NATIONAL VA LAB CODE (#64) field, then the CPT in this field is<br/>the default.{:/} | POINTER |  |  | Cpt-81 | 
| hcpcs_code | 507 | Hcpcs Code | {::nomarkdown}HCFA Common Procedure Coding System (HCPCS) is a coding system that is <br/>composed of Level I codes (CPT codes), Level II codes (national codes),<br/>and Level III codes (local codes). Level I (CPT) codes are five digit<br/>numeric codes that describe procedures and tests. CPT codes are developed <br/>and maintained by the AMA with annual updates. Level II (national) codes <br/>are five digit alpha numeric codes that describe pharmaceuticals,<br/>supplies, procedures, tests and services. Level II codes are developed and<br/>maintained by CMS with quarterly updates. Level III (local) codes are five<br/>digit alpha numeric codes that are being phased out by the fiscal <br/>intermediaries.{:/} | POINTER |  |  | Cpt-81 | 
| ama_compliant_billable_panel | 508 | Ama Compliant/billable Panel | {::nomarkdown}If this panel test is an AMA compliant or otherwise billable panel,<br/>enter a 'Yes' in this field.  If this field is set to 'Yes' and a valid <br/>CPT code is on file, the CPT code for the panel will be sent to PCE for <br/>billing purposes as a bundled panel.<br/> <br/>If this field is set to 'No', the panel will be unbundled into it's <br/>individual atomic tests and the CPT codes for those atomic tests will be <br/>sent to PCE for billing purposes.<br/> <br/>Note: This field is only functional for a panel test. This field is <br/>ignored for an atomic test.<br/> <br/>Refer to the Clinical Indicator Data Capture (CIDC) implementation<br/>guide for further instruction for managing this field.<br/>{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

## <a name="Accession_Area-60_11"></a>Accession_Area-60_11 

<dl>
<dt>id</dt><dd>Accession_Area-60_11</dd>
<dt>fmId</dt><dd>60.11</dd>
<dt>label</dt><dd>Accession Area</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| institution | .01 | Institution | {::nomarkdown}This is the appropriate institution/division this test is performed at.<br/>If this test is part of a panel that does not have an accession area<br/>defined for the panel, that panel will be expanded based on the<br/>institution/division the program is operating under.  I.e., if the<br/>institution doesn't find a match, the panel test ordered will not<br/>include this test.{:/} | POINTER |  | REQUIRED | [Institution-4](Institution-4.md) | 
| accession_area | 1 | Accession Area | {::nomarkdown}This is the appropriate accession area for this test.  If the test is a<br/>panel, all tests on that panel will be assigned to the entered accession<br/>area.  If some of the panel's tests go to other accession areas, leave this<br/>field blank.  This will be the default accession area for this test.{:/} | POINTER |  |  | Accession-68 | 

## <a name="Site_specimen-60_01"></a>Site_specimen-60_01 

<dl>
<dt>id</dt><dd>Site_specimen-60_01</dd>
<dt>fmId</dt><dd>60.01</dd>
<dt>label</dt><dd>Site/specimen</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_specimen | .01 | Site/specimen | {::nomarkdown}Processing specimen type for each entry in the Lab Collection Sample field.<br/>Example:  Sodium can be determined on serum and urine.<br/>To enter a Site/specimen, a Data name must be entered.{:/} | POINTER |  | REQUIRED, INDEXED | Topography_Field-61 | 
| reference_low | 1 | Reference Low | {::nomarkdown}This is the user entered reference low value for this test.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner:<br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| reference_high | 2 | Reference High | {::nomarkdown}This is the user entered reference high value for this test.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| critical_low | 3 | Critical Low | {::nomarkdown}This is the user entered critical low value for this test.<br/>Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| critical_high | 4 | Critical High | {::nomarkdown}This is the user entered critical high value of this test.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| interpretation | 5.5 | Interpretation | {::nomarkdown}Enter any remark to accompany EVERY test result. These remarks may be edited and formatted with the FileMan text editor.  The text may be other range information, special conditions, etc.<br/>edited and formatted with the FileMan text editor.<br/>The text may be other range information, special conditions, etc.{:/} | STRING |  |  |  | 
| units | 6 | Units | {::nomarkdown}UNITS represents such things as grams, number of items per cubic millimeter,<br/>or microliter.{:/} | STRING |  |  |  | 
| type_of_delta_check | 7 | Type Of Delta Check | {::nomarkdown}Points to DELTA CHECK file.{:/} | POINTER |  |  | Delta_Checks-62_1 | 
| delta_value | 8 | Delta Value | {::nomarkdown}DELTA VALUE is the value that is passed to the Delta Check Code.{:/} | STRING |  |  |  | 
| default_value | 9 | Default Value | {::nomarkdown}Leave blank or enter the most common (say, >80% of the time) response for<br/>the test.{:/} | STRING |  |  |  | 
| therapeutic_low | 9.2 | Therapeutic Low | {::nomarkdown}This is the low end value of the therapeutic range.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| therapeutic_high | 9.3 | Therapeutic High | {::nomarkdown}This is the high end value of the therapeutic range.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000{:/} | STRING |  |  |  | 
| amis_rcs_144 | 10 | *amis/rcs 14-4 | {::nomarkdown}No longer used.  Will be deleted after this version {:/} | [POINTER] |  |  |  | 
| use_for_reference_testing | 13 | Use For Reference Testing | {::nomarkdown}Indicates if the reference ranges and units associated with this<br/>specimen type can be used when manually entering results of testing<br/>performed at another laboratory.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| foreign_computer_system | 20 | Foreign Computer System | {::nomarkdown}Reserved for future use. Do not use.{:/} | [OBJECT] |  |  | [Foreign_Computer_System-60_2](#Foreign_Computer_System-60_2)  | 
| loinc_code | 95.3 | Loinc Code | {::nomarkdown} This field contains the pointer to the LAB LOINC (#95.3) file. {:/} | POINTER |  | INDEXED | Lab_Loinc-95_3 | 
| specimen_cpt | 96 | Specimen Cpt |  | [OBJECT] |  |  | [Specimen_Cpt-60_196](#Specimen_Cpt-60_196)  | 

## <a name="Lab_Test_Included_In_Panel-60_02"></a>Lab_Test_Included_In_Panel-60_02 

<dl>
<dt>id</dt><dd>Lab_Test_Included_In_Panel-60_02</dd>
<dt>fmId</dt><dd>60.02</dd>
<dt>label</dt><dd>Lab Test Included In Panel</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This number signifies the order the tests are displayed in the Load/work<br/>lists under each appropriate accession, in the Enter/Edit options, and<br/>in the interim reports.{:/} | IEN |  |  |  | 
| lab_test | .01 | Lab Test | {::nomarkdown}If the entry is to be changed or the number sequence is to be changed, the<br/>entry must be first deleted to be moved to a different position in the<br/>panel.{:/} | POINTER |  | REQUIRED, INDEXED | Laboratory_Test-60 | 
| ap_multiply_factor | .02 | Ap Multiply Factor | {::nomarkdown}For workload if procedure is counted more than once the number<br/> of times counted is entered here.<br/> Used only for cytology workload and labels.{:/} | NUMERIC |  |  |  | 

## <a name="Collection_Sample-60_03"></a>Collection_Sample-60_03 

<dl>
<dt>id</dt><dd>Collection_Sample-60_03</dd>
<dt>fmId</dt><dd>60.03</dd>
<dt>label</dt><dd>Collection Sample</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| collection_sample | .01 | Collection Sample | {::nomarkdown}Enter the appropriate collection sample(s) for standard processing in the lab.  These are the common names the phlebotomists and ward personnel use and would recognize.  The first entry will be the \default<br/>\ collection sample.  Points to the COLLECTION SAMPLE file.{:/} | POINTER |  | REQUIRED, INDEXED | Collection_Sample-62 | 
| form_name_number | 1 | Form Name/number | {::nomarkdown}The identification of the proper Lab slip for this test.{:/} | STRING |  |  |  | 
| min_vol_in_mls | 3 | Min Vol (in Mls.) | {::nomarkdown}Number of milliliters required to perform the test.  This number is summed<br/>during the creation of the routine phlebotomy collection list to compute<br/>the minimum number of samples to collect.{:/} | NUMERIC |  |  |  | 
| max_order_freq | 4 | Max. Order Freq. | {::nomarkdown}Use this field to control how often a test may be ordered within a certain <br/>time period (# of days). The entry will then force the system to remind<br/>the ordering person that the order they are placing for this test exceeds<br/>the maximum order frequency.  If you enter 3, the test may only be ordered<br/>once every three days.{:/} | NUMERIC |  |  |  | 
| single_day_max_order_freq | 4.5 | Single Day Max Order Freq | {::nomarkdown}Enter a number specifying the maximum number of times a test can be ordered<br/>in a single day.{:/} | NUMERIC |  |  |  | 
| ward_remarks | 5 | Ward Remarks | {::nomarkdown}Text to be seen by the ward each time the test is ordered for a specific<br/>collection sample.{:/} | STRING |  |  |  | 
| lab_processing_instructions_ | 6 | Lab Processing Instructions  | {::nomarkdown}Text seen by the lab as the test is received in the accession room.{:/} | STRING |  |  |  | 
| required_comment | 7 | Required Comment | {::nomarkdown}Enter a comment or statement that may be required in regards to this test.<br/>Points to EXECUTE CODE file.{:/} | POINTER |  |  | Execute_Code-62_07 | 
| sample_wkld_code | 500 | Sample Wkld Code | {::nomarkdown} If there is a particular WKLD code which is associate the assaying<br/>this type of specimen, enter that WKLD code here. For example<br/>spinal fluid electrophoresis, this specimen must be concentrated<br/>before the procedure can be performed.{:/} | [OBJECT] |  |  | [Sample_Wkld_Code-60_14](#Sample_Wkld_Code-60_14)  | 

## <a name="Verify_Wkld_Code-60_12"></a>Verify_Wkld_Code-60_12 

<dl>
<dt>id</dt><dd>Verify_Wkld_Code-60_12</dd>
<dt>fmId</dt><dd>60.12</dd>
<dt>label</dt><dd>Verify Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| verify_wkld_code | .01 | Verify Wkld Code | {::nomarkdown}The WKLD codes for this test are entered here.<br/>Enter only the WKLD codes for the procedures that are done at your<br/>hospital for this test.{:/} | POINTER |  | REQUIRED, INDEXED | Wkld_Code-64 | 
| verify_wkld_code_number | 1 | Verify Wkld Code # | {::nomarkdown}This contains the WKLD codes for this test.{:/} | STRING |  | REQUIRED |  | 
| test_multiply_factor | 2 | Test Multiply Factor | {::nomarkdown} If this WKLD code should be counted more than once, enter the number of<br/>times it should be counted to get the total correct workload. If the field<br/>is blank, then it will automatically be counted 1 time.<br/>   Note: In version prior to V5.2, this field was named the Default Yes<br/>field. That field is not used with V5.2 and greater.{:/} | NUMERIC |  |  |  | 
| protect_suffix | 3 | Protect Suffix | {::nomarkdown}If you wish to prevent the suffix from being converted to another suffix<br/>during verification. Enter YES in this field.<br/>  Codes which do not have a .0000 suffix need not be protected. They are<br/>not changed during verification.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Accession_Wkld_Code-60_13"></a>Accession_Wkld_Code-60_13 

<dl>
<dt>id</dt><dd>Accession_Wkld_Code-60_13</dd>
<dt>fmId</dt><dd>60.13</dd>
<dt>label</dt><dd>Accession Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| accession_wkld_code | .01 | Accession Wkld Code | {::nomarkdown} Enter the WKLD code used to identify the accession workload for<br/>this test. This field can be also used for prep procedures, ie<br/>inoculating culture plates. This WKLD code count will appear<br/>on the date the specimen was accessioned into the laboratory.<br/>  This field functions in the same manner as the WKLD codes, <br/>except it doesn't require a completion date to be counted.<br/> For CYTOLOGY SCREENING WORKLOAD the appropriate WKLD codes are<br/> entered here.{:/} | POINTER |  | REQUIRED | Wkld_Code-64 | 
| accession_wkld_code_number | 1 | Accession Wkld Code # | {::nomarkdown}  This field contains the actual WKLD Code number.{:/} | NUMERIC |  |  |  | 
| test_multiply_factor | 2 | Test Multiply Factor | {::nomarkdown}  If this WKLD code should be counted more than once, enter that number<br/>here. The default is 1.<br/>  This field is identical to the multiply field in the verification WKLD<br/>code sub file.{:/} | NUMERIC |  |  |  | 

## <a name="Site_Notes_Date-60_0505"></a>Site_Notes_Date-60_0505 

<dl>
<dt>id</dt><dd>Site_Notes_Date-60_0505</dd>
<dt>fmId</dt><dd>60.0505</dd>
<dt>label</dt><dd>Site Notes Date</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_notes_date | .01 | Site Notes Date | {::nomarkdown}Date of the note.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| text | 1 | Text | {::nomarkdown} Actual text of the note for this test.{:/} | STRING |  |  |  | 

## <a name="Foreign_Computer_System-60_2"></a>Foreign_Computer_System-60_2 

<dl>
<dt>id</dt><dd>Foreign_Computer_System-60_2</dd>
<dt>fmId</dt><dd>60.2</dd>
<dt>label</dt><dd>Foreign Computer System</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| foreign_computer_system | .01 | Foreign Computer System | {::nomarkdown}Reserved for future use. Do not use.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| foreign_item_number | 1 | Foreign Item # | {::nomarkdown}RESERVED FOR FUTURE USE{:/} | STRING |  |  |  | 
| integer | 2 | Integer | {::nomarkdown}RESERVED FOR FUTURE USE{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| unit_conversion | 3 | Unit Conversion | {::nomarkdown}RESERVED FOR FUTURE USE{:/} | STRING |  |  |  | 

## <a name="Specimen_Cpt-60_196"></a>Specimen_Cpt-60_196 

<dl>
<dt>id</dt><dd>Specimen_Cpt-60_196</dd>
<dt>fmId</dt><dd>60.196</dd>
<dt>label</dt><dd>Specimen Cpt</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| specimen_cpt | .01 | Specimen Cpt | {::nomarkdown}A CPT associated with the specimen{:/} | POINTER |  | REQUIRED, INDEXED | Cpt-81 | 
| active_date_csv | 1 | Active Date (csv) | {::nomarkdown}This the active date of the SPECIMEN CPT for CSV purposes.{:/} | DATE-TIME |  |  |  | 

## <a name="Sample_Wkld_Code-60_14"></a>Sample_Wkld_Code-60_14 

<dl>
<dt>id</dt><dd>Sample_Wkld_Code-60_14</dd>
<dt>fmId</dt><dd>60.14</dd>
<dt>label</dt><dd>Sample Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sample_wkld_code | .01 | Sample Wkld Code | {::nomarkdown}  If this test has a sample type which should have a specific<br/>WKLD code associate with it, enter the WKLD code here.<br/> Example: Urine electrophoresis always has a urine protein performed.<br/>enter the WKLD code for that procedure here. It will only be counted<br/>for collection sample of urine.<br/>  Note: This field is similar to Verify WKLD code sub-file except for<br/>the treatment of the suffix and collection sample specific.{:/} | POINTER |  | REQUIRED | Wkld_Code-64 | 
| sample_wkld_code_number | 1 | Sample Wkld Code # | {::nomarkdown} This field contains the actual WKLD Code number.{:/} | STRING |  |  |  | 
| test_multiply_factor | 2 | Test Multiply Factor | {::nomarkdown} If this particular WKLD code should be multiplied in order to receive<br/>proper count. Enter that number here. The default is 1.<br/>  NOTE: This field is identical the field found in the Verify<br/>WKLD code field sub file.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}