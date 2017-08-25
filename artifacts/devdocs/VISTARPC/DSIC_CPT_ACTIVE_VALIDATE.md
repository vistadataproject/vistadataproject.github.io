---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT ACTIVE VALIDATE<br/>
# DSIC CPT ACTIVE VALIDATE

This will tell you whether or not a CPT code is active as of the date that you pass in.

## Properties

Property | Value
--- | ---
Label | ACTIVE
MUMPS Implementation | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code from file 81 in either internal or external format.
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.
SRC | LITERAL | 1 | true | This boolean flag (1 or 0) indicates whether or not Level III codes should be screened out.  If SCR&#x3D;1 then allow Level III codes.  Default value is 0.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}