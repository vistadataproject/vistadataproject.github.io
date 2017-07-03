---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB FORM COPY
# DVBAB FORM COPY

 Copies a CAPRI form in file 396.17 to a new entry.  Clears key field so the form becomes editable as a new draft document. DVBAB1 = IEN in 396.17 to copyDVBAB2 = IEN in patient file If DVBAB2 is null, the copied form will be filed under the same patient it previously belonged to. If DVBAB2 has a value, it'll be copied to the new patient.

Property | Value
--- | ---
Label | COPY
Routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBAB1 | LITERAL |  | true | 
DVBAB2 | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}