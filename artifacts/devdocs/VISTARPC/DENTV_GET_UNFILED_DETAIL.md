---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV GET UNFILED DETAIL<br/>
# DENTV GET UNFILED DETAIL

This procedure will take in a single IEN to return all data for the IEN in ^TMP("DENT",$J,N)=value.

## Properties

Property | Value
--- | ---
Label | GETUN
MUMPS Implementation | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This input should be a number coinciding with an IEN for the record you wish to retreive.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}