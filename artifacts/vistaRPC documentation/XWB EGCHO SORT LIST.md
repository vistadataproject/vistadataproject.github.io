---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB EGCHO SORT LIST 

 property | value 
--- | --- 
 label | XWB EGCHO SORT LIST
 tag | SRT
 routine | [XWBZ1](http://code.osehra.org/dox/Routine_XWBZ1_source.html)
 return value type | ARRAY
 description | Sorts a given numeric array, starting from HI or LOIt exists for support of EGcho - Broker demonstration program.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DIRECTION | LITERAL | 2 | true | The string LO or HI | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST |  |  | The array of numbers.  Pass using . syntaxX(12)=\\,X(23)=\\,... for example | 