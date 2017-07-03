---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXR01 ISSPLY
# ORWDXR01 ISSPLY



Property | Value
--- | ---
Label | ISSPLY
Routine | [ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISSPLY^ORWDXR01](http://code.osehra.org/dox/Routine_ORWDXR01_source.html)
Input Parameters | DLGID, QODLG
First Comment | {::nomarkdown}<pre><code> ORY=1: is "PSO SUPPLY" dialog</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=""<br/> Q:'$D(^ORD(101.41,DLGID,0))<br/> I 'QODLG,($P(^ORD(101.41,DLGID,0),U)="PSO SUPPLY") S ORY=1<br/> I QODLG D<br/> . N SPLYDG S SPLYDG=$O(^ORD(100.98,"B","SPLY",0))<br/> . I $P(^ORD(101.41,DLGID,0),U,5)=SPLYDG S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}