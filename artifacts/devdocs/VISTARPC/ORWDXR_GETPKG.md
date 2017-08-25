---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXR GETPKG<br/>
# ORWDXR GETPKG



## Properties

Property | Value
--- | ---
Label | GETPKG
MUMPS Implementation | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETPKG^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Get package for an order
Input Parameters | IFN
Code | {::nomarkdown}<pre><code> N ORDERID,PKGID<br/> Q:+IFN<1<br/> S ORDERID=+IFN,Y=""<br/> S PKGID=$P(^OR(100,ORDERID,0),U,14)<br/> S:PKGID>0 Y=$P(^DIC(9.4,PKGID,0),U,2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}