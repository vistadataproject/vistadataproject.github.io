---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA4 GETBAUSR 

 property | value 
--- | --- 
 label | ORWDBA4 GETBAUSR
 tag | GETBAUSR
 routine | [ORWDBA4](http://code.osehra.org/dox/Routine_ORWDBA4_source.html)
 return value type | SINGLE VALUE
 description | Gets the value of the Enable Billing Awareness By User parameter. The value returned will be 1 for Yes, Billing Awareness Enabled, and 0 for No, Billing Awareness Disabled.


### Method description

 property | value 
--- | --- 
 Method comment | GUI RPC CALL
 Leading comment lines | Get Billing Awareness By User parameter value,Gets and returns the value of the Enabled Billing Awareness By User,parameter assigned to a provider.,Input Variable:,ORCIEN    Ordering Clinician's Internal Entry Number,Output Variable:,Y         Parameter value, 1 if enabled, 0 if disabled

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORCIEN | REFERENCE | 255 | true | This is the interanl ID number of the clinicial who is being checked for the value of the Enable Billing Awareness Parameter. | 




 Generated on January 11th 2017, 7:15:04 am