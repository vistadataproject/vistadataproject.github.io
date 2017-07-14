---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP CHECK INCOMPLETE NOTE<br/>
# DSIF INP CHECK INCOMPLETE NOTE

This RPC will check to see if there is an incomplete 7078 for this patient.  If one exists then there cannot be a new request added.

## Properties

Property | Value
--- | ---
Label | CHKINOT
Routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}