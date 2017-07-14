---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE GET DIAGNOSES<br/>
# SDOE GET DIAGNOSES

This Remote Procedure Call (RPC) returns an array of diagnosesfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theOUTPATIENT DIAGNOSIS (#409.43) file may exist. It will onlyexist if the site required diagnoses as part of the checkout process.This RPC will attempt to find this 'old' data, reformat the datato meet the V POV structure and return the list of diagnoses asdescribed above.  (Only the diagnosis code internal entry numberis available for 'old' encounters.)

## Properties

Property | Value
--- | ---
Label | GETDX
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}