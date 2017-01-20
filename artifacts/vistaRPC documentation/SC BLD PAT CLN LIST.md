---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC BLD PAT CLN LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC BLD PAT CLN LIST{:/}
 tag | {::nomarkdown}PTCLBLD{:/}
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC build a list of patients by assignment to a selected clinic.Lookup is in the Hospital location file, screening of \C\ in the (0,3) node.  List is stored in ^TMP($J,\SCCLPT\,N)=DFN.  List is alphabetized by name.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETER LIST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}