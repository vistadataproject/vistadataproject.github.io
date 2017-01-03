---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Gmrv_Vital_Measurement-120_5 

 property | value 
--- | --- 
 id | Gmrv_Vital_Measurement-120_5
 fmId | 120.5
 label | Gmrv Vital Measurement
 location | ^GMR(120.5,
 description | This file contains vital sign information and other measurement data for a \rpatient.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_vitals_taken | .01 | Date/time Vitals Taken | This field contains the date/time this vital/measurement was taken by the\rcare provider. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | This field contains the name of the patient for whom this vital measurement\rdata was entered.  Pointer to the PATIENT (#2) file. | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| vital_type | .03 | Vital Type | This field denotes the type of measurement for this record.  Pointer to\rthe GMRV VITAL TYPE (#120.51) file. | POINTER |  | REQUIRED, INDEXED | {id:Gmrv_Vital_Type-120_51} | 
| date_time_vitals_entered | .04 | Date/time Vitals Entered | This field contains the date/time that this record was entered. | DATE-TIME |  | REQUIRED |  | 
| hospital_location | .05 | Hospital Location | This field contains the location where this measurement was taken.  Pointer \rto the HOSPITAL LOCATION (#44) file. | POINTER |  | REQUIRED | [Hospital_Location-44](Hospital_Location-44.md) | 
| entered_by | .06 | Entered By | This field contains the name of the person who edited the file entry.  \rPointer to the NEW PERSON (#200) file. | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| rate | 1.2 | Rate | This field contains the numeric value associated with this vital\rmeasurement. | STRING |  |  |  | 
| supplemental_o2 | 1.4 | Supplemental O2 | This field stores the information of the supplemental oxygen as follows:\r  .5-20 l/min (liters/minute)   and/or\r  21-100 % of oxygen concentration\rFor example: 4.5 l/min 40%\r             4.5 l/min\r             40 % | STRING |  |  |  | 
| entered_in_error | 2 | Entered In Error | This field indicates that this record was flagged as entered in error. | BOOLEAN |  |  | {true:1} | 
| error_entered_by | 3 | Error Entered By | This field indicates the name of the person responsible for entering the \rrecord in error.  Pointer to the NEW PERSON (#200) file. | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| reason_entered_in_error | 4 | Reason Entered In Error | This multiple contains a list of reasons for entering a vital measurement \rin error. | [OBJECT] |  |  | [Reason_Entered_In_Error-120_506](#reason_entered_in_error-120_506)  | 
| qualifier | 5 | Qualifier | A list of qualifiers associated with this measurement. | [POINTER] |  |  | {id:Gmrv_Vital_Qualifier-120_52} | 

## Reason_Entered_In_Error-120_506 

 property | value 
--- | --- 
 id | Reason_Entered_In_Error-120_506
 label | Reason Entered In Error

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reason_entered_in_error | .01 | Reason Entered In Error | This field records the reason for entering the data in error. | ENUMERATION |  | REQUIRED | <dl><dt>2</dt><dd>INCORRECT READING</dd><dt>4</dt><dd>INVALID RECORD</dd><dt>1</dt><dd>INCORRECT DATE/TIME</dd><dt>3</dt><dd>INCORRECT PATIENT</dd></dl> | 
| date_reason_entered_in_error | .02 | Date Reason Entered In Error |  | DATE-TIME |  |  |  | 