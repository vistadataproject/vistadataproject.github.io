---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVC WI UPDATE STATUS<br/>
# MAGVC WI UPDATE STATUS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC allows the Storage Commit Application to update the STATUS (#3)of an item in the MAG WORK ITEM file (#2006.941). (MAG*3.0*79).

## Properties

Property | Value
--- | ---
Label | ACTUPD8
Routine | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WIIEN | LITERAL |  | true | This is the IEN of the MAG WORK ITEM file (#2006.941) entry to be modified.
STATNEW | LITERAL |  |  | This is the external form of the new STATUS in the MAG WORK ITEM STATUS file(#2006.9413).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}