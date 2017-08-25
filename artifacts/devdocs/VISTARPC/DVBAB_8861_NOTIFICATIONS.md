---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB 8861 NOTIFICATIONS<br/>
# DVBAB 8861 NOTIFICATIONS

This will perform MailMan notifications for Form 8861 Requests based on the status of the request.

## Properties

Property | Value
--- | ---
Label | ENTER
MUMPS Implementation | [DVBANTFY](http://code.osehra.org/dox/Routine_DVBANTFY_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 5 | true | IEN of the request.
STAT | LITERAL | 9 | true | Status of Form 8861 request. This determines what message is sent and to whom.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}