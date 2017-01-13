---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX ACTIVE 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns all active events [of TYPE] from #100.5
 Input Parameters | {::nomarkdown}TYPE{:/}
 Lines | ```{::nomarkdown} N NM,IEN,CNT,X0,X S CNT=0,TYPE=$G(TYPE)<br/> S NM="" F  S NM=$O(^ORD(100.5,"C",NM)) Q:NM=""  D<br/> . S IEN=0 F  S IEN=+$O(^ORD(100.5,"C",NM,IEN)) Q:IEN<1  D<br/> .. S X0=$G(^ORD(100.5,IEN,0)) I '$L($P(X0,U,2)) D  ;Child event<br/> ... S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br/> .. I $L(TYPE),TYPE'[$P(X0,U,2) Q<br/> .. Q:$O(^ORD(100.5,"DAD",IEN,0))  ;Parent event<br/> .. S CNT=CNT+1,ORY(CNT)=IEN_U_X0<br/> S:CNT ORY(0)=CNT```{:/}
 Leading comment lines | {::nomarkdown}where TYPE=string containing any of the codes from the TYPE field{:/}




 Generated on January 13th 2017, 7:11:27 am