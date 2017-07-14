---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXC DISPLAY<br/>
# ORWDXC DISPLAY

Return list of Order Checks for a FillerID (namespace).

## Properties

Property | Value
--- | ---
Label | DISPLAY
Routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DISPLAY^ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
Method Comment | Return list of Order Checks for a FillerID (namespace)
Input Parameters | DFN, FID
Code | {::nomarkdown}<pre><code> N I,ORX,ORY<br/> S ORX=1,ORX(1)="/"_FID<br/> D EN^ORKCHK(.ORY,DFN,.ORX,"DISPLAY")<br/> S I=0 F  S I=$O(ORY(I)) Q:I'>0  S LST(I)=$P(ORY(I),U,4)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}