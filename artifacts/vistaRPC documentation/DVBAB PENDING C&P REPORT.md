---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB PENDING C&P REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB PENDING C&P REPORT{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates a report containing the pending C&P exam requests.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBCSORT{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}RSTAT{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ERDAYS{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}OLDAYS{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADIVNUM{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ELTYP{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}DVBADLMTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is used to indicate whether the report will create a plain text format or a comma delimited output format. DVBADLMTR=0 means report will be in plain text and DVBADLMTR=1 means create output in comma delimited format.{:/} | 
| {::nomarkdown}ROFILTER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value of ROFILTER indicates which Regional Office the Pending C&P Report is for. This parameter is only passed when the Pending C&P Report is being run from the Consolidated Remote Reports menu.{:/} | 




 Generated on January 13th 2017, 6:24:32 am