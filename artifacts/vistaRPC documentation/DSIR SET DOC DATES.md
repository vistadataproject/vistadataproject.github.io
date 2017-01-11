---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR SET DOC DATES 

 property | value 
--- | --- 
 label | DSIR SET DOC DATES
 tag | SAVEDATE
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | ARRAY
 description | SAVES DATES FOR USE IN SCREENING CLINICAL DOCUMENTS FOR AN ROI REQUEST

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VEJDIFN | LITERAL | 16 | true | IFN OF CURRENT ROI REQUEST | 
| VEJDDATS | LIST |  | true | ARRAY OF:   ITEMS IN FILEMAN INTERNAL DATE/TIME FORMAT1) Medications From^Medications To2) Vitals From^Vitals To3) Radiology From^Radiology To4) Immunology From^Immunology To5) Consults From^Consults To6) Postings From^Postings To7) Discharge Summaries From^Discharge Summaries To8) Progress Notes From^Progress Notes To | 




 ###### Generated on January 11th 2017, 6:39:43 am