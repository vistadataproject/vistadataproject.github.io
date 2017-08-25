---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFC REMOTE PDAT<br/>
# VAFC REMOTE PDAT

This Remote Procedure Call will return the text Patient MPI/PD Data Inquiry report to a remote site.

## Properties

Property | Value
--- | ---
Label | PDAT
MUMPS Implementation | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 16 | true | This should be the ICN without the &#x27;V&#x27; or the checksum.
SSN | LITERAL | 9 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}