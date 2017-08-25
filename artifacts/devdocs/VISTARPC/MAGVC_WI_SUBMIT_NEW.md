---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVC WI SUBMIT NEW<br/>
# MAGVC WI SUBMIT NEW

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC creates a new MAG WORK ITEM file (#2006.941) entry for the StorageCommitWORKLIST type, optionally querying the item's deep archive status first,and echoes back the submitted item as a response (MAG*3.0*79).

## Properties

Property | Value
--- | ---
Label | ACTCRE8
MUMPS Implementation | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MSGTAGS | LIST |  |  | This is an array of tag names and values describing the work item andits child objects.
STAT | LITERAL |  | true | The STAT flag, set to 1, initiates a query before returning data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}