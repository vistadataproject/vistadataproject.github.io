---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV FEE BASIS LIST
# DENTV FEE BASIS LIST

This RPC gets a list of DENTAL FEE BASIS EXTRACT (#228.5) records fora specified patient.  The input is a single value, patient id (DFN).

Property | Value
--- | ---
Label | LIST
Routine | [DENTVFB](http://code.osehra.org/dox/Routine_DENTVFB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 30 | true | The input value is a single patient id (DFN).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}