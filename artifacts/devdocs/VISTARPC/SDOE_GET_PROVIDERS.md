---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE GET PROVIDERS<br/>
# SDOE GET PROVIDERS

This Remote Procedure Call (RPC) returns a subscripted array of providersfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theOUTPATIENT PROVIDER (#409.44) file may exist. It will onlyexist if the site required provider as part of the check out process. This RPC will attempt to find this 'old' data, reformat thedata to meet the V PROVIDER structure and return the list ofproviders as described above. (Only the provider internal entrynumber is available for 'old' encounters.)

## Properties

Property | Value
--- | ---
Label | GETPRV
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}