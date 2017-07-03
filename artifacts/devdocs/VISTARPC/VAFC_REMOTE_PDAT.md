---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFC REMOTE PDAT
# VAFC REMOTE PDAT

This Remote Procedure Call will return the text Patient MPI/PD Data Inquiry report to a remote site.

Property | Value
--- | ---
Label | PDAT
Routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 16 | true | This should be the ICN without the &#x27;V&#x27; or the checksum.
SSN | LITERAL | 9 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}