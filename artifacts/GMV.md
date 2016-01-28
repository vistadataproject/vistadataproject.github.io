---
layout: default
title: GMV RPCs
---


# GMV RPCs

## GMV ADD VM

This remote procedure call is used to enter a new Vital/Measurement recordin the GMRV Vital Measurement file (#120.5). This remote procedure call is documented in Integration Agreement 3996.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV ADD VM | EN1^GMVDCSAV | SINGLE VALUE<br><br>RESULT does not return a value.  The data is filed in the GMRV VITAL MEASUREMENT (#120.5) file. Example:  > S GMRVDATA="3051011.1635^134^1;120/80;^67^87*2:38:50:75" > D EN1^GMVDCSAV(.RESULT,GMRVDATA) | SUBSCRIPTION


## GMV ALLERGY

This remote procedure call retrieves the patient's allergy information. This remote procedure call is documented in Integration Agreement 4350.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV ALLERGY | ALLERGY^GMVUTL3 | ARRAY<br><br>Returns the patient allergy information in the array specified.  The result array returns:  RESULT(n)=This patient has the following allergy(ies):      (n+1)=piece1   where piece1 = the allergy name             n = sequential number starting at 1. If there is no data, then the following is returned: RESULT(1)=No Allergy Assessment Example: > S DFN=134 > D ALLERGY^GMVUTL3(.RESULT,DFN) ZW RESULT > RESULT(1)="This patient has the following allergy(ies): " > RESULT(2)="PENICILLIN" | SUBSCRIPTION


## GMV CHECK DEVICE

This RPC calls a KERNEL utility to return a list of printers the user may select to print output. Returns a maximum of twenty entries.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV CHECK DEVICE | CHKDEV^GMVUTL2 | ARRAY<br><br>RESULT(n)=P1^P2^P3^P4^P5^P6  where n = a sequential number starting with 1      P1 = File 3.5  IEN      P2 = File 3.5 name (.01 value)       P3 = File 3.5 name (.01 value) or flag to indicate last entry in            the array      P4 = location of terminal      P5 = right margin      P6 = page length | RESTRICTED


## GMV CLINIC PT

This procedure lists patients who have an appointment for a selectedclinic and a given period of time.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV CLINIC PT | CLINPTS^GMVCLIN | ARRAY<br><br>Returns a list of patient names and DFNs for the selected clinic and thegiven date span in the array specified. | RESTRICTED


## GMV CLOSEST READING

This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV CLOSEST READING | CLOSEST^GMVGETD | SINGLE VALUE<br><br>Returns a string composed of two pieces. The first piece contains the observation date/time (FILE 120.5, Field .01) of the record that was found. The second piece contains the rate (FILE 120.5, Field 1.2) of the record. If there is an error, the first piece will be -1 and the second piece will be the error text.  Example:  > S GMVDFN=134,GMVDT=3090225.08,GMVT="WT",GMVFLAG=0 > D CLOSEST(.TEST,GMVDFN,GMVDT,GMVT,GMVFLAG) ZW TEST > TEST="3081106.142926^135" | RESTRICTED


## GMV CONVERT DATE

This remote procedure call converts a user-supplied date/time into VAFileMan's internal and external date format. This remote procedure call is documented in Integration Agreement 4353.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV CONVERT DATE | GETDT^GMVGETQ | SINGLE VALUE<br><br>RESULT=Date in internal FileMan format^Date in external FileMan format Example: > S GMRDATE="10/11/2005@10:30AM" > D GETDT^GMVGETQ(.RESULT,GMRDATE) ZW RESULT > RESULT="3051011.103^OCT 11, 2005@10:30:00" | SUBSCRIPTION


## GMV CUMULATIVE REPORT

Prints the Cumulative Vitals Report.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV CUMULATIVE REPORT | EN1^GMVSC0 | SINGLE VALUE<br><br>Returns a message stating the outcome of the request to queue the report. If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV DLL VERSION

Returns a YES or NO response to indicate if the Dynamic Link Library (DLL)file should be used. This remote procedure call is documented in Integration Agreement 4420.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV DLL VERSION | DLL^GMVUTL8 | SINGLE VALUE<br><br>Returns YES if the file can be used. Returns NO, if the file cannot beused. Returns null if the file was not found. Example: > S GMVX="GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34" > D DLL^GMVUTL8(.RESULT,GMVX) ZW RESULT > RESULT="NO" | SUBSCRIPTION


## GMV ENTERED IN ERROR-PATIENT

Prints a report of all vitals/measurements entered in error for theselected patient for a given date/time range.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV ENTERED IN ERROR-PATIENT | EN1^GMVER0 | SINGLE VALUE<br><br>Returns a message stating the outcome of the request to queue the report. If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV EXTRACT REC

This remote procedure call retrieves vital records from the GMRV VitalMeasurement (#120.5) file for a selected patient within a given date span. This remote procedure call is documented in Integration Agreement 4416.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV EXTRACT REC | GETVM^GMVGETD | GLOBAL ARRAY<br><br>Returns the name of the global array (i.e., ^TMP($J,"GRPC")) containing alist of vital records for the selected patient within the defined daterange.  The TMP global contains:  ^TMP($J,"GRPC",n)=piece1^piece2  where piece1 = File 120.5 IEN       piece2 = a string of text in the following format:                Date/time taken (external)   Vital Type Abbreviation:                 Rate U.S. units (Metric value) (Qualifiers)            n = sequential number starting at 1.   Example: > S GMRVDATA="134^3051028^BP^3051001" > D GETVM^GMVGETD(.RESULT,GMRVDATA) ZW RESULT > RESULT="^TMP(538999278,"GRPC")" > D ^%G > Global ^TMP($J,"GRPC" > ^TMP(538999278,"GRPC",1)=8858^10/11/05@16:35   B/P:   120/80*  (L ARM,    SITTING, CAROTID, CALF) _VITPROVIDER,ONE >                       2)=8961^10/20/05@14:47   B/P:   128/81*  (L ARM,   SITTING, PALPATED) _VITPROVIDER,TWO If there is no data, then the following is returned: ^TMP($J,"GRPC",1)=0^NO VITALS/MEASUREMENTS ENTERED WITHIN THIS PERIOD | SUBSCRIPTION


## GMV GET CATEGORY IEN

Returns the IEN if the value is found in the GMRV VITAL CATEGORY (#120.53)file. This remote procedure call is documented in Integration Agreement 4354.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV GET CATEGORY IEN | CATEGORY^GMVUTL8 | SINGLE VALUE<br><br>Returns the IEN if GMVCAT exists in FILE 120.53 Example: > S GMVCAT="METHOD" > D CATEGORY^GMVUTL8(.RESULT,GMVCAT) ZW RESULT > RESULT=2 | SUBSCRIPTION


## GMV GET CURRENT TIME

Gets the current date and time from the server. This remote procedure call is documented in Integration Agreement 4355.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV GET CURRENT TIME | TIME^GMVUTL7 | SINGLE VALUE<br><br>Returns current date and time in FileMan internal and external format. Example: > D TIME^GMVUTL7(.RESULT) ZW RESULT > RESULT=3051011.143332 Note: There is an input parameter, P2, listed in the TIME line tag of theGMVUTL7 routine. However, it is not used. It can be set to any value oromitted. It remains for backwards compatibility. | SUBSCRIPTION


## GMV GET VITAL TYPE IEN

Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file. This remote procedure call is documented in Integration Agreement 4357.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV GET VITAL TYPE IEN | TYPE^GMVUTL8 | SINGLE VALUE<br><br>Returns the IEN if GMVTYPE exists in FILE 120.51. Example: > S GMVTYPE="WEIGHT" > D TYPE^GMVUTL8(.RESULT,GMVTYPE) ZW RESULT > RESULT=9 | SUBSCRIPTION


## GMV LATEST VITALS BY LOCATION

Prints the latest vitals/measurements for all patients on a given wardlocation.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV LATEST VITALS BY LOCATION | EN1^GMVDS1 | SINGLE VALUE<br><br>Returns a message stating the outcome of the request to queue the report.If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV LATEST VITALS FOR PATIENT

Prints the latest vitals/measurements for the selected patient.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV LATEST VITALS FOR PATIENT | EN1^GMVDS1 | SINGLE VALUE<br><br>Returns a message stating the outcome of the request to queue the report. If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV LATEST VM

This remote procedure call retrieves the latest vital records for a givenpatient. This remote procedure call is documented in Integration Agreement 4358.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV LATEST VM | GETLAT^GMVGETD | GLOBAL ARRAY<br><br>Returns the name of the global array (i.e., ^TMP($J,"GRPC")) containing the latest vitals for the selected patient.  The TMP global contains:   ^TMP($J,"GRPC",n)=piece1   where piece1 = is a formatted line of text.             n = sequential number starting at 1. The formatted line of text includes the vital type, value and unit(U.S.), value and unit (metric), qualifiers, supplemental oxygen, bodymass index value, person who entered the record and the database where the record is stored. If there is no data for the patient, the following is returned: ^TMP($J,"GRPC",1)=There are no results to report Example: > S GMRDFN=134 > D GETLAT^GMVGETD(.RESULT,GMRDFN) ZW RESULT > RESULT="^TMP(539349605,"GRPC")" > D ^%G > Global ^TMP($J,"GRPC" > ^TMP(539349605,"GRPC",1)=Temp.: (08/09/05@08:00)  102 F  (38.9 C)*   (ORAL) _VITPROVIDER,ONE_Vitals >                       2)=Pulse:       (07/14/05@16:33)  55    (LEFT,CAROTID,PALPATED,LYING)  _VITPROVIDER,ONE_Vitals >                       3)=Resp.:       (07/14/05@16:33)  31    (SPONTANEOUS,SITTING) _VITPROVIDER,ONE_Vitals >                       4)=Pulse Ox:    (08/22/05@13:48)  99% with    supplemental O2 1 L/min 90% NASAL CANNULA  _VITPROVIDER,ONE_Vitals >                       5)=B/P:         (09/26/05@11:30)  120/80* (L    ARM,SITTING,CAROTID,CALF)  _VITPROVIDER,TWO_Vitals >                       6)=Ht.: (09/14/05@17:18)  5 ft 6 in (167.64   cm) (ACTUAL)  _VITPROVIDER,ONE_Vitals >                       7)=Wt.: (09/14/05@17:18)  135 lb  (61.36 kg)   (ACTUAL,STANDING)  _VITPROVIDER,ONE_Vitals >                       8)=Body Mass Index:             22                           9)=CVP:         (08/22/05@17:09)  15 cmH2O (11.0    mmHg)  _VITPROVIDER,ONE_Vitals                        10)=Circ/Girth:  (07/22/05@10:22)  1 in (2.54 cm)  (DRY,ABDO MINAL)  _VITPROVIDER,TWO_Vitals                        11)=Pain: (09/15/05@16:43)  5    _VITPROVIDER,ONE_Vitals | SUBSCRIPTION


