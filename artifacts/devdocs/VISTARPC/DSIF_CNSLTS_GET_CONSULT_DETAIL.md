---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS GET CONSULT DETAIL<br/>
# DSIF CNSLTS GET CONSULT DETAIL

This RPC will retrieve Consult data as discrete information to be used to auto-populate fields in the FBCS Authorization application.

## Properties

Property | Value
--- | ---
Label | DETAIL
MUMPS Implementation | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCSLT | LITERAL |  | true | This is the Consult IEN (file #123) where the information is needed to be returned in a discrete format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}