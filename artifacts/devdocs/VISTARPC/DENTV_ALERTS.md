---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV ALERTS
# DENTV ALERTS

This RPC gets Dental Alerts from file 220.  It also sets them into 220.

Property | Value
--- | ---
Label | GAL
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 30 | true | The patient ien to look up Dental Alerts in file 220.
ALERTS | LIST | 30 | true | List of Alert text entries to be added to the dental patient, e.g.:Sedation PremedTravel Issue



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}