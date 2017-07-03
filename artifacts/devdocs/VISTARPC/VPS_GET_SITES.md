---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET SITES
# VPS GET SITES

Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Return value is a list of treating facilities associated with the patient given the SSN.

Property | Value
--- | ---
Label | GETSITES
Routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSSN | LITERAL | 12 | true | Patient SSN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}