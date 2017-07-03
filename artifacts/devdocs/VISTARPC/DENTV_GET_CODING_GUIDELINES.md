---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV GET CODING GUIDELINES
# DENTV GET CODING GUIDELINES

Gets the admin and coding guidelines for an ADA/CPT code.

Property | Value
--- | ---
Label | GUIDE
Routine | [DENTVRP2](http://code.osehra.org/dox/Routine_DENTVRP2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ADA | LITERAL | 10 | true | The external ADA or CPT code.ADA or CPT code
ADMG | LITERAL | 1 | true | Set to 1 to include Admin guidelines with the Coding Guidelines.  Set to 0 to send only Coding Guidelines.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}