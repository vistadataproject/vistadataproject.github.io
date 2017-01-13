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
 Leading comment lines | {::nomarkdown}Gets all the unique ICD9 codes for the orders placed today by the<br/>clinician for this patient. Using the ICD9 codes it builds an array<br/>variable with the ICD9 code, its description from the ICD DIAGNOSIS<br/>file, #80. Flagging any inactive ICD9 codes with a "#".<br/>Input Variables:<br/>ORCIEN    Clinician's internal ID number<br/>ORPTIEN   Patient's internal ID number<br/>Output Variable:<br/>Y         Array of ICD9 codes and descriptions<br/>Y(#)=ICD9_code^DX_Description^DX_Inactive<br/>If inactive # in third piece<br/>If active null in third piece<br/>Local Variables:<br/>CKDATE    Check Date (stops loop)<br/>DXC       Diagnosis Code (for sorting)<br/>DXD       Diagnosis Description<br/>DXI       Diagnosis Inactive Flag<br/>DXIEN     Diagnosis Internal Entry Number<br/>ICD9      ICD9 code (for GUI display)<br/>IEN       Internal Entry Number<br/>OBJORD    Object of Order<br/>ORDATE    Order Date<br/>ORDG      Order Group (ACT index variable)<br/>OREM      Order Error Message<br/>ORIEN     Order Internal Entry Number<br/>ORRF      Order Record Found<br/>RCODI     Reverse Cronological Order Date Index<br/>SUBFILE   Subfile Number{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the clinician's internal ID number.{:/} | 
| {::nomarkdown}ORPTIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal ID number.{:/} | 




 Generated on January 13th 2017, 6:24:32 am