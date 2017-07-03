---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVC WI LIST
# MAGVC WI LIST

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Returns an array of MAG WORK ITEM (#2006.941) entries of WORKLIST type StorageCommit,optionally filtered by hostname, sorted by inverse ResponseDateTime (MAG*3.0*79).

Property | Value
--- | ---
Label | ACTLIST
Routine | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL |  | true | If present, names the host used to select entries to return.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}