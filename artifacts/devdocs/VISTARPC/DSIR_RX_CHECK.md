---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR RX CHECK
# DSIR RX CHECK

This RPC will take the data returned from ORQQPS LIST and check the FILL DATE of the PRESCRIPTION to validate the value falls between the date range specified.

Property | Value
--- | ---
Label | RXEN
Routine | [DSIROI9](http://code.osehra.org/dox/Routine_DSIROI9_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STDT | LITERAL | 7 | true | Start Date - Required (FileMan Date Format)
ENDT | LITERAL | 7 | true | End Date - Optional (FileMan Date Format - Default to current day)
DATA | LIST | 254 | true | Array as returned from RPC: ORQQPS LIST - Optional



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}