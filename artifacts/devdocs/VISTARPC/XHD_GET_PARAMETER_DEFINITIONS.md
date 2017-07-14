---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XHD GET PARAMETER DEFINITIONS<br/>
# XHD GET PARAMETER DEFINITIONS

Gets parameter definitions as a list with IEN^NAME^DISPLAY NAME^ENTITYLISTin each node of the return array. This call returns a local array of SIZE elements in DIR direction from the initial Definition FROM.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [XHDPDEF](http://code.osehra.org/dox/Routine_XHDPDEF_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROM | LITERAL |  | true | This is the definition from which the list should begin (i.e., inclusive bound).
DIR | LITERAL |  | true | OPTIONAL parameter. This is the DIRECTION from the origin in which the definitions will be retrieved. Pass &quot;+1&quot; to indicate ascending order, or &quot;-1&quot; to indicate descending order).  DEFAULT: &quot;+1&quot; or ascending order.
SIZE | LITERAL |  | true | This is the number of definitions that should be returned with each invocation of the call. DEFAULT: 44.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}