---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX ACTIVE<br/>
# OREVNTX ACTIVE



## Properties

Property | Value
--- | ---
Label | ACTIVE
Routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ACTIVE^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Method Comment | Returns all active events [of TYPE] from #100.5
Input Parameters | TYPE
First Comment | {::nomarkdown}<pre><code>  where TYPE=string containing any of the codes from the TYPE field</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N NM,IEN,CNT,X0,X S CNT=0,TYPE=$G(TYPE)<br/> S NM="" F  S NM=$O(^ORD(100.5,"C",NM)) Q:NM=""  D<br/> . S IEN=0 F  S IEN=+$O(^ORD(100.5,"C",NM,IEN)) Q:IEN<1  D<br/> .. S X0=$G(^ORD(100.5,IEN,0)) I '$L($P(X0,U,2)) D  ;Child event<br/> ... S X=$P(X0,U,12) S:X $P(X0,U,2)=$P($G(^ORD(100.5,+X,0)),U,2)<br/> .. I $L(TYPE),TYPE'[$P(X0,U,2) Q<br/> .. Q:$O(^ORD(100.5,"DAD",IEN,0))  ;Parent event<br/> .. S CNT=CNT+1,ORY(CNT)=IEN_U_X0<br/> S:CNT ORY(0)=CNT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}