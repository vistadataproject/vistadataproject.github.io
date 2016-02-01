---
layout: default
title: RPC Sample Doc
---

# 1. ALLERGY

## ORWDAL32 CLINUSER

Determine if user can perform cover sheet allergy actions.


__Comment:__ Used for permission check


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWDAL32 CLINUSER | CLINUSER^ORWDAL33 | SINGLE VALUE<br><br>1^ = user has access0^reason = user does not have access | - | /enteredinerrorResource.js


NO INPUT PARAMETERS

## ORWDAL32 ALLERGY MATCH

Given a text string, return a list of possible matches from severaldifferent sources.


__Comment:__ 'callRpc' tests in VistAJS-spec.js. In there see an expect with '1^VA Allergies File^^^TOP^+' etc. Suggests using Jasmine etc tests for basic RPC driven calls


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWDAL32 ALLERGY MATCH | ALLSRCH^ORWDAL32 | ARRAY | - | VistAJS/examples.js<br>VistaJS/integration-tests/VistaJS-spec.js<br>/operationaldataResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
user input string | LITERAL<br>32 maximum length | True | 


## ORWDAL32 DEF

Returns default values and list sets for Allergy ordering dialog.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWDAL32 DEF | DEF^ORWDAL32 | ARRAY | - | VistAJS/examples.js


NO INPUT PARAMETERS

## ORWDAL32 SAVE ALLERGY


__Comment:__ code defines new 'object' in a {} and sends it in this 'write call' - Generic SAVE used for entered in error. GMRAERR set to True. Explicit parameters are uid, dfn. Then the params list has an optional comment


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWDAL32 SAVE ALLERGY | EDITSAVE^ORWDAL32 | SINGLE VALUE | - | VistAJS/examples.js<br>/enteredinerrorResource.js<br>/writebackallergysaveResource.js


NO INPUT PARAMETERS

## ORWDAL32 SYMPTOMS


__Comment:__ '['', 1]' is arguments and expects results with '476^A FIB-FLUTTER'


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWDAL32 SYMPTOMS | SYMPTOMS^ORWDAL32 | ARRAY | - | VistAJS/examples.js<br>/operationaldataResource.js


NO INPUT PARAMETERS



# 2. HEALTH SUMMARY

## ORWRP REPORT LISTS

