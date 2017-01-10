---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV FIND SOP BY UID 

 property | value 
--- | --- 
 label | MAGV FIND SOP BY UID
 tag | FINDSOP
 routine | [MAGVRS21](http://code.osehra.org/dox/Routine_MAGVRS21_source.html)
 return value type | SINGLE VALUE
 description | This RPC looks up SOPs by SOP UID.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SOPUID | LITERAL |  |  | The SOP UID used to look up the series. | 