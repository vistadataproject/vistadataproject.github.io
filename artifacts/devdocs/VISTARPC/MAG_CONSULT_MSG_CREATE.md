---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG CONSULT MSG CREATE<br/>
# MAG CONSULT MSG CREATE

Piece1=0 if failurePiece1=1 if successful  Note: you must create the mail group IMAGE TELECONSULT (RADIOLOGY) and      add members to recieve the consult notification mail message.

## Properties

Property | Value
--- | ---
Label | MSG
Routine | [MAGMAPI](http://code.osehra.org/dox/Routine_MAGMAPI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDUZ | LITERAL | 255 | true | DUZ number for sender of message
TXT | LIST | 32000 | true | Message to be sent; $END$; Recipient list



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}