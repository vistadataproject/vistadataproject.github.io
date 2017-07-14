---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST COORDINATORS<br/>
# ROR LIST COORDINATORS

The ROR LIST COORDINATORS remote procedure returns a list of registry coordinators. The list is retrieved from the COORDINATOR multiple (14) ofthe ROR REGISTRY PARAMETERS file (#798.1).

## Properties

Property | Value
--- | ---
Label | RCLIST
Routine | [RORRP023](http://code.osehra.org/dox/Routine_RORRP023_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}