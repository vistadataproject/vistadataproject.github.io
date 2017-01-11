---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM APPTMTCH 

 property | value 
--- | --- 
 label | ORAM APPTMTCH
 tag | APPTMTCH
 routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
 return value type | SINGLE VALUE
 description | This RPC supports revision of the appointment match when the user selects a new Clinic in Anticoagulator.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORAMDFN | LITERAL |  | true | Patient ID. | 
| ORAMCL | LITERAL |  | true | This is the internal entry number of the Clinic in the Hospital Location File (#44). | 




Generated on January 11th 2017, 6:34:23 am