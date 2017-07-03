---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR GET ADDRESSES
# DSIR GET ADDRESSES

This RPC gets all address know by the RELEASE OF INFORMATION - DSSI for a given patient or requestor.

Property | Value
--- | ---
Label | GTADDLST
Routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT REQUESTOR | LITERAL |  | true | RQSTR - Pointer to Patient or Requestor  examples:    &quot;3;DSIR(19620.96,&quot;    &quot;41;DSIR(19620.12,&quot;    &quot;441;DPT(&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}