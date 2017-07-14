---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU IS THIS A SURGERY?<br/>
# TIU IS THIS A SURGERY?

BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.).

## Properties

Property | Value
--- | ---
Label | ISSURG
Routine | [TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL |  |  | This is the record number in file 8925.1 for the title selected.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISSURG^TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
Method Comment | Boolean RPC to evaluate whether TITLE is a SURGERY REPORT
Input Parameters | TITLE
Code | {::nomarkdown}<pre><code> N TIUCLASS,TIUI S TIUY=0<br/> F TIUI="SURGICAL REPORTS","PROCEDURE REPORTS (NON-O.R.)" D  Q:TIUY>0<br/> . S TIUCLASS=+$$CLASS(TIUI)<br/> . I +TIUCLASS'>0 Q<br/> . S TIUY=+$$ISA^TIULX(TITLE,TIUCLASS)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}