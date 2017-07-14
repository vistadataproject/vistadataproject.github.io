---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP NON-VA HOSP ACTIVITY<br/>
# DSIF INP NON-VA HOSP ACTIVITY

This is an RPC version of the NON-VA HOSPITAL ACTIVITY report.

## Properties

Property | Value
--- | ---
Label | START
Routine | [DSIFRPT1](http://code.osehra.org/dox/Routine_DSIFRPT1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBENDDT | LITERAL | 7 | true | Last Day of the Month for the report (Required, FileMan format)
FBK | LITERAL | 1 | true | Report Hospital Type (Required, 1 &#x3D; Public Hospital, 2 &#x3D; Private Hospital, 3 &#x3D; Federal Hospital)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}