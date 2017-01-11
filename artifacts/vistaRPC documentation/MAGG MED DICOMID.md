---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG MED DICOMID 

 property | value 
--- | --- 
 label | MAGG MED DICOMID
 tag | DICOMID
 routine | [MAGGTMC1](http://code.osehra.org/dox/Routine_MAGGTMC1_source.html)
 return value type | SINGLE VALUE
 description | Returns an ID, generated as a temporary way to link, flouroscopicimages captured by other system to images captured on thisworkstation.They will be linked by both being saved under the same Medicine procedure.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | DATA = psien ^ dfn ^ mcien | 