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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORAMDFN | LITERAL |  | true | Patient ID. | 
| vs:Input_Parameter-8994_02 | ORAMCL | LITERAL |  | true | This is the internal entry number of the Clinic in the Hospital Location File (#44). | 