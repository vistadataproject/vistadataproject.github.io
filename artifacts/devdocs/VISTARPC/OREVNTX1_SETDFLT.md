---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OREVNTX1 SETDFLT<br/>
# OREVNTX1 SETDFLT



## Properties

Property | Value
--- | ---
Label | SETDFLT
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SETDFLT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Set personal default event
Input Parameters | EVT
Code | {::nomarkdown}<pre><code> N ERR,VAL S ERR=""<br/> Q:'$D(^ORD(100.5,EVT,0))<br/> S VAL=$P(^ORD(100.5,EVT,0),U)<br/> D EN^XPAR(DUZ_";VA(200,","OREVNT DEFAULT",1,VAL,ERR)<br/> S ORY=ERR</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}