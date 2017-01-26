---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC BLD PAT SCDE LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC BLD PAT SCDE LIST{:/}
 tag | {::nomarkdown}PTSCBLD{:/}
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Buils a list of patients who are associated with a particular stop code.Only those patients within the specified date range will appear in the list.Screens out inactive stop codes.  Format of the list is ^TMP($J,\SCSCDE\,DFN){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETER LIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}