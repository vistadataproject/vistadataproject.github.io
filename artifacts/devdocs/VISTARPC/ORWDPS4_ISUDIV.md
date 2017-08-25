---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS4 ISUDIV<br/>
# ORWDPS4 ISUDIV



## Properties

Property | Value
--- | ---
Label | ISUDIV
MUMPS Implementation | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ISUDIV^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Method Comment | True: OI of the order is for both UD and IV
Input Parameters | ORIFN
Code | {::nomarkdown}<pre><code> N OI<br/> S (OI,ORY)=0<br/> S OI=+$O(^OR(100,+$G(ORIFN),.1,"B",0)) Q:OI<1<br/> I $O(^ORD(101.43,OI,9,"B","IVM RX",0)) S ORY=1<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}