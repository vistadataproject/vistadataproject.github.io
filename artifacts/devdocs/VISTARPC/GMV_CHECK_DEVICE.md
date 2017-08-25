---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV CHECK DEVICE<br/>
# GMV CHECK DEVICE

This RPC calls a KERNEL utility to return a list of printers the user may select to print output. Returns a maximum of twenty entries.

## Properties

Property | Value
--- | ---
Label | CHKDEV
MUMPS Implementation | [GMVUTL2](http://code.osehra.org/dox/Routine_GMVUTL2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVIEN | LITERAL |  | true | The value to begin the search in the Device file (#3.5). Can be null.
GMVDIR | LITERAL | 1 | true | Direction of the search (1 &#x3D; forward, -1 &#x3D; backwards).If DIR is null, then set to 1.
GMVRMAR | LITERAL |  | true | Right margin as a single number or range (e.g, 80, 132 or &quot;80-132&quot;).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}