---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR SET DOC DATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR SET DOC DATES{:/}
 tag | {::nomarkdown}SAVEDATE{:/}
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}SAVES DATES FOR USE IN SCREENING CLINICAL DOCUMENTS FOR AN ROI REQUEST{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VEJDIFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IFN OF CURRENT ROI REQUEST{:/} | 
| {::nomarkdown}VEJDDATS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ARRAY OF:   ITEMS IN FILEMAN INTERNAL DATE/TIME FORMAT1) Medications From^Medications To2) Vitals From^Vitals To3) Radiology From^Radiology To4) Immunology From^Immunology To5) Consults From^Consults To6) Postings From^Postings To7) Discharge Summaries From^Discharge Summaries To8) Progress Notes From^Progress Notes To{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}