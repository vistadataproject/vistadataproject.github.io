---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG UTIL CLNLOC
# MAG UTIL CLNLOC

MAG UTILITY - Delete a Network Location that has no references to images. Input Parameters   IN : Network Location IEN   PLACE : User SITE PARAMETER IEN      STEP : IEN range to run - format = <startIEN>#<endIEN>  Output Parameter:   OUT : Array of results RPC to delete a network location. If no image files are linked to the network location, the selected entry will be removed. 

Property | Value
--- | ---
Label | NETLOC
Routine | [MAGSDEL5](http://code.osehra.org/dox/Routine_MAGSDEL5_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 6 | true | NETWORK LOCATION IEN
PLACE | LITERAL | 2 | true | PLACE OF IMAGE SITE PARAMETERS
STEP | LITERAL |  | true | Used to create chunks of data(iens) for processing.  This is used to eliminate Broker timeouts during processing.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}