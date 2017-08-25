---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU CAN CHANGE COSIGNER?<br/>
# TIU CAN CHANGE COSIGNER?

BOOLEAN RPC to evaluate user's privilege to modify the expected cosigner, given the current status of the document, and the user's role with respect to it.

## Properties

Property | Value
--- | ---
Label | CANCHCOS
MUMPS Implementation | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the document in the TIU DOCUMENT FILE (#8925).



## MUMPS Method Description

Property | Value
--- | ---
Method | [CANCHCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Evaluate/return whether user can change cosigner
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> S TIUY=$$MAYCHNG^TIURA1(TIUDA)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}