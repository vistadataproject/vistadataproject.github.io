---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV GET EIV PATIENT REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV GET EIV PATIENT REPORT{:/}
 tag | {::nomarkdown}PIIV{:/}
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns one to many patient eIV reports from the Insurance Type multiple in the patient file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN (ien).{:/} | 
| {::nomarkdown}DSIVPATP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the pointer to the patient policy IEN from the Insurance Type multiple of the PATIENT file.  If sent, then the single eIV report for that policy will be returned, if not sent then all policy entries will be returned with any eIV report they might contain.{:/} | 




 Generated on January 13th 2017, 7:11:27 am