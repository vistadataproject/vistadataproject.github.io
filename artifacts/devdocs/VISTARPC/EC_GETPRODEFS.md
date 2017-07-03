---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETPRODEFS
# EC GETPRODEFS

This broker entry point returns the defaults for procedure data entry.

Property | Value
--- | ---
Label | PRDEFS
Routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | Input value, ECARY, contains the following values separated by &quot;^&quot;     ECL  - Location IEN     ECD  - DSS Unit IEN     ECC  - Category IEN     ECP  - Procedure IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}