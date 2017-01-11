---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP RESERVE CASE 

 property | value 
--- | --- 
 label | MAGTP RESERVE CASE
 tag | LOCKR
 routine | [MAGTP003](http://code.osehra.org/dox/Routine_MAGTP003_source.html)
 return value type | ARRAY
 description | Set/Unset a logical lock on a case for reservation

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Lock/Unlock Flag | LITERAL | 1 | true | Lock/Unlock Flag | 
| AP Section | LITERAL | 2 | true | AP Section | 
| Year | LITERAL | 4 | true | Year | 
| Access Number | LITERAL | 5 | true | Access Number | 




Generated on January 11th 2017, 6:34:23 am