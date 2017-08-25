---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWNSS QOSCH<br/>
# ORWNSS QOSCH



## Properties

Property | Value
--- | ---
Label | QOSCH
MUMPS Implementation | [ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [QOSCH^ORWNSS](http://code.osehra.org/dox/Routine_ORWNSS_source.html)
Method Comment | Validate IM QO schedule
Input Parameters | QOID
First Comment | {::nomarkdown}<pre><code>QOID: Inpt Pharmacy QO</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=""<br/> N QOSCH,SCHID,SCHVAL,RST<br/> S SCHID=$O(^ORD(101.41,"B","OR GTX SCHEDULE",0))<br/> S (QOSCH,SCHVAL)="",RST=1<br/> I '$D(^ORD(101.41,+QOID,6,"D",SCHID)) S ORY="schedule is not defined." Q<br/> S QOSCH=$O(^ORD(101.41,+QOID,6,"D",SCHID,0))<br/> I 'QOSCH S ORY="schedule is not defined." Q<br/> N IDX S IDX=0<br/> F  S IDX=$O(^ORD(101.41,+QOID,6,QOSCH,IDX)) Q:'IDX!('RST)  D<br/> . S SCHVAL=^ORD(101.41,+QOID,6,QOSCH,IDX)<br/> . I $$UP^XLFSTR(SCHVAL)="OTHER" S ORY="OTHER" Q<br/> . D VALSCH^ORWDPS33(.RST,SCHVAL,"I")<br/> . I RST=0 S ORY="This quick order contains a non-standard administration schedule." Q</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}