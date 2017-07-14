---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA PNDHLD<br/>
# ORDEA PNDHLD



## Properties

Property | Value
--- | ---
Label | PNDHLD
Routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PNDHLD^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | return 1 if the order is pending a HOLD, 0 otherwise
Input Parameters | ORID
Code | {::nomarkdown}<pre><code> S ORY=0<br/> N ORLSTACT S ORLSTACT=$O(^OR(100,+ORID,8,"A"),-1)<br/> I $P(^OR(100,+ORID,8,ORLSTACT,0),U,2)="HD" S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}