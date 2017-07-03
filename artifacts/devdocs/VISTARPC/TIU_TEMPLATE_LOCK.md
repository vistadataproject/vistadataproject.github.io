---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE LOCK
# TIU TEMPLATE LOCK

Locks Template

Property | Value
--- | ---
Label | LOCK
Routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  |  | IEN of template to lock.



### MUMPS Method Description

Property | Value
--- | ---
Method | [LOCK^TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
Method Comment | Lock Template
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> L +^TIU(8927,TIUDA,0):1<br/> S TIUY=$T</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}