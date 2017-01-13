---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPTR GETRPT GET RPT DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTR GETRPT GET RPT DATA{:/}
 tag | {::nomarkdown}GETRPT{:/}
 routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves stored results from a specified report.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the report in 19620.35{:/} | 
| {::nomarkdown}STFM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Internal Number from the word processing multiple in file 19620.35 that was passed back as the last line sent in the small group return.{:/} | 
| {::nomarkdown}RECS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the max number of records from the report text to return.{:/} | 




 Generated on January 13th 2017, 6:44:48 am