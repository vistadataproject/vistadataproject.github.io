---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; IBARXM QUERY ONLY
# IBARXM QUERY ONLY

This RPC is used to query only the information for pharmacy co-paymentbilling that has happened for the given month/year.

Property | Value
--- | ---
Label | RQUERY
Routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBICN | LITERAL | 40 | true | This is the patient&#x27;s ICN for reference to any VistA database
IBM | LITERAL | 7 | true | This is in fileman format the month/year for which the request is being made.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}