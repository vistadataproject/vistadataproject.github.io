---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC PX GET VISIT INFO<br/>
# DSIC PX GET VISIT INFO

This RPC is a wrapper around the ENCEVENT^PXKENC api.  It does not return all the data that the PX api does.  It returns a subset of that data.  The PX api is designed to return all the visit date in the various files for a VISIT ien.  See routine for more detailed description.

## Properties

Property | Value
--- | ---
Label | VSTALL
Routine | [DSICPX2](http://code.osehra.org/dox/Routine_DSICPX2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 16 | true | This is the internal entry number (ien) to the VISIT file (#9000010)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}