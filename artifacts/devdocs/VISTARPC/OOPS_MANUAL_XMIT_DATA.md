---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS MANUAL XMIT DATA
# OOPS MANUAL XMIT DATA

This broker call is the front end for calling the routine to transmitdata to the AAC for DOL (CA1 and CA2s) or to transmit data to the National Database (NDB).

Property | Value
--- | ---
Label | ENT
Routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter contains the date that the claims were originallytransmitted and should be re-transmitted for, the queue date and time, andwhether the data to be transmitted should be DOL or NDB data.  The format is:TRANSDT^QUEUEDT@TIME^DOL (or NDB).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}