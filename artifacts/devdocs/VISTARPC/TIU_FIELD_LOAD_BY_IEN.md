---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU FIELD LOAD BY IEN
# TIU FIELD LOAD BY IEN

Returns a single Template Field object.

Property | Value
--- | ---
Label | LOADIEN
Routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLDIEN | LITERAL |  | true | Template Field IEN



### MUMPS Method Description

Property | Value
--- | ---
Method | [LOADIEN^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Method Comment | Load Template Field by IEN
Input Parameters | FLDIEN
Code | {::nomarkdown}<pre><code> D GETFLD(.TIUY,"",0,.FLDIEN)<br/> I +FLDIEN S TIUY(.05)=FLDIEN</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}