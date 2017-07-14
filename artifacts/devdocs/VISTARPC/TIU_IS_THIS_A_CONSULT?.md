---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU IS THIS A CONSULT?<br/>
# TIU IS THIS A CONSULT?

BOOLEAN RPC which evaluates whether the title indicated is that of aconsult.

## Properties

Property | Value
--- | ---
Label | ISCNSLT
Routine | [TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL |  |  | This is the record number in file 8925.1 for the title selected.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISCNSLT^TIUCNSLT](http://code.osehra.org/dox/Routine_TIUCNSLT_source.html)
Method Comment | Boolean RPC to evaluate whether TITLE is a CONSULT
Input Parameters | TITLE
Code | {::nomarkdown}<pre><code> N TIUCLASS<br/> S TIUCLASS=+$$CLASS<br/> I +TIUCLASS'>0 S TIUY=0 Q<br/> S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}