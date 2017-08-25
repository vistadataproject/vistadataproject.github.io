---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT FULLSSN<br/>
# ORWPT FULLSSN

Given an SSN in the format 999999999(P), return a list of matchingpatients.

## Properties

Property | Value
--- | ---
Label | FULLSSN
MUMPS Implementation | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 15 | true | SSN in the format &#x27;999999999(P)&#x27;.



## MUMPS Method Description

Property | Value
--- | ---
Method | [FULLSSN^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Return a list of patients matching full SSN entered
Input Parameters | ID
Code | {::nomarkdown}<pre><code> N I,IEN<br/> S (I,IEN)=0<br/> F  S IEN=$O(^DPT("SSN",ID,IEN)) Q:'IEN  D<br/> . S I=I+1,LST(I)=IEN_U_$P(^DPT(IEN,0),U)_U_$$DOB^DPTLK1(IEN,2)_U_$$SSN^DPTLK1(IEN)  ; DG249</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}