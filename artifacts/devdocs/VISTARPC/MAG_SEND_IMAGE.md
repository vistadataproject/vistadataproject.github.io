---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG SEND IMAGE
# MAG SEND IMAGE

QUEUE IMAGE TO A DESTINATION

Property | Value
--- | ---
Label | MAGSEND
Routine | [MAGROI01](http://code.osehra.org/dox/Routine_MAGROI01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 7 | true | IEN of the image to send
QREC | LITERAL | 3 | true | Record number of the destination queue (DOS/DICOM)
PRI | LITERAL | 4 | true | Priority
TYPE | LITERAL | 1 | true | Type of Image: 1:DOS, 2:DICOM



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}