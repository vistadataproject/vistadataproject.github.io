---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRBIL0 BLSOUT BILLS DUE<br/>
# DSIRBIL0 BLSOUT BILLS DUE

This routine retrieves a requestor from the provided request and createsan outstanding bill report for that requestor. 

## Properties

Property | Value
--- | ---
Label | BLSOUT
MUMPS Implementation | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is a pointer to the ROI Instance file (19620).  It can point to any request that is requested by the desired requestor.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}