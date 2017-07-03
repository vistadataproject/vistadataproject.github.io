---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; YTAPI LISTALL
# YTAPI LISTALL

This API returns all psychological test administrations for a specified patient during a specified time period. No scoring is returned. ASI s and optionally GAF s are also returned. Input:                 DFN : patient internal identifier                BEGIN: inclusive date in %DT acceptable format (11/11/2011) to begin search [optional]                END: inclusive date in %DT acceptable format (11/11/2011) to end search  [optional]                CODE: YS("CODE")="GAF" set to optionally return GAF administrations  Output:YSDATA(1)=[DATA]YSDATA(x)= internal administration date^external administration date^test code  Data is sorted in order of most recent administration to the oldest administration. If no administrations are found YSDATA(2) will not be returned.

Property | Value
--- | ---
Label | LISTALL
Routine | [YTAPI](http://code.osehra.org/dox/Routine_YTAPI_source.html)
Return Type | ARRAY




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}