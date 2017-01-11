---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA FILE 

 property | value 
--- | --- 
 label | NUPA FILE
 tag | FILE
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Files data into Fileman files.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DIE | LITERAL |  | true | The file to save data to, in regular fileman format. | 
| IEN | LITERAL |  | true | The DA variable for the DIE call, in regular fileman format. | 
| FIELD | LITERAL |  | true | The field number to file data into, in numeric format. | 
| VALUE | LITERAL |  | true | The value to save to the field. | 
| SLASHES | LITERAL |  | true | The number of slashes for the DIE call, typically 3 or 4. | 