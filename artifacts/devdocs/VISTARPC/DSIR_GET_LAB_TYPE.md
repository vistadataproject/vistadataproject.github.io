---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET LAB TYPE<br/>
# DSIR GET LAB TYPE

This routine returns the type of lab requested for a given request.  Note that if no lab has been requested, this will contain a null or a zero.  In either case, this will be treated as a Cumulative Labs type.

## Properties

Property | Value
--- | ---
Label | GTLABTYP
MUMPS Implementation | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROI | LITERAL | 10 | true | INPUT PARAMETER   ROI &#x3D; REQUEST IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}