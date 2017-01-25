---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ACTIVE^[OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
 Method comment | Returns all active events [of TYPE] from #100.5
 Input parameters | {::nomarkdown}TYPE{:/}
 First comment | {::nomarkdown}<pre>  where TYPE=string containing any of the codes from the TYPE field</pre>{:/}
 Code | {::nomarkdown}  N NM,IEN,CNT,X0,X S CNT=0,TYPE=$G(TYPE)<br> S NM="" F  S NM=$O(^ORD(100.5,"C",NM)) Q:NM=""  D<br> . S IEN=0 F  S IEN=+$O(^ORD(100.5,"C",NM,IEN)) Q:IEN<1  D<br> .. S X0=$G(^ORD(100.5,IEN,0)) I '$L($P(X0,U,2)) D  ;Child event<br> ... S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br> .. I $L(TYPE),TYPE'[$P(X0,U,2) Q<br> .. Q:$O(^ORD(100.5,"DAD",IEN,0))  ;Parent event<br> .. S CNT=CNT+1,ORY(CNT)=IEN_U_X0<br> S:CNT ORY(0)=CNT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}