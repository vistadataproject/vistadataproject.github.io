---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRRPTR GETRPT GET RPT DATA 

 property | value 
--- | --- 
 label | DSIRRPTR GETRPT GET RPT DATA
 tag | GETRPT
 routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves stored results from a specified report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | Internal entry number of the report in 19620.35 | 
| STFM | LITERAL | 99 | true | This is the Internal Number from the word processing multiple in file 19620.35 that was passed back as the last line sent in the small group return. | 
| RECS | LITERAL | 6 | true | This is the max number of records from the report text to return. | 