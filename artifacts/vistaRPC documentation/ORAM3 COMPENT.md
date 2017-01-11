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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  |  |  | 
| DUZ | LITERAL |  |  |  | 
| CCODE | LITERAL |  |  | CODE TO NOTE IF COMPLICATION IS MAJOR, MINOR OR BOTH | 
| CTEXT | LITERAL |  |  | Carroted ('^') string of complication types/comments | 
| CDATE | LITERAL |  |  | 'ENGLISH' DATE OF THE COMPLICATION;This is the date for the flow sheet to put the, probably historic, entry in the proper order in the flow sheet.  DATE/TIME stamp is in the file, but not visible in the flow sheet. | 




 ###### Generated on January 11th 2017, 6:39:43 am