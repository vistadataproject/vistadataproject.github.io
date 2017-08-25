---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC GLOBAL NODE COUNT<br/>
# SC GLOBAL NODE COUNT

Returns the number of entries found in the global node at the ROOT,XREF,VALUE.  If 0 is returned, then there were no values at that node.Pass in ("ROOT"), ("XREF"), ("VALUE")

## Properties

Property | Value
--- | ---
Label | GLCNT
MUMPS Implementation | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST |  | true | Contains the subscript that indicates the global root, the cross reference, and the value to order on in the global.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}