---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB SAVE FORM
# DVBAB SAVE FORM

Set DVBIEN to the internal entry number of the form Set DVBLINES to the lines to be saved Set DVBLINEN to the starting line # in the global.  This allows for formsto be sent in chunks.

Property | Value
--- | ---
Label | SAVE
Routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBIEN | LITERAL |  | true | 
DVBLINES | LIST |  | true | 
DVBLINECOUNT | LITERAL |  | true | 
DVBLINEN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}