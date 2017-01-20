---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU NOTES 16 BIT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU NOTES 16 BIT{:/}
 tag | {::nomarkdown}NOTES{:/}
 routine | [TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This API gets lists of progress notes for a patient, with optional parameters for STATUS, EARLY DATE/TIME, and LATE DATE/TIME.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the patient file.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NOTES^[TIUSRVLC](http://code.osehra.org/dox/Routine_TIUSRVLC_source.html)
 Method comment | Gets list of Notes
 Input parameters | {::nomarkdown}DFN, EARLY, LATE, ROOTFLAG{:/}
 Code | {::nomarkdown}  I $S(+$G(DFN)'>0:1,'$D(^DPT(+$G(DFN),0)):1,1:0) Q<br> D LIST(.TIUY,3,DFN,$G(EARLY),$G(LATE),$G(ROOTFLAG)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}