---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR PATIENT GET DATA<br/>
# ROR PATIENT GET DATA

The ROR GET PATIENT DATA remote procedure returns patient's data from the PATIENT file and (optionally) the registry record.

## Properties

Property | Value
--- | ---
Label | GETPTDAT
MUMPS Implementation | [RORRP021](http://code.osehra.org/dox/Routine_RORRP021_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIEN | LITERAL |  | true | A valid patient IEN (DFN) should be assigned to the PATIEN parameter.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Load the patient&#x27;s address  E  Load the ethnicity information  L  Load values of the registry local fields  R  Load the race information  S  Load the patient&#x27;s selection rules The &quot;L&quot; and &quot;S&quot; flags require the REGIEN parameter. Otherwise, they areignored.
REGIEN | LITERAL |  |  | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). If this parameter is defined and its value is greater than 0 then the&quot;PRD&quot; segment with the basic patient&#x27;s registry data will be returned.If the patient is not in the registry then an empty &quot;PRD&quot; segment willbe returned anyway.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}