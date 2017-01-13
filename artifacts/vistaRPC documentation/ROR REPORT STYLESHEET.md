---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR REPORT STYLESHEET 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR REPORT STYLESHEET{:/}
 tag | {::nomarkdown}GETXSL{:/}
 routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR REPORT STYLESHEET remote procedure retrieves the XSL stylesheet associated with the report. If there is no stylesheet available, the default one is returned.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RPTCODE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code of the report (value of the CODE field of the report descriptor inthe ROR REPORT file).{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The TYPE parameter defines the type of requested stylesheet:   1  Report preview (default)  2  Comma-separated output  3  Printer output{:/} | 




 Generated on January 13th 2017, 7:11:27 am