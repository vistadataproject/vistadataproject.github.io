---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB MOB DRUG LIST 

 property | value 
--- | --- 
 label | PSB MOB DRUG LIST
 tag | OILST
 routine | [PSBRPCMO](http://code.osehra.org/dox/Routine_PSBRPCMO_source.html)
 return value type | ARRAY
 description | Used by the BCMA/CPRS Med Order Button to return an array of drug.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBSCAN | LITERAL | 40 | true | PSBSCAN is the value that has been scanned or entered by the user. | 
| PSBOTYP | LITERAL | 30 | true | Type of list:     Dispensed Drugs   = \UD\     IV Medications    = \IV\     Orderable Item    = \OIT\     Drug Class        = \VAC\ | 




 ###### Generated on January 11th 2017, 6:39:43 am