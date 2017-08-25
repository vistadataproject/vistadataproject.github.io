---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPS REASON<br/>
# ORWPS REASON

Returns list of Statement/Reasons for Non-VA medication orders.

## Properties

Property | Value
--- | ---
Label | REASON
MUMPS Implementation | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [REASON^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Method Comment | Return Non-VA Med Statement/Reasons
Code | {::nomarkdown}<pre><code> N ORE<br/> D GETLST^XPAR(.ORY,"ALL","ORWD NONVA REASON","E")<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fODMedNVA.pas">Orders/fODMedNVA.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}