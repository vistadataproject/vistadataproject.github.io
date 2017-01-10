---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF FB INSTITUTION 

 property | value 
--- | --- 
 label | DSIF FB INSTITUTION
 tag | GETINST
 routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
 return value type | GLOBAL ARRAY
 description | Input Station number, return all populated fields in file #4.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | STATION NUMBER | LITERAL | 9 | true |  Station number lookup, using \D\ cross reference (FIELD 99) 1st, then by name field. | 