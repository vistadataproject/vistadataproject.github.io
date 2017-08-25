---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV FIND WORK ITEM<br/>
# MAGV FIND WORK ITEM

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns an array of work items with values that match theparameters provided.

## Properties

Property | Value
--- | ---
Label | FIND
MUMPS Implementation | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL |  |  | This is the type of work item.  Work item types are stored in theWORKLIST file (#2006.9412).
SUBTYPE | LITERAL |  |  | This is the subtype of the work item.
STATUS | LITERAL |  |  | This is the current status of the work item.
PLACEID | LITERAL |  |  | This is a place ID of a work item.  The place ID is an entry in theINSTITUTION file (#4).
PRIORITY | LITERAL |  |  | This is the numeric priority given to a work item.
TAGS | LIST |  |  | This is an array of tag names and values.
STOPTAG | LITERAL |  |  | If this parameter is set then the tag list may be truncated. If a tagvalue matching the parameter value is returned then no more tags willbe returned.
MAXROWS | LITERAL |  |  | This parameter determines the number of work items to return.  If thisparameter is not set all matching work items will be sent.  If this parameteris defined it will determine the maximum number of work items to return



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}