## GMV LOCATION SELECT

Select a hospital location by name, from a patient appointment or from apatient admission. Can also generate a list of active clinics. This remote procedure is documented in Integration Agreement 4461.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV LOCATION SELECT | RPC^GMVRPCHL | GLOBAL ARRAY<br><br>This remote procedure call allows the user to select a hospital location. The entry point is RPC^GMVRPCHL. It has input parameters of RESULTS, OPTION and DATA (ex. RPC^GMVRPCHL(.RESULTS,OPTION,DATA). The RESULTS variable will contain the ^TMP("GMVHLOC",$J) global array reference. The ^TMP("GMVHLOC",$J) global array contains the results. The OPTION variable identifies a line label in the GMVRPCHL routine that will be invoked to process the call. The DATA variable contains any additional values needed by the OPTION variable to process the call.  1) When the OPTION value is NAME, this RPC will do a file lookup.  The DATA value is a three part value separated by carets(^). The first  part is a file number. The second part is a value to look up. The third part is the field or fields to do the look up on. If the third piece is not defined, the lookup is done on the .01 field of the file.  The TMP global contains:  ^TMP("GMVHLOC",$J,0)=piece1  ^TMP("GMVHLOC",$J,n)=piece2^piece3    where piece1 = number of entries found         piece2 = file number, a semi-colon and record IEN         piece3 = field value  Example: >S OPTION="NAME",DATA="44^OUTPATIENT^.01"     >D RPC^GMVRPCHL(.RESULT,OPTION,DATA) ZW RESULT >RESULT="^TMP("GMVHLOC",539052767)" >D ^%G >Global ^TMP("GMVHLOC",$J >^TMP("GMVHLOC",539052767,0)=3                          1)=44;75^OUTPATIENT NUC MED                          2)=44;74^OUTPATIENT RADIOLOGY                          3)=44;80^OUTPATIENT ULTRASOUND   2) When the OPTION value is APPT, this RPC will return a list of clinic  appointments for the patient.  The DATA value is a four part value separated by carets(^). The first  piece is DFN. The second piece is the start date of the search. If  not defined, this value defaults to 365 days prior to today. The third  piece is the end date of the search. If not defined, the value defaults  to today. Both dates are in FileMan internal format. The fourth piece is a string of numbers to indicate what types of appointments to return. If not defined, the value defaults to "123456789" (i.e., all appointment types) where:  1 - Active/Kept 2 - Inpatient appts. only 3 - No-shows  4 - No-shows, auto-rebook 5 - Cancelled by clinic 6 - Cancelled by clinic, auto rebook 7 - Cancelled by patient 8 - Cancelled by patient, auto rebook 9 - No action taken  The TMP global contains:  ^TMP("GMVHLOC",$J,0)=piece1  ^TMP("GMVHLOC",$J,n)=piece2^piece3^piece4^piece5^piece6^piece7                       ^piece8^piece9^    where piece1 = number of entries found         piece2 = date/time of appt (FM internal)         piece3 = date/time of appt (external)         piece4 = hospital location IEN (FILE 44)         piece5 = hospital location name (FILE 44, Field .01)         piece6 = appt status (internal)         piece7 = appt status (external)         piece8 = appt type (internal)         piece9 = appt type (external)  Example: > S OPTION="APPT",DATA="78^3051201^3051206^"    > D RPC^GMVRPCHL(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVHLOC",539052767)" > D ^%G > Global ^TMP("GMVHLOC",$J > ^TMP("GMVHLOC",539052767,0)=1                            1)=3051206.1^DEC 6,2005@10:00^88^WEIGHT                                CLINIC^^^9^REGULAR  3) When the OPTION value is ADMIT, this RPC will return a list of  hospital admissions for the patient specified.  The DATA value is the patient's DFN.  The TMP global contains:  ^TMP("GMVHLOC",$J,0)=piece1  ^TMP("GMVHLOC",$J,n)=piece2^piece3^piece4^piece5^piece6    where piece1 = number of entries found         piece2 = date/time of admission (external)          piece3 = hospital location IEN (FILE 44)         piece4 = hospital location name (FILE 44, Field .01)         piece5 = type of movement (FILE 405.1, Field .01)         piece6 = movement IEN (FILE 405)  Example: > S OPTION="ADMIT",DATA=134 > D RPC^GMVRPCHL(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVHLOC",539052767)" > D ^%G > Global ^TMP("GMVHLOC",$J > ^TMP("GMVHLOC",539052767,0)=1                             1)=Apr 09, 2001 1:48:43 pm^67^                               2-ASM^DIRECT^1712    4) When the OPTION value is CLINIC, this RPC will return a list of  active clinics.  The DATA value is FROM^MAXIMUM^DIRECTION.    Where:          FROM = Value to begin the search (optional). Default is                  null (i.e., start with the first entry in the B x-ref).       MAXIMUM = Maximum number of entries to return. (optional)                  Default is 100.     DIRECTION = Direction of search (optional). 1 means forward and -1                  means backwards. Default is 1.  The TMP global contains:  ^TMP("GMVHLOC",$J,0)=piece1  ^TMP("GMVHLOC",$J,n)=piece2^piece3               where piece1 = number of entries found         piece2 = 44;ien (44, a semi-colon and the entry number)         piece3 = location name (FILE 44, Field .01)         n is a sequential number starting with zero                   Example: > S OPTION="CLINIC",DATA="A^5^1"                            > K RESULTS D RPC^GMVRPCHL(.RESULTS,OPTION,DATA) ZW RESULTS > RESULTS="^TMP("GMVHLOC",540221719)" > D ^%G > Global ^TMP("GMVHLOC",$J > ^TMP("GMVHLOC",540221719,0)=5                            1)=44;140^ANDY'S AUDIO NON-COUNT CLINIC                            2)=44;139^ANDY'S AUDIOLOGY COUNT CLINIC                            3)=44;76^AUDIOLOGY AND SPEECH PATHOLOGY                            4)=44;87^BARB'S CLINIC                            5)=44;217^BOISE OUTPATIENT If an error is encountered for NAME, ADMIT, APPT or CLINIC, a "-1"followed by a caret and the error message text (i.e., -1^error message) isreturned in RESULT(0). | SUBSCRIPTION


