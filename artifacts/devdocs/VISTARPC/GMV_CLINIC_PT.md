---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV CLINIC PT
# GMV CLINIC PT

This procedure lists patients who have an appointment for a selectedclinic and a given period of time.

Property | Value
--- | ---
Label | CLINPTS
Routine | [GMVCLIN](http://code.osehra.org/dox/Routine_GMVCLIN_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLIN | LITERAL | 30 | true | CLIN contains the name of the selected clinic from the Hospital Locationfile (#44).
BDATE | LITERAL | 30 | true | BDATE contains TODAY, TOMORROW, YESTERDAY, PAST WEEK or PAST MONTH.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}