---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XPAR ADD
# DSIC XPAR ADD

This is used to add a new parameter value for an entity.

Property | Value
--- | ---
Label | ADD
Routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | This string has different pieces for adding a new parameter for an entityDATA - required - p1~p2~p3~p4 p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name p3 :&#x3D; optional - instance p4 :&#x3D; required - value - see XPAR documentation



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}