This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWRP REPORT LISTS | LIST^ORWRP | ARRAY<br><br>This rpc returns the list of reports, health summary typesand date ranges allowed on the Report tab.Note: Health Summary Types returned are based on the      ORWRP HEALTH SUMMARY TYPE LIST parameter defintion in file      PARAMETERS(#8989.5) and PARAMETER DEFINITION FILE(#8989.51).Format:[REPORT LIST]<id> ^ <name> ^ <ask date range> ^ <ask health summary type> ^ <right margin>  .  .  .$$END[HEALTH SUMMARY TYPES]<internal entry number to HEALTH SUMMARY TYPE file> ^ <name of type>  .  .  .$$END[DATE RANGES]<days for TODAY> ^ <display text>  .  .  .$$ENDExample:[REPORT LIST]<id> ^ <name> ^ <ask date range> ^ <ask health summary type> ^ <right margin>1^Health Summary^N^Y^80  .  .  .$$END[HEALTH SUMMARY TYPES]23^Current RX's  .  .  .$$END[DATE RANGES]0^Today  .  .  .$$END | SUBSCRIPTION | /healthsummaries/healthSummariesResource.js


NO INPUT PARAMETERS

## ORWRP REPORT TEXT

This rpc retrieves the report text for a report selected onthe Report tab.the report format on the roll 'n scroll version of CPRS.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWRP REPORT TEXT | RPT^ORWRP | GLOBAL ARRAY<br><br>Text array for report section is returned.Also, the first line of the text contains the following information:     <number of current section being passed> ^ <last section number> | SUBSCRIPTION | /healthsummaries/healthSummariesResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
DFN | LITERAL<br>20 maximum length | True | Internal entry number of entry in the Patient file.
REPORT ID | LITERAL<br>20 maximum length | True | Identification number of the desired report.
HEALTH SUMMARY TYPE | LITERAL<br>20 maximum length | True | Internal entry number of entry in the HEALTH SUMMARY TYPE file.This parameter is only required for Health Summary reports.
DATE RANGE | LITERAL<br>5 maximum length | True | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports.
REPORT SECTION | LITERAL<br>2 maximum length | True | This parameter specifics which portion of the report should beretrieved.If REPORT SECTION equals 0 then the entire report is re-compiled and thefirst section is passed back. If the report is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters




# 3. HMP


## HMPCRPC RPC
__NO RPC INFO__



# 4. IMMUNIZATION

## PX SAVE DATA

The purpose of this RPC is to allow the calling application to save data to PCE, such as Immunization data. See the Integration Control Registration document for the full description of the data needed.


__Comment:__ SAVE write - .js has data but its a small subset of all the options in the ^ delimited first parameter of the RPC; [params, null, 'HMP', 'HMP'] - params is ^ based data; null means no VISTA-known hospital location; package and src are HMP. Typical example of complex structured parameter for RPC that is COMPLEX/NOT formally defined - typed as a LIST; note that null is mandatory for transport ie/ marked as required in the description but the value is actually optional.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
PX SAVE DATA | SAVE^PXRPC | SINGLE VALUE<br><br>The only return will be the one passed back to the calling application. A -2 indicates that the routine PXAI found an issue even though the original input values appeared to be correct. A -3 indicates that the input parameters were not properly defined. A 1 indicate success. | PUBLIC | /immunizations/immunizationResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
PCELIST | LIST<br>10000 maximum length | True | PCELIST (n)= HDR ^ Encounter Inpatient? ^ Note has CPT codes? ^ Visit              string [Encounter location; Encounter date/time; Encounter             Service category]  (REQUIRED)        (n)=VST^DT^Encounter date/time        (n)=VST^PT^Encounter patient (DFN) (n)=VST^HL^Encounter location        (n)=VST^VC^ Encounter Service Category         If  applicable:                      (n)=VST^PR^ Parent for secondary visit        (n)=VST^OL^ Outside Location for Historical visits        (n)=VST^SC^ Service Connected related?        (n)=VST^AO^ Agent Orange related?        (n)=VST^IR^ Ionizing Radiation related?        (n)=VST^EC^ Environmental Contaminates related?        (n)=VST^MST^ Military Sexual Trauma related?        (n)=VST^HNC^ Head and/or Neck Cancer related?        (n)=VST^CV^ Combat Vet related?        (n)=VST^SHD^ Shipboard Hazard and Defense related?         (n)=PRV^PRV ^ Provider IEN ^^^ Provider Name ^ Primary Provider?        (n)=POV(+:  add, -: delete) ^ ICD diagnosis code ^ Category  ^             Narrative (Diagnosis description) ^ Primary Diagnosis? ^            Provider String ^ Add to Problem List? ^^^ Next comment            sequence # if saving comments        (n)=COM^COM (Comments) ^ Next comment sequence # ^ @ = no             comments added        (n)=CPT (+:  add, -: delete) ^ Procedural  CPT code ^ Category ^             Narrative (Procedure description) ^ Quantity ^ Provider IEN            ^^^ [# of modifiers;  Modifier code/Modifier IEN ^ Next            comment sequence # ^        (n)=IMM (+:  add, -: delete) ^ Immunization IEN ^ Category ^             Narrative (Immunization description/name) ^ Series ^            Encounter Provider ^ Reaction ^ Contraindicated? ^ Refused? ^            Next comment sequence # ^ CVX ^ Event Info Source ^ Dosage ^            Route ^ Admin Site ^ Lot# ^ Manufacturer ^ Expiration Date        (n)=SK (+:  add, -: delete) ^ Skin Test IEN ^ Category ^             Narrative (Skin Test description/name) ^ Results ^^ Reading            ^^^ Next comment sequence #        (n)=PED (+:  add, -: delete) ^ Patient Education IEN ^ Category ^             Narrative (Patient Education description/name) ^ Level of            understanding ^^^^^ ^^ Next comment sequence #        (n)=HF (+:  add, -: delete) ^ Health Factor IEN ^ Category ^             Narrative (Health Factor description/name) ^ Level ^^^^^ Next            comment sequence # ^ Get Reminder        (n)=XAM(+:  add, -: delete) ^ Exam IEN ^ Category ^ Narrative             (Exam description/name) ^ Results ^^^^^ Next comment sequence            #
LOC | LITERAL<br>40 maximum length | True | This is the hospital location. This is not used when the information is from an outside source.
PKGNAME | LITERAL<br>60 maximum length | True | The package name that is sending the data to PCE. This should be the full package name, such as PATIENT CARE ENCOUNTERS. 
SRC | LITERAL<br>60 maximum length | True | The source of the data - such as VLER E-HEALTH EXCHANGE.




# 5. NON VA MED


## PSH OERR
__NO RPC INFO__



# 6. ORDER

## ORQOR DETAIL

Returns detailed information regarding an order.


__Comment:__ a simple order get - easy for FMQL compare


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQOR DETAIL | DETAIL^ORWOR | GLOBAL ARRAY<br><br>Array of detailed order information. | SUBSCRIPTION | /singleorder/orderDetail.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
ORDER | LITERAL<br>16 maximum length | True | Order identifier/number from file #100.




# 7. OTHER

## ORQQAL LIST

Returns a list of allergies for a patient.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQQAL LIST | LIST^ORQQAL | ARRAY<br><br>Array of patient allergies.  Returned data is delimited by "^" andincludes: allergen/reactant, reactions/symptoms (multiple symptoms/reactions are possible - delimited by ";"), severity, allergy id (recordnumber from the Patient Allergies file (#120.8). | SUBSCRIPTION | VistAJS/examples.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
PATIENT ID | LITERAL<br>16 maximum length | True | The record number of the patient (DFN) from the Patient file (#2).


## ORWU USERINFO

Returns preferences for the current user.


__Comment:__ answer '10000000225^USER,PANORAMA' etc.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORWU USERINFO | USERINFO^ORWU | SINGLE VALUE | - | VistAJS/examples.js<br>VistaJS/integration-tests/VistaJS-spec.js


NO INPUT PARAMETERS



# 8. PROBLEM

## ORQQPL4 LEX

This RPC supports the Clinical Lexicon Search for Problem List. It will return an indefinite list of terms that match the user's search string.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQQPL4 LEX | LEX^ORQQPL4 | GLOBAL ARRAY | SUBSCRIPTION | /problems/problemsResource.js


NO INPUT PARAMETERS

## ORQQPL EDIT SAVE

sAVES EDITED PROBLEM RECORD


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQQPL EDIT SAVE | EDSAVE^ORQQPL1 | SINGLE VALUE<br><br>BOOLEAN 1= FILE OK, 0 NO FILE | - | /problems/problemsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
IFN | LITERAL |  | RECORD IFN
PROV | LITERAL |  | PROBLEM RESP PROVIDER
VAMC | LITERAL |  | FACILITY ID


## ORQQPL DELETE

DELETES A PROBLEM


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQQPL DELETE | DELETE^ORQQPL2 | SINGLE VALUE | - | /problems/problemsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
IFN | LITERAL |  | 
PROVIDERID |  |  | 
VAMC |  |  | 
REASON | LITERAL |  | 


## ORQQPL ADD SAVE

Add new problem record


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
ORQQPL ADD SAVE | ADDSAVE^ORQQPL1 | SINGLE VALUE | - | /problems/problemsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMPDFN | LITERAL |  | 
GMPROV |  |  | 
GMPVAMC | LITERAL |  | 
ADDARRAY | LIST |  | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET




# 9. VITALS

## GMV ADD VM

This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.


__Comment:__ 'Resource' wrapper for RPC. Note that doesn't force Provider id (as for data from elsewhere!). There is a test with sample data under tests


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
GMV ADD VM | EN1^GMVDCSAV | SINGLE VALUE<br><br>RESULT does not return a value.  The data is filed in the GMRV VITAL MEASUREMENT (#120.5) file. Example:  > S GMRVDATA="3051011.1635^134^1;120/80;^67^87*2:38:50:75" > D EN1^GMVDCSAV(.RESULT,GMRVDATA) | SUBSCRIPTION | /vitals/writebackvitalssaveResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMRVDATA | LITERAL<br>255 maximum length | True | This variable contains the data needed to create a Vital/Measurementrecord in the GMRV Vital Measurement (#120.5) file. The values are parsedout of the GMRVDATA variable and filed. GMRVDATA has the following data: piece1^piece2^piece3^piece4^piece5  where:  piece1 = date/time in FileMan internal format  piece2 = patient number from FILE 2 (i.e., DFN)  piece3 = vital type, a semi-colon, the reading, a semi-colon, and            oxygen flow rate and percentage values [optional] (e.g.,           21;99;1 l/min 90%)  piece4 = hospital location (FILE 44) pointer value  piece5 = user number from FILE 200 (i.e., DUZ), an asterisk, and the            qualifier (File 120.52) internal entry numbers separated by           colons (e.g., 547*50:65)


## GMV CLOSEST READING

This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
GMV CLOSEST READING | CLOSEST^GMVGETD | SINGLE VALUE<br><br>Returns a string composed of two pieces. The first piece contains the observation date/time (FILE 120.5, Field .01) of the record that was found. The second piece contains the rate (FILE 120.5, Field 1.2) of the record. If there is an error, the first piece will be -1 and the second piece will be the error text.  Example:  > S GMVDFN=134,GMVDT=3090225.08,GMVT="WT",GMVFLAG=0 > D CLOSEST(.TEST,GMVDFN,GMVDT,GMVT,GMVFLAG) ZW TEST > TEST="3081106.142926^135" | RESTRICTED | /vitals/vitalsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMVDFN | LITERAL<br>12 maximum length | True | A pointer to the Patient (#2) file (i.e., DFN).
GMVDT | LITERAL<br>14 maximum length | True | The date/time to search from. The default is NOW.
GMVT | LITERAL<br>5 maximum length | True | The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT).
GMVFLAG | LITERAL<br>1 maximum length | True | A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction.


## GMV MARK ERROR

This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.


__Comment:__ Here's entered in error == update (only one allowed) ie. only allow write of this property.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
GMV MARK ERROR | ERROR^GMVUTL1 | SINGLE VALUE<br><br>If the record is marked as entered in error, RESULT is set to "OK".Otherwise, RESULT is set to "Record Not Found"  Example: > S GMVDATA="1560^547^1" > D ERROR^GMVUTL1(.RESULT,GMVDATA) ZW RESULT > RESULT="OK" | SUBSCRIPTION | /vitals/enteredinerrorResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMVDATA | LITERAL<br>60 maximum length | True | GMVDATA contains the following information:  piece1^piece2^piece3  where piece1 = FILE 120.5 IEN        piece2 = FILE 200 IEN (i.e., DUZ)       piece3 = A single value to indicate the reason for the error.                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =                INCORRECT PATIENT and 4 = INVALID RECORD


## GMV V/M ALLDATA

This remote procedure call lists all vitals/measurements data for a givendate/time span. This remote procedure call is documented in Integration Agreement 4654.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
GMV V/M ALLDATA | VMDATA^GMVGGR1 | GLOBAL ARRAY<br><br>RESULT array returns the data or a "NO DATA" message. Case A: The NO DATA message is returned. The TMP global returns: ^TMP($J,1)=lastname,first  social security number  date of birth  age             "(Yrs)" gender ^TMP($J,2)="Unit:" unit  "Room:" room ^TMP($J,3)="Division:" division ^TMP($J,4)= search date range ^TMP($J,5)="NO DATA" Example:  > S GMVDATA="90^3051012^3051012^0" > D VMDATA^GMVGGR1(.RESULT,GMVDATA) ZW RESULT > RESULT="^TMP(539349605)" > D ^%G > Global ^TMP($J > ^TMP(539349605,1)=VITPATIENT,ONE 000-11-1234  JAN 2,1934  71 (Yrs)                       MALE                  2)=Unit:    Room:                   3)=Division:                   4)=OCT 11,2005 - OCT 11,2005                  5)=NO DATA  Case B: Fourth piece of GMVDATA (Flag) is 0 The TMP global returns: ^TMP($J,1)=lastname,first social security number  date of birth  age             "(Yrs)" sex ^TMP($J,2)="Unit:" unit  "Room:" room ^TMP($J,3)="Division:" division ^TMP($J,4)= search date range ^TMP($J,n)=piece1 through piece23  where piece1 = date of reading in mm-dd-yy format       piece2 = time of reading in hh:mm:ss format       piece3 = Temperature value and qualifier abbreviations       piece4 = Pulse value and qualifier abbreviations       piece5 = Respiration and qualifier abbreviations       piece6 = Pulse Oximetry value, qualifier abbreviations, flow rate                 and percentage value       piece7 = Blood Pressure value and qualifier abbreviations       piece8 = Weight value (pounds) and qualifier abbreviations       piece9 = Weight value (kilos)       piece10 = Body Mass Index calculation       piece11 = Height value (inches) and qualifier abbreviations        piece12 = Height value (centimeters)       piece13 = Circumference Girth value (inches) and qualifier                  abbreviations       piece14 = Circumference Girth value (centimeters)       piece15 = Central Venous Pressure value (cmH2O)       piece16 = Central Venous Pressure value (mmHg)       piece17 = Input value (from Intake & Output package)       piece18 = Output value (from Intake & Output package)       piece19 = Pain value       piece20 = always null       piece21 = always null       piece22 = hospital location (FILE 44, Field .01)       piece23 = name of person who entered the data (FILE 200, Field .01)       piece24 = database where the record is stored Example:  > S GMVDATA="134^3050901^3050930^0"           > D VMDATA^GMVGGR1(.RESULT,GMVDATA) ZW RESULT > RESULT="^TMP(539349605)" > D ^%G > Global ^TMP($J > ^TMP(539349605,1)=VITPATIENT,TWO 000-11-1234  JUN 1,1957  48 (Yrs)                       FEMALE                  2)=Unit: 2-ASM   Room:                   3)=Division: TEST HINES                  4)=SEP 1,2005 - SEP 30,2005                  5)=09-14-05^17:18:00^^^^^^135- A St^61.36^22^66-                      A^167.64^^^^^^^^ ^^2-ASM^VITPROVIDER,ONE^Vitals                  6)=09-26-05^11:30:57^^^^^120/80*- La Si Car                      Clf^^^^^^^^^^^^^^^2-A SM^VITPROVIDER,TWO^Vitals | SUBSCRIPTION | /vitals/vitalsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMVDATA | LITERAL<br>60 maximum length | True | GMVDATA consists of 4 pieces of data:  piece1^piece2^piece3^piece4  where piece1 = File 2 IEN (i.e., DFN)       piece2 = Start date/time for search (FileMan internal format)       piece3 = End date/time for search (FileMan internal format)       piece4 = 0 (zero)


