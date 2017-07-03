---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XPAR GET WP
# DSIC XPAR GET WP

This will return text for a word processing type parameter for an entity and instance.

Property | Value
--- | ---
Label | GETWP
Routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3 p1 :&#x3D; optional - entity - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name p3 :&#x3D; optional - instance



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}