---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RORICR CDC CANCEL<br/>
# RORICR CDC CANCEL

The RORICR CDC CANCEL remote procedure cancels the editing process initiated by the RORICR CDC LOAD remote procedure (see the LOCK parameter)and unlocks the registry records.

## Properties

Property | Value
--- | ---
Label | CANCEL
Routine | [RORRP027](http://code.osehra.org/dox/Routine_RORRP027_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}