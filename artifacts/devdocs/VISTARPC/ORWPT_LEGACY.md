---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT LEGACY<br/>
# ORWPT LEGACY

Returns message if patient has data on a legacy system.

## Properties

Property | Value
--- | ---
Label | LEGACY
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LEGACY^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | return message if data on the legacy system
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> ORLST(0)=1 if data,  ORLST(n)=display message if data</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORLST(0)=0<br/> I $L($T(HXDATA^A7RDPAGU)) D<br/> . D HXDATA^A7RDPAGU(.ORLST,DFN)<br/> . I $O(ORLST(0)) S ORLST(0)=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}