## GMV MANAGER

Performs many functions for the Manager module. This remote procedure call is documented in Integration Agreement 4360.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV MANAGER | RPC^GMVRPCM | GLOBAL ARRAY<br><br>This remote procedure call performs various actions such as buildingselection lists and modifying package parameters. The entry point isRPC^GMVRPCM. It has input parameters of RESULTS, OPTION and DATA (ex:RPC^GMVRPCM(.RESULTS,OPTION,DATA).  The RESULTS variable will contain the ^TMP("GMVMGR",$J) global array reference. The ^TMP("GMVMGR",$J) global array contains the results. The OPTION variable identifies a line label in the GMVRPCM routine that will be invoked to process the call. The DATA variable contains any additional values needed by the OPTIONvariable to process the call.  1) When the OPTION value is ADDQUAL, this RPC will link a GMRV VITAL QUALIFIER (#120.52) file entry to a GMRV VITAL TYPE (#120.51) file entry.   The DATA value is a three part value separated by semi-colons(;). The first value is the FILE 120.51 internal entry number (IEN). The second value is the GMRV VITAL CATEGORY (#120.53) IEN. The third value is the GMRV VITAL QUALIFIER (#120.52).  Example:  > S DATA="1;1;1" > S OPTION="ADDQUAL" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Qualifier Assigned If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.   2) When the OPTION value is DELQUAL, this RPC will unlink a qualifier to a GMRV VITAL TYPE (#120.51) file entry.   The DATA value is a three part value separated by semi-colons. The first value is the FILE 120.51 internal entry number (IEN). The second value is the GMRV VITAL CATEGORY (#120.53) IEN. The third value is the GMRV VITAL QUALIFIER (#120.52) IEN.  Example: > S DATA="1;1;1"          > S OPTION="DELQUAL"                         > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Qualifier removed. If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.   3) When the OPTION value is DELTEMP, this RPC will delete a data inputtemplate definition.  The DATA value is a two part value separated by a caret (^). The first value is the ENTITY value. See IA #2263 for a list of entity values.The second value is the name of the data input template.  Example: > S DATA="USR^PAIN ONLY" > S OPTION="DELTEMP" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Template Removed.  If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  4) When the OPTION value is GETCATS, this RPC will return a list of qualifiers (FILE 120.52) associated with a vital type (FILE 120.51).   The DATA value is a one part value. It is a pointer value to FILE 120.51 The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1^piece2 ^TMP("GMVMGR",$J,n)=piece3^piece4^piece5    where piece1 = number of categories (FILE 120.53) associated with this                 vital type       piece2 = vital type name       piece3 = category IEN (FILE 120.53)       piece4 = category name (FILE 120.53, Field .01)       piece5 = qualifier names (FILE 120.52, Field .01) separated by a                 comma and space            n = sequential number starting with 1  Example: > S DATA="21"  > S OPTION="GETCATS" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^PULSE OXIMETRY                        1)=2^METHOD^AEROSOL/HUMIDIFIED MASK, CPAP, FACE    TENT, L ARM, MASK, NASAL CANNULA, NON RE-BREATHER, PARTIAL RE-BREATHER,   ROOM AIR, T-PIECE, TRACHEOSTOMY COLLAR, VENTILATOR, VENTURI MASK If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  5) When the OPTION value is GETDATA, this RPC will return the value of the entry you specify.  The DATA value is a three part value. The first part is the file number. The second part is the IEN number of the entry. The third part is thefield number. The TMP global contains: ^TMP("GMVMGR",$J,0)=external value of the field Example: > S DATA="120.51^1^1" > D RPC(.RESULT,"GETDATA",DATA) ZW RESULT              > RESULT="^TMP("GMVMGR",539339804)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539339804,0)=BP        If a value cannot be found, then a null value is returned.  6) When the OPTION value is GETDEF, this RPC will return default templatenames.   The DATA value is a one part value. If it is null, then all default templates for that user will be returned.  The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1 ^TMP("GMVMGR",$J,n)=piece2^piece3  where piece1 = number of templates found       piece2 = an IEN value, a semi-colon, and a global reference       piece3 = template name            n = sequential number starting with 1 Example A:  > S DATA=""  > S OPTION="GETDEF" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=4                           1)=125;SC(^WARD 10A                           2)=334;DIC(4.2,^TEST                           3)=4601;VA(200,^Height ONLY                           4)=547;VA(200,^All Vital Signs If the DATA value is an entity value (see IA 2263 for a list of entity values), then the default template name for that entity will be returned. The TMP global contains: ^TMP("GMVMGR",$J,0)=template name Example B: > S DATA="USR"                                 > S OPTION="GETDEF"                            > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=MY DEFAULT If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.     7) When the OPTION value is GETHILO, this RPC will return the abnormal high or low value for a vital type. The DATA value is a one part value which identifies a field number in the GMRV VITALS PARAMETERS (#120.57) field. The TMP global contains: ^TMP("GMVMGR",$J,0)=field value Example: > S DATA=5.2 > S OPTION="GETHILO" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=94  A zero is returned if there is no value in the field.   8) When the OPTION value is GETLIST, this RPC returns a list of entriesfor the file number specified. The DATA value is a one part value. It is a file number. The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1^piece2 ^TMP("GMVMGR",$J,n)=piece3^piece4  where piece1 = number of entries returned       piece2 = file name [not returned in all cases]        piece3 = file number, a semi-colon and record IEN       piece4 = the .01 value of the record            n = sequential number starting with 1 Examples: Retrieve a list of wards. > S DATA=42 > S OPTION="GETLIST" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=26^WARD LOCATION                           1)=42;14^10A                           n)=42;15^10B                            26)=42;39^10Z  Retrieve a list of clinics. > S DATA=44 > S OPTION="GETLIST"               > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=61                           1)=44;6^HOUSE/A                           n)=44;8^HOUSE/C                           61)=44;39^HOUSE/ZZ  Retrieve a list vital types. > S DATA=120.51 > S OPTION="GETLIST"               > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=10^GMRV VITAL TYPE                           1)=120.51;1^BLOOD PRESSURE                           N)=120.51;19^CENTRAL VENOUS PRESSURE                           10)=120.51;9^WEIGHT  Retrieve a list of qualifiers. > S DATA=120.52 > S OPTION="GETLIST"               > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=80^GMRV VITAL QUALIFIER                           1)=120.52;74^ABDOMINAL                           n)=120.52;42^ACTUAL                           80)=120.52;99^WRIST  Retrieve a list of CPRS teams. > S DATA=100.21 > S OPTION="GETLIST"               > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G                                        > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=103                           1)=100.21;28^1AS                           n)=100.21;60^1ASO                           103)=100.21;96^consult team  Retrieve a list of nursing units. > S DATA=211.4 > S OPTION="GETLIST"                > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539363784)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539363784,0)=21                           1)=211.4;7^10E                           n)=211.4;17^10W                           21)=211.4;9^SICU If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  9) When the OPTION value is GETQUAL, this RPC returns a list of qualifiers associated with this vital type. The DATA value is a two part value separated by a semi-colon. The first part is vital type (FILE 120.51) IEN. The second part is a category (FILE120.53) IEN. The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1^piece2 ^TMP("GMVMGR",$J,n)=piece3^piece4   where piece1 = number of entries found        piece2 = category name (FILE 120.53, Field .01)        piece3 = qualifier IEN        piece4 = qualifier name (FILE 120.52, Field .01)             n = sequential number starting with 1 Example: > S DATA="1;1",OPTION="GETQUAL" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=6^LOCATION                           1)=139^Test Qualifier                           2)=53^FEMORAL                           3)=2^L ARM                           4)=4^L LEG                           5)=24^PERIPHERAL                           6)=1^R ARM  If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  10) When the OPTION value is GETTEMP, this RPC will return a list data input templates definitions. The DATA value is a two part value separated by a caret. The first part is an entity value. See IA 2263 for a list of entities. The second part isa data input template name.  When DATA is null, all data input template definitions are returned. The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1 ^TMP("GMVMGR",$J,n)=piece2^piece3^piece4^piece5^piece6   where piece1 = number of entries returned        piece2 = 1, 2, 3, or 4. (1 = Domain, 2 = Institution, 3 = Hospital                 location and 4 = New Person)        piece3 = file IEN, a semi-colon and global reference        piece4 = Field .01 value of the file specified in piece3        piece5 = template name        piece6 = template description text, a bar, vital type IEN (FILE 120.51), a colon, a metric flag (0=U.S. and 1=metric), category IEN(FILE 120.53), a coma, and a qualifier IEN (FILE 120.52), a tildeindicates additional category and qualifier combinations for the vitaltype. A semi-colon indicates the start of the next vital type.             n = sequential number starting with 1 Example: > S DATA="USR",OPTION="GETTEMP"                > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1                           1)=4^547;VA(200,^VITUSER,ONE^MY DEFAULT^ALL                              VITALS|1:0:1,2~2,59~3,50;20:1  If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  11) When the OPTION value is LOOKUP, this RPC will do a file lookup The DATA value is a three part value separated by a caret. The first part is a file number. The second part is a value to look up. The third part isthe field or fields to do the look up on. If the third piece is not defined, the lookup is done on the .01 field of the file. The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1 ^TMP("GMVMGR",$J,n)=piece2^piece3   where piece1 = number of entries found        piece2 = file number, a semi-colon and record IEN        piece3 = field value Example: > S DATA="44^OUTPAT^.01",OPTION="LOOKUP"       > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539359648)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539359648,0)=3                           1)=44;75^OUTPATIENT NUC MED                           2)=44;74^OUTPATIENT RADIOLOGY                           3)=44;80^OUTPATIENT ULTRASOUND If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.  12) When the OPTION value is NEWQUAL, this RPC will always return an error message instructing the user to use the New Term Rapid Turnaround process. The DATA value is always null. Example: > S DATA="" > S OPTION="NEWQUAL" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=-1^Use the New Term Rapid Turnaround (NTRT)    process to add qualifiers   13) When the OPTION value is NEWTEMP, this RPC will file a new data input template. The DATA value is a three part value separated by a caret. The first part is an entity. See IA 2263 for a list of entities. The second part is the name of the data input template. The third part is the descriptiontext. If the third part is null, the template description will default to"No Description". The TMP global contains: ^TMP("GMVMGR",$J,0)=piece1^piece2^piece3^piece4   where piece1 = 1, 2, 3, or 4 (1 = DOMAIN (#4.2), 2 = INSTITUTION (#4),                  3 = HOSPITAL LOCATION, and 4 = NEW PERSON)        piece2 = IEN, a semi-colon, and global reference (e.g., 3;DIC(4.2)        piece3 = the .01 field value for the record in piece2        piece4 = data input name Example: > S DATA="USR^1 EAST^All Vital Types" > S OPTION="NEWTEMP" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539343036)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539343036,0)=4^547;VA(200,^VITUSER,ONE^1 EAST If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.             14) When the OPTION value is RENTEMP, this RPC will rename a data input template.  The DATA value is a three part value separated by a caret. The first part is an entity. See IA 2263 for a list of entities. The second part is thecurrent template name. The third part is the new name of the template. The TMP global contains: ^TMP("GMVMGR",$J,0)=1^Renamed         Example: > S DATA="USR^FRANK'S DEFAULT^MY DEFAULT" > S OPTION="RENTEMP" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Renamed If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.    15) When the OPTION value is SETDATA, this RPC always returns an errormessage that instructs the user to use the New Term Rapid Turnaroundprocess.  The DATA value is null.  Example: > S DATA="" > S OPTION="SETDATA"                   > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=-1^Use the New Term Rapid Turnaround (NTRT)    process to add qualifiers   16) When the OPTION value is SETDEF, this RPC will set that data input template as a default.  The DATA value is a two part value separated by a caret. The first part isan entity. See IA 2263 for a list of entities. The second part is the name of the template that will become the default template. The TMP global contains: ^TMP("GMVMGR",$J,0)=1^Set As Default Example: > S DATA="USR^FRANK'S LIST" > S OPTION="SETDEF" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Set As Default. If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.     17) When the OPTION value is SETHILO, this RPC will set the high and low abnormal values for a vital type.  The DATA value is a two part value separated by a caret. The first part is a field number in the GMRV VITALS PARAMETERS (#120.57) file. The second part is the value that field should be set to. The TMP global contains: ^TMP("GMVMGR",$J,0)=1^Update Complete.   Example: > S DATA="5.1^102",OPTION="SETHILO" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Update Complete. If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.   18) When the OPTION value is SETTEMP, this RPC will save the input template definition.  DATA is a three part value separated by a caret. The first part is an entity. See IA 2263 for a list of entities. The second part is thetemplate name. The third part is the template definition. The TMP global contains: ^TMP("GMVMGR",$J,0)=1^Template Saved.  Example: > S DATA="USR^ONE VITAL TYPE ONLY^CONTAINS ONLY ONE VITAL TYPE|2:0:1,102" > S OPTION="SETTEMP" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539356158)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539356158,0)=1^Template Saved.  If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.     19) When the OPTION value is VALID, this RPC will validate data. DATA is a four part value separated by a caret. The first part is the a file number. The second part is a record number. The third part is afield number. The fourth part is the value to validate. The TMP global contains: ^TMP("GMVMGR",$J,0)=1^Valid Data Example: > S DATA="120.5^8864^.01^3051012.1034",OPTION="VALID" > D RPC^GMVRPCM(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVMGR",539343036)" > D ^%G > Global ^TMP("GMVMGR",$J > ^TMP("GMVMGR",539343036,0)=1^Valid Data  If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned. | SUBSCRIPTION


## GMV MARK ERROR

This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV MARK ERROR | ERROR^GMVUTL1 | SINGLE VALUE<br><br>If the record is marked as entered in error, RESULT is set to "OK".Otherwise, RESULT is set to "Record Not Found"  Example: > S GMVDATA="1560^547^1" > D ERROR^GMVUTL1(.RESULT,GMVDATA) ZW RESULT > RESULT="OK" | SUBSCRIPTION


## GMV NUR UNIT PT

Returns a list of active patients for a nursing location.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV NUR UNIT PT | APTLIST^GMVUTL8 | ARRAY<br><br>ARRAY - Subscripted by sequential number with DFN in first piece andpatient name in second piece.  example: ARRAY(#)=DFN^patient name^SSN^DOB^SEX AND AGE^ATTENDING^VETERAN          ^INTERNAL DATE/TIME DECEASED^EXTERNAL DATE/TIME DECEASED | RESTRICTED


## GMV PARAMETER

Sets and retrieves parameter values used by the graphical user interface. This remote procedure call is documented in Integration Agreement 4367.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV PARAMETER | RPC^GMVPAR | GLOBAL ARRAY<br><br>This remote procedure call sets and retrieves parameter settings that are used in the graphical user interface. The entry point is RPC^GMVPAR.. It has input parameters of RESULTS,OPTION, ENT, PAR, INST and VAL (ex:RPC^GMVPAR(RESULTS,OPTION,ENT,PAR,INST,VAL). The RESULTS variable contains the results of the call or the location where the results can be found. The OPTION variable identifies the entry point in the GMVPAR routine that will be invoked to process the call. If an error occurrs, the ^TMP global contains:  ^TMP($J,0)=-1^error message text          1) When the OPTION value is DELPAR, this RPC deletes the value for the instance, parameter and entity specified. The TMP global contains: ^TMP($J,0)=1^Instance deleted Example: > S OPTION="DELPAR",ENT="SYS",PAR="GMV DLL VERSION" > S INST="GMV_VITALSVIEWENTER.DLL:v. 07/21/05 10:34" > D RPC^GMVPAR(.RESULT,OPTION,ENT,PAR,INST) ZW RESULT                    > RESULT="^TMP(538999278)" > D ^%G > Global ^TMP($J > ^TMP(538999278,0)=1^Instance deleted  2) When the OPTION value is ENTVAL, this RPC returns the external value of the entity specified. The TMP global contains: TMP($J,0)=external value                         Example: > S OPTION="ENTVAL",ENT="USR"               > D RPC(.RESULT,OPTION,ENT) ZW RESULT  > RESULT="^TMP(538993252)" > D ^%G > Global ^TMP($J > ^TMP(538993252,0)=TRAXLER,FRANK  3) When the OPTION value is GETLST, this RPC returns a list of instances and their values for the parameter and entity specified. The TMP global contains: ^TMP($J,0)=piece1 ^TMP($J,n)=piece2^piece3   where piece1 = number of entries returned        piece2 = instance name        piece3 = instance value             n = sequential number starting with 1  Example: > S OPTION="GETLST",ENT="USR",PAR="GMV USER DEFAULTS" > D RPC(.RESULT,OPTION,ENT,PAR) ZW RESULT > RESULT="^TMP(538993252)" > D ^%G > Global ^TMP($J > ^TMP(538993252,0)=44                  1)=DefaultTemplate^547;VA(200,|MY DEFAULT                  n)=UNIT_INDEX^0                  44)=WARD_INDEX^-1         4) When the OPTION value is GETPAR, this RPC will get the value for the instance, parameter and entity specified.  The TMP global contains: ^TMP($J,0)=piece1  where piece1 = value Example: > S ENT="USR",PAR="GMV USER DEFAULTS",INST="DefaultTemplate"    > S OPTION="GETPAR" > D RPC(.RESULT,OPTION,ENT,PAR,INST) ZW RESULT               > RESULT="^TMP(538993252)" > D ^%G > Global ^TMP($J > ^TMP(538993252,0)=547;VA(200,|MY DEFAULT  5) When the OPTION value is SETPAR, this RPC set the value of an instance for the instance, parameter and entity specified. The TMP global contains: ^TMP($J,0)=1^Parameter updated Example:  > S OPTION="SETPAR",ENT="USR",PAR="GMV USER DEFAULTS",INST="SearchDelay" > S VAL=1.5 > D RPC^GMVPAR(.RESULT,OPTION,ENT,PAR,INST,VAL) ZW RESULT > RESULT="^TMP(538999278)" > D ^%G > Global ^TMP($J > ^TMP(538999278,0)=1^Parameter updated | SUBSCRIPTION


## GMV PT GRAPH

Prints Vitals/Measurements Graphic Reports.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV PT GRAPH | EN1^GMVSR0 | SINGLE VALUE<br><br>Returns a message stating the outcome of the request to queue the report.If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV PTSELECT

Used as a method of processing a patient DFN and returning all warnings and notices (i.e. sensitivity or same last 4 of SSN) to the client application for processing.  Also includes a call to log access of sensitive patients to the DG SECURITY LOG file.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV PTSELECT | RPC^GMVRPCP | GLOBAL ARRAY<br><br>RESULTS(0)   =Success or failure flag (-1 or 1) from both SELECT & LOGSEC               methodsRESULTS(1..n)=Messages to process by the client from the SELECT method. | RESTRICTED


## GMV QUALIFIER TABLE

Prints a list of categories and qualifiers associated with individualvital types (e.g., blood pressure). Data comes from the GMRV VitalQualifier (#120.52) file and the GMRV Vital Category (#120.53) file.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV QUALIFIER TABLE | EN1^GMVCAQU | GLOBAL ARRAY<br><br>Returns a message stating the outcome of the request to queue the report. If the report was successfully queued, RESULT will be "Report sent to device. Task #: " ZTSK" where ZTSK is the task number of the job. If the report could not be queued, RESULT will be "Unable to task the report." | RESTRICTED


## GMV ROOM/BED

This procedure extracts room/bed information from Room-Bed file (#405.4)for a given MAS ward.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV ROOM/BED | ROOMBED^GMVGETD | GLOBAL ARRAY<br><br>Returns the global array name (i.e., ^TMP($J,"GROOM")) containing a listof rooms/beds for the given MAS ward. ^TMP($J,"GROOM",n)=Roombed n is a sequential number starting at 1. If there is no data, then the global array is undefined. | RESTRICTED


## GMV TEAM PATIENTS

This procedure retrieves patients assigned to a given team.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV TEAM PATIENTS | TEAMPT^GMVUTL3 | ARRAY<br><br>Returns a list of patients in the array specified. RESULT(n)=Patient name^DFN^SSN (w/hyphens)^DOB (external)^SEX and AGE^          Attending^Veteran^Date of Death (external)^Date of Death           (internal)^Ward name^Roombed n is a sequential number starting at 1. | RESTRICTED


## GMV USER

Retrieves data about the user (e.g., parameter settings). This remote procedure call is documented in Integration Agreement 4366.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV USER | RPC^GMVRPCU | GLOBAL ARRAY<br><br>This Remote Procedure Call (RPC) performs various actions focusing on the user. The entry point is RPC^GMVRPCU. It has input parameters of RESULTS, OPTION and DATA (e.g., RPC^GMVRPCU(RESULTS,OPTION,DATA)).  The RESULTS variable contains the results of the call or the location where the results can be found. The OPTION variable identifies another entry point in the GMVRPCU routine that is invoked to process the call. The DATA variable contains any values needed by the OPTION variable to process the call. 1) When the OPTION value is SETPAR, this RPC will set and/or delete the value of a GMV USER DEFAULTS setting (e.g., the user's default template). The DATA value is a two part value separated by a caret. The first part  is name of a setting. The second part is the value of the setting. If the second part is null, the existing value of the setting is deleted. The TMP global contains: ^TMP("GMVUSER",$J,0)=1^Parameter set. or ^TMP("GMVUSER",$J,0)=1^Parameter cleared Example: > S DATA="DefaultTemplate^547;VA(200,|MY DEFAULT",OPTION="SETPAR" > D RPC^GMVRPCU(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVUSER",539374023)" > D ^%G > Global ^TMP("GMVUSER",$J > ^TMP("GMVUSER",539374023,0)=1^Parameter set. If an error is encountered, a "-1" followed by a caret and the error message text (i.e., -1^error message) is returned.   2) When the OPTION value is GETPAR, this RPC will return the value of theGMV USER DEFAULTS setting specified in the DATA value. The DATA value is a one part value. It is the name of a setting (e.g., the user's default template).  The TMP global contains:  ^TMP("GMVUSER",$J,0)=value of setting or null Example: > S DATA="DefaultTemplate",OPTION="GETPAR"        > D RPC^GMVRPCU(.RESULT,OPTION,DATA) ZW RESULT > RESULT="^TMP("GMVUSER",539374023)" > D ^%G > Global ^TMP("GMVUSER",$J > ^TMP("GMVUSER",539374023,0)=547;VA(200,|ONE VITAL TYPE ONLY  3) When the OPTION value is SIGNON, this RPC will return information aboutthe user who is currently signed onto the system. The DATA value is not used. The user's IEN (i.e., DUZ) to the NEW PERSON (#200) file value must be defined when this call is made. The RESULT variable will return the following array:  RESULT(0)=NEW PERSON (#200) file internal entry number (DUZ)  RESULT(1)=User's name (FILE 200, Field .01)  RESULT(2)=Domain (FILE 4.2) internal entry number  RESULT(3)=Domain name (FILE 4.2, Field .01)  RESULT(4)=Institution (FILE 4) internal entry number the user is signed             into (i.e., DUZ(2))  RESULT(5)=Institution name (FILE 4, Field .01)  RESULT(6)="0" or "1". "1" indicates the user has the GMV MANAGER or              programmer key. "0" indicates the user has neither key.  RESULT(7)=The user's title (FILE 200, Field 8)  RESULT(8)=This value is always null.  RESULT(9)=Number of seconds the system will wait for a response from              the user (i.e., DTIME). The default time is 300 seconds.  RESULT(10)=INSTITUTION (#4) file IEN^FILE 4 external value^station               number (e.g., 499^SUPPORT ISC^499). Example: > S OPTION="SIGNON" > D RPC(.RESULT,OPTION) ZW RESULT > RESULT="^TMP("GMVUSER",539375907)" > D ^%G > Global ^TMP("GMVUSER",$J > ^TMP("GMVUSER",539375907,0)=547                            1)=VITUSER,ONE                            2)=334                            3)=DEV.DEV.FO-HINES.DOMAIN.EXT                            4)=499                            5)=SUPPORT ISC                            6)=1                            7)=PROGRAMMER                            8)=                            9)=9999                           10)=499^SUPPORT ISC^499 | SUBSCRIPTION


## GMV V/M ALLDATA

This remote procedure call lists all vitals/measurements data for a givendate/time span. This remote procedure call is documented in Integration Agreement 4654.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV V/M ALLDATA | VMDATA^GMVGGR1 | GLOBAL ARRAY<br><br>RESULT array returns the data or a "NO DATA" message. Case A: The NO DATA message is returned. The TMP global returns: ^TMP($J,1)=lastname,first  social security number  date of birth  age             "(Yrs)" gender ^TMP($J,2)="Unit:" unit  "Room:" room ^TMP($J,3)="Division:" division ^TMP($J,4)= search date range ^TMP($J,5)="NO DATA" Example:  > S GMVDATA="90^3051012^3051012^0" > D VMDATA^GMVGGR1(.RESULT,GMVDATA) ZW RESULT > RESULT="^TMP(539349605)" > D ^%G > Global ^TMP($J > ^TMP(539349605,1)=VITPATIENT,ONE 000-11-1234  JAN 2,1934  71 (Yrs)                       MALE                  2)=Unit:    Room:                   3)=Division:                   4)=OCT 11,2005 - OCT 11,2005                  5)=NO DATA  Case B: Fourth piece of GMVDATA (Flag) is 0 The TMP global returns: ^TMP($J,1)=lastname,first social security number  date of birth  age             "(Yrs)" sex ^TMP($J,2)="Unit:" unit  "Room:" room ^TMP($J,3)="Division:" division ^TMP($J,4)= search date range ^TMP($J,n)=piece1 through piece23  where piece1 = date of reading in mm-dd-yy format       piece2 = time of reading in hh:mm:ss format       piece3 = Temperature value and qualifier abbreviations       piece4 = Pulse value and qualifier abbreviations       piece5 = Respiration and qualifier abbreviations       piece6 = Pulse Oximetry value, qualifier abbreviations, flow rate                 and percentage value       piece7 = Blood Pressure value and qualifier abbreviations       piece8 = Weight value (pounds) and qualifier abbreviations       piece9 = Weight value (kilos)       piece10 = Body Mass Index calculation       piece11 = Height value (inches) and qualifier abbreviations        piece12 = Height value (centimeters)       piece13 = Circumference Girth value (inches) and qualifier                  abbreviations       piece14 = Circumference Girth value (centimeters)       piece15 = Central Venous Pressure value (cmH2O)       piece16 = Central Venous Pressure value (mmHg)       piece17 = Input value (from Intake & Output package)       piece18 = Output value (from Intake & Output package)       piece19 = Pain value       piece20 = always null       piece21 = always null       piece22 = hospital location (FILE 44, Field .01)       piece23 = name of person who entered the data (FILE 200, Field .01)       piece24 = database where the record is stored Example:  > S GMVDATA="134^3050901^3050930^0"           > D VMDATA^GMVGGR1(.RESULT,GMVDATA) ZW RESULT > RESULT="^TMP(539349605)" > D ^%G > Global ^TMP($J > ^TMP(539349605,1)=VITPATIENT,TWO 000-11-1234  JUN 1,1957  48 (Yrs)                       FEMALE                  2)=Unit: 2-ASM   Room:                   3)=Division: TEST HINES                  4)=SEP 1,2005 - SEP 30,2005                  5)=09-14-05^17:18:00^^^^^^135- A St^61.36^22^66-                      A^167.64^^^^^^^^ ^^2-ASM^VITPROVIDER,ONE^Vitals                  6)=09-26-05^11:30:57^^^^^120/80*- La Si Car                      Clf^^^^^^^^^^^^^^^2-A SM^VITPROVIDER,TWO^Vitals | SUBSCRIPTION


