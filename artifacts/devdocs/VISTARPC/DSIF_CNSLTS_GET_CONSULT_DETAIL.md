---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS GET CONSULT DETAIL
# DSIF CNSLTS GET CONSULT DETAIL

This RPC will retrieve Consult data as discrete information to be used to auto-populate fields in the FBCS Authorization application.

Property | Value
--- | ---
Label | DETAIL
Routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCSLT | LITERAL |  | true | This is the Consult IEN (file #123) where the information is needed to be returned in a discrete format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}