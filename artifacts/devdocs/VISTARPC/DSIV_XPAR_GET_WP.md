---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV XPAR GET WP<br/>
# DSIV XPAR GET WP

This will return text for a word processing type parameter for an entityand instance.

## Properties

Property | Value
--- | ---
Label | GETWP
Routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3 p1 :&#x3D; optional - entity - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name p3 :&#x3D; optional - instance



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}