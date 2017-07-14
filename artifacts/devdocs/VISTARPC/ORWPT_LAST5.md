---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT LAST5<br/>
# ORWPT LAST5

Returns a list of patients matching the string of Last Name Initial_Last 4SSN (Initial/Last 4 look-up to PATIENT file).

## Properties

Property | Value
--- | ---
Label | LAST5
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LAST5^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return a list of patients matching A9999 identifiers
Input Parameters | ID
Code | {::nomarkdown}<pre><code> N I,IEN,XREF<br/> S (I,IEN)=0,XREF=$S($L(ID)=5:"BS5",1:"BS")<br/> F  S IEN=$O(^DPT(XREF,ID,IEN)) Q:'IEN  D<br/> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}