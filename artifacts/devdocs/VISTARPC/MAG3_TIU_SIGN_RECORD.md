---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG3 TIU SIGN RECORD
# MAG3 TIU SIGN RECORD

Calls TIU API : SIGN^TIUSRVPIf the call succeeds the Note will be changed to 'completed'If the call fails, the Note status will not be changed.

Property | Value
--- | ---
Label | SIGN
Routine | [MAGGNTI1](http://code.osehra.org/dox/Routine_MAGGNTI1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 60 | true | Patient DFN
MAGTIUDA | LITERAL | 60 | true | The TIU Document IEN from File ^TIU(8925
MAGES | LITERAL | 60 | true | The users encrypted Electronic Signature.
MAGESBY | LITERAL | 30 | true | The DUZ of the Signer (defaults to Partition Variable: DUZ)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}