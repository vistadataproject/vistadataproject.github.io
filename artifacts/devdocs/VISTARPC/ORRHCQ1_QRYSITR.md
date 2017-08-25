---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRHCQ1 QRYSITR<br/>
# ORRHCQ1 QRYSITR

Similar to the main query iterator routine, except does not processthe patients marked as sensitive, and saves them off withoutscreening them.  Subsequent routines are called to manage the listand process those selected for reporting.

## Properties

Property | Value
--- | ---
Label | QRYSITR
MUMPS Implementation | [ORRHCQ1](http://code.osehra.org/dox/Routine_ORRHCQ1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITERATOR | LITERAL | 80 | true | Iterator that was returned from the last call to this routine.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}