---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; OREVNTX ACTIVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ACTIVE^[OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 Method comment | Returns all active events [of TYPE] from #100.5
 First comment | {::nomarkdown}where TYPE=string containing any of the codes from the TYPE field{:/}
 Input parameters | {::nomarkdown}TYPE{:/}
 Code | ```  N NM,IEN,CNT,X0,X S CNT=0,TYPE=$G(TYPE)
 S NM="" F  S NM=$O(^ORD(100.5,"C",NM)) Q:NM=""  D
 . S IEN=0 F  S IEN=+$O(^ORD(100.5,"C",NM,IEN)) Q:IEN<1  D
 .. S X0=$G(^ORD(100.5,IEN,0)) I '$L($P(X0,U,2)) D  ;Child event
 ... S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)
 .. I $L(TYPE),TYPE'[$P(X0,U,2) Q
 .. Q:$O(^ORD(100.5,"DAD",IEN,0))  ;Parent event
 .. S CNT=CNT+1,ORY(CNT)=IEN_U_X0
 S:CNT ORY(0)=CNT```




 Generated on January 14th 2017, 7:26:35 am