---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV CREATE WORK ITEM<br/>
# MAGV CREATE WORK ITEM

This RPC creates work item entries in the MAG WORK ITEM file (#2006.941).

## Properties

Property | Value
--- | ---
Label | CRTITEM
Routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL |  |  | This is the type of WORK ITEM created (i.e. DICOM Correct).
SUBTYPE | LITERAL |  |  | This is the subtype of a work item.
STATUS | LITERAL |  |  | This is the initial status given to a work item.
PLACEID | LITERAL |  |  | This is the place ID number of a work item.
PRIORITY | LITERAL |  |  | This is the numeric priority given to a work item.
MSGTAGS | LIST |  |  | This is an array of tag names and values assigned to a work item. Tagnames and values may be used to look up a work item.
CRTUSER | LITERAL |  |  | This is the user that created the work item.
CRTAPP | LITERAL |  |  | This is the application that created the work item.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}