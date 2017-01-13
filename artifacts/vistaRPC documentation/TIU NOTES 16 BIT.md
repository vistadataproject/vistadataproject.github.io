---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES 16 BIT 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES 16 BIT{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Gets list of Notes
 Input Parameters | {::nomarkdown}DFN<br/>EARLY<br/>LATE<br/>ROOTFLAG{:/}
 Lines | ```{::nomarkdown} I $S(+$G(DFN)'>0:1,'$D(^DPT(+$G(DFN),0)):1,1:0) Q<br/> D LIST(.TIUY,3,DFN,$G(EARLY),$G(LATE),$G(ROOTFLAG))```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 




 Generated on January 13th 2017, 7:11:26 am