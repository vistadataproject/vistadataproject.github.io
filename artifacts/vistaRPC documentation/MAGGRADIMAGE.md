---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGRADIMAGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGGRADIMAGE{:/}
 tag | {::nomarkdown}IMAGE{:/}
 routine | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}User selects a Radiology exam from the listing displayed, we return a listof images associated with that exam.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA is the exam data that was output from the MAGGRADLIST RPC call.DATA is the Radiology values stored in ^TMP($J,\RAEX\,x)  that the radiology procedure RAPTLU sets during the search  for patient exams.  (see routine RAPTLU )      ^TMP($J,\RAEX\,RACNT)=     RADFN_\^\_RADTI_\^\_RACNI_\^\_RANME_\^\_RASSN_\^\    _RADATE_\^\_RADTE_\^\_RACN_\^\_RAPRC_\^\_RARPT_\^\_RAST{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}