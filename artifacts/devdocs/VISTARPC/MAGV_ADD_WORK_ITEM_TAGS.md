---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV ADD WORK ITEM TAGS
# MAGV ADD WORK ITEM TAGS

This RPC allows tags to be added to work items in the MAG WORK ITEM file (#2006.941). Tags consist of a tag name and a tag value.  Tags and valuesmay be used to look up entries in the MAG WORK ITEM file (#2006.941).

Property | Value
--- | ---
Label | ADDTAG
Routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TAG | LIST |  |  | This is the parameter containing the tag name and the tag value for thework item.
ITEM ID | LITERAL |  |  | This is the item ID of the entry in the MAG WORK ITEM file (#2006.941) thattags will be added to.
STATUS | LITERAL |  |  | This is a list of expected statuses that the work item may have.  Ifthe work item does not have a status that matches one of the statusessupplied the tag will not be added.
UPDUSR | LITERAL |  |  | This is the user that updated the work item.
UPDAPP | LITERAL |  |  | This is the application that updated the work item.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}