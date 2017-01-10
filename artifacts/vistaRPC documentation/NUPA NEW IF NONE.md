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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DIC | LITERAL |  | true | File to add the entry to. | 
| vs:Input_Parameter-8994_02 | ENTRY | LITERAL |  | true | Entry to add to the file. | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL |  | true | Lookup screen. | 