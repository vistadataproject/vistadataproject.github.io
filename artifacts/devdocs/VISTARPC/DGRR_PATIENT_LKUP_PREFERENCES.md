---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DGRR PATIENT LKUP PREFERENCES
# DGRR PATIENT LKUP PREFERENCES

This remote procedure call returns an xml document containing the divisionor package preferences.  

Property | Value
--- | ---
Label | START
Routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST |  | true | PARAM(&quot;stationNumber&quot;) &#x3D; station number for institution.  If not defined, RPC will return the package default values.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}