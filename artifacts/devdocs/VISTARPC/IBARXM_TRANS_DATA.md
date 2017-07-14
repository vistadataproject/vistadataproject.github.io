---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBARXM TRANS DATA<br/>
# IBARXM TRANS DATA

This remote procedure is used to receive transaction information from aremote facility and reply with an acknowledgement.This RPC call does not send user data to remote side.

## Properties

Property | Value
--- | ---
Label | TRANS
Routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBD | LITERAL |  | true | This is the data sent by the remote treating facility to be filled infile 354.71.
IBICN | LITERAL |  | true | This is the patient&#x27;s ICN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}