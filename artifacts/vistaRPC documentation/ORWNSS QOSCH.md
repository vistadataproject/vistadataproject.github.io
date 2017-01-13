---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWNSS QOSCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWNSS QOSCH{:/}
 tag | {::nomarkdown}QOSCH{:/}
 routine | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Validate IM QO schedule
 Input Parameters | {::nomarkdown}QOID{:/}
 Lines | ```
 S ORY=""
 N QOSCH,SCHID,SCHVAL,RST
 S SCHID=$O(^ORD(101.41,"B","OR GTX SCHEDULE",0))
 S (QOSCH,SCHVAL)="",RST=1
 I '$D(^ORD(101.41,+QOID,6,"D",SCHID)) S ORY="schedule is not defined." Q
 S QOSCH=$O(^ORD(101.41,+QOID,6,"D",SCHID,0))
 I 'QOSCH S ORY="schedule is not defined." Q
 N IDX S IDX=0
 F  S IDX=$O(^ORD(101.41,+QOID,6,QOSCH,IDX)) Q:'IDX!('RST)  D
 . S SCHVAL=^ORD(101.41,+QOID,6,QOSCH,IDX)
 . I $$UP^XLFSTR(SCHVAL)="OTHER" S ORY="OTHER" Q
 . D VALSCH^ORWDPS33(.RST,SCHVAL,"I")
 . I RST=0 S ORY="This quick order contains a non-standard administration schedule." Q```
 Leading comment lines | {::nomarkdown}QOID: Inpt Pharmacy QO{:/}




 Generated on January 13th 2017, 6:55:29 am