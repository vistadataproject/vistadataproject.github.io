---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM2 REMIND 

 property | value 
--- | --- 
 label | ORAM2 REMIND
 tag | REMIND
 routine | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
 return value type | SINGLE VALUE
 description | Sets date and text for ACM Reminder (can also be set as part of a completevisit entry).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  |  |  | 
| DATE | LITERAL |  |  | Date the patient specific reminder that will start appearing when theANTICOAGULATOR is accessed. | 
| RTEXT | LITERAL |  |  | Actual carrot ('^') deliminated text (by line) of the reminder. | 