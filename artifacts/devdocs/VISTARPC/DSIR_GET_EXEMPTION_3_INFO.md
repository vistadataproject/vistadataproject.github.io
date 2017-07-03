---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR GET EXEMPTION 3 INFO
# DSIR GET EXEMPTION 3 INFO

This returns the values from fields 13.01 thru 13.1. 13.01 - 13.04 are Y/N values indicated by 1 or 0.13.05 - 13.1 are free text upto 20 characters each.

Property | Value
--- | ---
Label | GETEXMT
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROI | LITERAL | 99 | true | This is the internal pointer to file 19620.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}