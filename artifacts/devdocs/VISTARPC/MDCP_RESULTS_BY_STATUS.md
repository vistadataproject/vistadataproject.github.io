---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MDCP RESULTS BY STATUS
# MDCP RESULTS BY STATUS

This broker call will return a list of IENS from the CP RESULT REPORT file based on the STATUS passed in as a parameter.

Property | Value
--- | ---
Label | GTMSGIDS
Routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MDCPSTAT | LITERAL | 1 | true | This is the EXTERNAL representation of the status to be used to generate the list of IENs.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}