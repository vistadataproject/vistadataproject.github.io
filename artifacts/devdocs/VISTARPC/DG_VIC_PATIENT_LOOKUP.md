---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DG VIC PATIENT LOOKUP
# DG VIC PATIENT LOOKUP

This RPC will allow lookup of a patient with the input from a VIC card orDOD CAC card. The VIC card can be an old VIC card or the newer VIC 4.0card.  The entire card's input should be provided.  If the patient isknown locally the patient's DFN will be returned.

Property | Value
--- | ---
Label | RPCVIC
Routine | [DPTLK](http://code.osehra.org/dox/Routine_DPTLK_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DPTX | LITERAL | 255 | true | This should be the entire input from either the Magnetic Strip or theBarcode.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}