---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR IS NON-OR PROCEDURE<br/>
# ORWSR IS NON-OR PROCEDURE



## Properties

Property | Value
--- | ---
Label | ISNONOR
MUMPS Implementation | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CASE IEN | LITERAL | 16 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISNONOR^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Is the procedure a non-OR procedure?
Input Parameters | ORCASE
Code | {::nomarkdown}<pre><code> I '$$PATCH^XPDUTL("SR*3.0*100") S ORY=0 Q<br/> S ORY=$$NON^SROESTV(+ORCASE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}