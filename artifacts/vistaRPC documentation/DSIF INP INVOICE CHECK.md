---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP INVOICE CHECK 

 property | value 
--- | --- 
 label | DSIF INP INVOICE CHECK
 tag | INVCHK
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | SINGLE VALUE
 description | Pass in the IEN of the 7078 or the 583 file, and the file (7078 or 583) Returns the Invoice number(s) linked to the 7078 or 583 if one exists.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 25 | true | IEN of file 7078 or 583. | 
| FILE | LITERAL | 4 | true |  Must be \583\ (Unauthorized)     or \7078\ (CH) | 