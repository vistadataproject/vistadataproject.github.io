---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV UPDATE WORK ITEM<br/>
# MAGV UPDATE WORK ITEM

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC updates a work item in the MAG WORK ITEM file (#2006.941). 

## Properties

Property | Value
--- | ---
Label | UPDITEM
MUMPS Implementation | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITEMID | LITERAL |  | true | This is the item ID that uniquely identifies the work list item.
EXPSTAT | LITERAL |  | true | This is the expected status of the work item.  If the expected statusdoes not match the status of the work item then the item will notbe updated.
NEWSTAT | LITERAL |  |  | This is the new status to be filed in the work item.
MESSAGE | LITERAL |  |  | This is the message that is associated with the work item.
UPDUSR | LITERAL |  |  | This is the user that has updated the work item.
UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}