## GMV VITALS/CAT/QUAL

Returns all qualifier information for the vital types selected. This remote procedure call is documented in Integration Agreement 4359.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV VITALS/CAT/QUAL | GETVITAL^GMVUTL7 | ARRAY<br><br>Returns the qualifier information for the selected vital types in the array specified. Includes the abnormal high and low values for the vital type, if any. The result array contains: RESULT(n)=piece1^piece2^piece3^piece4^piece5^piece6^piece7^piece8^piece9 RESULT(n.nnn)=pieceA^pieceB^pieceC^pieceD   where n is a sequential number starting with 1        piece1 = V for vital type        piece2 = FILE 120.51 IEN for this vital type        piece3 = vital type name (FILE 120.51, Field .01)        piece4 = Abbreviation (FILE 120.51, Field 1)        piece5 = PCE Abbreviation (FILE 120.51, Field 7)        piece6 = If vital type is Blood Pressure this is the                  abnormal systolic high value (File 120.57, Field 5.7).                 If vital type is Temperature, this is the abnormal high                  value (File 120.57, Field 5.1)                 If vital type is Respiration, this is the abnormal high                 value (File 120.57, Field 5.5)                 If vital type is Pulse, this is the abnormal high value                  (File 120.57, Field 5.3)                 If vital type is Central Venous Pressure, this is the                  abnormal high value (File 120.57, Field 6.1)        piece7 = If vital type is Blood Pressure this is the                  abnormal diastolic high value (File 120.57, Field 5.71).                 If vital type is Temperature, this is the abnormal low                  value (File 120.57, Field 5.2)                 If vital type is Respiration, this is the abnormal low                 value (File 120.57, Field 5.6)                 If vital type is Pulse, this is the abnormal low value                  (File 120.57, Field 5.4)                 If vital type is Central Venous Pressure, this is the                  abnormal low value (File 120.57, Field 6.2)        piece8 = If vital type is Blood Pressure this is the                  abnormal systolic low value (File 120.57, Field 5.8).                 If vital type is Central Pressure, this is the abnormal                  O2 saturation (File 120.57, Field 6.3)        piece9 = If vital type is Blood Pressure this is the                  abnormal diastolic low value (File 120.57, Field 5.81).  RESULT(n.nnn)=pieceA^pieceB^pieceC^pieceD  where pieceA = C for CATEGORY or Q for QUALIFIER   if pieceA is C, then          pieceB = FILE 120.53 IEN for this category        pieceC = category name (FILE 120.53, Field .01)        pieceD = null   if pieceB is Q, then        pieceB = FILE 120.52 IEN for this qualifier        pieceC = qualifier name (FILE 120.52, Field .01)        pieceD = synonym (FILE 120.52, Field .02) Example: > S GMVLIST="HT^WT"                             > D GETVITAL^GMVUTL7(.RESULT,GMVLIST) ZW RESULT > RESULT(1)="V^8^HEIGHT^HT^HT^" > RESULT(1.001)="C^4^QUALITY" > RESULT(1.002)="Q^42^ACTUAL^A" > RESULT(1.003)="Q^43^ESTIMATED^E" > RESULT(1.004)="Q^107^Stated^St" > RESULT(2)="V^9^WEIGHT^WT^WT^" > RESULT(2.001)="C^2^METHOD" > RESULT(2.002)="Q^39^OTHER^Oth" > RESULT(2.003)="Q^50^SITTING^Si" > RESULT(2.004)="Q^51^STANDING^St" > RESULT(2.005)="C^4^QUALITY" > RESULT(2.006)="Q^42^ACTUAL^A" | SUBSCRIPTION


