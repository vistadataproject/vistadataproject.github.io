---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGTP GET CPRS REPORT
# MAGTP GET CPRS REPORT

Get lab info for a case (ex.: SP 12 2). The layout is similar to the one in CPRS.The original code has been used by RPC call ORWRP REPORT TEXT.

Property | Value
--- | ---
Label | GETREP
Routine | [MAGTP007](http://code.osehra.org/dox/Routine_MAGTP007_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LRSS | LITERAL | 2 | true | AP Section
YEAR | LITERAL | 4 | true | Year
LRAN | LITERAL | 5 | true | Accession Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}