## GMV VITALS/CAT/QUAL

Returns all qualifier information for the vital types selected. This remote procedure call is documented in Integration Agreement 4359.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
GMV VITALS/CAT/QUAL | GETVITAL^GMVUTL7 | ARRAY<br><br>Returns the qualifier information for the selected vital types in the array specified. Includes the abnormal high and low values for the vital type, if any. The result array contains: RESULT(n)=piece1^piece2^piece3^piece4^piece5^piece6^piece7^piece8^piece9 RESULT(n.nnn)=pieceA^pieceB^pieceC^pieceD   where n is a sequential number starting with 1        piece1 = V for vital type        piece2 = FILE 120.51 IEN for this vital type        piece3 = vital type name (FILE 120.51, Field .01)        piece4 = Abbreviation (FILE 120.51, Field 1)        piece5 = PCE Abbreviation (FILE 120.51, Field 7)        piece6 = If vital type is Blood Pressure this is the                  abnormal systolic high value (File 120.57, Field 5.7).                 If vital type is Temperature, this is the abnormal high                  value (File 120.57, Field 5.1)                 If vital type is Respiration, this is the abnormal high                 value (File 120.57, Field 5.5)                 If vital type is Pulse, this is the abnormal high value                  (File 120.57, Field 5.3)                 If vital type is Central Venous Pressure, this is the                  abnormal high value (File 120.57, Field 6.1)        piece7 = If vital type is Blood Pressure this is the                  abnormal diastolic high value (File 120.57, Field 5.71).                 If vital type is Temperature, this is the abnormal low                  value (File 120.57, Field 5.2)                 If vital type is Respiration, this is the abnormal low                 value (File 120.57, Field 5.6)                 If vital type is Pulse, this is the abnormal low value                  (File 120.57, Field 5.4)                 If vital type is Central Venous Pressure, this is the                  abnormal low value (File 120.57, Field 6.2)        piece8 = If vital type is Blood Pressure this is the                  abnormal systolic low value (File 120.57, Field 5.8).                 If vital type is Central Pressure, this is the abnormal                  O2 saturation (File 120.57, Field 6.3)        piece9 = If vital type is Blood Pressure this is the                  abnormal diastolic low value (File 120.57, Field 5.81).  RESULT(n.nnn)=pieceA^pieceB^pieceC^pieceD  where pieceA = C for CATEGORY or Q for QUALIFIER   if pieceA is C, then          pieceB = FILE 120.53 IEN for this category        pieceC = category name (FILE 120.53, Field .01)        pieceD = null   if pieceB is Q, then        pieceB = FILE 120.52 IEN for this qualifier        pieceC = qualifier name (FILE 120.52, Field .01)        pieceD = synonym (FILE 120.52, Field .02) Example: > S GMVLIST="HT^WT"                             > D GETVITAL^GMVUTL7(.RESULT,GMVLIST) ZW RESULT > RESULT(1)="V^8^HEIGHT^HT^HT^" > RESULT(1.001)="C^4^QUALITY" > RESULT(1.002)="Q^42^ACTUAL^A" > RESULT(1.003)="Q^43^ESTIMATED^E" > RESULT(1.004)="Q^107^Stated^St" > RESULT(2)="V^9^WEIGHT^WT^WT^" > RESULT(2.001)="C^2^METHOD" > RESULT(2.002)="Q^39^OTHER^Oth" > RESULT(2.003)="Q^50^SITTING^Si" > RESULT(2.004)="Q^51^STANDING^St" > RESULT(2.005)="C^4^QUALITY" > RESULT(2.006)="Q^42^ACTUAL^A" | SUBSCRIPTION | /vitals/vitalsResource.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
GMVLIST | LITERAL<br>60 maximum length | True | A list of vital type abbreviations (FILE 120.51, Field 1) separated byup-arrows (e.g., "HT^WT" for height and weight). When the value is null,all qualifier information will be returned for all vital types.




# 10. VPR

## VPR GET PATIENT DATA JSON

This RPC retrieves the requested data from VistA, and returns it in^TMP("VPR",$J,n) as JSON.


Name | Function | Return Value | Availability | eHMP
--- | --- | --- | --- | ---
VPR GET PATIENT DATA JSON | GET^VPRDJ | GLOBAL ARRAY<br><br>Text array formatted as JSON | SUBSCRIPTION | VistAJS/examples.js


Input parameters ...

Parameter | Type | Required | Description
--- | --- | --- | ---
FILTER | LIST | True | List of name-value pairs defining the search.



## VPRCRPC RPC
__NO RPC INFO__

