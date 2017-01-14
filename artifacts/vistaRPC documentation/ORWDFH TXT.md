---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH TXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH TXT{:/}
 tag | {::nomarkdown}TXT{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to return the text of the current and any future diets for a patient.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TXT^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return text of current & future diets for a patient
 Input parameters | {::nomarkdown}DFN{:/}
 Code | {::nomarkdown}  S LST(1)="Current Diet:  "_$$DIET^ORCDFH(DFN)<br> N FUTLST D FUT(.FUTLST,DFN) I $D(FUTLST)>1 D<br> . S LST(2)="Future Diet Orders:",ILST=2<br> . S I=0 F  S I=$O(FUTLST(I)) Q:'I  D<br> . . S X=$$FMTE^XLFDT(I,2)_"  "_$P(FUTLST(I),U,2)<br> . . S LST(ILST)=$S(ILST=2:"Future Diet Orders:  "_X,1:"   "_X)<br> . . S ILST=ILST+1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}