---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRLTRS DELETE 

 property | value 
--- | --- 
 label | DSIRLTRS DELETE
 tag | DELETE
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | SINGLE VALUE
 description | This RPC will delete entries from file 19620.16 (DSIR LOCAL LETTERS) provided the letter specified is not flagged as a \National\ letter.  Certain letter titles are required by the GUI to exist and as such are not to be removed from this file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number to file 19620.16 (DSIR LOCAL LETTERS) (Required) | 