---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC SR LIST 

 property | value 
--- | --- 
 label | DSIC SR LIST
 tag | LISTSR
 routine | [DSICSRPT](http://code.osehra.org/dox/Routine_DSICSRPT_source.html)
 return value type | ARRAY
 description | Return a list of actual surgical cases for a patient for a date range

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | This is patient pointer from file 2 for which to retrieve cases. | 
| ALPHA | LITERAL | 14 | true | This is the starting date.time in Fileman format for retrieving surgical cases.  Default value is 1/1/2000 | 
| OMEGA | LITERAL | 14 | true | This is a Fileman date.time  It is the ending date for surgical cases.  The default value is TODAY | 