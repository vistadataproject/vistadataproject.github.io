---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR GET ALL<br/>
# DSIC XPAR GET ALL

This will return all entities for a given parameter and instance

## Properties

Property | Value
--- | ---
Label | GETALL
MUMPS Implementation | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - ~p2~p3~~~p6 p2 :&#x3D; required - parameter name p3 :&#x3D; optional - instance p6 :&#x3D; optional - format code - default&#x3D;Q, anything else besides Q or                   &lt;null&gt; will be treated as code B



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}