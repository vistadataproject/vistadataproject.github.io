---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU USER INACTIVE?<br/>
# TIU USER INACTIVE?

RPC evaluates user's DIUSER status and termination status when selected.Returns 0 if active        1 if inactive

## Properties

Property | Value
--- | ---
Label | USRINACT
MUMPS Implementation | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUUSR | LITERAL |  | true | This is the IEN of the user in the NEW PERSON file (#200).



## MUMPS Method Description

Property | Value
--- | ---
Method | [USRINACT^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Is user inactive?
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> S TIUY=+$$GET1^DIQ(200,TIUDA_",",7,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}