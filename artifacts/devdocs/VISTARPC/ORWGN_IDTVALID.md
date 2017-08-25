---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGN IDTVALID<br/>
# ORWGN IDTVALID

Returns the implementation date of the coding system passed in

## Properties

Property | Value
--- | ---
Label | IDTVALID
MUMPS Implementation | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CSYS | LITERAL | 4 | true | Abbreviated text for Coding System



## MUMPS Method Description

Property | Value
--- | ---
Method | [IDTVALID^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Method Comment | Returns Implementation date of the ICD code set
Input Parameters | CSYS
First Comment | {::nomarkdown}<pre><code>CSYS = System abbreviation for the coding system</code></pre>{:/}
Code | {::nomarkdown}<pre><code> K IDATE<br/> I $G(CSYS)="" S IDATE="-1^CODING SYSTEM PARAMETER MISSING" Q<br/> S IDATE=$$IMPDATE^LEXU(CSYS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}