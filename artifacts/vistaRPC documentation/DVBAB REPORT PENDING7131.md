---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB REPORT PENDING7131 

 property | value 
--- | --- 
 label | DVBAB REPORT PENDING7131
 tag | STRT
 routine | [DVBAB57](http://code.osehra.org/dox/Routine_DVBAB57_source.html)
 return value type | GLOBAL ARRAY
 description | Generates a list of pending 7131 requests.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SELDIV | LITERAL |  | true |  | 
| DIV | LITERAL |  | true |  | 
| DVBADLMTR | LITERAL | 1 | true | This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR=0 means report will be in plain text and DVBADLMTR=1 means create output in comma delimited format. | 




 Generated on January 11th 2017, 7:15:04 am