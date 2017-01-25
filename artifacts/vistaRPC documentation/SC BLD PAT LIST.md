---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC BLD PAT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC BLD PAT LIST{:/}
 tag | {::nomarkdown}PTLSTBLD{:/}
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Builds a list of patients to be assigned to either a team or positionthrough the multiple assignment form.  This list is called by the actual \filer\ for either the Team or the position.  The list's format is ^TMP($J,\SC PATIENT LIST\,DFN){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCVAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}