---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR GET LAB TYPE
# DSIR GET LAB TYPE

This routine returns the type of lab requested for a given request.  Note that if no lab has been requested, this will contain a null or a zero.  In either case, this will be treated as a Cumulative Labs type.

Property | Value
--- | ---
Label | GTLABTYP
Routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI &#x3D; REQUEST IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}