---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORDG MAPSEQ<br/>
# ORWORDG MAPSEQ



## Properties

Property | Value
--- | ---
Label | MAPSEQ
Routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [MAPSEQ^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Method Comment | similar to GRPSEQB, for 32bit
Code | {::nomarkdown}<pre><code> N C,I,X<br/> D GRPSEQ(.X)<br/> S C=0,I=0<br/> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_"="_X(I)_U_$P(^ORD(100.98,I,0),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}