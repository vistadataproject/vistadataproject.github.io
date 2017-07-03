---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XHD GET PARAMETER DEFINITIONS
# XHD GET PARAMETER DEFINITIONS

Gets parameter definitions as a list with IEN^NAME^DISPLAY NAME^ENTITYLISTin each node of the return array. This call returns a local array of SIZE elements in DIR direction from the initial Definition FROM.

Property | Value
--- | ---
Label | LIST
Routine | [XHDPDEF](http://code.osehra.org/dox/Routine_XHDPDEF_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  | true | This is the definition from which the list should begin (i.e., inclusive bound).
DIR | LITERAL |  | true | OPTIONAL parameter. This is the DIRECTION from the origin in which the definitions will be retrieved. Pass &quot;+1&quot; to indicate ascending order, or &quot;-1&quot; to indicate descending order).  DEFAULT: &quot;+1&quot; or ascending order.
SIZE | LITERAL |  | true | This is the number of definitions that should be returned with each invocation of the call. DEFAULT: 44.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}