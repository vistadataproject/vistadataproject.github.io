---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE DIAG<br/>
# ORWPCE DIAG

Returns a list of diagnosis codes for a clinic location.

## Properties

Property | Value
--- | ---
Label | DIAG
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DIAG^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of diagnoses for clinic
Input Parameters | CLINIC, ORDATE
Code | {::nomarkdown}<pre><code> N ORI S ORI=0<br/> S:'+$G(ORDATE) ORDATE=DT<br/> D GETLST^IBDF18A(CLINIC,"DG SELECT ICD DIAGNOSIS CODES","LST",,,,ORDATE)<br/> F  S ORI=$O(LST(ORI)) Q:+ORI'>0  D<br/> . I $P(LST(ORI),U)]"" S $P(LST(ORI),U,10)=$$VLTD^ICDEX($$CODEBA^ICDEX($P(LST(ORI),U),80),DT)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBALocalDiagnoses.pas">BA/fBALocalDiagnoses.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBAOptionsDiagnoses.pas">BA/fBAOptionsDiagnoses.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}