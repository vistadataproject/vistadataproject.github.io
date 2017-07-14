---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR PATIENT REGISTRY LABS<br/>
# ROR PATIENT REGISTRY LABS

This remote procedure returns the results of registry-specific lab tests for the patient and group statistics for these results.

## Properties

Property | Value
--- | ---
Label | LOADPRL
Routine | [RORRP041](http://code.osehra.org/dox/Routine_RORRP041_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PTIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PTIEN parameter.
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}