---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV GET UNFILED DETAIL
# DENTV GET UNFILED DETAIL

This procedure will take in a single IEN to return all data for the IEN in ^TMP("DENT",$J,N)=value.

Property | Value
--- | ---
Label | GETUN
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This input should be a number coinciding with an IEN for the record you wish to retreive.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}