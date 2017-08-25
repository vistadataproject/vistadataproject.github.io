---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVC WI GET<br/>
# MAGVC WI GET

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Returns the specified entry from the MAG WORK ITEM file (#2006.941),optionally confirming its deep archive status first (MAG*3.0*79).

## Properties

Property | Value
--- | ---
Label | ACTGET
MUMPS Implementation | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
WIIEN | LITERAL |  | true | This is the IEN of the requested entry in the MAG WORK ITEM file (#2006.941).
STAT | LITERAL |  | true | Boolean; Set to &quot;1&quot;, queries item&#x27;s deep archive status before returning.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}