---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX LIST<br/>
# OREVNTX LIST



## Properties

Property | Value
--- | ---
Label | LIST
Routine | [OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LIST^OREVNTX](http://code.osehra.org/dox/Routine_OREVNTX_source.html)
Method Comment | Returns all processed events for patient DFN as
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code>    ORY(#) = PatEvtIEN ^ Display Text ^ EvtDateTime<br/>             in reverse chronological order</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N IDT,DA,CNT,X0,X1,EVT,DC,X<br/> S DFN=+$G(DFN),(IDT,CNT)=0<br/> F  S IDT=$O(^ORE(100.2,"AC",DFN,IDT)) Q:IDT<1  D<br/> . S DA=0 F  S DA=+$O(^ORE(100.2,"AC",DFN,IDT,DA)) Q:DA<1  D<br/> .. S X0=$G(^ORE(100.2,DA,0)),X1=$G(^(1)) Q:$P(X1,U,5)  ;has parent<br/> .. S EVT=+$P(X0,U,2),DC=+$P(X1,U,3)<br/> .. I '$P(X0,U,4),'$O(^ORE(100.2,DA,2,0)),'$O(^ORE(100.2,DA,3,0)),'$D(^OR(100,"AEVNT",DFN_";DPT(",DA)) Q  ;no orders<br/> .. S I=+$O(^ORE(100.2,DA,10,"B"),-1),X=$P($G(^(I,0)),U,2) I X="LP"!(X="CA") Q  ;lapsed or cancelled<br/> .. ;Q if not current admission?<br/> .. S X=$S(EVT:$P($G(^ORD(100.5,EVT,0)),U,8),DC:$P($G(^ORD(100.6,DC,0)),U,5),1:"UNSPECIFIED EVENT")<br/> .. S X=$$LOWER^VALM1(X),CNT=CNT+1,ORY(CNT)=DA_U_X_U_$P(X1,U)<br/> S:CNT ORY(0)=CNT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}