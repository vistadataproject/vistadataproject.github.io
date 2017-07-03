---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP CLEAN SLATE
# DENTV TP CLEAN SLATE

This will process a clean slate on DPAT passed in. The RPC processes both clean slate, and undo clean slate. You must pass a flag to determine which process you want completed. ACT=1 means you want to process a clean slate, ACT=-1 means you want to undo a clean slate. The clean slate can only be processed if there is no unfiled data for the patient. A clean slate undo can only be done if there no newer filed transactions for the patient.

Property | Value
--- | ---
Label | CLNSLT
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DPAT | LITERAL |  | true | 
ACT | LITERAL |  | true | ACT is used to tell the RPC which process to run:ACT&#x3D;1 means you want to process a clean slate.ACT&#x3D;-1 means you want to undo a clean slate.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}