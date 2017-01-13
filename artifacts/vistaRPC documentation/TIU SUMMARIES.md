---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU SUMMARIES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU SUMMARIES{:/}
 tag | {::nomarkdown}SUMMARY{:/}
 routine | [TIUSRVLO](http://code.osehra.org/dox/Routine_TIUSRVLO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of Discharge Summaries for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get Summaries
 Input Parameters | {::nomarkdown}DFN<br/>EARLY<br/>LATE{:/}
 Lines | ```
 N TIUPREF,TIUOCC S TIUPREF=$$PERSPRF^TIULE(DUZ)
 S TIUOCC=$P(TIUPREF,U,10),PERSON=$S(+$G(PERSON):+$G(PERSON),1:+$G(DUZ))
 S SEQUENCE=$S($G(SEQUENCE)]"":$G(SEQUENCE),1:"D")
 D CONTEXT(.TIUY,244,1,DFN,$G(EARLY),$G(LATE),PERSON,TIUOCC,SEQUENCE)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 




 Generated on January 13th 2017, 6:55:28 am