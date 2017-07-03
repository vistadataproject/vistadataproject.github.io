---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC XPAR DEL ALL
# DSIC XPAR DEL ALL

This is used to delete the value for all instances of a parameter for a given entity

Property | Value
--- | ---
Label | DELALL
Routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2 p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}