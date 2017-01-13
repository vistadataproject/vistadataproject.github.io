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
 Leading comment lines | {::nomarkdown}This gets the clinician's personal diagnosis list. Using the personal<br/>diagnosis list, builds and returns an array variable with the ICD9<br/>codes and descriptions stored in the ICD DIAGNOSIS file, # 80.<br/>Flagging any inactive ICD9 code with a "#".<br/>Input Variable:<br/>ORCIEN    Clinician Internal ID number<br/>Output Variable:<br/>Y         Array of ICD9 codes and descriptions<br/>Y(#)=ICD9_code^DX_description^DX_Inactive<br/>If inactive # in third piece<br/>If active null in third piece<br/>Local Variables:<br/>DXC       Diagnosis Code (for sorting)<br/>DXD       Diagnosis Description<br/>DXDT      Diagnosis Date<br/>DXI       Diagnosis Inactive Flag<br/>EM        Error Message<br/>ICD9      ICD9 code (for GUI)<br/>IEN       Internal Entry Number<br/>RF        Record Found{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 




 Generated on January 13th 2017, 6:24:32 am