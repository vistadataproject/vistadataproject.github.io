---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRRPTR STOP CANCEL REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRRPTR STOP CANCEL REPORT{:/}
 tag | {::nomarkdown}STOP{:/}
 routine | [DSIRRPTR](http://code.osehra.org/dox/Routine_DSIRRPTR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Requests a specified task to stop running. No guarantee that this will always work, however, if a report is asked to stop while running and the report sees the request, the report will clean up the ^XTMP data, stop running and update the DSIR SCHEDULED REPORTS file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of the report to delete in file 19620.35{:/} | 
| {::nomarkdown}WEP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag to delete the report with extreme prejudice. 0 = No, 1 = Yes, Defaults to 0.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}