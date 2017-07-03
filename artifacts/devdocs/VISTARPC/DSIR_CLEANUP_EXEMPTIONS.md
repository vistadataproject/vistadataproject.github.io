---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR CLEANUP EXEMPTIONS
# DSIR CLEANUP EXEMPTIONS

This RPC returna an array containing the internal numbers of any entry in file 19620 that may have bogus data stored in the exemption fields. This problem was corrected in the 5.2 version of the ROI package, this will allow the ROI manager to review and correct the individual ROI requests.

Property | Value
--- | ---
Label | FIXMPT
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | The date used to start the search for entries to check for bogus exemption data.
END DATE | LITERAL | 7 | true | The date to stop the search.  Defaults to the current day.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}