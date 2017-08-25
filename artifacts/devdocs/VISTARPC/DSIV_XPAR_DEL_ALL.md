---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV XPAR DEL ALL<br/>
# DSIV XPAR DEL ALL

This is used to delete the value for all instances of a parameter for agiven entity

## Properties

Property | Value
--- | ---
Label | DELALL
MUMPS Implementation | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA - required - p1~p2 p1 :&#x3D; optional - entity(s) - if not passed, set to &quot;USR&quot; for                  current user p2 :&#x3D; required - parameter name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}