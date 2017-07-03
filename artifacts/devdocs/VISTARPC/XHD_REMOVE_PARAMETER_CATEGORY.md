---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XHD REMOVE PARAMETER CATEGORY
# XHD REMOVE PARAMETER CATEGORY

This call removes parameter categories from their parents (i.e., "prunes" the branch of which the the category is the root). It does NOT delete the Category or its descendents. Use the ORR DELETE PARAMETER CATEGORY to delete a given categor and all its descendents.

Property | Value
--- | ---
Label | REMOVE
Routine | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PCAT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category.
PARENT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category&#x27;s parent.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}