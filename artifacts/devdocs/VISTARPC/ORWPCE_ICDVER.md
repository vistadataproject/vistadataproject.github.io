---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE ICDVER
# ORWPCE ICDVER

Returns the ICD coding system version to be used for diagnosis look-up, asof a particular date of interest.

Property | Value
--- | ---
Label | ICDVER
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORDT | LITERAL |  | true | This is the date of interest (e.g., encounter date - time optional) against which the implementation date for ICD-10-CM will be compared.



### MUMPS Method Description

Property | Value
--- | ---
Method | [ICDVER^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | Get ICD codeset version (i.e., ICD-9-CM or ICD-10-CM)
Input Parameters | ORDT
Code | {::nomarkdown}<pre><code> S ORDT=+$G(ORDT) S:'ORDT ORDT=DT<br/> S RESULT="ICD^ICD-9-CM"<br/> G:'$L($T(IMPDATE^LEXU)) ICDVERX<br/> I +$$IMPDATE^LEXU("10D")'>ORDT S RESULT="10D^ICD-10-CM"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}