---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV ADD VIEWING AUDIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ADD VIEWING AUDIT{:/}
 tag | {::nomarkdown}AAUDIT{:/}
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add \viewing\ audit entry to 19625, with minimum data. This rpc verifies that the user checked to see whether a buffer entry was needed for an appt.  Buffer IEN will be set to 0. input is DATA(\DFN\) - required, pointer to the patient file         DATA(\LOC\) - required, free text clinic location         DATA(\APDT\)- required, appt date return -1^error message  or ien of entry{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DATA(\DFN\), DATA(\LOC\) and DATA(\APDT\) are required.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}