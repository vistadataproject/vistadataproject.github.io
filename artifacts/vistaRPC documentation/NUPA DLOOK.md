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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL |  | true | File number to do the lookup on. | 
| VAL | LITERAL |  | true | Value to lookup. | 
| TYPE | LITERAL |  | true | Type of file to lookup - variable pointer or date. | 
| SCR | LITERAL |  | true | Fileman screen for the lookup. | 
| IND | LITERAL |  | true | Index to lookup the data on. | 




Generated on January 11th 2017, 6:34:23 am