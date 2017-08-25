---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORDG ALLTREE<br/>
# ORWORDG ALLTREE

Returns the tree for all display groups.

## Properties

Property | Value
--- | ---
Label | ALLTREE
MUMPS Implementation | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLTREE^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Method Comment | Return the tree for all display groups
Code | {::nomarkdown}<pre><code> N ROOT,ILST<br/> S ILST=0,ROOT=$O(^ORD(100.98,"B","ALL",0))<br/> S ILST=ILST+1,LST(ILST)=ROOT_U_"ALL SERVICES^0^+"<br/> D LSTCHLD(ROOT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}