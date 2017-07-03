---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DDR KEY VALIDATOR
# DDR KEY VALIDATOR

Validates that values passed in do not violate key integrity.  UnderlyingDBS call is KEYVAL^DIE.

Property | Value
--- | ---
Label | KEYVAL
Routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VALUES TO VALIDATE | LIST | 512 | true | Array of data used to create FDA for KEYVAL^DIE call.  Alternating linescontain file#^IENS^field# and value associated with preceding file, record,and field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}