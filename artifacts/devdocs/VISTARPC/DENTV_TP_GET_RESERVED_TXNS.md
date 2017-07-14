---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP GET RESERVED TXNS<br/>
# DENTV TP GET RESERVED TXNS

Returns all reserved transactions for a particular Dental provider andpatient.

## Properties

Property | Value
--- | ---
Label | GET
Routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL | 30 | true | Provider IEN from file 200.
DFN | LITERAL | 30 | true | Patient DFN from file 2.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}