---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE FIND FIRST STANDALONE 

 property | value 
--- | --- 
 label | SDOE FIND FIRST STANDALONE
 tag | EXAE
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure Call (RPC) returns the internal entrynumber of an OUTPATIENT ENCOUNTER file (#409.68) entry for thefirst the first standalone add/edit for a patient in a specified date range.Use same date for begin and end dates for specific (single) date check.Standalone encounter is an encounter with no parent and the originatingprocess is 'Stop Code Addition'.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT ID | LITERAL |  | true | This is the internal entry number of an entry in the PATIENT [#2 - ^DPT] file. | 
| BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional. | 
| END DATE/TIME | LITERAL |  | true | Ending date and time in VA FileMan format.Time is optional. | 
| SEARCH FLAGS | LITERAL |  | true | This parameter allows developers to set specific flags that areused as an API searches encounter records. The flags indicate howthe API should function. Character  Description ---------  -----------     C      Use only completed encounters | 




 Generated on January 11th 2017, 7:15:03 am