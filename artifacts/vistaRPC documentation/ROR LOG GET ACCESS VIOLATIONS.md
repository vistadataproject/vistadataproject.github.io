---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LOG GET ACCESS VIOLATIONS 

 property | value 
--- | --- 
 label | ROR LOG GET ACCESS VIOLATIONS
 tag | AVLIST
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LOG GET ACCESS VIOLATIONS remote procedure returns the list ofaccess violation events recorded in the provided time frame.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STDT | LITERAL |  |  | The STDT parameter defines the start date for the search of the events. Bydefault (if $G(STDT)'>0), the search starts from the earliest record ofthe ROR LOG file. | 
| ENDT | LITERAL |  |  | The ENDT parameter defines the end date for the search of the events. Bydefault (if $G(ENDT)'>0), the search continues to the last record of theROR LOG file. | 




 Generated on January 11th 2017, 7:15:04 am