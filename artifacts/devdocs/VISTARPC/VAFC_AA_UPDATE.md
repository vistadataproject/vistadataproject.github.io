---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFC AA UPDATE<br/>
# VAFC AA UPDATE

This remote procedure call will update assigning authority passed in by MPI to VAFC ASSIGNING AUTHORITY file #391.92.

## Properties

Property | Value
--- | ---
Label | AAUPD
MUMPS Implementation | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAA | LIST | 2000 | true | ARRAA may contain the following values:The values are passed into this RPC from the Master Patient Index (MPI).      ARRAA(&quot;HL7V2_4&quot;)&#x3D; value for HL7V2_4 (#.02) field AND/OR     ARRAA(&quot;HL7V3_0&quot;)&#x3D; value for HL7V3_0 (#.03) field     ARRAA(&quot;SOURCEID&quot;)&#x3D; value for DEFAULT SOURCE ID TYPE (#.04) field



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}