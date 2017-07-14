---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE UNLOCK<br/>
# TIU TEMPLATE UNLOCK

Unlocks a template.

## Properties

Property | Value
--- | ---
Label | UNLOCK
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  |  | IEN of Template to unlock.



## MUMPS Method Description

Property | Value
--- | ---
Method | [UNLOCK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Unlock Template
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> L -^TIU(8927,TIUDA,0):1<br/> S TIUY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}