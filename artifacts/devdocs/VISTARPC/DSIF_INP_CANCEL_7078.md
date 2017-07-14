---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP CANCEL 7078<br/>
# DSIF INP CANCEL 7078

This RPC will mark the 7078 cancelled and if possible remove the Non-VA PTF record and make modifications to the 1358.  Logic cloned from existing routine FBCHC78.

## Properties

Property | Value
--- | ---
Label | CAN7078
Routine | [DSIFNOT2](http://code.osehra.org/dox/Routine_DSIFNOT2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Pointer to file 162.4 VA FORM 10-7078 (Required)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}