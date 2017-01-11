---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROIR PRL PAT REQUEST LIST 

 property | value 
--- | --- 
 label | DSIROIR PRL PAT REQUEST LIST
 tag | PRL
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STDT | LITERAL | 7 | true | This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date. | 
| ENDT | LITERAL | 7 | true | The last date to searc for a request IEN for the selected patient. | 
| PAT | LITERAL | 99 | true | DFN of the selected patient. | 