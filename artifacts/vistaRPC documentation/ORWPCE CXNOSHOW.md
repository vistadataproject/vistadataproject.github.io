---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE CXNOSHOW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE CXNOSHOW{:/}
 tag | {::nomarkdown}CXNOSHOW{:/}
 routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CXNOSHOW^[ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
 Method comment | Should workload requirement be skipped for this note's visit?
 First comment | {::nomarkdown}<pre> RETURN VALUE:  0=SKIP ALL GUI WORKLOAD REQUIREMENTS<br/>                1=CONTINUE WITH OTHER GUI WORKLOAD LOGIC</pre>{:/}
 Input parameters | {::nomarkdown}ORDOCIEN{:/}
 Code | {::nomarkdown}  N ORTIU<br> D DOCPARM^TIUSRVP1(.ORTIU,ORDOCIEN)          ; DBIA #4331<br> S ORY=+$$CHKWKL^TIUPXAP2(ORDOCIEN,ORTIU(0))  ; DBIA #4332<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Encounter/rPCE.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}