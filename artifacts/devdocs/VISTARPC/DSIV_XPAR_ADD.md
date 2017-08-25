---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV XPAR ADD<br/>
# DSIV XPAR ADD

This RPC will add a new parameter value for an entity.

## Properties

Property | Value
--- | ---
Label | ADD
MUMPS Implementation | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | This string has different pieces for adding a new parameter for an entity DATA - required - p1~p2~p3~p4  p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                   current user  p2 :&#x3D; required - parameter name  p3 :&#x3D; optional - instance  p4 :&#x3D; required - value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}