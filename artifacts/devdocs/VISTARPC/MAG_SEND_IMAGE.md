---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG SEND IMAGE<br/>
# MAG SEND IMAGE

QUEUE IMAGE TO A DESTINATION

## Properties

Property | Value
--- | ---
Label | MAGSEND
MUMPS Implementation | [MAGROI01](http://code.osehra.org/dox/Routine_MAGROI01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGIEN | LITERAL | 7 | true | IEN of the image to send
QREC | LITERAL | 3 | true | Record number of the destination queue (DOS/DICOM)
PRI | LITERAL | 4 | true | Priority
TYPE | LITERAL | 1 | true | Type of Image: 1:DOS, 2:DICOM



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}