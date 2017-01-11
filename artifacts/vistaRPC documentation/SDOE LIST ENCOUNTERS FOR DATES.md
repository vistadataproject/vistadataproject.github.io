---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE LIST ENCOUNTERS FOR DATES 

 property | value 
--- | --- 
 label | SDOE LIST ENCOUNTERS FOR DATES
 tag | LIST
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | GLOBAL ARRAY
 description | This Remote Procedure Call (RPC) returns a list of OutpatientEncounters for a specified date range.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BEGIN DATE/TIME | LITERAL |  | true | Beginning date and time in VA FileMan format.Time is optional. | 
| END DATE/TIME | LITERAL |  | true | End date and time in VA FileMan format.Time is optional. | 




Generated on January 11th 2017, 6:34:23 am