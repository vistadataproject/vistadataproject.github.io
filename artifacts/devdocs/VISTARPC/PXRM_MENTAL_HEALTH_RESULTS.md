---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PXRM MENTAL HEALTH RESULTS<br/>
# PXRM MENTAL HEALTH RESULTS

Returns progress note text based on the results of the test.

## Properties

Property | Value
--- | ---
Label | MHR
Routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TEST RESULTS | LITERAL | 16 | true | Dummy field to represent results. Probably needs to pass contents of theYS array (R1,R2,DFN,DUZ,ADATE etc).
RESULT GROUP/ELEMENT | LITERAL | 16 | true | This is the pointer to the result group for the test.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}