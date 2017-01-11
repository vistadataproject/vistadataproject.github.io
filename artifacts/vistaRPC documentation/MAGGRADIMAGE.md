---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGRADIMAGE 

 property | value 
--- | --- 
 label | MAGGRADIMAGE
 tag | IMAGE
 routine | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
 return value type | GLOBAL ARRAY
 description | User selects a Radiology exam from the listing displayed, we return a listof images associated with that exam.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 245 | true | DATA is the exam data that was output from the MAGGRADLIST RPC call.DATA is the Radiology values stored in ^TMP($J,\RAEX\,x)  that the radiology procedure RAPTLU sets during the search  for patient exams.  (see routine RAPTLU )      ^TMP($J,\RAEX\,RACNT)=     RADFN_\^\_RADTI_\^\_RACNI_\^\_RANME_\^\_RASSN_\^\    _RADATE_\^\_RADTE_\^\_RACN_\^\_RAPRC_\^\_RARPT_\^\_RAST | 