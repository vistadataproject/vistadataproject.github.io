---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DGRR PATIENT LOOKUP SEARCH
# DGRR PATIENT LOOKUP SEARCH

This rpc is set to return an xml document via VistaLink that containsthe display data for a gui patient lookup.   

Property | Value
--- | ---
Label | SEARCH
Routine | [DGRRLU](http://code.osehra.org/dox/Routine_DGRRLU_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 999 | true | Input PARAM(&quot;SEARCH TYPE&quot;) &#x3D; type of search requestedInput PARAM(&quot;SEARCH VALUE&quot;) &#x3D; value to search onInput PARAM(&quot;JOB&quot;) &#x3D; a unique job # used to check for cancelled jobs



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}