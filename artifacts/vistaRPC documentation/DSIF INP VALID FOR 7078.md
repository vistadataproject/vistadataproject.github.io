---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP VALID FOR 7078 

 property | value 
--- | --- 
 label | DSIF INP VALID FOR 7078
 tag | CHK7078
 routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
 return value type | SINGLE VALUE
 description | This PRC preforms some basic checks on an entry in file 162.2 to see if it is complete enough to create a 7078.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REQ | LITERAL | 99 | true | Internal Number of Request (Required, Pointer to file 162.2) | 