## GMV WARD LOCATION

This procedure extracts MAS ward locations from the Ward Location file(#42). Note: No other Input Parameters besides RESULT needed.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV WARD LOCATION | WARDLOC^GMVGETD | GLOBAL ARRAY<br><br>Returns the global array name containing a list of MAS wards (i.e., ^TMP($J,"GWARD")). ^TMP($J,"GWARD",n)=piece1^piece2^piece3 where:  piece1 = ward IEN (FILE 42)  piece2 = ward name (FILE 42, Field .01)  piece3 = hospital location IEN (FILE 44)  n is a sequential number starting at 1. Example: > S DUMMY="P"  > D WARDLOC^GMVGETD(.RESULT,DUMMY) ZW RESULT > RESULT="^TMP(540221719,"GWARD")" > D ^%G > Global ^TMP($J,"GWARD" > ^TMP(540221719,"GWARD",1)=2^1AS^2                          2)=1^2-AS^1                          3)=13^2-ASM^67                          4)=25^214-2 DOM^149                          5)=3^3AS^128                          6)=4^4AS-1^4                          7)=22^4B^153                          8)=23^4C^155                          9)=24^4D^154                          10)=12^5NM^63                          11)=6^6AS^10                          12)=7^7AS^11                          13)=8^DOM^23                          14)=10^MICU^36                          15)=5^NHCU^5 | RESTRICTED


## GMV WARD PT

This procedure lists patients registered on a particular MAS ward.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV WARD PT | WARDPT^GMVGETD | GLOBAL ARRAY<br><br>Returns the name of the global array containing the list of patients on the selected ward (i.e., ^TMP($J,"GMRPT")). ^TMP($J,"GMRPT",n)=DFN^Name^SSN (w/hyphens)^DOB^Sex and Age^Attending^                   Veteran^Date of Death (internal)^Date of Death                    (external)^Ward name^Roombed n is a sequential number starting at 1. If there are no patients on the ward, then the global array is undefined. | RESTRICTED


## GMV WARD/ROOM PATIENTS

Returns a list of patients in the ward and rooms specified.


Name | Function | Return Value | Availability
--- | --- | --- | ---
GMV WARD/ROOM PATIENTS | ROOMPT^GMVUTL7 | ARRAY<br><br>RESULT(n)=patient name^DFN^DOB (external)^SSN (no hyphens) where n is a sequential number beginning with 0 (zero) | RESTRICTED


