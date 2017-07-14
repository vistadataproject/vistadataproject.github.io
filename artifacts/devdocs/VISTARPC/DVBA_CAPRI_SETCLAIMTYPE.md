---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA CAPRI SETCLAIMTYPE<br/>
# DVBA CAPRI SETCLAIMTYPE

This RPC returns the status of Claim Types passed to be set to a valid 2507 Request

## Properties

Property | Value
--- | ---
Label | SETCT
Routine | [DVBACPR1](http://code.osehra.org/dox/Routine_DVBACPR1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REQIEN | LITERAL |  | true | This is the valid 2507 Request IEN
ARRAYCT | LIST |  | true | This is the list of Claim Types to be set to the valid 2507 Request



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}