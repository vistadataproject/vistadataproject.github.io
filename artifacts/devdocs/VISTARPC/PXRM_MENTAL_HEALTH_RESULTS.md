---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM MENTAL HEALTH RESULTS
# PXRM MENTAL HEALTH RESULTS

Returns progress note text based on the results of the test.

Property | Value
--- | ---
Label | MHR
Routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEST RESULTS | LITERAL | 16 | true | Dummy field to represent results. Probably needs to pass contents of theYS array (R1,R2,DFN,DUZ,ADATE etc).
RESULT GROUP/ELEMENT | LITERAL | 16 | true | This is the pointer to the result group for the test.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}