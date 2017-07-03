---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU ID CAN RECEIVE
# TIU ID CAN RECEIVE

This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?).

Property | Value
--- | ---
Label | CANRCV
Routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the IEN of the prospective ID Parent document in the TIU Documentfile.



### MUMPS Method Description

Property | Value
--- | ---
Method | [CANRCV^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
Method Comment | Can this document receive an ID Child?
Input Parameters | TIUDA
Code | {::nomarkdown}<pre><code> S TIUY=$$CANDO^TIULP(TIUDA,"ATTACH ID ENTRY")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}