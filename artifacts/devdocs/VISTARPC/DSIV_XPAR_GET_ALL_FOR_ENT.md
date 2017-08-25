---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV XPAR GET ALL FOR ENT<br/>
# DSIV XPAR GET ALL FOR ENT

Returns values for all instances and values for an entity/parameter.

## Properties

Property | Value
--- | ---
Label | GETALL
MUMPS Implementation | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 240 | true |  DATA &#x3D; &quot;ARR(1)~ARR(2)~ARR(3)~ARR(4)~ARR(5)~ARR(6)&quot;     e.g. &quot;SYS~DSIV PAGE SETUP~~~~&quot;  ARR(1) &#x3D; entity     ARR(2) &#x3D; param name    ARR(3) &#x3D; instance  ARR(4) &#x3D; value      ARR(5) &#x3D; new instance value  ARR(6) &#x3D; format for GETLST, Default &#x3D; &quot;Q&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}