---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV XPAR GET ALL
# DSIV XPAR GET ALL

This will return all entities for a given parameter and instance

Property | Value
--- | ---
Label | GETALL
Routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~~~p6  p1 :&#x3D; optional - screen results to specific entity type                 - i.e. SYS or USR; or USR.&#x60;&lt;DUZ&gt;  p2 :&#x3D; required - parameter name  p3 :&#x3D; optional - instance  p6 :&#x3D; optional - format code - default&#x3D;Q, anything else besides Q or                   &lt;null&gt; will be treated as code B



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}