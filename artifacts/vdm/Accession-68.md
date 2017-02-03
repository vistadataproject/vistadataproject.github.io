---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Accession-68 

<dl>
<dt>id</dt><dd>Accession-68</dd>
<dt>fmId</dt><dd>68</dd>
<dt>label</dt><dd>Accession</dd>
<dt>location</dt><dd>^LRO(68,</dd>
<dt>description</dt><dd> <br/>This file contains entries which represent the functional subdivisions<br/>or departments of the laboratory, referred to by the Laboratory package<br/>software as accession areas.  The file is used to define the site-specific<br/>information needed by your laboratory for each accession area.  This <br/>includes the type of accession transform (or how often the accession <br/>numbers assigned to test performed in that area will be reset to 1), the<br/>abbreviation of the area (which becomes part of the accession identifying<br/>the specimen and test results), the order in which the data for tests<br/>performed in the area will be displayed and other specific information.<br/> <br/>Definitions of variables used:<br/> LRDFN = Internal entry in LR( that is being worked on.<br/> LRIDT = Inverse date/time that data is stored at. ^LR(LRDFN,\CH\,<br/> LRAA = internal value of accession area ^LRO(68,<br/> LRAD = date working on in accession area ^LRO(68,LRAA,1,<br/> LRAN = accession number working on ^LRO(68,LRAA,1,LRAD,1,<br/> LRODT = order date ^LRO(69,<br/> LRSN = order entry within date ^LRO(69,LRORD,1,<br/>CROSS REFERENCE DESCRIPTION:<br/> ^LRO(68,\B\,'ACCESSION AREA',LRAA)<br/> ^LRO(68,\AC\,LRDFN,'DATE RESULTS AVAILABLE','DATA NODE') =<br/>    used by the cumulative<br/> ^LRO(68,\AD\,'LAB SECTION',LRAC)<br/> ^LRO(68,\AVS\,LRAA,LRAD,LRAN)=LRDFN^LRIDT<br/>    used by micro verify by supervisor<br/> ^LRO(68,\MI\,LRDFN,LRIDT)<br/>    used by micro for cumulative report<br/> ^LRO(68,LRAA,1,LRAD,1,LRAN,\AE\)<br/>    used for WKLD count<br/>  <br/> ^LRO(68,LRAA,1,LRAD,1,\B\,'ENTRY FILE 69',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,1,\C\,'IDENTITY',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,1,\E\,'LAB ARRIVAL TIME',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,1,\D\,'ORDER #',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,1,\AC\,'DATE/TIME COMPLETE',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,1,\AD\,'DATE COMPLETE',LRAN)<br/> ^LRO(68,LRAA,1,LRAD,4,\B\,'LAB TEST',LRAN)</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| area | .01 | Area | {::nomarkdown}The accession area of the Lab.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| lr_subscript | .02 | Lr Subscript | {::nomarkdown}This represents the functional area of the Lab.  Must be chosen from a set of codes.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>BB</dt><dd>BLOOD BANK</dd><dt>EM</dt><dd>ELECTRON MICROSCOPY</dd><dt>SP</dt><dd>SURGICAL PATHOLOGY</dd><dt>CY</dt><dd>CYTOLOGY</dd><dt>MI</dt><dd>MICROBIOLOGY</dd><dt>CH</dt><dd>CHEM, HEM, TOX, RIA, SER, etc.</dd><dt>AU</dt><dd>AUTOPSY</dd></dl>{:/} | 
| clean_up | .03 | Clean Up | {::nomarkdown}Triggered by the Accession Transform field.<br/>Determines frequency of clean up on accession lists.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>M</dt><dd>MONTHLY</dd><dt>Q</dt><dd>QUARTERLY</dd><dt>Y</dt><dd>YEARLY</dd><dt>D</dt><dd>DAILY</dd><dt>W</dt><dd>WEEKLY</dd></dl>{:/} | 
| common_accession_numbers_with_area | .04 | Common Accession #'s With Area | {::nomarkdown}If another accession area is designated here, that other accession area<br/>will be used to find the next \available\ accession number which will be<br/>updated on the other accession area.{:/} | POINTER |  | INDEXED | Accession-68 | 
| accession_transform | .05 | Accession Transform | {::nomarkdown}Determines when a new accession list begins.<br/>Points to the EXECUTE CODE file.{:/} | POINTER |  | REQUIRED | Execute_Code-62_07 | 
| acc_code | .051 | Acc Code | {::nomarkdown}Mumps code that is triggered by the Accession Transform field.{:/} | STRING |  |  |  | 
| verification_code | .06 | Verification Code | {::nomarkdown}Points to EXECUTE CODE file.{:/} | POINTER |  |  | Execute_Code-62_07 | 
| ver_code | .061 | Ver Code | {::nomarkdown}Triggered by the Verification Code field.{:/} | STRING |  |  |  | 
| identity_control | .07 | *identity Control | {::nomarkdown}No longer used.  Will be deleted in later version.{:/} | POINTER |  |  |  | 
| ident_code | .071 | *ident Code | {::nomarkdown}No longer used.  Will be deleted in later version.{:/} | STRING |  |  |  | 
| print_order | .08 | Print Order | {::nomarkdown}The print order of the Accession Area.  If the entry is less than 1 it will not be displayed.{:/} | NUMERIC |  |  |  | 
| bypass_rollover | .085 | Bypass Rollover | {::nomarkdown}If you choose not to bypass rollover (i.e., have a null entry), then any unverified data will be <br/>olled over\ to the next day.  You will not be allowed to have a duplicate accession number.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| abbreviation | .09 | Abbreviation | {::nomarkdown}Abbreviation for the accession area.  Must have programmer privileges to alter this entry.{:/} | STRING |  | REQUIRED |  | 
| associated_division | .091 | Associated Division |  | [POINTER] |  |  | {id:Institution-4} | 
| type_of_accession_number | .092 | Type Of Accession Number | {::nomarkdown}This field determines whether a full unique accession number is used for<br/>barcoding and messages between instruments.  The unique accession number<br/>is built from three different numbers, the accession area, the date, and<br/>the accession entry number. If 'S'hort is selected, the accession number<br/>used in barcodes and for input at the instrument keypad is treated the <br/>same as it was traditionally.  The 'L'ong unique accession will always be<br/>generated, it just won't be used in communicating with the instrument, or <br/>for barcoding.  <br/>Examples of the four accession transform<br/>types are:<br/><br/> Daily/Weekly:   3242889999<br/> where     32 is the Accession area identifier (field .091)<br/>            4 is the last digit of the year (1994)<br/>          288 is the Julian date for Oct 15, 1994<br/>         9999 is the 9,999th accession for that date<br/> If the 'L'ong version was 3242889999, 'S'hort would be 9999<br/> If the 'L'ong version was 3242880001, 'S'hort would be 1<br/><br/> Yearly:   3294999999<br/> where      32 is the Accession area identifier (field .091)<br/>            94 is the last two digits of the year (1994)<br/>        999999 is the 999,999th accession for that year<br/> If the 'L'ong version was 3294999999, 'S'hort would be 999999<br/> If the 'L'ong version was 3294000001, 'S'hort would be 1<br/><br/> Quarterly:   3240499999<br/> where      32 is the Accession area identifier (field .091)<br/>             4 is the last digit of the year (1994)<br/>            04 is the fourth quarter of 1994<br/>         99999 is the 99,999th accession for that quarter<br/> If the 'L'ong version was 3240499999, 'S'hort would be 99999<br/> If the 'L'ong version was 3240400001, 'S'hort would be 1<br/><br/> Monthly:   3241299999<br/> where      32 is the Accession area identifier (field .091)<br/>             4 is the last digit of the year (1994)<br/>            12 is the twelfth month of 1994<br/>         99999 is the 99,999th accession for that month<br/> If the 'L'ong version was 3241299999, 'S'hort would be 99999<br/> If the 'L'ong version was 3241200001, 'S'hort would be 1{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SHORT</dd><dt>L</dt><dd>LONG</dd></dl>{:/} | 
| lab_section | .095 | *lab Section | {::nomarkdown}  THIS FIELD HAS BEEN MARKED FOR DELETION IN FUTURE VERSIONS<br/>THE FIELD LAB DIVISION (#.19) WILL BE USED INSTEAD PER WORKLOAD<br/>REVISION.{:/} | POINTER |  |  |  | 
| non_lab_accession_area | .097 | Non Lab Accession Area | {::nomarkdown} This field indicates if this particular accession area is operated by<br/>another service other than Pathology & Laboratory Medicine. If this<br/>accession area in staffed or funded from non Pathology sources, mark this<br/>field yes.<br/>   An example would be Blood Gas laboratory staffed or funded by<br/>Medicine service.<br/> <br/>HOWEVER<br/>If this accession area is used by Point of Care (ie. Nurses entering<br/>finger stick glucose) do not set this field to yes. Because in this case<br/>the location is relevant to DSS database.<br/> <br/>This field is used by the Laboratory DSS workload extraction routine to<br/>determine if the patient location should be passed or not.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| responsible_official | .1 | Responsible Official | {::nomarkdown}The responsible official in the laboratory.  Usually the Chief of Laboratory Service, or his designee.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| inhibit_area_label_printing | .11 | Inhibit Area Label Printing | {::nomarkdown}A YES entry stops all label printing for this accession area.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| lab_division | .19 | Lab Division | {::nomarkdown}  This field will be used to determine which lab division a particular<br/>accession area belongs.  If this field is not filled in, CP (Clinical<br/>Pathology ) will be assumed.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>CP</dt><dd>CLINICAL PATHOLOGY</dd><dt>AP</dt><dd>ANATOMIC PATHOLOGY</dd></dl>{:/} | 
| numeric_identifier | .4 | Numeric Identifier | {::nomarkdown}This field is used to build the unique accession identifier number.<br/>It is used as the first two characters of the number.  Use the numbers 1-9<br/>and uppercase letters A-Z to designate the identifier. For example, if<br/>you enter 99 all accession identifiers for this accession area will<br/>start with 99, e.g. 9923400025.<br/> <br/>If a single character is used the system will append a leading zero to<br/>the unique identifier generated.<br/> <br/>No two accession areas can use the same identifier.<br/> <br/>Changing the identifier should only be performed when accessioning is not<br/>occurring and when a situation requires it since personnel will memorize<br/>this identifier as representing the accesson area.<br/> <br/>Do NOT switch identifiers between active accession areas since this could<br/>compromise the uniqueness of the resulting unique identifier (UID). The<br/>software when generating a UID checks for the existence of the UID it will<br/>create for an accession. If it currently exists the UID being created will<br/>have \00\ as the numeric identifier.{:/} | STRING |  |  |  | 
| lock_for_load_work_list_build | .7 | Lock For Load/work List Build | {::nomarkdown}This locks the accession to allow only ONE<br/>load/work list to build at a time.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| lab_oos_location | .8 | Lab Oos Location | {::nomarkdown}Occassion Of Service (OOS)<br/> <br/> This field is used for passing data to the PCE API. This API is used<br/>to capture CPT codes for laboratory procedures.<br/> <br/>Special OOS Hospital locations have been created that are solely used for<br/>recording workload (No count locations). These OOS location all begin with<br/>'LAB DIV' in their names.<br/> <br/>Example of name:<br/>LAB DIV 600 OOS ID 108<br/>Where 600 is the Station Number from the Institution file (#4).<br/>Where 600 is the division Station Number where the work is done.<br/>Where 108 is the OOS ID (stop code) for the service doing the work.<br/> <br/>Note: The stop code could be one assigned to another service, ie Medicine.<br/>Stop Codes are not limited to Laboratory 108.<br/> <br/>The Laboratory Information Manager has special options used to create new<br/>OOS locations in HOSPITAL LOCATION file. These options are used when and<br/>new division is established or a new stop code is required.<br/> <br/>The location names are constructed by the option and should not be altered<br/>using FileMan. The naming convention is critical to the ability to assign<br/>OOS Hospital Locations to Laboratory Accession (#68) file.<br/> <br/>If a given Accession Area in the Accession file (#68) does not have a<br/>LAB OOS LOCATION S LOCATION (#.8) Hospital Location assigned, the DEFAULT<br/>LAB OOS LOCATION (#.8) from the LABORATORY SITE (#69.9) file will be used.<br/>If the DEFAULT LAB OOS LOCATION field is not defined, no workload will be<br/>captured.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 
| user_access_authorization | .9 | User Access Authorization | {::nomarkdown}If left blank, any lab person may access this accession area.  If filled<br/>in, only lab persons holding the key that is entered here may use<br/>this accession area.{:/} | POINTER |  |  | Security_Key-19_1 | 
| instrumentation_controls | 1 | Instrumentation Controls | {::nomarkdown}Select the instrument (if appropriate, otherwise use the MANUAL selection)<br/>to be associated with the controls you will be selecting.{:/} | [OBJECT] |  |  | [Instrumentation_Controls-68_09](#Instrumentation_Controls-68_09)  | 
| date | 2 | Date | {::nomarkdown}The date of the accession.{:/} | [OBJECT] |  |  | [Date-68_01](#Date-68_01)  | 
| bar_code_print | 5 | Bar Code Print | {::nomarkdown} This field is used by the label print utilities to determine if<br/>bar code labels should be printed for this accession area.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>3</dt><dd>CODE39 WITH CHECK DIGIT</dd><dt>0</dt><dd>NONE</dd><dt>4</dt><dd>CODE128</dd><dt>1</dt><dd>YES</dd><dt>2</dt><dd>CODE39</dd></dl>{:/} | 
| bar_code_pad | 5.1 | Bar Code Pad | {::nomarkdown}Enter the number of zeros (\0\) to pad an accession number when printing<br/>a bar code using the accession number. Used when site needs a minimum length<br/>bar code on labels.<br/> <br/>Example if need a four digit bar code then enter four.<br/>        This would produce the following: <br/>        Accession number       Bar Code<br/>              1                  0001<br/>             12                  0012<br/>            123                  0123<br/>           1234                  1234<br/>          12345                 12345{:/} | NUMERIC |  |  |  | 
| alternate_label_entry | 5.2 | Alternate Label Entry | {::nomarkdown}Site can enter an alternate label entry point to be used instead of the<br/>standard lab label routine entry point defined in file LABORATORY SITE<br/>(#69.9).<br/> <br/>This field overrides the label routine settings in file LABORATORY SITE<br/>(#69.9) for this accession area. Field ALTERNATE LABEL ROUTINE (#5.3)<br/>must be completed for the software to use this field. See description<br/>of field #5.3.{:/} | STRING |  |  |  | 
| alternate_label_routine | 5.3 | Alternate Label Routine | {::nomarkdown}Site can enter an alternate label routine to be used instead of the<br/>standard lab label routine defined in file LABORATORY SITE (#69.9).<br/> <br/>This field overrides the label routine settings in file LABORATORY SITE<br/>(#69.9) for this accession area. It is used in conjunction with field<br/>ALTERNATE LABEL ENTRY (#5.2) for building the variable LRLABEL.{:/} | STRING |  |  |  | 
| reserved | 8 | Reserved | {::nomarkdown}Reserved for future use.<br/>the same choices you have for the entire lab. If you have selected<br/>special label in this file then the routine will use this field to<br/>determine what label style to us for this accession area. The field<br/>Bar Code Printer will determine where the label will print. Remember<br/>these three field work together. The Bar code printer, the special<br/>label, and the label type.<br/> <br/>  If you selected special label and leave this field blank the default<br/>will be the 2X5 uneven will be used.<br/> <br/>  NOTE **** These are the same selection available under field #<br/>302 of the LABORATORY SITE file (#69.9), LABEL TYPE.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>2</dt><dd>ORDER # FIRST</dd><dt>3</dt><dd>MEDLAB</dd><dt>4</dt><dd>SITE FILE</dd><dt>1</dt><dd>2X5 UNEVEN</dd><dt>5</dt><dd>SITE DEVELOPED VAF 10-1392</dd></dl>{:/} | 
| work_area | 9 | Work Area | {::nomarkdown} This field should only be edited if this accession area is used for<br/>the purpose of workload definitions. This accession area is then used<br/>with load/worklist to define the area of the lab which should receive<br/>WKLD credit.<br/> <br/>SPECIMENS CAN NOT BE ACCESSIONED INTO THIS ACCESSION AREA. IT IS SOLELY<br/>FOR THE USE WKLD DEFAULT ANSWERS FOR LMIP/WKLD DATA COLLECTION.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>WORK AREA</dt><dd>WORK AREA</dd></dl>{:/} | 
| workload_on | 10 | Workload On | {::nomarkdown}  this field is used to activate wkld collection. Each accession area<br/>can be turned on independently. In order for this field to trigger wkld<br/>collection, the field WKLD STATS ON (#17) in the LABORATORY SITE (#69.9)<br/>file must also indicate ON.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| collect_std_qc_repeats | 11 | Collect Std/qc/repeats | {::nomarkdown} If you wish to have the verification process to prompt the user for<br/>Standards, QC and Repeats after each session enter a Yes.<br/> This will cause the counts entered to be added to all test<br/>the user verified during that particular session.<br/> The function of entering this data can be also done by the option<br/>STD/QC/REPS/MANUAL WKLD COUNT [LR WKLD STD/QC/REPS] found on the <br/>Process Menu [LR DO!].{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| external_service_area | 12 | External Service Area | {::nomarkdown}This field determines if the Accession Area is defined for send out tests.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 

## <a name="Instrumentation_Controls-68_09"></a>Instrumentation_Controls-68_09 

<dl>
<dt>id</dt><dd>Instrumentation_Controls-68_09</dd>
<dt>fmId</dt><dd>68.09</dd>
<dt>label</dt><dd>Instrumentation Controls</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| instrumentation_controls | .01 | Instrumentation Controls | {::nomarkdown}You may only change the selection you have chosen by \selecting\<br/>another one.  If you wish to change THIS one, you must delete it first.<br/>(The internal FileMan number is significant, so we can't change the text.){:/} | POINTER |  | REQUIRED | Auto_Instrument-62_4 | 
| control_name | 1 | Control Name | {::nomarkdown}The control that should always be placed with the accession number to be<br/>defined with the ACC # field .001{:/} | [OBJECT] |  |  | [Control_Name-68_1](#Control_Name-68_1)  | 

## <a name="Date-68_01"></a>Date-68_01 

<dl>
<dt>id</dt><dd>Date-68_01</dd>
<dt>fmId</dt><dd>68.01</dd>
<dt>label</dt><dd>Date</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date | .01 | Date | {::nomarkdown}The date of the accession.{:/} | DATE-TIME |  | REQUIRED |  | 
| accession_number | 1 | Accession Number | {::nomarkdown}The numeric part of the accession.{:/} | [OBJECT] |  |  | [Accession_Number-68_02](#Accession_Number-68_02)  | 
| current_initials | 2 | *current Initials | {::nomarkdown}Will be deleted in future versions.<br/>the test(s).{:/} | STRING |  |  |  | 
| current_accession_number | 3 | Current Accession Number | {::nomarkdown}The last used accession number.{:/} | STRING |  |  |  | 
| current_identity | 4 | *current Identity | {::nomarkdown}No longer used.  Will be deleted in later versions. 1/89.{:/} | STRING |  |  |  | 
| current_verify_acc_number | 5 | Current Verify Acc # | {::nomarkdown}The last verified accession number.{:/} | NUMERIC |  |  |  | 
| bull_algorithm_control_data | 6 | Bull Algorithm Control Data | {::nomarkdown}Data is stored here for use in Bull's algorithm.{:/} | [OBJECT] |  |  | [Bull_Algorithm_Control_Data-68_07](#Bull_Algorithm_Control_Data-68_07)  | 
| multirule_va_qc | 7 | Multi-rule VA Qc | {::nomarkdown}Quality control comparisons based on Westergard's suggested use of<br/>the Multi-rule Shewhart determinations are stored under this multiple.{:/} | [OBJECT] |  |  | [Multirule_VA_Qc-68_11](#Multirule_VA_Qc-68_11)  | 

## <a name="Control_Name-68_1"></a>Control_Name-68_1 

<dl>
<dt>id</dt><dd>Control_Name-68_1</dd>
<dt>fmId</dt><dd>68.1</dd>
<dt>label</dt><dd>Control Name</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| acc_number | .001 | Acc # | {::nomarkdown}The numeric part of the accession to be assigned for the indicated<br/>control, if the number is available and automatic accessioning of<br/>controls is tasked.{:/} | IEN |  |  |  | 
| control_name | .01 | Control Name | {::nomarkdown}The control that should always be placed with the accession number to be defined with the ACC # field .001.{:/} | POINTER |  | REQUIRED | Lab_Control_Name-62_3 | 

## <a name="Accession_Number-68_02"></a>Accession_Number-68_02 

<dl>
<dt>id</dt><dd>Accession_Number-68_02</dd>
<dt>fmId</dt><dd>68.02</dd>
<dt>label</dt><dd>Accession Number</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| log | .001 | Log | {::nomarkdown}The numeric part of the accession.{:/} | IEN |  |  |  | 
| lrdfn | .01 | Lrdfn | {::nomarkdown}The internal pointer to file 63 is stored here.{:/} | POINTER |  | REQUIRED | Lab_Data-63 | 
| file_number | 1 | File # | {::nomarkdown}The pointer to the File of Files for the entity in field .01 is stored <br/>here.{:/} | POINTER |  |  | File-1 | 
| original_accn_date | 2 | Original Accn Date | {::nomarkdown}The date part of the original accession is stored here.{:/} | DATE-TIME |  |  |  | 
| date_ordered | 3 | Date Ordered | {::nomarkdown}The date the order was placed is stored here.{:/} | DATE-TIME |  |  |  | 
| specimen_number | 4 | Specimen Number | {::nomarkdown}The internal specimen number is stored here.{:/} | NUMERIC |  |  |  | 
| identity | 5 | Identity | {::nomarkdown}The identity from e.g. reference labs etc. is stored here.{:/} | STRING |  | INDEXED |  | 
| report_routing_location | 6 | Report Routing Location | {::nomarkdown}The service/location from which the original order came.  The report<br/>is routed back to this location.{:/} | STRING |  | REQUIRED |  | 
| provider | 6.5 | Provider | {::nomarkdown}The internal number of the provider requesting the test(s) is stored here.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| treating_speciality | 6.6 | Treating Speciality | {::nomarkdown} The treating specialty of the location requesting the test.{:/} | POINTER |  | REQUIRED | Facility_Treating_Specialty-45_7 | 
| login_person | 6.7 | Log-in Person | {::nomarkdown}The pointer to the person (NEW PERSON file) creating this accession is stored here.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| hardware_special_numbers | 8 | Hardware Special Numbers | {::nomarkdown}Data from automated instruments may be stored here for debugging purposes.{:/} | STRING |  |  |  | 
| draw_time | 9 | Draw Time | {::nomarkdown}The date/time the specimen was taken.{:/} | DATE-TIME |  |  |  | 
| date_time_obtained_inexact | 10 | Date/time Obtained Inexact | {::nomarkdown}This field has a \NO\ if the draw time is estimated or unknown.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| tests | 11 | Tests | {::nomarkdown}The pointers to the Laboratory Tests for this accession.{:/} | [OBJECT] |  |  | [Tests-68_04](#Tests-68_04)  | 
| lab_arrival_time | 12 | Lab Arrival Time | {::nomarkdown}The date/time the specimen arrived at the lab.{:/} | DATE-TIME |  | INDEXED |  | 
| date_time_results_available | 13 | Date/time Results Available | {::nomarkdown}The date/time all results for the accession are available.{:/} | DATE-TIME |  |  |  | 
| inverse_date | 13.5 | Inverse Date | {::nomarkdown}9999999 minus the internal entry in field 9{:/} | DATE-TIME |  |  |  | 
| comment | 13.6 | Comment | {::nomarkdown}A one line comment for the accession.{:/} | STRING |  |  |  | 
| order_number | 14 | Order # | {::nomarkdown}The original order number is stored here.{:/} | STRING |  | INDEXED |  | 
| accession | 15 | Accession | {::nomarkdown}The printable form of the Accession is stored here.{:/} | STRING |  |  |  | 
| in_common_accession | 15.1 | In Common Accession | {::nomarkdown}When this accession area is 'in common' with another accession<br/>area the printable form of the 'in common' accession is stored<br/>here.{:/} | STRING |  |  |  | 
| uid | 16 | Uid | {::nomarkdown} This is the UID used by the HOST LEDI system for this order/accession.<br/> <br/>This field is used by the LEDI software.{:/} | STRING |  | INDEXED |  | 
| ordering_site | 16.1 | Ordering Site | {::nomarkdown} This field contains the pointer to the INSTITUTION file for the<br/>MailMan domain location of the computer system. All LEDI results are<br/>returned to the Ordering computer system.<br/> <br/>Location to send LEDI HL7 result messages.<br/> <br/>This field is used by LEDI software.{:/} | POINTER |  | INDEXED | [Institution-4](Institution-4.md) | 
| collecting_site | 16.2 | Collecting Site | {::nomarkdown} This field contain the pointer to the INSTITUTION file for the actual<br/>collection site. The ordering site is the MailMan location of the computer<br/>system. MailMan domain location and the collecting site may be different.<br/> <br/>This field is used by LEDI software.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| host_uid | 16.3 | Host Uid | {::nomarkdown} Each Order/Accession is given a HOST UID. The UID is stored in this<br/>location. If LEDI software is used to accession specimens, usually the<br/>collecting sites UID is used to track specimens. If the collecting UID<br/>conflict is the HOST system number sequence, the HOST UID will be used<br/>instead of the collecting site's UID.<br/> <br/>This field is used by LEDI software.{:/} | STRING |  | INDEXED |  | 
| ordering_site_uid | 16.4 | Ordering Site Uid | {::nomarkdown} This field contains the collecting sites UID for this specimen.<br/> <br/>This field is used by LEDI software.{:/} | STRING |  |  |  | 
| div | 26 | Div | {::nomarkdown} This field contains the division of the person ordering the test<br/>for this accession number. The DUZ(2) is used to determine the division<br/>pointer. In some cases this field may be blank, example auto accession<br/>controls.{:/} | POINTER |  | INDEXED | [Institution-4](Institution-4.md) | 
| pce_enc_number | 30 | Pce Enc # | {::nomarkdown}This field contains a list of PCE Encounters generated for this accession.<br/>If there are multiple encounter numbers for this accession, they are<br/>separated by ';'.<br/> <br/>This field is only populated if professional service PCE workload is<br/>generated. This is usually the type of PCE workload generated by<br/>Pathologist reporting anatomical pathology services.<br/> <br/>PCE workload is only generated for those hospital locations with the type<br/>of clinic, module or other. No PCE workload is generated for in-patient<br/>locations.{:/} | STRING |  |  |  | 
| specimen | 50 | Specimen | {::nomarkdown}The site/specimen from the Topography Field file.  There may be more<br/>than one specimen for certain types of accessions.{:/} | [OBJECT] |  |  | [Specimen-68_05](#Specimen-68_05)  | 
| number_of_slides | 60 | Number Of Slides | {::nomarkdown}The number of slides prepared for path examination.{:/} | NUMERIC |  |  |  | 
| paraffin_blocks | 61 | Paraffin Block(s) | {::nomarkdown}The number of paraffin blocks prepared for path examination.{:/} | NUMERIC |  |  |  | 
| progress_notes | 80 | Progress Notes | {::nomarkdown}Progress notes on the accession.{:/} | [STRING] |  |  |  | 
| current_accession_date | 91 | Current Accession Date | {::nomarkdown}This field is set by the roll-over routine in the original accession<br/>to point to the current accession date for accessions that have<br/>rolled over.{:/} | DATE-TIME |  |  |  | 
| location_type | 92 | Location Type | {::nomarkdown}  This field holds the type of hospital location.  $P(^SC(X,0),U,3)<br/>It is used primarily for WKLD calculations. Since the patient<br/>may be discharged or admitted before the WKLD calculation routines run.<br/>This field holds a permanent location type.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>N</dt><dd>NON-CLINIC STOP</dd><dt>OR</dt><dd>OPERATION ROOM</dd><dt>M</dt><dd>MODULE</dd><dt>C</dt><dd>CLINIC</dd><dt>Z</dt><dd>OTHER</dd><dt>F</dt><dd>FILE AREA</dd><dt>I</dt><dd>IMAGING</dd><dt>W</dt><dd>WARD</dd></dl>{:/} | 
| count_for_wkld | 93 | Count For Wkld | {::nomarkdown} This field is set to 1 if this accession has been counted for <br/>workload. This is set automatically by the tally routines.<br/>  NOTE: THIS FIELD SHOULD NOT BE SET MANUALLY.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>no</dd><dt>1</dt><dd>yes</dd><dt>0</dt><dd>NO</dd></dl>{:/} | 
| ordering_location | 94 | Ordering Location | {::nomarkdown} This field contains the location placing the order for this patient.{:/} | POINTER |  |  | [Hospital_Location-44](Hospital_Location-44.md) | 

## <a name="Bull_Algorithm_Control_Data-68_07"></a>Bull_Algorithm_Control_Data-68_07 

<dl>
<dt>id</dt><dd>Bull_Algorithm_Control_Data-68_07</dd>
<dt>fmId</dt><dd>68.07</dd>
<dt>label</dt><dd>Bull Algorithm Control Data</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| method_control_data | .01 | Method Control Data | {::nomarkdown}Data is stored here for use in Bull's algorithm.{:/} | POINTER |  | REQUIRED | Auto_Instrument-62_4 | 
| control_data | 1 | Control Data | {::nomarkdown}Data from the running average of Bull's algorithm is stored here.{:/} | [STRING] |  |  |  | 
| mean_data_value_1 | 2 | Mean Data Value 1 | {::nomarkdown}The Mean Data Value 1 from the Auto Instrument file is reproduced here.{:/} | NUMERIC |  |  |  | 
| mean_data_value_2 | 3 | Mean Data Value 2 | {::nomarkdown}The Mean Data Value 2 from the Auto Instrument file is reproduced here.{:/} | NUMERIC |  |  |  | 
| mean_data_value_3 | 4 | Mean Data Value 3 | {::nomarkdown}The Mean Data Value 3 from the Auto Instrument file is reproduced here.{:/} | NUMERIC |  |  |  | 

## <a name="Multirule_VA_Qc-68_11"></a>Multirule_VA_Qc-68_11 

<dl>
<dt>id</dt><dd>Multirule_VA_Qc-68_11</dd>
<dt>fmId</dt><dd>68.11</dd>
<dt>label</dt><dd>Multi-rule VA Qc</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| control_name | .01 | Control Name | {::nomarkdown}The name of the Quality Control to be used in Westergard's suggested<br/>use of the Multi-rule Shewhart determinations.{:/} | POINTER |  | REQUIRED | Lab_Control_Name-62_3 | 
| control_data | 1 | Control Data | {::nomarkdown}Data from the Multi-rule Shewhart determinations are stored here for<br/>intermediate computations.{:/} | [POINTER] |  |  | {id:Laboratory_Test-60} | 
| reject_reason | 2 | Reject Reason | {::nomarkdown}A brief description of the reason to re-examine the controls.{:/} | STRING |  |  |  | 

## <a name="Tests-68_04"></a>Tests-68_04 

<dl>
<dt>id</dt><dd>Tests-68_04</dd>
<dt>fmId</dt><dd>68.04</dd>
<dt>label</dt><dd>Tests</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| _test | .01 |  Test | {::nomarkdown}The pointers to the Laboratory Tests for this accession.{:/} | POINTER |  | REQUIRED, INDEXED | Laboratory_Test-60 | 
| urgency_of_test | 1 | Urgency Of Test | {::nomarkdown}The urgency of the test being completed, e.g. stat, routine, etc.<br/>  There is a special urgency used only for workload recording called<br/>WKL. This urgency indicates that this test was not ordered directly,<br/>but was added to the accession to support certain workload functions.{:/} | POINTER |  | REQUIRED | Urgency-62_05 | 
| load_list_entry | 2 | Load List Entry | {::nomarkdown}The load/work list location is stored here in \;\ piece format.<br/>\load list pointer;tray;cup\{:/} | STRING |  |  |  | 
| technologist | 3 | Technologist | {::nomarkdown} The DUZ of the person verifying the test.<br/>NOTE: This field previously contained technologist initials.<br/>Converted with the release of version 5.2.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| complete_date | 4 | Complete Date | {::nomarkdown}If null, the test is incomplete.  Otherwise, it is the date/time of completion.{:/} | DATE-TIME |  |  |  | 
| disposition | 5 | Disposition |  | STRING |  |  |  | 
| tally_to_wkld | 5.1 | Tally To Wkld | {::nomarkdown}If test was counted for WKLD workload, workload file entry<br/> is entered here.<br/> This flag prevents the test from being counted<br/> more than once.<br/>UPDATE THIS FIELD AUTOMATICALLY.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES</dd><dt>0</dt><dd>HAS NOT</dd></dl>{:/} | 
| wkld_code | 6 | Wkld Code | {::nomarkdown} This sub file is devoted entirely to workload functions. The data<br/>is stuffed automatically by routines at the time of verification of the<br/>test.{:/} | [OBJECT] |  |  | [Wkld_Code-68_14](#Wkld_Code-68_14)  | 
| identity | 7 | *identity | {::nomarkdown}Will deleted in future versions.{:/} | STRING |  |  |  | 
| wkld_suffix | 8 | Wkld Suffix | {::nomarkdown} This field contains the WKLD code suffix used to identify the method<br/>used to verify this particular test. The suffix is stuffed at<br/>the time of verification automatically. This field can be used to sort<br/>methods used to assay various test.<br/>  The decimal point of the WKLD code suffix is stripped off.{:/} | STRING |  |  |  | 
| parent_test | 8.1 | Parent Test | {::nomarkdown} This field contains the parent ordered test. In the case of panel test,<br/>this field will contain the original ordered test.{:/} | POINTER |  |  | Laboratory_Test-60 | 
| shipping_manifest | 9 | Shipping Manifest | {::nomarkdown}This fields is used at the collection site to determine the exact<br/>placement of each test.  This field will contain the shipping manifest<br/>code for referral or send out lab tests.  For all local tests the field<br/>will be null.{:/} | POINTER |  |  | Lab_Shipping_Manifest-62_8 | 

## <a name="Specimen-68_05"></a>Specimen-68_05 

<dl>
<dt>id</dt><dd>Specimen-68_05</dd>
<dt>fmId</dt><dd>68.05</dd>
<dt>label</dt><dd>Specimen</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| specimen | .01 | Specimen | {::nomarkdown}The site/specimen from the Topography field file.  There may be<br/>more than one specimen for certain types of accessions.{:/} | POINTER |  | REQUIRED | Topography_Field-61 | 
| collection_sample | 1 | Collection Sample | {::nomarkdown}The collection sample is from file 62.{:/} | POINTER |  |  | Collection_Sample-62 | 
| test | 2 | Test | {::nomarkdown} This field contains the test ordered for this patient/specimen{:/} | [OBJECT] |  |  | [Test-68_13](#Test-68_13)  | 

## <a name="Wkld_Code-68_14"></a>Wkld_Code-68_14 

<dl>
<dt>id</dt><dd>Wkld_Code-68_14</dd>
<dt>fmId</dt><dd>68.14</dd>
<dt>label</dt><dd>Wkld Code</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| wkld_code | .01 | Wkld Code | {::nomarkdown}WKLD codes associated with test/procedure are entered here.{:/} | POINTER |  | REQUIRED, INDEXED | Wkld_Code-64 | 
| test_multiply_factor | .02 | Test Multiply Factor | {::nomarkdown}Enter the number of times the WKLD code is used for the test/procedure.<br/>to obtain the correct total weight. The default value is 1. This number<br/>is used to determine the total weight to credited for this test.<br/> This is the number of times this test has been counted.{:/} | NUMERIC |  |  |  | 
| wkld_code_counted | .03 | Wkld Code Counted | {::nomarkdown} This field is used by the workload compiling routine to prevent the<br/>WKLD code from being counted twice. The number 1 indicates the weight<br/>has been captured for this WKLD code.<br/>  NOTE: THIS FIELD SHOULD NOT BE MANUALLY EDITED.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| wkld_code_tally | .04 | Wkld Code Tally | {::nomarkdown}A WKLD code may have several individual counts.<br/> Each time a count is made it is added to the WKLD<br/> code tally and the WKLD CODE COUNTED flag is set to zero.<br/> This field is utilized when additional work has been added to a part<br/>icular WKLD code. Microbioloby is a area which many require a WKLD code<br/>be counted more than once. This field then contains the total number<br/>of times the WKLD code weight has been multiplied.<br/>  NOTE: THIS FIELD SHOULD NOT BE MANUALLY EDITED.{:/} | NUMERIC |  |  |  | 
| wkld_code_repeat_count | .05 | Wkld Code Repeat Count | {::nomarkdown}  This field is not being presently used. It may be used in the<br/>future to automatically capture repeat workload. Another field<br/>in ^LRO(64.1, is being used to capture this data from manual entry.{:/} | NUMERIC |  |  |  | 
| completion_time | 1 | Completion Time | {::nomarkdown} This field conatins the completion time for this individual WKLD code<br/>procedure. It calulated at the time of verification by the routines<br/>which stuff the data into this field.{:/} | DATE-TIME |  |  |  | 
| user | 2 | User | {::nomarkdown}  This field contains the person (NEW PERSON file) which verified this <br/>particular portion of the test. This field is automatically stuffed at <br/>the time of verification.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| institution | 3 | Institution | {::nomarkdown}  This is the institution the verifying person used when logging on<br/>to the system. This field allow the workload from Multi-Div sites<br/>to be stored and counted separately.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| major_section | 4 | Major Section | {::nomarkdown}  This field contains the accession area which should recieve credit for<br/>this workload. ie CHEMISTRY{:/} | POINTER |  |  | Accession-68 | 
| lab_subsection | 5 | Lab Subsection | {::nomarkdown} This the second level used for identifying where workload credit should<br/>be credited.<br/> ie. SPECIAL CHEMISTRY{:/} | POINTER |  |  | Accession-68 | 
| work_area | 6 | Work Area | {::nomarkdown} This is the lowest level used to credit workload. This field may be<br/>the same as the LAB SUBSECTION entry.<br/> i.e., ELECTROPHORESIS{:/} | POINTER |  |  | Accession-68 | 
| manual_edit | 12 | Manual Edit | {::nomarkdown} If this data is entered manually via a edit template. This field would<br/>indicate if the data was not stuffed automatically.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 

## <a name="Test-68_13"></a>Test-68_13 

<dl>
<dt>id</dt><dd>Test-68_13</dd>
<dt>fmId</dt><dd>68.13</dd>
<dt>label</dt><dd>Test</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| test | .01 | Test | {::nomarkdown}The procedures to be done on a particular specimen.{:/} | POINTER |  | REQUIRED | Laboratory_Test-60 | 
| tissue_blocks | 1 | Tissue Block(s) | {::nomarkdown}Used for path examination.{:/} | STRING |  |  |  | 
| total_slides | 2 | Total Slides | {::nomarkdown} This field contains the number of slides used to process this specimen.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:30:51 am</p>{:/}