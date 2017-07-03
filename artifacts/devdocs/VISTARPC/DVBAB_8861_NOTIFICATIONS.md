---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB 8861 NOTIFICATIONS
# DVBAB 8861 NOTIFICATIONS

This will perform MailMan notifications for Form 8861 Requests based on the status of the request.

Property | Value
--- | ---
Label | ENTER
Routine | [DVBANTFY](http://code.osehra.org/dox/Routine_DVBANTFY_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 5 | true | IEN of the request.
STAT | LITERAL | 9 | true | Status of Form 8861 request. This determines what message is sent and to whom.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}