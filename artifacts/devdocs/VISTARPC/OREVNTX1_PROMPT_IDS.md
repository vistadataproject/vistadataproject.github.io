---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 PROMPT IDS<br/>
# OREVNTX1 PROMPT IDS



## Properties

Property | Value
--- | ---
Label | PRTIDS
MUMPS Implementation | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PRTIDS^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Return some prompt ids from #101.41
Input Parameters | IDS
First Comment | {::nomarkdown}<pre><code> treating specialty Id^attending provider id</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N IDX,ORTS,ORATT<br/> S (ORY,ORTS,ORATT)=""<br/> S IDX=$O(^ORD(101.41,"B","OR GTX TREATING SPECIALTY",0))<br/> S:$D(^ORD(101.41,IDX,1)) ORTS=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br/> S IDX=$O(^ORD(101.41,"B","OR GTX PROVIDER",0))<br/> S:$D(^ORD(101.41,IDX,1)) ORATT=$P($G(^ORD(101.41,IDX,1)),U,2,3)<br/> S ORY=ORTS_"~"_ORATT</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}