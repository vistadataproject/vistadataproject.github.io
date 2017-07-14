---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RORHEPC PATIENT LOAD<br/>
# RORHEPC PATIENT LOAD

The RORHEPC PATIENT LOAD remote procedure loads the patient's data fromthe Hepatitis C registry and prepares the record for editing.

## Properties

Property | Value
--- | ---
Label | LOAD
Routine | [RORRP036](http://code.osehra.org/dox/Routine_RORRP036_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter.
LOCK | LITERAL |  |  | If this parameter is defined and not zero then the RPC will try to lockthe registry record before loading the data and will leave it locked.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}