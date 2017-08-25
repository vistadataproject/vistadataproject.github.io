---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR UPDATE LOCAL FIELDS<br/>
# ROR UPDATE LOCAL FIELDS

The ROR UPDATE LOCAL FIELDS remote procedure updates a list ofregistry-specific field definitions in the the ROR LOCAL FIELD file(#799.53).

## Properties

Property | Value
--- | ---
Label | LFLUPD
MUMPS Implementation | [RORRP040](http://code.osehra.org/dox/Routine_RORRP040_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
CANCEL | LITERAL |  |  | Cancel the update and unlock the local fields.
LFLST | LIST |  |  | Reference to a local variable that contains a list of local fields.   LFLST[i]              Local Field Descriptor                          ^01: IEN                          ^02: Name                          ^03: Inactivation Date (FileMan)                          ^04: Description



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}