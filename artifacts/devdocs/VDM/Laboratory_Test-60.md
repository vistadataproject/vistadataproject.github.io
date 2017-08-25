---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Laboratory_Test-60<br/>
<a name="top"></a>
# Laboratory Test (60)
This is the file that holds the names and ordering, display of tests.

**Global:** ^LAB(60,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the Laboratory test you are defining in this entry. | STRING | INDEXED<br/>REQUIRED | 
**Test Cost**{::nomarkdown}<pre><code>  test_cost</code></pre>{:/} | 1 | Enter the cost of the test. | NUMERIC |  | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 2 | This is another name for the test.  It may be the locally preferred name,<br/>or a common misspelling. | STRING |  | 
**Type**{::nomarkdown}<pre><code>  type-3</code></pre>{:/} | 3 | I == (Input) test can be ordered but not displayed by the computer.<br/>O == (Output) test can be displayed but never ordered by itself.<br/>B == (Both) test can be ordered and displayed.<br/>N == (Neither) test is internal to lab only. | ENUMERATION | REQUIRED | {::nomarkdown}BOTH: <em><strong>B</strong></em><br/>INPUT (CAN BE ORDERED): <em><strong>I</strong></em><br/>NEITHER: <em><strong>N</strong></em><br/>OUTPUT (CAN BE DISPLAYED): <em><strong>O</strong></em>{:/}
**Subscript**{::nomarkdown}<pre><code>  subscript</code></pre>{:/} | 4 | SUBSCRIPT is the pointer to the legal subscripts in the LR SUBSCRIPT file.  CH for Chem, Hem, Tox, Ser, Ria, etc., MI for Microbiology, BB for Blood Bank, EM for Electron Microscopy, SP for Surgical Pathology, CY for Cytology, AU for Autopsy.<br/>This field is required for all orderable tests.<br/> Bank, EM for Electron Microscopy, SP for Surgical Pathology, CY for<br/> Cytology, AU for Autopsy. | ENUMERATION |  | {::nomarkdown}BLOOD BANK: <em><strong>BB</strong></em><br/>ELECTRON MICROSCOPY: <em><strong>EM</strong></em><br/>SURGICAL PATHOLOGY: <em><strong>SP</strong></em><br/>CYTOLOGY: <em><strong>CY</strong></em><br/>MICROBIOLOGY: <em><strong>MI</strong></em><br/>CHEM, HEM, TOX, SER, RIA, ETC.: <em><strong>CH</strong></em><br/>WORKLOAD: <em><strong>WK</strong></em><br/>AUTOPSY: <em><strong>AU</strong></em>{:/}
**Location (data Name)**{::nomarkdown}<pre><code>  location_data_name</code></pre>{:/} | 5 | LOCATION (DATA NAME) is the exact character representation of the <br/>corresponding entry in the RESULTS file.  The input transform receives<br/>from SUBSCRIPT of the previously defined piece, as well as the node and <br/>piece information from the data definition file for the result. | STRING | INDEXED | 
**Accession Area**{::nomarkdown}<pre><code>  accession_area</code></pre>{:/} | 6 | This is the appropriate institution/division this test is performed at.<br/> panel, all tests<br/>on that panel will be assigned to the entered accession area.  If some of<br/>the panel's tests go to other accession areas, leave this field blank.<br/>This will be the default accession area for this test. | OBJECT |  | [Accession_Area-60_11](#Accession_Area-60_11)
**Unique Accession #**{::nomarkdown}<pre><code>  unique_accession_number</code></pre>{:/} | 7 | If this field contains YES then this test will have a unique accession number whenever it is accessioned, even though it may be ordered with other tests.  If the test may be performed with other tests on the same specimen, this field should be blank. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Unique Collection Sample**{::nomarkdown}<pre><code>  unique_collection_sample</code></pre>{:/} | 8 | This field should be entered only if the test is never done on any other<br/>collection sample than the ONE designated in Select COLLECTION SAMPLE:<br/>The system will then not bother asking if the sample is the correct one. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Lab Collection Sample**{::nomarkdown}<pre><code>  lab_collection_sample</code></pre>{:/} | 9 | This entry, for the given Laboratory Test, is THE collection sample brought<br/>back on routine phlebotomy collection by the lab when they make rounds<br/>on the wards.  If blank, the test CANNOT be ordered for routine collection. | POINTER |  | [Collection_Sample-62](Collection_Sample-62)
**Required Test**{::nomarkdown}<pre><code>  required_test</code></pre>{:/} | 10 | This field should be YES if this is a mandatory test, i.e., if no data is reported, the default status is "pending".<br/> reported, the default status is "pending". | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Field**{::nomarkdown}<pre><code>  field</code></pre>{:/} | 13 | Data Dictionary field in file 63. | STRING |  | 
**Procedure (snomed)**{::nomarkdown}<pre><code>  procedure_snomed</code></pre>{:/} | 14 | This is the SNOMED name or code of this test. | POINTER |  | Procedure_Field-61_5
***quick Index**{::nomarkdown}<pre><code>  quick_index</code></pre>{:/} | 15 | No longer used.  Will be deleted after this version.<br/>index list.  Enter YES to include, @ to delete. | BOOLEAN | DEPRECATED | 
**Extra Labels**{::nomarkdown}<pre><code>  extra_labels</code></pre>{:/} | 16 | If blank, the minimum number of labels (accounting for required volume) is<br/>generated.  Enter a positive number for extra copies, -1 if NO label is<br/>desired. | NUMERIC |  | 
**Highest Urgency Allowed**{::nomarkdown}<pre><code>  highest_urgency_allowed</code></pre>{:/} | 17 | The highest urgency allowed must be stored here.<br/>The smaller the number, the more urgent. | POINTER | REQUIRED | Urgency-62_05
**Forced Urgency**{::nomarkdown}<pre><code>  forced_urgency</code></pre>{:/} | 18 | This specifies the default urgency status of this test.<br/>It points to the URGENCY file. | POINTER |  | Urgency-62_05
**Print Name**{::nomarkdown}<pre><code>  print_name</code></pre>{:/} | 51 | Default test heading for cumulative results reports.  (May be different in LAB REPORTS file 64.5.)<br/>in LAB REPORTS file 64.5) | STRING | INDEXED<br/>REQUIRED | 
**Reserved**{::nomarkdown}<pre><code>  reserved</code></pre>{:/} | 52 | Reserved for future use. | STRING |  | 
**Print Code**{::nomarkdown}<pre><code>  print_code</code></pre>{:/} | 53 | Represents MUMPS code for extraction or justification of the value that<br/>is in the file.  It's particularly useful for displaying abbreviated<br/>information for sets.  It could be used to append trailing zeros after a<br/>decimal point. | STRING |  | 
**Pretty Print Entry**{::nomarkdown}<pre><code>  pretty_print_entry</code></pre>{:/} | 54 | This is the Pretty Print Routine (see next field) line entry point.<br/>Some programs have more than one entry to give a "special" display. | STRING |  | 
**Pretty Print Routine**{::nomarkdown}<pre><code>  pretty_print_routine</code></pre>{:/} | 55 | If no entry is made, (and the test is type 'O'utput or 'B'oth), display<br/>output from the [LRGEN] menu option is a general cumulative.  With a<br/>program name here, [LRGEN] instead runs the alternate program for display. | STRING |  | 
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | 56 | This is the print order of the test within its accession area. | NUMERIC |  | 
**National VA Lab Code**{::nomarkdown}<pre><code>  national_va_lab_code</code></pre>{:/} | 64 | This field is used to map tests in file 60 to the VA National<br/>Lab codes found in file 64. | POINTER | INDEXED | Wkld_Code-64
**Result Nlt Code**{::nomarkdown}<pre><code>  result_nlt_code</code></pre>{:/} | 64.1 | This is the workload procedure code associated with this test.  It is used<br/>in compiling laboratory workload statistics. | POINTER |  | Wkld_Code-64
**Catalog Item**{::nomarkdown}<pre><code>  catalog_item</code></pre>{:/} | 64.2 | This field is used to indicate that this entry is to be included in the<br/>Electronic Catalog. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Edit Code**{::nomarkdown}<pre><code>  edit_code</code></pre>{:/} | 98 | Points to EXECUTE CODE file. | POINTER |  | Execute_Code-62_07
***batch Data Code**{::nomarkdown}<pre><code>  batch_data_code</code></pre>{:/} | 99.1 | No longer used.  Will be deleted after 1/89. | POINTER | DEPRECATED | 
**Execute On Data Review**{::nomarkdown}<pre><code>  execute_on_data_review</code></pre>{:/} | 99.2 | At the time a test or panel of tests is reviewed, the execute code is run. | POINTER |  | Execute_Code-62_07
**Site/specimen**{::nomarkdown}<pre><code>  site_specimen</code></pre>{:/} | 100 | Processing specimen type for each entry in the Lab Collection Sample field.<br/>Example:  Sodium can be determined on serum and urine.  Entries in <br/>this field are not appropriate (or even used) if the test is a panel of<br/> tests. | OBJECT |  | [Site_specimen-60_01](#Site_specimen-60_01)
**General Processing Inst.**{::nomarkdown}<pre><code>  general_processing_inst</code></pre>{:/} | 110 | This may include any processing instructions pertinent to this test. | STRING |  | 
**Lab Test Included In Panel**{::nomarkdown}<pre><code>  lab_test_included_in_panel</code></pre>{:/} | 200 | Enter only if this is a panel of other tests, e.g. if the "Laboratory Test"<br/>is ELECTROLYTES, the entries here might be, NA, CL, K, CO2.  If it's an<br/>ADMIT PROFILE, they might be ELECTROLYTES, LIVER FUNCTION, CARDIAC ENZYMES. | OBJECT |  | [Lab_Test_Included_In_Panel-60_02](#Lab_Test_Included_In_Panel-60_02)
**Collection Sample**{::nomarkdown}<pre><code>  collection_sample</code></pre>{:/} | 300 | Enter the appropriate collection sample(s) for standard processing in the<br/>lab.  These are the common names that the phlebotomists and ward personnel<br/>would recognize.  The first entry is the "default" collection sample. | OBJECT |  | [Collection_Sample-60_03](#Collection_Sample-60_03)
**General Ward Instructions**{::nomarkdown}<pre><code>  general_ward_instructions</code></pre>{:/} | 310 | Text to be seen by the ward each time the test is ordered regardless of<br/>the type of collection sample. | STRING |  | 
**Required Comment**{::nomarkdown}<pre><code>  required_comment</code></pre>{:/} | 320 | Points to EXECUTE CODE file. | POINTER |  | Execute_Code-62_07
**Data Name**{::nomarkdown}<pre><code>  data_name</code></pre>{:/} | 400 | If the test is a panel, skip this entry!  If it is an individual test,<br/>AND IS PART OF THE CHEM, HEM, TOX, SER, RIA, ETC. area, in order to<br/>be able to ENTER results, must have an entry!  Micro, Blood Bank,<br/>Anatomic Path, excluded. | POINTER |  | Lab_Data-63
**Culture Id Prefix**{::nomarkdown}<pre><code>  culture_id_prefix</code></pre>{:/} | 412 |  Used by the Vitek to make the accession number unique for down load.<br/>  This number should be zero to nine. This number is appended to the <br/>front of the accession number.<br/>   If there is no entry in this field, this test will not be downloaded. | NUMERIC |  | 
**Verify Wkld Code**{::nomarkdown}<pre><code>  verify_wkld_code</code></pre>{:/} | 500 | The College of American Pathologists Workload codes for<br/> the test/procedure are entered here. | OBJECT |  | [Verify_Wkld_Code-60_12](#Verify_Wkld_Code-60_12)
**Accession Wkld Code**{::nomarkdown}<pre><code>  accession_wkld_code</code></pre>{:/} | 500.1 |  This subfile holds the WKLD codes to be credited during the accession<br/>process. | OBJECT |  | [Accession_Wkld_Code-60_13](#Accession_Wkld_Code-60_13)
***ask Amis/cap Codes**{::nomarkdown}<pre><code>  ask_amis_cap_codes</code></pre>{:/} | 501 |  This field is not longer used by AMIS/WORKLOAD. It will be made obsolete with<br/>V5.2 and will be deleted in later release. Consult the section on workload<br/>in your implementation guide. | BOOLEAN | DEPRECATED | 
**Combine Test During Order**{::nomarkdown}<pre><code>  combine_test_during_order</code></pre>{:/} | 503 |    This field works in conjunction with combine test field in 69.9<br/>If you do not want this to be combined with any other test answer<br/>  NO --- A NULL ANSWER MEANS YES | ENUMERATION |  | {::nomarkdown}YES: <em><strong>0</strong></em><br/>NO: <em><strong>1</strong></em>{:/}
**Cis Test Code**{::nomarkdown}<pre><code>  cis_test_code</code></pre>{:/} | 504 |  This field is used by Clinical Information System such as those<br/>found in MICU. This field is not used with the laboratory package it<br/>self but is a special field for interface with external system computer<br/>systems. | STRING |  | 
**Site Notes Date**{::nomarkdown}<pre><code>  site_notes_date</code></pre>{:/} | 505 |  This is the date of this particular note. | OBJECT |  | [Site_Notes_Date-60_0505](#Site_Notes_Date-60_0505)
**Default Site/specimen Cpt**{::nomarkdown}<pre><code>  default_site_specimen_cpt</code></pre>{:/} | 506 | If a CPT cannot be determined by the SPECIMEN CPT (#96) field within the <br/>SITE/SPECIMEN (#100) multiple, or by the HCPCS CODE (#507) field, or by<br/>locating an active CPT Code in the WKLD CODE file (#64) entry pointed to<br/>by the NATIONAL VA LAB CODE (#64) field, then the CPT in this field is<br/>the default. | POINTER |  | [Cpt-81](Cpt-81)
**Hcpcs Code**{::nomarkdown}<pre><code>  hcpcs_code</code></pre>{:/} | 507 | HCFA Common Procedure Coding System (HCPCS) is a coding system that is <br/>composed of Level I codes (CPT codes), Level II codes (national codes),<br/>and Level III codes (local codes). Level I (CPT) codes are five digit<br/>numeric codes that describe procedures and tests. CPT codes are developed <br/>and maintained by the AMA with annual updates. Level II (national) codes <br/>are five digit alpha numeric codes that describe pharmaceuticals,<br/>supplies, procedures, tests and services. Level II codes are developed and<br/>maintained by CMS with quarterly updates. Level III (local) codes are five<br/>digit alpha numeric codes that are being phased out by the fiscal <br/>intermediaries. | POINTER |  | [Cpt-81](Cpt-81)
**Ama Compliant/billable Panel**{::nomarkdown}<pre><code>  ama_compliant_billable_panel</code></pre>{:/} | 508 | If this panel test is an AMA compliant or otherwise billable panel,<br/>enter a 'Yes' in this field.  If this field is set to 'Yes' and a valid <br/>CPT code is on file, the CPT code for the panel will be sent to PCE for <br/>billing purposes as a bundled panel.<br/> <br/>If this field is set to 'No', the panel will be unbundled into it's <br/>individual atomic tests and the CPT codes for those atomic tests will be <br/>sent to PCE for billing purposes.<br/> <br/>Note: This field is only functional for a panel test. This field is <br/>ignored for an atomic test.<br/> <br/>Refer to the Clinical Indicator Data Capture (CIDC) implementation<br/>guide for further instruction for managing this field.<br/> | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Accession_Area-60_11"></a>Accession Area (60.11)

<dl>
<dt>ID</dt><dd>Accession_Area-60_11</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Institution**{::nomarkdown}<pre><code>  institution</code></pre>{:/} | .01 | This is the appropriate institution/division this test is performed at.<br/>If this test is part of a panel that does not have an accession area<br/>defined for the panel, that panel will be expanded based on the<br/>institution/division the program is operating under.  I.e., if the<br/>institution doesn't find a match, the panel test ordered will not<br/>include this test. | POINTER | REQUIRED | [Institution-4](Institution-4)
**Accession Area**{::nomarkdown}<pre><code>  accession_area</code></pre>{:/} | 1 | This is the appropriate accession area for this test.  If the test is a<br/>panel, all tests on that panel will be assigned to the entered accession<br/>area.  If some of the panel's tests go to other accession areas, leave this<br/>field blank.  This will be the default accession area for this test. | POINTER |  | [Accession-68](Accession-68)

[&uarr; Return to top](#top)<br/>


### <a name="Site_specimen-60_01"></a>Site/specimen (60.01)

<dl>
<dt>ID</dt><dd>Site_specimen-60_01</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site/specimen**{::nomarkdown}<pre><code>  site_specimen</code></pre>{:/} | .01 | Processing specimen type for each entry in the Lab Collection Sample field.<br/>Example:  Sodium can be determined on serum and urine.<br/>To enter a Site/specimen, a Data name must be entered. | POINTER | INDEXED<br/>REQUIRED | [Topography_Field-61](Topography_Field-61)
**Reference Low**{::nomarkdown}<pre><code>  reference_low</code></pre>{:/} | 1 | This is the user entered reference low value for this test.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner:<br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
**Reference High**{::nomarkdown}<pre><code>  reference_high</code></pre>{:/} | 2 | This is the user entered reference high value for this test.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
**Critical Low**{::nomarkdown}<pre><code>  critical_low</code></pre>{:/} | 3 | This is the user entered critical low value for this test.<br/>Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
**Critical High**{::nomarkdown}<pre><code>  critical_high</code></pre>{:/} | 4 | This is the user entered critical high value of this test.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
**Interpretation**{::nomarkdown}<pre><code>  interpretation</code></pre>{:/} | 5.5 | Enter any remark to accompany EVERY test result. These remarks may be edited and formatted with the FileMan text editor.  The text may be other range information, special conditions, etc.<br/>edited and formatted with the FileMan text editor.<br/>The text may be other range information, special conditions, etc. | STRING |  | 
**Units**{::nomarkdown}<pre><code>  units</code></pre>{:/} | 6 | UNITS represents such things as grams, number of items per cubic millimeter,<br/>or microliter. | STRING |  | 
**Type Of Delta Check**{::nomarkdown}<pre><code>  type_of_delta_check</code></pre>{:/} | 7 | Points to DELTA CHECK file. | POINTER |  | Delta_Checks-62_1
**Delta Value**{::nomarkdown}<pre><code>  delta_value</code></pre>{:/} | 8 | DELTA VALUE is the value that is passed to the Delta Check Code. | STRING |  | 
**Default Value**{::nomarkdown}<pre><code>  default_value</code></pre>{:/} | 9 | Leave blank or enter the most common (say, >80% of the time) response for<br/>the test. | STRING |  | 
**Therapeutic Low**{::nomarkdown}<pre><code>  therapeutic_low</code></pre>{:/} | 9.2 | This is the low end value of the therapeutic range.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
**Therapeutic High**{::nomarkdown}<pre><code>  therapeutic_high</code></pre>{:/} | 9.3 | This is the high end value of the therapeutic range.  Used to flag results.<br/>If both the low and high are defined it will print in this manner:<br/>        low : 10<br/>        high : 50<br/>If only the low is defined and it is numeric it will print in this<br/>manner: <br/>        low: 10<br/>If only the low is defined and it is alphanumeric it will print in <br/>this manner:<br/>        NORMAL<br/>If only the high is defined and it is numeric it will print in this <br/>manner:<br/>        high: 50<br/>If only the high is defined and it is alphanumeric it will print in<br/>this manner:<br/>        >1000 | STRING |  | 
***amis/rcs 14-4**{::nomarkdown}<pre><code>  amis_rcs_144</code></pre>{:/} | 10 | No longer used.  Will be deleted after this version  | POINTER | DEPRECATED | 
**Use For Reference Testing**{::nomarkdown}<pre><code>  use_for_reference_testing</code></pre>{:/} | 13 | Indicates if the reference ranges and units associated with this<br/>specimen type can be used when manually entering results of testing<br/>performed at another laboratory. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Foreign Computer System**{::nomarkdown}<pre><code>  foreign_computer_system</code></pre>{:/} | 20 | Reserved for future use. Do not use. | OBJECT |  | [Foreign_Computer_System-60_2](#Foreign_Computer_System-60_2)
**Loinc Code**{::nomarkdown}<pre><code>  loinc_code</code></pre>{:/} | 95.3 |  This field contains the pointer to the LAB LOINC (#95.3) file.  | POINTER | INDEXED | Lab_Loinc-95_3
**Specimen Cpt**{::nomarkdown}<pre><code>  specimen_cpt</code></pre>{:/} | 96 |  | OBJECT |  | [Specimen_Cpt-60_196](#Specimen_Cpt-60_196)

[&uarr; Return to top](#top)<br/>


### <a name="Foreign_Computer_System-60_2"></a>Foreign Computer System (60.2)

<dl>
<dt>ID</dt><dd>Foreign_Computer_System-60_2</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Foreign Computer System**{::nomarkdown}<pre><code>  foreign_computer_system</code></pre>{:/} | .01 | Reserved for future use. Do not use. | STRING | INDEXED<br/>REQUIRED | 
**Foreign Item #**{::nomarkdown}<pre><code>  foreign_item_number</code></pre>{:/} | 1 | RESERVED FOR FUTURE USE | STRING |  | 
**Integer**{::nomarkdown}<pre><code>  integer</code></pre>{:/} | 2 | RESERVED FOR FUTURE USE | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Unit Conversion**{::nomarkdown}<pre><code>  unit_conversion</code></pre>{:/} | 3 | RESERVED FOR FUTURE USE | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Specimen_Cpt-60_196"></a>Specimen Cpt (60.196)

<dl>
<dt>ID</dt><dd>Specimen_Cpt-60_196</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Specimen Cpt**{::nomarkdown}<pre><code>  specimen_cpt</code></pre>{:/} | .01 | A CPT associated with the specimen | POINTER | INDEXED<br/>REQUIRED | [Cpt-81](Cpt-81)
**Active Date (csv)**{::nomarkdown}<pre><code>  active_date_csv</code></pre>{:/} | 1 | This the active date of the SPECIMEN CPT for CSV purposes. | DATE-TIME |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Lab_Test_Included_In_Panel-60_02"></a>Lab Test Included In Panel (60.02)

<dl>
<dt>ID</dt><dd>Lab_Test_Included_In_Panel-60_02</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | This number signifies the order the tests are displayed in the Load/work<br/>lists under each appropriate accession, in the Enter/Edit options, and<br/>in the interim reports. | IEN |  | 
**Lab Test**{::nomarkdown}<pre><code>  lab_test</code></pre>{:/} | .01 | If the entry is to be changed or the number sequence is to be changed, the<br/>entry must be first deleted to be moved to a different position in the<br/>panel. | POINTER | INDEXED<br/>REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Ap Multiply Factor**{::nomarkdown}<pre><code>  ap_multiply_factor</code></pre>{:/} | .02 | For workload if procedure is counted more than once the number<br/> of times counted is entered here.<br/> Used only for cytology workload and labels. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Collection_Sample-60_03"></a>Collection Sample (60.03)

<dl>
<dt>ID</dt><dd>Collection_Sample-60_03</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Collection Sample**{::nomarkdown}<pre><code>  collection_sample</code></pre>{:/} | .01 | Enter the appropriate collection sample(s) for standard processing in the lab.  These are the common names the phlebotomists and ward personnel use and would recognize.  The first entry will be the "default<br/>" collection sample.  Points to the COLLECTION SAMPLE file. | POINTER | INDEXED<br/>REQUIRED | [Collection_Sample-62](Collection_Sample-62)
**Form Name/number**{::nomarkdown}<pre><code>  form_name_number</code></pre>{:/} | 1 | The identification of the proper Lab slip for this test. | STRING |  | 
**Min Vol (in Mls.)**{::nomarkdown}<pre><code>  min_vol_in_mls</code></pre>{:/} | 3 | Number of milliliters required to perform the test.  This number is summed<br/>during the creation of the routine phlebotomy collection list to compute<br/>the minimum number of samples to collect. | NUMERIC |  | 
**Max. Order Freq.**{::nomarkdown}<pre><code>  max_order_freq</code></pre>{:/} | 4 | Use this field to control how often a test may be ordered within a certain <br/>time period (# of days). The entry will then force the system to remind<br/>the ordering person that the order they are placing for this test exceeds<br/>the maximum order frequency.  If you enter 3, the test may only be ordered<br/>once every three days. | NUMERIC |  | 
**Single Day Max Order Freq**{::nomarkdown}<pre><code>  single_day_max_order_freq</code></pre>{:/} | 4.5 | Enter a number specifying the maximum number of times a test can be ordered<br/>in a single day. | NUMERIC |  | 
**Ward Remarks**{::nomarkdown}<pre><code>  ward_remarks</code></pre>{:/} | 5 | Text to be seen by the ward each time the test is ordered for a specific<br/>collection sample. | STRING |  | 
**Lab Processing Instructions **{::nomarkdown}<pre><code>  lab_processing_instructions_</code></pre>{:/} | 6 | Text seen by the lab as the test is received in the accession room. | STRING |  | 
**Required Comment**{::nomarkdown}<pre><code>  required_comment</code></pre>{:/} | 7 | Enter a comment or statement that may be required in regards to this test.<br/>Points to EXECUTE CODE file. | POINTER |  | Execute_Code-62_07
**Sample Wkld Code**{::nomarkdown}<pre><code>  sample_wkld_code</code></pre>{:/} | 500 |  If there is a particular WKLD code which is associate the assaying<br/>this type of specimen, enter that WKLD code here. For example<br/>spinal fluid electrophoresis, this specimen must be concentrated<br/>before the procedure can be performed. | OBJECT |  | [Sample_Wkld_Code-60_14](#Sample_Wkld_Code-60_14)

[&uarr; Return to top](#top)<br/>


### <a name="Sample_Wkld_Code-60_14"></a>Sample Wkld Code (60.14)

<dl>
<dt>ID</dt><dd>Sample_Wkld_Code-60_14</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sample Wkld Code**{::nomarkdown}<pre><code>  sample_wkld_code</code></pre>{:/} | .01 |   If this test has a sample type which should have a specific<br/>WKLD code associate with it, enter the WKLD code here.<br/> Example: Urine electrophoresis always has a urine protein performed.<br/>enter the WKLD code for that procedure here. It will only be counted<br/>for collection sample of urine.<br/>  Note: This field is similar to Verify WKLD code sub-file except for<br/>the treatment of the suffix and collection sample specific. | POINTER | REQUIRED | Wkld_Code-64
**Sample Wkld Code #**{::nomarkdown}<pre><code>  sample_wkld_code_number</code></pre>{:/} | 1 |  This field contains the actual WKLD Code number. | STRING |  | 
**Test Multiply Factor**{::nomarkdown}<pre><code>  test_multiply_factor</code></pre>{:/} | 2 |  If this particular WKLD code should be multiplied in order to receive<br/>proper count. Enter that number here. The default is 1.<br/>  NOTE: This field is identical the field found in the Verify<br/>WKLD code field sub file. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Verify_Wkld_Code-60_12"></a>Verify Wkld Code (60.12)

<dl>
<dt>ID</dt><dd>Verify_Wkld_Code-60_12</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Verify Wkld Code**{::nomarkdown}<pre><code>  verify_wkld_code</code></pre>{:/} | .01 | The WKLD codes for this test are entered here.<br/>Enter only the WKLD codes for the procedures that are done at your<br/>hospital for this test. | POINTER | INDEXED<br/>REQUIRED | Wkld_Code-64
**Verify Wkld Code #**{::nomarkdown}<pre><code>  verify_wkld_code_number</code></pre>{:/} | 1 | This contains the WKLD codes for this test. | STRING | REQUIRED | 
**Test Multiply Factor**{::nomarkdown}<pre><code>  test_multiply_factor</code></pre>{:/} | 2 |  If this WKLD code should be counted more than once, enter the number of<br/>times it should be counted to get the total correct workload. If the field<br/>is blank, then it will automatically be counted 1 time.<br/>   Note: In version prior to V5.2, this field was named the Default Yes<br/>field. That field is not used with V5.2 and greater. | NUMERIC |  | 
**Protect Suffix**{::nomarkdown}<pre><code>  protect_suffix</code></pre>{:/} | 3 | If you wish to prevent the suffix from being converted to another suffix<br/>during verification. Enter YES in this field.<br/>  Codes which do not have a .0000 suffix need not be protected. They are<br/>not changed during verification. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Accession_Wkld_Code-60_13"></a>Accession Wkld Code (60.13)

<dl>
<dt>ID</dt><dd>Accession_Wkld_Code-60_13</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Accession Wkld Code**{::nomarkdown}<pre><code>  accession_wkld_code</code></pre>{:/} | .01 |  Enter the WKLD code used to identify the accession workload for<br/>this test. This field can be also used for prep procedures, ie<br/>inoculating culture plates. This WKLD code count will appear<br/>on the date the specimen was accessioned into the laboratory.<br/>  This field functions in the same manner as the WKLD codes, <br/>except it doesn't require a completion date to be counted.<br/> For CYTOLOGY SCREENING WORKLOAD the appropriate WKLD codes are<br/> entered here. | POINTER | REQUIRED | Wkld_Code-64
**Accession Wkld Code #**{::nomarkdown}<pre><code>  accession_wkld_code_number</code></pre>{:/} | 1 |   This field contains the actual WKLD Code number. | NUMERIC |  | 
**Test Multiply Factor**{::nomarkdown}<pre><code>  test_multiply_factor</code></pre>{:/} | 2 |   If this WKLD code should be counted more than once, enter that number<br/>here. The default is 1.<br/>  This field is identical to the multiply field in the verification WKLD<br/>code sub file. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Site_Notes_Date-60_0505"></a>Site Notes Date (60.0505)

<dl>
<dt>ID</dt><dd>Site_Notes_Date-60_0505</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site Notes Date**{::nomarkdown}<pre><code>  site_notes_date</code></pre>{:/} | .01 | Date of the note. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Text**{::nomarkdown}<pre><code>  text</code></pre>{:/} | 1 |  Actual text of the note for this test. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}