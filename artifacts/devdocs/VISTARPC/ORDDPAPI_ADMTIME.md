---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDDPAPI ADMTIME<br/>
# ORDDPAPI ADMTIME



## Properties

Property | Value
--- | ---
Label | ADMTIME
Routine | [ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
Return Type | WORD PROCESSING




## MUMPS Method Description

Property | Value
--- | ---
Method | [ADMTIME^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
Code | {::nomarkdown}<pre><code> N ERR,I<br/> D GETWP^XPAR(.X,"SYS","OR ADMIN TIME HELP TEXT",,.ERR)<br/> S I=0  F  S I=$O(X(I)) Q:I'>0  S ORARRAY(I)=$G(X(I,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}