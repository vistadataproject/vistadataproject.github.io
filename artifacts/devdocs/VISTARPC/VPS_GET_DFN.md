---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET DFN
# VPS GET DFN

Called by the Vetlink Kiosk system.  Patient SSN is the input value.  Returns patient DFN associated with SSN on record.

Property | Value
--- | ---
Label | GETDFN
Routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSSN | LITERAL | 12 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}