---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA DLOOK 

 property | value 
--- | --- 
 label | NUPA DLOOK
 tag | DLOOK
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | GLOBAL ARRAY
 description | Does a lookup on the B Xref of a file, and does not convert dates orpointers.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL |  | true | File number to do the lookup on. | 
| vs:Input_Parameter-8994_02 | VAL | LITERAL |  | true | Value to lookup. | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL |  | true | Type of file to lookup - variable pointer or date. | 
| vs:Input_Parameter-8994_02 | SCR | LITERAL |  | true | Fileman screen for the lookup. | 
| vs:Input_Parameter-8994_02 | IND | LITERAL |  | true | Index to lookup the data on. | 