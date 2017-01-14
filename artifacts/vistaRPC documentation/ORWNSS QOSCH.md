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
 Lines | {::nomarkdown} S ORY=""<br/> N QOSCH,SCHID,SCHVAL,RST<br/> S SCHID=$O(^ORD(101.41,"B","OR GTX SCHEDULE",0))<br/> S (QOSCH,SCHVAL)="",RST=1<br/> I '$D(^ORD(101.41,+QOID,6,"D",SCHID)) S ORY="schedule is not defined." Q<br/> S QOSCH=$O(^ORD(101.41,+QOID,6,"D",SCHID,0))<br/> I 'QOSCH S ORY="schedule is not defined." Q<br/> N IDX S IDX=0<br/> F  S IDX=$O(^ORD(101.41,+QOID,6,QOSCH,IDX)) Q:'IDX!('RST)  D<br/> . S SCHVAL=^ORD(101.41,+QOID,6,QOSCH,IDX)<br/> . I $$UP^XLFSTR(SCHVAL)="OTHER" S ORY="OTHER" Q<br/> . D VALSCH^ORWDPS33(.RST,SCHVAL,"I")<br/> . I RST=0 S ORY="This quick order contains a non-standard administration schedule." Q{:/}
 Leading comment lines | {::nomarkdown}QOID: Inpt Pharmacy QO{:/}




 Generated on January 13th 2017, 7:15:28 am