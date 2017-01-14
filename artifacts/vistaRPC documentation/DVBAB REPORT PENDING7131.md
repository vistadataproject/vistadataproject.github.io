---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DVBAB REPORT PENDING7131 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB REPORT PENDING7131{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB57](http://code.osehra.org/dox/Routine_DVBAB57_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates a list of pending 7131 requests.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SELDIV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR=0 means report will be in plain text and DVBADLMTR=1 means create output in comma delimited format.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}