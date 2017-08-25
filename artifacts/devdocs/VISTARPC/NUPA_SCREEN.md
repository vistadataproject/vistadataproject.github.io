---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA SCREEN<br/>
# NUPA SCREEN

Allows M code to be executed from inside a Delphi program.

## Properties

Property | Value
--- | ---
Label | SCREEN
MUMPS Implementation | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL |  | true | Code to execute.  If you set variable NUPa to a result, it will be pulled back into the assessment GUI. Code can be: S NUPA&#x3D;$$D(^DPT(DFN)) D TAG^ROUTINE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}