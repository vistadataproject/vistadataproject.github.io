---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV REPORT PROVIDERS<br/>
# DENTV REPORT PROVIDERS

Returns an array containing all dental providers with 8 character Provider Ids that belong to the selected division.  If the provider has no divisions listed in file 200, then they show up under any division selection.

## Properties

Property | Value
--- | ---
Label | PROV
MUMPS Implementation | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STN | LITERAL | 10 | true | Pass if you wish to sort providers by station.
ACT | LITERAL | 10 | true | Pass this flag if you wish to screen for only active providers.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}