---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV FIND SERIES BY UID 

 property | value 
--- | --- 
 label | MAGV FIND SERIES BY UID
 tag | FINDSER
 routine | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
 return value type | SINGLE VALUE
 description | This RPC looks up series by series UID.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SERUID | LITERAL |  |  | The SERIES UID used to look up the series. | 