---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX1 DFLTDLG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DFLTDLG{:/}
 tag | {::nomarkdown}DFLTDLG{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DFLTDLG^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return event default dialog IEN
 Input parameters | {::nomarkdown}EVTID{:/}
 Code | ```  S ORY=0
 S:$P($G(^ORD(100.5,+EVTID,0)),U,12) EVTID=$P($G(^ORD(100.5,+EVTID,0)),U,12)
 Q:'$D(^ORD(100.5,+EVTID,0))
 S ORY=$P(^ORD(100.5,+EVTID,0),U,4)```




 Generated on January 14th 2017, 7:26:35 am