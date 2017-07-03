---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET NEXT WORK ITEM
# MAGV GET NEXT WORK ITEM

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns the work item with the oldest LAST UPDATED date/timewith the specified expected status and work item type.

Property | Value
--- | ---
Label | GETNEXT
Routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL |  | true | This is the IEN of the related work list entry in the MAG WORK ITEM file (#2006.941).
EXPSTAT | LITERAL |  | true | This is the expected status of the work item.  If the work item does not have the expected status the work item elements will not be  returned and the work item status will not be updated.
NEWSTAT | LITERAL |  | true | This is the new status to be filed in the work item.
UPDUSR | LITERAL |  |  | This is the user that has updated the work item entry.
UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item entry.
PLACID | LITERAL | 30 |  | The location name associated with the work item.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}