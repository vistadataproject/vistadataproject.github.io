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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RESULTS | LITERAL |  | true | Subrecord text. | 
| SUBREC | LITERAL | 50 | true | Subrecord IEN that is going to be returned. | 
| TOPREC | LITERAL | 50 | true | Top record of the sub record to return. | 




 Generated on January 11th 2017, 7:15:04 am