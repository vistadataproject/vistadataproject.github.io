---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR SET LAB LIST
# DSIR SET LAB LIST

This routine sets the requested labs for a given request.  NOTE: the labs are deleted every time and then added  based on the contents of DTLS.  If at any time  an entry in DTLS contains an "@" the processing   stops.  This will allow an "@" in the first   entry in DTLS to cause all entries to be deleted.

Property | Value
--- | ---
Label | STLABLST
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI &#x3D; REQUEST IEN
DTLS | LIST | 61 | true |  INPUT PARAMETER    DTLS &#x3D; LAB LIST DETAILS - AN ARRAY OF LAB LIST TITLES       DTLS FORMAT:  #^LAB_TITLE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}