---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDLR32 GET LAB TIMES 

 property | value 
--- | --- 
 label | ORWDLR32 GET LAB TIMES
 tag | GETLABTM
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | ARRAY
 description | Returns a list of lab collect times for a date and location.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATE | LITERAL | 12 | true |  | 
| vs:Input_Parameter-8994_02 | LOCATION | LITERAL | 12 | true |  | 