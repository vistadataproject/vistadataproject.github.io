---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU NOTES 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | NOTES^[TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 Method comment | Get notes
 Input parameters | {::nomarkdown}DFN<br/>EARLY<br/>LATE<br/>PERSON<br/>SEQUENCE{:/}
 Code | ```  N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)
 S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))
 S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")
 D CONTEXT(.TIUY,3,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE)```




 Generated on January 14th 2017, 7:26:35 am