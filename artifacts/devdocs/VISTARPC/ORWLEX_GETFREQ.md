---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWLEX GETFREQ<br/>
# ORWLEX GETFREQ

This call wraps the Lexicon API $$FREQ^LEXU to satisfy the requirements of the ICD-10-CM diagnosis search.

## Properties

Property | Value
--- | ---
Label | GETFREQ
Routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORSRCHTX | LITERAL |  | true | This is the search text/term.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GETFREQ^ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
Method Comment | Call $$FREQ^LEXU to fetch the frequency of use of keywords contained in search string
Input Parameters | ORSRCHTX
Code | {::nomarkdown}<pre><code> S ORY=$$FREQ^LEXU(ORSRCHTX) ; ICR #5679<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}