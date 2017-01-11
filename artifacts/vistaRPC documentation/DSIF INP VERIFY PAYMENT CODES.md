---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP VERIFY PAYMENT CODES 

 property | value 
--- | --- 
 label | DSIF INP VERIFY PAYMENT CODES
 tag | VERIFY
 routine | [DSIFEP2](http://code.osehra.org/dox/Routine_DSIFEP2_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will take in a 7078/583 pointer for an inpatient claim to determine whether the inputted ICD-9 or ICD-10 Diagnosis and Procedure codes are valid. It will return the inputted codes in as an array with either the internal number (for valid) or -1 (for invalid) or -2 (for inactive) for the codes that aren't.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFAUTH | LITERAL |  | true | This is the pointer to the 7078/583 you wish to verify the ICD Diagnosis and Procedure codes for. (Required). | 
| DATA | LIST |  | true | This is the array of codes you wish to verify. The array should look like this: ; DATA(I)=DIAG or PROC or ADMIT^# (1-25)^External Value | 




 ###### Generated on January 11th 2017, 6:39:43 am