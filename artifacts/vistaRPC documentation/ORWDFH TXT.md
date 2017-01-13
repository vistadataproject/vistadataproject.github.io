---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH TXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH TXT{:/}
 tag | {::nomarkdown}TXT{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RPC to return the text of the current and any future diets for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return text of current & future diets for a patient
 Input Parameters | {::nomarkdown}DFN{:/}
 Lines | ```
 S LST(1)="Current Diet:  "_$$DIET^ORCDFH(DFN)
 N FUTLST D FUT(.FUTLST,DFN) I $D(FUTLST)>1 D
 . S LST(2)="Future Diet Orders:",ILST=2
 . S I=0 F  S I=$O(FUTLST(I)) Q:'I  D
 . . S X=$$FMTE^XLFDT(I,2)_"  "_$P(FUTLST(I),U,2)
 . . S LST(ILST)=$S(ILST=2:"Future Diet Orders:  "_X,1:"   "_X)
 . . S ILST=ILST+1```




 Generated on January 13th 2017, 6:55:29 am