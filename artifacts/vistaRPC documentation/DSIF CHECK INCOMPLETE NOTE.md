---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CHECK INCOMPLETE NOTE 

 property | value 
--- | --- 
 label | DSIF CHECK INCOMPLETE NOTE
 tag | CHKINOT
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | SINGLE VALUE
 description | This RPC will check to see if there is an incomplete 7078 for this patient.  If one exists then there cannot be a new request added.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required) | 




Generated on January 11th 2017, 6:34:23 am