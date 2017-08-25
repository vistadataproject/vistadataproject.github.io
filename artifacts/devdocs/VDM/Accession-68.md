---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Accession-68<br/>
<a name="top"></a>
# Accession (68)
  This file contains entries which represent the functional subdivisions or departments of the laboratory, referred to by the Laboratory package software as accession areas.  The file is used to define the site-specific information needed by your laboratory for each accession area.  This  includes the type of accession transform (or how often the accession  numbers assigned to test performed in that area will be reset to 1), the abbreviation of the area (which becomes part of the accession identifying the specimen and test results), the order in which the data for tests performed in the area will be displayed and other specific information.   Definitions of variables used:  LRDFN = Internal entry in LR( that is being worked on.  LRIDT = Inverse date/time that data is stored at. ^LR(LRDFN,"CH",  LRAA = internal value of accession area ^LRO(68,  LRAD = date working on in accession area ^LRO(68,LRAA,1,  LRAN = accession number working on ^LRO(68,LRAA,1,LRAD,1,  LRODT = order date ^LRO(69,  LRSN = order entry within date ^LRO(69,LRORD,1, CROSS REFERENCE DESCRIPTION:  ^LRO(68,"B",'ACCESSION AREA',LRAA)  ^LRO(68,"AC",LRDFN,'DATE RESULTS AVAILABLE','DATA NODE') =     used by the cumulative  ^LRO(68,"AD",'LAB SECTION',LRAC)  ^LRO(68,"AVS",LRAA,LRAD,LRAN)=LRDFN^LRIDT     used by micro verify by supervisor  ^LRO(68,"MI",LRDFN,LRIDT)     used by micro for cumulative report  ^LRO(68,LRAA,1,LRAD,1,LRAN,"AE")     used for WKLD count     ^LRO(68,LRAA,1,LRAD,1,"B",'ENTRY FILE 69',LRAN)  ^LRO(68,LRAA,1,LRAD,1,"C",'IDENTITY',LRAN)  ^LRO(68,LRAA,1,LRAD,1,"E",'LAB ARRIVAL TIME',LRAN)  ^LRO(68,LRAA,1,LRAD,1,"D",'ORDER #',LRAN)  ^LRO(68,LRAA,1,LRAD,1,"AC",'DATE/TIME COMPLETE',LRAN)  ^LRO(68,LRAA,1,LRAD,1,"AD",'DATE COMPLETE',LRAN)  ^LRO(68,LRAA,1,LRAD,4,"B",'LAB TEST',LRAN)

**Global:** ^LRO(68,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Area**{::nomarkdown}<pre><code>  area</code></pre>{:/} | .01 | The accession area of the Lab. | STRING | INDEXED<br/>REQUIRED | 
**Lr Subscript**{::nomarkdown}<pre><code>  lr_subscript</code></pre>{:/} | .02 | This represents the functional area of the Lab.  Must be chosen from a set of codes. | ENUMERATION | REQUIRED | {::nomarkdown}BLOOD BANK: <em><strong>BB</strong></em><br/>ELECTRON MICROSCOPY: <em><strong>EM</strong></em><br/>SURGICAL PATHOLOGY: <em><strong>SP</strong></em><br/>CYTOLOGY: <em><strong>CY</strong></em><br/>MICROBIOLOGY: <em><strong>MI</strong></em><br/>CHEM, HEM, TOX, RIA, SER, etc.: <em><strong>CH</strong></em><br/>AUTOPSY: <em><strong>AU</strong></em>{:/}
**Clean Up**{::nomarkdown}<pre><code>  clean_up</code></pre>{:/} | .03 | Triggered by the Accession Transform field.<br/>Determines frequency of clean up on accession lists. | ENUMERATION | REQUIRED | {::nomarkdown}MONTHLY: <em><strong>M</strong></em><br/>QUARTERLY: <em><strong>Q</strong></em><br/>YEARLY: <em><strong>Y</strong></em><br/>DAILY: <em><strong>D</strong></em><br/>WEEKLY: <em><strong>W</strong></em>{:/}
**Common Accession #&#x27;s With Area**{::nomarkdown}<pre><code>  common_accession_numbers_with_area</code></pre>{:/} | .04 | If another accession area is designated here, that other accession area<br/>will be used to find the next "available" accession number which will be<br/>updated on the other accession area. | POINTER | INDEXED | [Accession-68](Accession-68)
**Accession Transform**{::nomarkdown}<pre><code>  accession_transform</code></pre>{:/} | .05 | Determines when a new accession list begins.<br/>Points to the EXECUTE CODE file. | POINTER | REQUIRED | Execute_Code-62_07
**Acc Code**{::nomarkdown}<pre><code>  acc_code</code></pre>{:/} | .051 | Mumps code that is triggered by the Accession Transform field. | STRING |  | 
**Verification Code**{::nomarkdown}<pre><code>  verification_code</code></pre>{:/} | .06 | Points to EXECUTE CODE file. | POINTER |  | Execute_Code-62_07
**Ver Code**{::nomarkdown}<pre><code>  ver_code</code></pre>{:/} | .061 | Triggered by the Verification Code field. | STRING |  | 
***identity Control**{::nomarkdown}<pre><code>  identity_control</code></pre>{:/} | .07 | No longer used.  Will be deleted in later version. | POINTER | DEPRECATED | 
***ident Code**{::nomarkdown}<pre><code>  ident_code</code></pre>{:/} | .071 | No longer used.  Will be deleted in later version. | STRING | DEPRECATED | 
**Print Order**{::nomarkdown}<pre><code>  print_order</code></pre>{:/} | .08 | The print order of the Accession Area.  If the entry is less than 1 it will not be displayed. | NUMERIC |  | 
**Bypass Rollover**{::nomarkdown}<pre><code>  bypass_rollover</code></pre>{:/} | .085 | If you choose not to bypass rollover (i.e., have a null entry), then any unverified data will be "rolled over" to the next day.  You will not be allowed to have a duplicate accession number. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | .09 | Abbreviation for the accession area.  Must have programmer privileges to alter this entry. | STRING | REQUIRED | 
**Associated Division**{::nomarkdown}<pre><code>  associated_division</code></pre>{:/} | .091 |  | POINTER |  | [Institution-4](Institution-4)
**Type Of Accession Number**{::nomarkdown}<pre><code>  type_of_accession_number</code></pre>{:/} | .092 | This field determines whether a full unique accession number is used for<br/>barcoding and messages between instruments.  The unique accession number<br/>is built from three different numbers, the accession area, the date, and<br/>the accession entry number. If 'S'hort is selected, the accession number<br/>used in barcodes and for input at the instrument keypad is treated the <br/>same as it was traditionally.  The 'L'ong unique accession will always be<br/>generated, it just won't be used in communicating with the instrument, or <br/>for barcoding.  <br/>Examples of the four accession transform<br/>types are:<br/><br/> Daily/Weekly:   3242889999<br/> where     32 is the Accession area identifier (field .091)<br/>            4 is the last digit of the year (1994)<br/>          288 is the Julian date for Oct 15, 1994<br/>         9999 is the 9,999th accession for that date<br/> If the 'L'ong version was 3242889999, 'S'hort would be 9999<br/> If the 'L'ong version was 3242880001, 'S'hort would be 1<br/><br/> Yearly:   3294999999<br/> where      32 is the Accession area identifier (field .091)<br/>            94 is the last two digits of the year (1994)<br/>        999999 is the 999,999th accession for that year<br/> If the 'L'ong version was 3294999999, 'S'hort would be 999999<br/> If the 'L'ong version was 3294000001, 'S'hort would be 1<br/><br/> Quarterly:   3240499999<br/> where      32 is the Accession area identifier (field .091)<br/>             4 is the last digit of the year (1994)<br/>            04 is the fourth quarter of 1994<br/>         99999 is the 99,999th accession for that quarter<br/> If the 'L'ong version was 3240499999, 'S'hort would be 99999<br/> If the 'L'ong version was 3240400001, 'S'hort would be 1<br/><br/> Monthly:   3241299999<br/> where      32 is the Accession area identifier (field .091)<br/>             4 is the last digit of the year (1994)<br/>            12 is the twelfth month of 1994<br/>         99999 is the 99,999th accession for that month<br/> If the 'L'ong version was 3241299999, 'S'hort would be 99999<br/> If the 'L'ong version was 3241200001, 'S'hort would be 1 | ENUMERATION |  | {::nomarkdown}SHORT: <em><strong>S</strong></em><br/>LONG: <em><strong>L</strong></em>{:/}
***lab Section**{::nomarkdown}<pre><code>  lab_section</code></pre>{:/} | .095 |   THIS FIELD HAS BEEN MARKED FOR DELETION IN FUTURE VERSIONS<br/>THE FIELD LAB DIVISION (#.19) WILL BE USED INSTEAD PER WORKLOAD<br/>REVISION. | POINTER | DEPRECATED | 
**Non Lab Accession Area**{::nomarkdown}<pre><code>  non_lab_accession_area</code></pre>{:/} | .097 |  This field indicates if this particular accession area is operated by<br/>another service other than Pathology & Laboratory Medicine. If this<br/>accession area in staffed or funded from non Pathology sources, mark this<br/>field yes.<br/>   An example would be Blood Gas laboratory staffed or funded by<br/>Medicine service.<br/> <br/>HOWEVER<br/>If this accession area is used by Point of Care (ie. Nurses entering<br/>finger stick glucose) do not set this field to yes. Because in this case<br/>the location is relevant to DSS database.<br/> <br/>This field is used by the Laboratory DSS workload extraction routine to<br/>determine if the patient location should be passed or not. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Responsible Official**{::nomarkdown}<pre><code>  responsible_official</code></pre>{:/} | .1 | The responsible official in the laboratory.  Usually the Chief of Laboratory Service, or his designee. | POINTER |  | [New_Person-200](New_Person-200)
**Inhibit Area Label Printing**{::nomarkdown}<pre><code>  inhibit_area_label_printing</code></pre>{:/} | .11 | A YES entry stops all label printing for this accession area. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Lab Division**{::nomarkdown}<pre><code>  lab_division</code></pre>{:/} | .19 |   This field will be used to determine which lab division a particular<br/>accession area belongs.  If this field is not filled in, CP (Clinical<br/>Pathology ) will be assumed. | ENUMERATION | REQUIRED | {::nomarkdown}CLINICAL PATHOLOGY: <em><strong>CP</strong></em><br/>ANATOMIC PATHOLOGY: <em><strong>AP</strong></em>{:/}
**Numeric Identifier**{::nomarkdown}<pre><code>  numeric_identifier</code></pre>{:/} | .4 | This field is used to build the unique accession identifier number.<br/>It is used as the first two characters of the number.  Use the numbers 1-9<br/>and uppercase letters A-Z to designate the identifier. For example, if<br/>you enter 99 all accession identifiers for this accession area will<br/>start with 99, e.g. 9923400025.<br/> <br/>If a single character is used the system will append a leading zero to<br/>the unique identifier generated.<br/> <br/>No two accession areas can use the same identifier.<br/> <br/>Changing the identifier should only be performed when accessioning is not<br/>occurring and when a situation requires it since personnel will memorize<br/>this identifier as representing the accesson area.<br/> <br/>Do NOT switch identifiers between active accession areas since this could<br/>compromise the uniqueness of the resulting unique identifier (UID). The<br/>software when generating a UID checks for the existence of the UID it will<br/>create for an accession. If it currently exists the UID being created will<br/>have "00" as the numeric identifier. | STRING |  | 
**Lock For Load/work List Build**{::nomarkdown}<pre><code>  lock_for_load_work_list_build</code></pre>{:/} | .7 | This locks the accession to allow only ONE<br/>load/work list to build at a time. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Lab Oos Location**{::nomarkdown}<pre><code>  lab_oos_location</code></pre>{:/} | .8 | Occassion Of Service (OOS)<br/> <br/> This field is used for passing data to the PCE API. This API is used<br/>to capture CPT codes for laboratory procedures.<br/> <br/>Special OOS Hospital locations have been created that are solely used for<br/>recording workload (No count locations). These OOS location all begin with<br/>'LAB DIV' in their names.<br/> <br/>Example of name:<br/>LAB DIV 600 OOS ID 108<br/>Where 600 is the Station Number from the Institution file (#4).<br/>Where 600 is the division Station Number where the work is done.<br/>Where 108 is the OOS ID (stop code) for the service doing the work.<br/> <br/>Note: The stop code could be one assigned to another service, ie Medicine.<br/>Stop Codes are not limited to Laboratory 108.<br/> <br/>The Laboratory Information Manager has special options used to create new<br/>OOS locations in HOSPITAL LOCATION file. These options are used when and<br/>new division is established or a new stop code is required.<br/> <br/>The location names are constructed by the option and should not be altered<br/>using FileMan. The naming convention is critical to the ability to assign<br/>OOS Hospital Locations to Laboratory Accession (#68) file.<br/> <br/>If a given Accession Area in the Accession file (#68) does not have a<br/>LAB OOS LOCATION S LOCATION (#.8) Hospital Location assigned, the DEFAULT<br/>LAB OOS LOCATION (#.8) from the LABORATORY SITE (#69.9) file will be used.<br/>If the DEFAULT LAB OOS LOCATION field is not defined, no workload will be<br/>captured. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**User Access Authorization**{::nomarkdown}<pre><code>  user_access_authorization</code></pre>{:/} | .9 | If left blank, any lab person may access this accession area.  If filled<br/>in, only lab persons holding the key that is entered here may use<br/>this accession area. | POINTER |  | Security_Key-19_1
**Instrumentation Controls**{::nomarkdown}<pre><code>  instrumentation_controls</code></pre>{:/} | 1 | Select the instrument (if appropriate, otherwise use the MANUAL selection)<br/>to be associated with the controls you will be selecting. | OBJECT |  | [Instrumentation_Controls-68_09](#Instrumentation_Controls-68_09)
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | 2 | The date of the accession. | OBJECT |  | [Date-68_01](#Date-68_01)
**Bar Code Print**{::nomarkdown}<pre><code>  bar_code_print</code></pre>{:/} | 5 |  This field is used by the label print utilities to determine if<br/>bar code labels should be printed for this accession area. | ENUMERATION |  | {::nomarkdown}CODE39 WITH CHECK DIGIT: <em><strong>3</strong></em><br/>NONE: <em><strong>0</strong></em><br/>CODE128: <em><strong>4</strong></em><br/>YES: <em><strong>1</strong></em><br/>CODE39: <em><strong>2</strong></em>{:/}
**Bar Code Pad**{::nomarkdown}<pre><code>  bar_code_pad</code></pre>{:/} | 5.1 | Enter the number of zeros ("0") to pad an accession number when printing<br/>a bar code using the accession number. Used when site needs a minimum length<br/>bar code on labels.<br/> <br/>Example if need a four digit bar code then enter four.<br/>        This would produce the following: <br/>        Accession number       Bar Code<br/>              1                  0001<br/>             12                  0012<br/>            123                  0123<br/>           1234                  1234<br/>          12345                 12345 | NUMERIC |  | 
**Alternate Label Entry**{::nomarkdown}<pre><code>  alternate_label_entry</code></pre>{:/} | 5.2 | Site can enter an alternate label entry point to be used instead of the<br/>standard lab label routine entry point defined in file LABORATORY SITE<br/>(#69.9).<br/> <br/>This field overrides the label routine settings in file LABORATORY SITE<br/>(#69.9) for this accession area. Field ALTERNATE LABEL ROUTINE (#5.3)<br/>must be completed for the software to use this field. See description<br/>of field #5.3. | STRING |  | 
**Alternate Label Routine**{::nomarkdown}<pre><code>  alternate_label_routine</code></pre>{:/} | 5.3 | Site can enter an alternate label routine to be used instead of the<br/>standard lab label routine defined in file LABORATORY SITE (#69.9).<br/> <br/>This field overrides the label routine settings in file LABORATORY SITE<br/>(#69.9) for this accession area. It is used in conjunction with field<br/>ALTERNATE LABEL ENTRY (#5.2) for building the variable LRLABEL. | STRING |  | 
**Reserved**{::nomarkdown}<pre><code>  reserved</code></pre>{:/} | 8 | Reserved for future use.<br/>the same choices you have for the entire lab. If you have selected<br/>special label in this file then the routine will use this field to<br/>determine what label style to us for this accession area. The field<br/>Bar Code Printer will determine where the label will print. Remember<br/>these three field work together. The Bar code printer, the special<br/>label, and the label type.<br/> <br/>  If you selected special label and leave this field blank the default<br/>will be the 2X5 uneven will be used.<br/> <br/>  NOTE **** These are the same selection available under field #<br/>302 of the LABORATORY SITE file (#69.9), LABEL TYPE. | ENUMERATION |  | {::nomarkdown}ORDER # FIRST: <em><strong>2</strong></em><br/>MEDLAB: <em><strong>3</strong></em><br/>SITE FILE: <em><strong>4</strong></em><br/>2X5 UNEVEN: <em><strong>1</strong></em><br/>SITE DEVELOPED VAF 10-1392: <em><strong>5</strong></em>{:/}
**Work Area**{::nomarkdown}<pre><code>  work_area</code></pre>{:/} | 9 |  This field should only be edited if this accession area is used for<br/>the purpose of workload definitions. This accession area is then used<br/>with load/worklist to define the area of the lab which should receive<br/>WKLD credit.<br/> <br/>SPECIMENS CAN NOT BE ACCESSIONED INTO THIS ACCESSION AREA. IT IS SOLELY<br/>FOR THE USE WKLD DEFAULT ANSWERS FOR LMIP/WKLD DATA COLLECTION. | ENUMERATION |  | {::nomarkdown}WORK AREA: <em><strong>WORK AREA</strong></em>{:/}
**Workload On**{::nomarkdown}<pre><code>  workload_on</code></pre>{:/} | 10 |   this field is used to activate wkld collection. Each accession area<br/>can be turned on independently. In order for this field to trigger wkld<br/>collection, the field WKLD STATS ON (#17) in the LABORATORY SITE (#69.9)<br/>file must also indicate ON. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Collect Std/qc/repeats**{::nomarkdown}<pre><code>  collect_std_qc_repeats</code></pre>{:/} | 11 |  If you wish to have the verification process to prompt the user for<br/>Standards, QC and Repeats after each session enter a Yes.<br/> This will cause the counts entered to be added to all test<br/>the user verified during that particular session.<br/> The function of entering this data can be also done by the option<br/>STD/QC/REPS/MANUAL WKLD COUNT [LR WKLD STD/QC/REPS] found on the <br/>Process Menu [LR DO!]. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**External Service Area**{::nomarkdown}<pre><code>  external_service_area</code></pre>{:/} | 12 | This field determines if the Accession Area is defined for send out tests. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Instrumentation_Controls-68_09"></a>Instrumentation Controls (68.09)

<dl>
<dt>ID</dt><dd>Instrumentation_Controls-68_09</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Instrumentation Controls**{::nomarkdown}<pre><code>  instrumentation_controls</code></pre>{:/} | .01 | You may only change the selection you have chosen by "selecting"<br/>another one.  If you wish to change THIS one, you must delete it first.<br/>(The internal FileMan number is significant, so we can't change the text.) | POINTER | REQUIRED | Auto_Instrument-62_4
**Control Name**{::nomarkdown}<pre><code>  control_name</code></pre>{:/} | 1 | The control that should always be placed with the accession number to be<br/>defined with the ACC # field .001 | OBJECT |  | [Control_Name-68_1](#Control_Name-68_1)

[&uarr; Return to top](#top)<br/>


### <a name="Control_Name-68_1"></a>Control Name (68.1)

<dl>
<dt>ID</dt><dd>Control_Name-68_1</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Acc #**{::nomarkdown}<pre><code>  acc_number</code></pre>{:/} | .001 | The numeric part of the accession to be assigned for the indicated<br/>control, if the number is available and automatic accessioning of<br/>controls is tasked. | IEN |  | 
**Control Name**{::nomarkdown}<pre><code>  control_name</code></pre>{:/} | .01 | The control that should always be placed with the accession number to be defined with the ACC # field .001. | POINTER | REQUIRED | Lab_Control_Name-62_3

[&uarr; Return to top](#top)<br/>


### <a name="Date-68_01"></a>Date (68.01)

<dl>
<dt>ID</dt><dd>Date-68_01</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | .01 | The date of the accession. | DATE-TIME | REQUIRED | 
**Accession Number**{::nomarkdown}<pre><code>  accession_number</code></pre>{:/} | 1 | The numeric part of the accession. | OBJECT |  | [Accession_Number-68_02](#Accession_Number-68_02)
***current Initials**{::nomarkdown}<pre><code>  current_initials</code></pre>{:/} | 2 | Will be deleted in future versions.<br/>the test(s). | STRING | DEPRECATED | 
**Current Accession Number**{::nomarkdown}<pre><code>  current_accession_number</code></pre>{:/} | 3 | The last used accession number. | STRING |  | 
***current Identity**{::nomarkdown}<pre><code>  current_identity</code></pre>{:/} | 4 | No longer used.  Will be deleted in later versions. 1/89. | STRING | DEPRECATED | 
**Current Verify Acc #**{::nomarkdown}<pre><code>  current_verify_acc_number</code></pre>{:/} | 5 | The last verified accession number. | NUMERIC |  | 
**Bull Algorithm Control Data**{::nomarkdown}<pre><code>  bull_algorithm_control_data</code></pre>{:/} | 6 | Data is stored here for use in Bull's algorithm. | OBJECT |  | [Bull_Algorithm_Control_Data-68_07](#Bull_Algorithm_Control_Data-68_07)
**Multi-rule VA Qc**{::nomarkdown}<pre><code>  multirule_va_qc</code></pre>{:/} | 7 | Quality control comparisons based on Westergard's suggested use of<br/>the Multi-rule Shewhart determinations are stored under this multiple. | OBJECT |  | [Multirule_VA_Qc-68_11](#Multirule_VA_Qc-68_11)

[&uarr; Return to top](#top)<br/>


### <a name="Accession_Number-68_02"></a>Accession Number (68.02)

<dl>
<dt>ID</dt><dd>Accession_Number-68_02</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Log**{::nomarkdown}<pre><code>  log</code></pre>{:/} | .001 | The numeric part of the accession. | IEN |  | 
**Lrdfn**{::nomarkdown}<pre><code>  lrdfn</code></pre>{:/} | .01 | The internal pointer to file 63 is stored here. | POINTER | REQUIRED | Lab_Data-63
**File #**{::nomarkdown}<pre><code>  file_number</code></pre>{:/} | 1 | The pointer to the File of Files for the entity in field .01 is stored <br/>here. | POINTER |  | [File-1](File-1)
**Original Accn Date**{::nomarkdown}<pre><code>  original_accn_date</code></pre>{:/} | 2 | The date part of the original accession is stored here. | DATE-TIME |  | 
**Date Ordered**{::nomarkdown}<pre><code>  date_ordered</code></pre>{:/} | 3 | The date the order was placed is stored here. | DATE-TIME |  | 
**Specimen Number**{::nomarkdown}<pre><code>  specimen_number</code></pre>{:/} | 4 | The internal specimen number is stored here. | NUMERIC |  | 
**Identity**{::nomarkdown}<pre><code>  identity</code></pre>{:/} | 5 | The identity from e.g. reference labs etc. is stored here. | STRING | INDEXED | 
**Report Routing Location**{::nomarkdown}<pre><code>  report_routing_location</code></pre>{:/} | 6 | The service/location from which the original order came.  The report<br/>is routed back to this location. | STRING | REQUIRED | 
**Provider**{::nomarkdown}<pre><code>  provider</code></pre>{:/} | 6.5 | The internal number of the provider requesting the test(s) is stored here. | POINTER | REQUIRED | [New_Person-200](New_Person-200)
**Treating Speciality**{::nomarkdown}<pre><code>  treating_speciality</code></pre>{:/} | 6.6 |  The treating specialty of the location requesting the test. | POINTER | REQUIRED | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)
**Log-in Person**{::nomarkdown}<pre><code>  login_person</code></pre>{:/} | 6.7 | The pointer to the person (NEW PERSON file) creating this accession is stored here. | POINTER |  | [New_Person-200](New_Person-200)
**Hardware Special Numbers**{::nomarkdown}<pre><code>  hardware_special_numbers</code></pre>{:/} | 8 | Data from automated instruments may be stored here for debugging purposes. | STRING |  | 
**Draw Time**{::nomarkdown}<pre><code>  draw_time</code></pre>{:/} | 9 | The date/time the specimen was taken. | DATE-TIME |  | 
**Date/time Obtained Inexact**{::nomarkdown}<pre><code>  date_time_obtained_inexact</code></pre>{:/} | 10 | This field has a "NO" if the draw time is estimated or unknown. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Tests**{::nomarkdown}<pre><code>  tests</code></pre>{:/} | 11 | The pointers to the Laboratory Tests for this accession. | OBJECT |  | [Tests-68_04](#Tests-68_04)
**Lab Arrival Time**{::nomarkdown}<pre><code>  lab_arrival_time</code></pre>{:/} | 12 | The date/time the specimen arrived at the lab. | DATE-TIME | INDEXED | 
**Date/time Results Available**{::nomarkdown}<pre><code>  date_time_results_available</code></pre>{:/} | 13 | The date/time all results for the accession are available. | DATE-TIME |  | 
**Inverse Date**{::nomarkdown}<pre><code>  inverse_date</code></pre>{:/} | 13.5 | 9999999 minus the internal entry in field 9 | DATE-TIME |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | 13.6 | A one line comment for the accession. | STRING |  | 
**Order #**{::nomarkdown}<pre><code>  order_number</code></pre>{:/} | 14 | The original order number is stored here. | STRING | INDEXED | 
**Accession**{::nomarkdown}<pre><code>  accession</code></pre>{:/} | 15 | The printable form of the Accession is stored here. | STRING |  | 
**In Common Accession**{::nomarkdown}<pre><code>  in_common_accession</code></pre>{:/} | 15.1 | When this accession area is 'in common' with another accession<br/>area the printable form of the 'in common' accession is stored<br/>here. | STRING |  | 
**Uid**{::nomarkdown}<pre><code>  uid</code></pre>{:/} | 16 |  This is the UID used by the HOST LEDI system for this order/accession.<br/> <br/>This field is used by the LEDI software. | STRING | INDEXED | 
**Ordering Site**{::nomarkdown}<pre><code>  ordering_site</code></pre>{:/} | 16.1 |  This field contains the pointer to the INSTITUTION file for the<br/>MailMan domain location of the computer system. All LEDI results are<br/>returned to the Ordering computer system.<br/> <br/>Location to send LEDI HL7 result messages.<br/> <br/>This field is used by LEDI software. | POINTER | INDEXED | [Institution-4](Institution-4)
**Collecting Site**{::nomarkdown}<pre><code>  collecting_site</code></pre>{:/} | 16.2 |  This field contain the pointer to the INSTITUTION file for the actual<br/>collection site. The ordering site is the MailMan location of the computer<br/>system. MailMan domain location and the collecting site may be different.<br/> <br/>This field is used by LEDI software. | POINTER |  | [Institution-4](Institution-4)
**Host Uid**{::nomarkdown}<pre><code>  host_uid</code></pre>{:/} | 16.3 |  Each Order/Accession is given a HOST UID. The UID is stored in this<br/>location. If LEDI software is used to accession specimens, usually the<br/>collecting sites UID is used to track specimens. If the collecting UID<br/>conflict is the HOST system number sequence, the HOST UID will be used<br/>instead of the collecting site's UID.<br/> <br/>This field is used by LEDI software. | STRING | INDEXED | 
**Ordering Site Uid**{::nomarkdown}<pre><code>  ordering_site_uid</code></pre>{:/} | 16.4 |  This field contains the collecting sites UID for this specimen.<br/> <br/>This field is used by LEDI software. | STRING |  | 
**Div**{::nomarkdown}<pre><code>  div</code></pre>{:/} | 26 |  This field contains the division of the person ordering the test<br/>for this accession number. The DUZ(2) is used to determine the division<br/>pointer. In some cases this field may be blank, example auto accession<br/>controls. | POINTER | INDEXED | [Institution-4](Institution-4)
**Pce Enc #**{::nomarkdown}<pre><code>  pce_enc_number</code></pre>{:/} | 30 | This field contains a list of PCE Encounters generated for this accession.<br/>If there are multiple encounter numbers for this accession, they are<br/>separated by ';'.<br/> <br/>This field is only populated if professional service PCE workload is<br/>generated. This is usually the type of PCE workload generated by<br/>Pathologist reporting anatomical pathology services.<br/> <br/>PCE workload is only generated for those hospital locations with the type<br/>of clinic, module or other. No PCE workload is generated for in-patient<br/>locations. | STRING |  | 
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | 50 | The site/specimen from the Topography Field file.  There may be more<br/>than one specimen for certain types of accessions. | OBJECT |  | [Specimen-68_05](#Specimen-68_05)
**Number Of Slides**{::nomarkdown}<pre><code>  number_of_slides</code></pre>{:/} | 60 | The number of slides prepared for path examination. | NUMERIC |  | 
**Paraffin Block(s)**{::nomarkdown}<pre><code>  paraffin_blocks</code></pre>{:/} | 61 | The number of paraffin blocks prepared for path examination. | NUMERIC |  | 
**Progress Notes**{::nomarkdown}<pre><code>  progress_notes</code></pre>{:/} | 80 | Progress notes on the accession. | STRING |  | 
**Current Accession Date**{::nomarkdown}<pre><code>  current_accession_date</code></pre>{:/} | 91 | This field is set by the roll-over routine in the original accession<br/>to point to the current accession date for accessions that have<br/>rolled over. | DATE-TIME |  | 
**Location Type**{::nomarkdown}<pre><code>  location_type</code></pre>{:/} | 92 |   This field holds the type of hospital location.  $P(^SC(X,0),U,3)<br/>It is used primarily for WKLD calculations. Since the patient<br/>may be discharged or admitted before the WKLD calculation routines run.<br/>This field holds a permanent location type. | ENUMERATION |  | {::nomarkdown}NON-CLINIC STOP: <em><strong>N</strong></em><br/>OPERATION ROOM: <em><strong>OR</strong></em><br/>MODULE: <em><strong>M</strong></em><br/>CLINIC: <em><strong>C</strong></em><br/>OTHER: <em><strong>Z</strong></em><br/>FILE AREA: <em><strong>F</strong></em><br/>IMAGING: <em><strong>I</strong></em><br/>WARD: <em><strong>W</strong></em>{:/}
**Count For Wkld**{::nomarkdown}<pre><code>  count_for_wkld</code></pre>{:/} | 93 |  This field is set to 1 if this accession has been counted for <br/>workload. This is set automatically by the tally routines.<br/>  NOTE: THIS FIELD SHOULD NOT BE SET MANUALLY. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>no: <em><strong>0</strong></em><br/>yes: <em><strong>1</strong></em><br/>NO: <em><strong>0</strong></em>{:/}
**Ordering Location**{::nomarkdown}<pre><code>  ordering_location</code></pre>{:/} | 94 |  This field contains the location placing the order for this patient. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)

[&uarr; Return to top](#top)<br/>


### <a name="Tests-68_04"></a>Tests (68.04)

<dl>
<dt>ID</dt><dd>Tests-68_04</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
** Test**{::nomarkdown}<pre><code>  _test</code></pre>{:/} | .01 | The pointers to the Laboratory Tests for this accession. | POINTER | INDEXED<br/>REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Urgency Of Test**{::nomarkdown}<pre><code>  urgency_of_test</code></pre>{:/} | 1 | The urgency of the test being completed, e.g. stat, routine, etc.<br/>  There is a special urgency used only for workload recording called<br/>WKL. This urgency indicates that this test was not ordered directly,<br/>but was added to the accession to support certain workload functions. | POINTER | REQUIRED | Urgency-62_05
**Load List Entry**{::nomarkdown}<pre><code>  load_list_entry</code></pre>{:/} | 2 | The load/work list location is stored here in ";" piece format.<br/>"load list pointer;tray;cup" | STRING |  | 
**Technologist**{::nomarkdown}<pre><code>  technologist</code></pre>{:/} | 3 |  The DUZ of the person verifying the test.<br/>NOTE: This field previously contained technologist initials.<br/>Converted with the release of version 5.2. | POINTER |  | [New_Person-200](New_Person-200)
**Complete Date**{::nomarkdown}<pre><code>  complete_date</code></pre>{:/} | 4 | If null, the test is incomplete.  Otherwise, it is the date/time of completion. | DATE-TIME |  | 
**Disposition**{::nomarkdown}<pre><code>  disposition</code></pre>{:/} | 5 |  | STRING |  | 
**Tally To Wkld**{::nomarkdown}<pre><code>  tally_to_wkld</code></pre>{:/} | 5.1 | If test was counted for WKLD workload, workload file entry<br/> is entered here.<br/> This flag prevents the test from being counted<br/> more than once.<br/>UPDATE THIS FIELD AUTOMATICALLY. | ENUMERATION |  | {::nomarkdown}YES: <em><strong>1</strong></em><br/>HAS NOT: <em><strong>0</strong></em>{:/}
**Wkld Code**{::nomarkdown}<pre><code>  wkld_code</code></pre>{:/} | 6 |  This sub file is devoted entirely to workload functions. The data<br/>is stuffed automatically by routines at the time of verification of the<br/>test. | OBJECT |  | [Wkld_Code-68_14](#Wkld_Code-68_14)
***identity**{::nomarkdown}<pre><code>  identity</code></pre>{:/} | 7 | Will deleted in future versions. | STRING | DEPRECATED | 
**Wkld Suffix**{::nomarkdown}<pre><code>  wkld_suffix</code></pre>{:/} | 8 |  This field contains the WKLD code suffix used to identify the method<br/>used to verify this particular test. The suffix is stuffed at<br/>the time of verification automatically. This field can be used to sort<br/>methods used to assay various test.<br/>  The decimal point of the WKLD code suffix is stripped off. | STRING |  | 
**Parent Test**{::nomarkdown}<pre><code>  parent_test</code></pre>{:/} | 8.1 |  This field contains the parent ordered test. In the case of panel test,<br/>this field will contain the original ordered test. | POINTER |  | [Laboratory_Test-60](Laboratory_Test-60)
**Shipping Manifest**{::nomarkdown}<pre><code>  shipping_manifest</code></pre>{:/} | 9 | This fields is used at the collection site to determine the exact<br/>placement of each test.  This field will contain the shipping manifest<br/>code for referral or send out lab tests.  For all local tests the field<br/>will be null. | POINTER |  | Lab_Shipping_Manifest-62_8

[&uarr; Return to top](#top)<br/>


### <a name="Wkld_Code-68_14"></a>Wkld Code (68.14)

<dl>
<dt>ID</dt><dd>Wkld_Code-68_14</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Wkld Code**{::nomarkdown}<pre><code>  wkld_code</code></pre>{:/} | .01 | WKLD codes associated with test/procedure are entered here. | POINTER | INDEXED<br/>REQUIRED | Wkld_Code-64
**Test Multiply Factor**{::nomarkdown}<pre><code>  test_multiply_factor</code></pre>{:/} | .02 | Enter the number of times the WKLD code is used for the test/procedure.<br/>to obtain the correct total weight. The default value is 1. This number<br/>is used to determine the total weight to credited for this test.<br/> This is the number of times this test has been counted. | NUMERIC |  | 
**Wkld Code Counted**{::nomarkdown}<pre><code>  wkld_code_counted</code></pre>{:/} | .03 |  This field is used by the workload compiling routine to prevent the<br/>WKLD code from being counted twice. The number 1 indicates the weight<br/>has been captured for this WKLD code.<br/>  NOTE: THIS FIELD SHOULD NOT BE MANUALLY EDITED. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Wkld Code Tally**{::nomarkdown}<pre><code>  wkld_code_tally</code></pre>{:/} | .04 | A WKLD code may have several individual counts.<br/> Each time a count is made it is added to the WKLD<br/> code tally and the WKLD CODE COUNTED flag is set to zero.<br/> This field is utilized when additional work has been added to a part<br/>icular WKLD code. Microbioloby is a area which many require a WKLD code<br/>be counted more than once. This field then contains the total number<br/>of times the WKLD code weight has been multiplied.<br/>  NOTE: THIS FIELD SHOULD NOT BE MANUALLY EDITED. | NUMERIC |  | 
**Wkld Code Repeat Count**{::nomarkdown}<pre><code>  wkld_code_repeat_count</code></pre>{:/} | .05 |   This field is not being presently used. It may be used in the<br/>future to automatically capture repeat workload. Another field<br/>in ^LRO(64.1, is being used to capture this data from manual entry. | NUMERIC |  | 
**Completion Time**{::nomarkdown}<pre><code>  completion_time</code></pre>{:/} | 1 |  This field conatins the completion time for this individual WKLD code<br/>procedure. It calulated at the time of verification by the routines<br/>which stuff the data into this field. | DATE-TIME |  | 
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | 2 |   This field contains the person (NEW PERSON file) which verified this <br/>particular portion of the test. This field is automatically stuffed at <br/>the time of verification. | POINTER |  | [New_Person-200](New_Person-200)
**Institution**{::nomarkdown}<pre><code>  institution</code></pre>{:/} | 3 |   This is the institution the verifying person used when logging on<br/>to the system. This field allow the workload from Multi-Div sites<br/>to be stored and counted separately. | POINTER |  | [Institution-4](Institution-4)
**Major Section**{::nomarkdown}<pre><code>  major_section</code></pre>{:/} | 4 |   This field contains the accession area which should recieve credit for<br/>this workload. ie CHEMISTRY | POINTER |  | [Accession-68](Accession-68)
**Lab Subsection**{::nomarkdown}<pre><code>  lab_subsection</code></pre>{:/} | 5 |  This the second level used for identifying where workload credit should<br/>be credited.<br/> ie. SPECIAL CHEMISTRY | POINTER |  | [Accession-68](Accession-68)
**Work Area**{::nomarkdown}<pre><code>  work_area</code></pre>{:/} | 6 |  This is the lowest level used to credit workload. This field may be<br/>the same as the LAB SUBSECTION entry.<br/> i.e., ELECTROPHORESIS | POINTER |  | [Accession-68](Accession-68)
**Manual Edit**{::nomarkdown}<pre><code>  manual_edit</code></pre>{:/} | 12 |  If this data is entered manually via a edit template. This field would<br/>indicate if the data was not stuffed automatically. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>


### <a name="Specimen-68_05"></a>Specimen (68.05)

<dl>
<dt>ID</dt><dd>Specimen-68_05</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Specimen**{::nomarkdown}<pre><code>  specimen</code></pre>{:/} | .01 | The site/specimen from the Topography field file.  There may be<br/>more than one specimen for certain types of accessions. | POINTER | REQUIRED | [Topography_Field-61](Topography_Field-61)
**Collection Sample**{::nomarkdown}<pre><code>  collection_sample</code></pre>{:/} | 1 | The collection sample is from file 62. | POINTER |  | [Collection_Sample-62](Collection_Sample-62)
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | 2 |  This field contains the test ordered for this patient/specimen | OBJECT |  | [Test-68_13](#Test-68_13)

[&uarr; Return to top](#top)<br/>


### <a name="Test-68_13"></a>Test (68.13)

<dl>
<dt>ID</dt><dd>Test-68_13</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Test**{::nomarkdown}<pre><code>  test</code></pre>{:/} | .01 | The procedures to be done on a particular specimen. | POINTER | REQUIRED | [Laboratory_Test-60](Laboratory_Test-60)
**Tissue Block(s)**{::nomarkdown}<pre><code>  tissue_blocks</code></pre>{:/} | 1 | Used for path examination. | STRING |  | 
**Total Slides**{::nomarkdown}<pre><code>  total_slides</code></pre>{:/} | 2 |  This field contains the number of slides used to process this specimen. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Bull_Algorithm_Control_Data-68_07"></a>Bull Algorithm Control Data (68.07)

<dl>
<dt>ID</dt><dd>Bull_Algorithm_Control_Data-68_07</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Method Control Data**{::nomarkdown}<pre><code>  method_control_data</code></pre>{:/} | .01 | Data is stored here for use in Bull's algorithm. | POINTER | REQUIRED | Auto_Instrument-62_4
**Control Data**{::nomarkdown}<pre><code>  control_data</code></pre>{:/} | 1 | Data from the running average of Bull's algorithm is stored here. | STRING |  | 
**Mean Data Value 1**{::nomarkdown}<pre><code>  mean_data_value_1</code></pre>{:/} | 2 | The Mean Data Value 1 from the Auto Instrument file is reproduced here. | NUMERIC |  | 
**Mean Data Value 2**{::nomarkdown}<pre><code>  mean_data_value_2</code></pre>{:/} | 3 | The Mean Data Value 2 from the Auto Instrument file is reproduced here. | NUMERIC |  | 
**Mean Data Value 3**{::nomarkdown}<pre><code>  mean_data_value_3</code></pre>{:/} | 4 | The Mean Data Value 3 from the Auto Instrument file is reproduced here. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Multirule_VA_Qc-68_11"></a>Multi-rule VA Qc (68.11)

<dl>
<dt>ID</dt><dd>Multirule_VA_Qc-68_11</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Control Name**{::nomarkdown}<pre><code>  control_name</code></pre>{:/} | .01 | The name of the Quality Control to be used in Westergard's suggested<br/>use of the Multi-rule Shewhart determinations. | POINTER | REQUIRED | Lab_Control_Name-62_3
**Control Data**{::nomarkdown}<pre><code>  control_data</code></pre>{:/} | 1 | Data from the Multi-rule Shewhart determinations are stored here for<br/>intermediate computations. | POINTER |  | [Laboratory_Test-60](Laboratory_Test-60)
**Reject Reason**{::nomarkdown}<pre><code>  reject_reason</code></pre>{:/} | 2 | A brief description of the reason to re-examine the controls. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}