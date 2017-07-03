---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA SCREEN
# NUPA SCREEN

Allows M code to be executed from inside a Delphi program.

Property | Value
--- | ---
Label | SCREEN
Routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL |  | true | Code to execute.  If you set variable NUPa to a result, it will be pulled back into the assessment GUI. Code can be: S NUPA&#x3D;$$D(^DPT(DFN)) D TAG^ROUTINE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}