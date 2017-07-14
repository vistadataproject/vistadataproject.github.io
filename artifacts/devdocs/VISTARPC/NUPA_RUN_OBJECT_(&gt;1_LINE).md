---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA RUN OBJECT (&gt;1 LINE)<br/>
# NUPA RUN OBJECT (&gt;1 LINE)

Gathers data from a program that is similar to a TIU object.  This RPC calls an M program that places more than one node data into ^TMP($J).

## Properties

Property | Value
--- | ---
Label | RUNMANY
Routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | The patient&#x27;s DFN.
CODE | LITERAL |  | true | The code to xecute to obtain the data, such as S X&#x3D;$$OBJECT^ROUTINE().



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}