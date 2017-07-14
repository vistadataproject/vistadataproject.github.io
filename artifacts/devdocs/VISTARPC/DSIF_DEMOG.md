---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF DEMOG<br/>
# DSIF DEMOG

Pass in IEN of Patient file, return a list of Patient Demographics. Returns an array of demographic data or -1^error message (usually "Invalid Patient selection")

## Properties

Property | Value
--- | ---
Label | DEMOG
Routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 50 | true | Pass in Patient File IEN (file #2) 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}