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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Lock/Unlock Flag | LITERAL | 1 | true | Lock/Unlock Flag | 
| vs:Input_Parameter-8994_02 | AP Section | LITERAL | 2 | true | AP Section | 
| vs:Input_Parameter-8994_02 | Year | LITERAL | 4 | true | Year | 
| vs:Input_Parameter-8994_02 | Access Number | LITERAL | 5 | true | Access Number | 