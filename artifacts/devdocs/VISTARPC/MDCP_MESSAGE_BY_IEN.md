---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MDCP MESSAGE BY IEN
# MDCP MESSAGE BY IEN

This RPC returns an HL7 message based on its IEN.

Property | Value
--- | ---
Label | GETMSG
Routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MDCPMSG | LITERAL |  | true | This is the ien of the message in file 772.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}