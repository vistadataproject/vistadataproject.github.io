---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST REGISTRY DRUGS
# ROR LIST REGISTRY DRUGS

The ROR LIST REGISTRY DRUGS RPC returns a list of drugs from file 799.5based on input of a beginning NAME value

Property | Value
--- | ---
Label | RORGEN
Routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 | true | The partial match restriction
FLAGS | LITERAL | 1 | true | 1 equals HEPC Registry 2 equals HIV Registry
NUMBER | LITERAL | 10 | true | DEPRECATED
FROM | LITERAL | 10 | true | DEPRECATED



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}