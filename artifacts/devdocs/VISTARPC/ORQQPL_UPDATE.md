---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPL UPDATE
# ORQQPL UPDATE

Updates problem record

Property | Value
--- | ---
Label | UPDATE
Routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UPDARRAY | LIST |  |  | UPDATE ARRAY



### MUMPS Method Description

Property | Value
--- | ---
Method | [UPDATE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
Method Comment | UPDATE A PROBLEM RECORD
Input Parameters | UPDARRAY
First Comment | {::nomarkdown}<pre><code> Does essentially same job as EDSAVE above, however does not handle edits to comments<br/> or addition of multiple comments.<br/> Use initially just for status updates.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N S,GMPL,GMPORIG,ORARRAY ; last 2 vars created in nested call<br/> S S=""<br/> F  S S=$O(UPDARRAY(S)) Q:S=""  D<br/> . S @UPDARRAY(S)<br/> D UPDATE^GMPLUTL(.ORARRAY,.ORRETURN)<br/> S ORRETURN(1)=ORRETURN(0) ; error text<br/> S ORRETURN(0)=ORRETURN ; gmpdfn<br/> I ORRETURN(0)=""  S ORRETURN=1 ; insurance ? need</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}