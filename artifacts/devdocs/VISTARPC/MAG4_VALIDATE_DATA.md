---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG4 VALIDATE DATA
# MAG4 VALIDATE DATA

Validates the Image Data Array

Property | Value
--- | ---
Label | VAL
Routine | [MAGGSIV](http://code.osehra.org/dox/Routine_MAGGSIV_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGARRAY | LIST |  | true | Each item in the Array is an &#x27;^&#x27; delimited piece of information.in the format Field^Value  OR  ActionCode^value
ALL | LITERAL | 1 | true | All &#x3D; 1 and All items in MAGARRAY will be validated.All &#x3D; 0 and Validation stops after first item in MAGARRAY fails.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}