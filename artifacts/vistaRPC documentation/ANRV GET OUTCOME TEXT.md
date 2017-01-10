---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ANRV GET OUTCOME TEXT 

 property | value 
--- | --- 
 label | ANRV GET OUTCOME TEXT
 tag | GETTXT
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | ARRAY
 description | Returns subrecord text.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RESULTS | LITERAL |  | true | Subrecord text. | 
| vs:Input_Parameter-8994_02 | SUBREC | LITERAL | 50 | true | Subrecord IEN that is going to be returned. | 
| vs:Input_Parameter-8994_02 | TOPREC | LITERAL | 50 | true | Top record of the sub record to return. | 