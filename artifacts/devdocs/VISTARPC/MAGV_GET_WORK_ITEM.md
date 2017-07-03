---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET WORK ITEM
# MAGV GET WORK ITEM

This RPC returns all of the data elements for a single entry in theMAG WORK ITEM file (#2006.941).

Property | Value
--- | ---
Label | GETITEM
Routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ITEMID | LITERAL | 12 |  | This is the item ID used to uniquely identify a work item.
EXPSTAT | LITERAL |  |  | This is the expected status of the work item.  If the work item doesnot have the expected status the work item elements will not bereturned and the work item status will not be updated.
NEWSTAT | LITERAL |  |  | This is the new status to be filed in the work item.
UPDUSR | LITERAL |  |  | This is the user that has updated the work item entry.
UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item entry.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}