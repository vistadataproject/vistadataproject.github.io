---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQBP UPDATE 

 property | value 
--- | --- 
 label | MAGQBP UPDATE
 tag | PGEUD
 routine | [MAGQBPG2](http://code.osehra.org/dox/Routine_MAGQBPG2_source.html)
 return value type | SINGLE VALUE
 description | Nulls the appropriate magnetic network location reference.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILENAME | LITERAL |  | true | The Image file name to be updated. | 
| EXT | LITERAL |  | true | The image file extension to be updated. | 
| IEN | LITERAL |  | true | Image file internal entry number to be updated. | 
| Device | LITERAL |  | true | 'NET' or 'JB' to specify which Image system reference to update. | 