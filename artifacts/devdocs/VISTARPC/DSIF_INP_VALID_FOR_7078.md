---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP VALID FOR 7078<br/>
# DSIF INP VALID FOR 7078

This PRC preforms some basic checks on an entry in file 162.2 to see if it is complete enough to create a 7078.

## Properties

Property | Value
--- | ---
Label | CHK7078
Routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REQ | LITERAL | 99 | true | Internal Number of Request (Required, Pointer to file 162.2)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}