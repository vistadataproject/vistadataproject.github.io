---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM3 COMPENT 

 property | value 
--- | --- 
 label | ORAM3 COMPENT
 tag | COMPENT
 routine | [ORAM3](http://code.osehra.org/dox/Routine_ORAM3_source.html)
 return value type | SINGLE VALUE
 description | Enters complication note into the Anticoagulation Flowsheet file (#103).Can also be entered as part of a complete visit entry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | DUZ | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | CCODE | LITERAL |  |  | CODE TO NOTE IF COMPLICATION IS MAJOR, MINOR OR BOTH | 
| vs:Input_Parameter-8994_02 | CTEXT | LITERAL |  |  | Carroted ('^') string of complication types/comments | 
| vs:Input_Parameter-8994_02 | CDATE | LITERAL |  |  | 'ENGLISH' DATE OF THE COMPLICATION;This is the date for the flow sheet to put the, probably historic, entry in the proper order in the flow sheet.  DATE/TIME stamp is in the file, but not visible in the flow sheet. | 