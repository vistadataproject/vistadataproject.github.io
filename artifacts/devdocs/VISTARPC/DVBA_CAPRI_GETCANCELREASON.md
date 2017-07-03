---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBA CAPRI GETCANCELREASON
# DVBA CAPRI GETCANCELREASON

This returns an array of active 2507 EXAM Cancellation Reasons. New active reasons added with Patch DVB*2.7*189. Old list of cancellation reasons set to inactive.

Property | Value
--- | ---
Label | CANRSN
Routine | [DVBCANRS](http://code.osehra.org/dox/Routine_DVBCANRS_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST | LIST |  | true | THE ARRAY OF ACTIVE REASONS



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}