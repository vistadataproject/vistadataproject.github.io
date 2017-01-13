---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrv_Vital_Measurement-120_5 

 property | value 
--- | --- 
 id | Gmrv_Vital_Measurement-120_5
 fmId | 120.5
 label | Gmrv Vital Measurement
 location | ^GMR(120.5,
 description | {::nomarkdown}This file contains vital sign information and other measurement data for a <br/>patient.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| date_time_vitals_taken | .01 | Date/time Vitals Taken | {::nomarkdown}This field contains the date/time this vital/measurement was taken by the<br/>care provider.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| patient | .02 | Patient | {::nomarkdown}This field contains the name of the patient for whom this vital measurement<br/>data was entered.  Pointer to the PATIENT (#2) file.{:/} | POINTER |  | REQUIRED, INDEXED | [Patient-2](Patient-2.md) | 
| vital_type | .03 | Vital Type | {::nomarkdown}This field denotes the type of measurement for this record.  Pointer to<br/>the GMRV VITAL TYPE (#120.51) file.{:/} | POINTER |  | REQUIRED, INDEXED | Gmrv_Vital_Type-120_51 | 
| date_time_vitals_entered | .04 | Date/time Vitals Entered | {::nomarkdown}This field contains the date/time that this record was entered.{:/} | DATE-TIME |  | REQUIRED |  | 
| hospital_location | .05 | Hospital Location | {::nomarkdown}This field contains the location where this measurement was taken.  Pointer <br/>to the HOSPITAL LOCATION (#44) file.{:/} | POINTER |  | REQUIRED | [Hospital_Location-44](Hospital_Location-44.md) | 
| entered_by | .06 | Entered By | {::nomarkdown}This field contains the name of the person who edited the file entry.  <br/>Pointer to the NEW PERSON (#200) file.{:/} | POINTER |  | REQUIRED | [New_Person-200](New_Person-200.md) | 
| rate | 1.2 | Rate | {::nomarkdown}This field contains the numeric value associated with this vital<br/>measurement.{:/} | STRING |  |  |  | 
| supplemental_o2 | 1.4 | Supplemental O2 | {::nomarkdown}This field stores the information of the supplemental oxygen as follows:<br/>  .5-20 l/min (liters/minute)   and/or<br/>  21-100 % of oxygen concentration<br/>For example: 4.5 l/min 40%<br/>             4.5 l/min<br/>             40 %{:/} | STRING |  |  |  | 
| entered_in_error | 2 | Entered In Error | {::nomarkdown}This field indicates that this record was flagged as entered in error.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | 
| error_entered_by | 3 | Error Entered By | {::nomarkdown}This field indicates the name of the person responsible for entering the <br/>record in error.  Pointer to the NEW PERSON (#200) file.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| reason_entered_in_error | 4 | Reason Entered In Error | {::nomarkdown}This multiple contains a list of reasons for entering a vital measurement <br/>in error.{:/} | [OBJECT] |  |  | [Reason_Entered_In_Error-120_506](#Reason_Entered_In_Error-120_506)  | 
| qualifier | 5 | Qualifier | {::nomarkdown}A list of qualifiers associated with this measurement.{:/} | [POINTER] |  |  | {id:Gmrv_Vital_Qualifier-120_52} | 

## <a name="Reason_Entered_In_Error-120_506"></a>Reason_Entered_In_Error-120_506 

 property | value 
--- | --- 
 id | Reason_Entered_In_Error-120_506
 label | Reason Entered In Error

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| reason_entered_in_error | .01 | Reason Entered In Error | {::nomarkdown}This field records the reason for entering the data in error.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>2</dt><dd>INCORRECT READING</dd><dt>4</dt><dd>INVALID RECORD</dd><dt>1</dt><dd>INCORRECT DATE/TIME</dd><dt>3</dt><dd>INCORRECT PATIENT</dd></dl>{:/} | 
| date_reason_entered_in_error | .02 | Date Reason Entered In Error |  | DATE-TIME |  |  |  | 




 Generated on January 13th 2017, 6:16:11 am