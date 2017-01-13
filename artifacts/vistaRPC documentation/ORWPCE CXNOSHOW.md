---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE CXNOSHOW 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CXNOSHOW{:/}
 tag | {::nomarkdown}CXNOSHOW{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Should workload requirement be skipped for this note's visit?
 Input Parameters | {::nomarkdown}ORDOCIEN{:/}
 Lines | ```{::nomarkdown} N ORTIU<br/> D DOCPARM^TIUSRVP1(.ORTIU,ORDOCIEN)          ; DBIA #4331<br/> S ORY=+$$CHKWKL^TIUPXAP2(ORDOCIEN,ORTIU(0))  ; DBIA #4332<br/>```{:/}
 Leading comment lines | {::nomarkdown}RETURN VALUE:  0=SKIP ALL GUI WORKLOAD REQUIREMENTS<br/>1=CONTINUE WITH OTHER GUI WORKLOAD LOGIC{:/}




 Generated on January 13th 2017, 7:11:27 am