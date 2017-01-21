---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NOTES^[TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 Method comment | Get notes
 Input parameters | {::nomarkdown}DFN, EARLY, LATE, PERSON, SEQUENCE{:/}
 Code | {::nomarkdown}  N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)<br> S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))<br> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br> D CONTEXT(.TIUY,3,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}