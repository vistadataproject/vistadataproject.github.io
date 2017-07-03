---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF VENDOR LOOK
# DSIF VENDOR LOOK

Used to search for Fee Basis Vendors based on the input of last four numbers, searches Tax ID for all matches on error returns-1^error message 

Property | Value
--- | ---
Label | VENDOR
Routine | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TAXID | LITERAL | 4 | true | Pass in four numbers, these will be used to search for matches in the Tax ID number of the Fee Basis Vendor file



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}