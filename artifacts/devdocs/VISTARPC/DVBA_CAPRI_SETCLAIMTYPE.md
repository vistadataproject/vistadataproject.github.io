---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBA CAPRI SETCLAIMTYPE
# DVBA CAPRI SETCLAIMTYPE

This RPC returns the status of Claim Types passed to be set to a valid 2507 Request

Property | Value
--- | ---
Label | SETCT
Routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REQIEN | LITERAL |  | true | This is the valid 2507 Request IEN
ARRAYCT | LIST |  | true | This is the list of Claim Types to be set to the valid 2507 Request



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}