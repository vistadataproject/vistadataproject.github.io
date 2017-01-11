---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM1 LOG 

 property | value 
--- | --- 
 label | ORAM1 LOG
 tag | LOGIT
 routine | [ORAM1](http://code.osehra.org/dox/Routine_ORAM1_source.html)
 return value type | SINGLE VALUE
 description | Updates Anticoagulation Flowsheet file (#103) and adds log entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FSARRAY | LIST |  |  |  | 
| COMP | LITERAL |  |  | COMP=0 Will remove this entry's complication indication code (instead of1= Major Bleed, 2=Clot, 3=Minor Bleed), the original complicatons will stay in the file, but they will no longer be visible or considered in reports based on the COMPLICATION code (104). | 




Generated on January 11th 2017, 6:34:23 am