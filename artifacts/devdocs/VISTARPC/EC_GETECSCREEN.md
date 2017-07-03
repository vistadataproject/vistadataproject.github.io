---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC GETECSCREEN
# EC GETECSCREEN

Returns a list active, inactive or both of Event Code Screens from EC EVENT CODE SCREENS FILE #720.3.

Property | Value
--- | ---
Label | ECSCN
Routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  |  | Input variable ECARY can contains the following elements separated by up-arrow.  STAT   - Active and/or inactive Event Code Screens           A-ctive (default), I-nactive, B-oth  LOCIEN - Location IEN (optional)  DSSIEN - DSS IEN (optional)If no parameter is passed, a status of active is assumed and all locations.If a LOCIEN is passed, then only the event codes screens with that location IEN is returned. Similarily, if a DSSIEN is passed, event code screens with for that DSS Unit is returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}