---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORAM2 REMIND
# ORAM2 REMIND

Sets date and text for ACM Reminder (can also be set as part of a completevisit entry).

Property | Value
--- | ---
Label | REMIND
Routine | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  |  | 
DATE | LITERAL |  |  | Date the patient specific reminder that will start appearing when theANTICOAGULATOR is accessed.
RTEXT | LITERAL |  |  | Actual carrot (&#x27;^&#x27;) deliminated text (by line) of the reminder.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}