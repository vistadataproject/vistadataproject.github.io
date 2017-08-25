---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA CAPRI GETCANCELREASON<br/>
# DVBA CAPRI GETCANCELREASON

This returns an array of active 2507 EXAM Cancellation Reasons. New active reasons added with Patch DVB*2.7*189. Old list of cancellation reasons set to inactive.

## Properties

Property | Value
--- | ---
Label | CANRSN
MUMPS Implementation | [DVBCANRS](http://code.osehra.org/dox/Routine_DVBCANRS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST | LIST |  | true | THE ARRAY OF ACTIVE REASONS



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}