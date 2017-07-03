---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET RAD CPT MOD
# MAG DICOM GET RAD CPT MOD

This RPC is used to return a valid entry in the CPT MODIFIER file (#81.3).

Property | Value
--- | ---
Label | CPTMOD
Routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CPTMOD | LITERAL | 30 | true | This is the name of the CPT modifier.
MAGDT | LITERAL | 30 | true | This is the date used during the lookup process for screening&#x27;active&#x27; CPT modifiers.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}