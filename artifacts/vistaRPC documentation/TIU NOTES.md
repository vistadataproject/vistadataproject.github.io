---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get notes
 Input Parameters | {::nomarkdown}DFN<br/>EARLY<br/>LATE<br/>PERSON<br/>SEQUENCE{:/}
 Lines | {::nomarkdown} N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)<br/> S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))<br/> S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")<br/> D CONTEXT(.TIUY,3,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 




 Generated on January 13th 2017, 7:15:27 am