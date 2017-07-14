---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP HOSPITAL COST RPT<br/>
# DSIF INP HOSPITAL COST RPT

This is an RPC version of the CIVIL HOSPITAL COST REPORT as found in routines FBCHCR anc FBCHCR1.

## Properties

Property | Value
--- | ---
Label | COSTRPT
Routine | [DSIFRPT0](http://code.osehra.org/dox/Routine_DSIFRPT0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEGDATE | LITERAL | 7 | true | Begining Date (Required : FileMan format)
ENDDATE | LITERAL | 7 | true | Ending Date (Required : FileMan format)
FBRT | LITERAL | 1 | true | Report Type (Optional : D &#x3D; Detailed, S &#x3D; Summary, Default &#x3D; Summary)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}