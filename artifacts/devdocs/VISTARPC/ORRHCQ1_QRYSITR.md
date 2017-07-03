---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRHCQ1 QRYSITR
# ORRHCQ1 QRYSITR

Similar to the main query iterator routine, except does not processthe patients marked as sensitive, and saves them off withoutscreening them.  Subsequent routines are called to manage the listand process those selected for reporting.

Property | Value
--- | ---
Label | QRYSITR
Routine | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITERATOR | LITERAL | 80 | true | Iterator that was returned from the last call to this routine.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}