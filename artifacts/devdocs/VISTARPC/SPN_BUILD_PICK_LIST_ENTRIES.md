---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SPN BUILD PICK LIST ENTRIES<br/>
# SPN BUILD PICK LIST ENTRIES

Supports the use of filters by providing a list of locally valid entries in the site's Vista files for Lab tests, Drug names, and Prosthetic device names.  This local "fetch" can then be used to supply locally valid records from which to choose when running the SPN FILTER call.  This RPC is necessary because each site's file entries are named and numbered differently.

## Properties

Property | Value
--- | ---
Label | COL
Routine | [SPNRPCQ](http://code.osehra.org/dox/Routine_SPNRPCQ_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL |  | true | The value for this parameter must be either CLINIC, PROS, NDC, or LAB.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}