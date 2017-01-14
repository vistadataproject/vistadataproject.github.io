---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE CXNOSHOW 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CXNOSHOW{:/}
 tag | {::nomarkdown}CXNOSHOW{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CXNOSHOW^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Should workload requirement be skipped for this note's visit?
 First comment | {::nomarkdown}RETURN VALUE:  0=SKIP ALL GUI WORKLOAD REQUIREMENTS<br/>1=CONTINUE WITH OTHER GUI WORKLOAD LOGIC{:/}
 Input parameters | {::nomarkdown}ORDOCIEN{:/}
 Code | ```  N ORTIU
 D DOCPARM^TIUSRVP1(.ORTIU,ORDOCIEN)          ; DBIA #4331
 S ORY=+$$CHKWKL^TIUPXAP2(ORDOCIEN,ORTIU(0))  ; DBIA #4332
```




 Generated on January 14th 2017, 7:26:36 am