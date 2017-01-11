---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IS DOC CLASS 

 property | value 
--- | --- 
 label | MAGG IS DOC CLASS
 tag | ISDOCCL
 routine | [MAGGNTI](http://code.osehra.org/dox/Routine_MAGGNTI_source.html)
 return value type | SINGLE VALUE
 description | Checks to see if IEN of TIU Files 8925 or 8925.1 is of a certain Doc Class

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 30 | true | Internal Entry Number in the TIUFILE | 
| TIUFILE | LITERAL | 10 | true |  IS - 8925   if we need to see if a Note is of a Document Class IS - 8925.1 if we need to see if a Title is of a Document Class | 
| CLASS | LITERAL | 60 | true | Text Name of the Document Class   example: \ADVANCE DIRECTIVE\ | 




 Generated on January 11th 2017, 7:15:04 am