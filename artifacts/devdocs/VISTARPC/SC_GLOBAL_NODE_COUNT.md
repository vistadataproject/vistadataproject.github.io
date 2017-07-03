---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SC GLOBAL NODE COUNT
# SC GLOBAL NODE COUNT

Returns the number of entries found in the global node at the ROOT,XREF,VALUE.  If 0 is returned, then there were no values at that node.Pass in ("ROOT"), ("XREF"), ("VALUE")

Property | Value
--- | ---
Label | GLCNT
Routine | [SCUTBK1](http://code.osehra.org/dox/Routine_SCUTBK1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETERS | LIST |  | true | Contains the subscript that indicates the global root, the cross reference, and the value to order on in the global.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}