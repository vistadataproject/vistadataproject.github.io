---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG NEW SOP INSTANCE UID<br/>
# MAG NEW SOP INSTANCE UID

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC stores a new SOP Instance UID in the Image File (#2005)for corrected images that are to be exported. This RPC stores a new SOP Instance UID in the Image File (#2005)for corrected images that are to be exported.

## Properties

Property | Value
--- | ---
Label | NEWUID
Routine | [MAGDRPC9](http://code.osehra.org/dox/Routine_MAGDRPC9_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OLD | LITERAL | 64 | true | The value of this parameter is a string.This value represents the original SOP Instance UID of an imagethat is to be exported.
NEW | LITERAL | 64 | true | The value of this parameter is a string.This value represents the new SOP Instance UID that is tobe assigned to the corrected image that is to be exported.
IMAGE | LITERAL | 10 | true | The value of this parameter is anumber. This number is a pointer that identifiesan image (pointer to file # 2005). When this parameter is specified, it identifies theimage to which the new UID is intended to be added.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}