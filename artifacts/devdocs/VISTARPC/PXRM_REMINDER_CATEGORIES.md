---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM REMINDER CATEGORIES
# PXRM REMINDER CATEGORIES

Returns list of all CPRS lookup categories and associated reminders

Property | Value
--- | ---
Label | CATEGORY
Routine | [PXRMRPCA](http://code.osehra.org/dox/Routine_PXRMRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient Identifier from Patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 | true | Patient&#x27;s HOSPITAL LOCATION [#44]. May be null.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}