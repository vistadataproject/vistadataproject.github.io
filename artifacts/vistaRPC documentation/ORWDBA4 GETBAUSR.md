---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA4 GETBAUSR 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA4 GETBAUSR{:/}
 tag | {::nomarkdown}GETBAUSR{:/}
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Gets the value of the Enable Billing Awareness By User parameter. The value returned will be 1 for Yes, Billing Awareness Enabled, and 0 for No, Billing Awareness Disabled.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | GUI RPC CALL
 Leading comment lines | Get Billing Awareness By User parameter value
Gets and returns the value of the Enabled Billing Awareness By User
parameter assigned to a provider.
Input Variable:
ORCIEN    Ordering Clinician's Internal Entry Number
Output Variable:
Y         Parameter value, 1 if enabled, 0 if disabled

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the interanl ID number of the clinicial who is being checked for the value of the Enable Billing Awareness Parameter.{:/} | 




 Generated on January 13th 2017, 5:52:13 am