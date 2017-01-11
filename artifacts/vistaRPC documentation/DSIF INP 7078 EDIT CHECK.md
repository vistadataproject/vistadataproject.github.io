---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP 7078 EDIT CHECK 

 property | value 
--- | --- 
 label | DSIF INP 7078 EDIT CHECK
 tag | EDTCHK
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to see if there is at least one payment on file for a given 7078.  This is needed by the GUI so it won't allow the user to edit a 7078 if a payment exists.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number for 7078 | 