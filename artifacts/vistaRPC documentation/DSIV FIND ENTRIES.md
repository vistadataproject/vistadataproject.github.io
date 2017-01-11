---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV FIND ENTRIES 

 property | value 
--- | --- 
 label | DSIV FIND ENTRIES
 tag | FIND
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | ARRAY
 description | Returns unprocessed INSURANCE BUFFER file entries for a given patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 16 | true | Patient internal entry number (in FILE #2). | 
| FLDS | LITERAL | 80 | true | Contains the requested buffer entry fields that can be retrieved using Fileman (i.e. not an API call).  For example: \@;.01I;.02;.03;.04I;20.01;40.02;40.03;40.09;60.04\ | 




 ###### Generated on January 11th 2017, 6:39:43 am