---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPT SELCHK<br/>
# ORWPT SELCHK

Returns a 1 if the patient record is flagged as senstive, otherwisereturns 0.

## Properties

Property | Value
--- | ---
Label | SELCHK
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SELCHK^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Check for sensitive pt
Input Parameters | DFN
First Comment | {::nomarkdown}<pre><code> SENSITIVE</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S REC=$$EN1^ORQPT2(DFN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}