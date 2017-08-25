---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV DELETE UNFILED DATA<br/>
# DENTV DELETE UNFILED DATA

Input takes in an array of IENS for deletion. Upon completion, the RPC will return an array of IENS with a message. 0^File record deleted if successful, or -1^Error deleting record if unsuccessful.

## Properties

Property | Value
--- | ---
Label | DELU
MUMPS Implementation | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | This is an array of IEN records to be deleted from file 228.7



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}