---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR PATIENT DELETE<br/>
# ROR PATIENT DELETE

The ROR PATIENT DELETE remote procedure marks the patient's record as deleted from the registry.not deleted and an error code is returned.

## Properties

Property | Value
--- | ---
Label | DELETE
Routine | [RORRP030](http://code.osehra.org/dox/Routine_RORRP030_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
RORDFN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the RORDFN parameter.
FORCE | LITERAL |  |  | Deprecatedrecord will be deleted from the registry even if some data has been sent to the AAC already. BE VERY CAREFUL WITH THIS!



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}