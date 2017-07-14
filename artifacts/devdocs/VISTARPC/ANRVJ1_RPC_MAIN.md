---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ANRVJ1 RPC MAIN<br/>
# ANRVJ1 RPC MAIN

This is the main entry point for calling line tags in routine ANRVJ1.  The format is:        Parameter 1 = OPTION (name of the line tag to call)        Parameter 2 = DFN (value being passed in)        Parameter 3 = DATA (any additional values to be passed in)

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [ANRVJ1](http://code.osehra.org/dox/Routine_ANRVJ1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPTION | LITERAL | 10 | true | Routine Line tag you wish to call.
DFN | LITERAL |  | true | Parameter variable to be passed into routine tag.
DATA | LITERAL |  | true | Any additional parameters to be passed into the routine line tag.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}