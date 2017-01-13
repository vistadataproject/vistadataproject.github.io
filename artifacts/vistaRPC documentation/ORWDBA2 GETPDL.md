---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA2 GETPDL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 GETPDL{:/}
 tag | {::nomarkdown}GETPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a clinician's personal diagnosis codes.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | Get Personal Diagnosis List
 Leading comment lines | This gets the clinician's personal diagnosis list. Using the personal
diagnosis list, builds and returns an array variable with the ICD9
codes and descriptions stored in the ICD DIAGNOSIS file, # 80.
Flagging any inactive ICD9 code with a "#".
Input Variable:
ORCIEN    Clinician Internal ID number
Output Variable:
Y         Array of ICD9 codes and descriptions
Y(#)=ICD9_code^DX_description^DX_Inactive
If inactive # in third piece
If active null in third piece
Local Variables:
DXC       Diagnosis Code (for sorting)
DXD       Diagnosis Description
DXDT      Diagnosis Date
DXI       Diagnosis Inactive Flag
EM        Error Message
ICD9      ICD9 code (for GUI)
IEN       Internal Entry Number
RF        Record Found

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 




 Generated on January 13th 2017, 5:52:13 am