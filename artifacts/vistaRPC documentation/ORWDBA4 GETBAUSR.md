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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORCIEN | REFERENCE | 255 | true | This is the interanl ID number of the clinicial who is being checked for the value of the Enable Billing Awareness Parameter. | 