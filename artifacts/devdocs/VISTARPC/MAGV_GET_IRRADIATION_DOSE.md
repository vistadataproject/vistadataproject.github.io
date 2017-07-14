---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET IRRADIATION DOSE<br/>
# MAGV GET IRRADIATION DOSE

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ This RPC returns attributes for irradiation instance related to patientand procedure.

## Properties

Property | Value
--- | ---
Label | REFRESH
Routine | [MAGVRD03](http://code.osehra.org/dox/Routine_MAGVRD03_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  |  | This is the identifier to determine which patient to return data from.
PROCEDURE | LITERAL |  |  | This is the accession number used to determine which irradiation instancesto return.
PROCTYPE | LITERAL |  |  | This is the type of irradiation instance to fetch data from - &quot;CT&quot; or &quot;FLUORO&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}