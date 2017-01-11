---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA NEW IF NONE 

 property | value 
--- | --- 
 label | NUPA NEW IF NONE
 tag | NEWN
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Adds a new entry to a file, if that entry did not previously exist.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIC | LITERAL |  | true | File to add the entry to. | 
| ENTRY | LITERAL |  | true | Entry to add to the file. | 
| SCREEN | LITERAL |  | true | Lookup screen. | 