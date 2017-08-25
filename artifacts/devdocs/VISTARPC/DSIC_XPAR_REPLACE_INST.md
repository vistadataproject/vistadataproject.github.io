---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC XPAR REPLACE INST<br/>
# DSIC XPAR REPLACE INST

For an existing entity/parameter/instance, this will change the value of that instance

## Properties

Property | Value
--- | ---
Label | REPL
MUMPS Implementation | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 250 | true | DATA &#x3D; p1~p2~p3~~p5  where  p1 - entity - optional - defaults to &quot;USR&quot;  p2 - parameter - required  p3 - instance - required - current instance value  p5 - required - replacement value for current instance



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}