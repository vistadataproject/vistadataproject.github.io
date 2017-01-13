---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 GETDUDC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 GETDUDC{:/}
 tag | {::nomarkdown}GETDUDC{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This returns a list of unique ICD9 diagnoses codes and their descriptions on orders placed by a clinician for a patient for today. This will be used to help in filling out the encounter form.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Day's Unique Diagnoses Codes

 Leading comment lines | {::nomarkdown}Gets all the unique ICD9 codes for the orders placed today by the
clinician for this patient. Using the ICD9 codes it builds an array
variable with the ICD9 code, its description from the ICD DIAGNOSIS
file, #80. Flagging any inactive ICD9 codes with a "#".
Input Variables:
ORCIEN    Clinician's internal ID number
ORPTIEN   Patient's internal ID number
Output Variable:
Y         Array of ICD9 codes and descriptions
Y(#)=ICD9_code^DX_Description^DX_Inactive
If inactive # in third piece
If active null in third piece
Local Variables:
CKDATE    Check Date (stops loop)
DXC       Diagnosis Code (for sorting)
DXD       Diagnosis Description
DXI       Diagnosis Inactive Flag
DXIEN     Diagnosis Internal Entry Number
ICD9      ICD9 code (for GUI display)
IEN       Internal Entry Number
OBJORD    Object of Order
ORDATE    Order Date
ORDG      Order Group (ACT index variable)
OREM      Order Error Message
ORIEN     Order Internal Entry Number
ORRF      Order Record Found
RCODI     Reverse Cronological Order Date Index
SUBFILE   Subfile Number{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the clinician's internal ID number.{:/} | 
| {::nomarkdown}ORPTIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal ID number.{:/} | 




 Generated on January 13th 2017, 6:15:57 am