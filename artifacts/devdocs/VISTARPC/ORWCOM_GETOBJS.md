---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWCOM GETOBJS
# ORWCOM GETOBJS

Returns a list of all active COM objects

Property | Value
--- | ---
Label | GETOBJS
Routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETOBJS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Method Comment | Returns list of all active COM objects
Code | {::nomarkdown}<pre><code> N I,J,IDX,NODE<br/> S I="",IDX=0<br/> F  S I=$O(^ORD(101.15,"B",I)) Q:I=""  D<br/> .S J=$O(^ORD(101.15,"B",I,0)) Q:'+J<br/> .S NODE=$G(^ORD(101.15,J,0))<br/> .I $P(NODE,U,3)'="I" D<br/> ..S IDX=IDX+1<br/> ..S ORY(IDX)=J_U_NODE<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas">rEventHooks.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}