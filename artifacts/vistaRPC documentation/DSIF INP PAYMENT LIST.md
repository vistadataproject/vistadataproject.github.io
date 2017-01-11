---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP PAYMENT LIST 

 property | value 
--- | --- 
 label | DSIF INP PAYMENT LIST
 tag | LOOKUP
 routine | [DSIFEP1](http://code.osehra.org/dox/Routine_DSIFEP1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of all entries in file 162.5 for a given entry in 7078.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FB7078 | LITERAL | 99 | true | Internal Entry Number to file 162.4 | 




 ###### Generated on January 11th 2017, 6:39:43 am