---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA LIST 

 property | value 
--- | --- 
 label | NUPA LIST
 tag | LIST
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of all entries in a file (.01 field only).  You can specifya screen, in regular Fileman format.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL |  | true | File number to list data from. | 
| SCREEN | LITERAL |  | true | Fileman screen for the lookup. | 
| MULT | LITERAL |  | true | Subscript of a multiple to do the lookup on. | 