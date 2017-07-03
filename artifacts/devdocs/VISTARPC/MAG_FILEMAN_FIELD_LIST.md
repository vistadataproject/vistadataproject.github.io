---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG FILEMAN FIELD LIST
# MAG FILEMAN FIELD LIST

This remote procedure returns a list of fields from a FileMan file or subfile in either alpha or numeric order.

Property | Value
--- | ---
Label | FIELDLST
Routine | [MAGUFFLL](http://code.osehra.org/dox/Routine_MAGUFFLL_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile.
ORDER | LITERAL | 1 | true | This is the desired return order for the field list:  either A for alpha or N for numeric.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}