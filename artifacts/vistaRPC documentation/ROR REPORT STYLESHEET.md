---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR REPORT STYLESHEET 

 property | value 
--- | --- 
 label | ROR REPORT STYLESHEET
 tag | GETXSL
 routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR REPORT STYLESHEET remote procedure retrieves the XSL stylesheet associated with the report. If there is no stylesheet available, the default one is returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RPTCODE | LITERAL |  | true | Code of the report (value of the CODE field of the report descriptor inthe ROR REPORT file). | 
| TYPE | LITERAL |  |  | The TYPE parameter defines the type of requested stylesheet:   1  Report preview (default)  2  Comma-separated output  3  Printer output | 




Generated on January 11th 2017, 6:34:23 am