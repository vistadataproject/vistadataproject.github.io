---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV REPORT PROVIDERS
# DENTV REPORT PROVIDERS

Returns an array containing all dental providers with 8 character Provider Ids that belong to the selected division.  If the provider has no divisions listed in file 200, then they show up under any division selection.

Property | Value
--- | ---
Label | PROV
Routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STN | LITERAL | 10 | true | Pass if you wish to sort providers by station.
ACT | LITERAL | 10 | true | Pass this flag if you wish to screen for only active providers.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}