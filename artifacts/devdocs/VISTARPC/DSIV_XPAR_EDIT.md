---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV XPAR EDIT
# DSIV XPAR EDIT

This is used to change the value or delete an existing parameter value.

Property | Value
--- | ---
Label | CHG
Routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~p4 p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name p3 :&#x3D; optional - instance p4 :&#x3D; required - value - see XPAR documentation



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}