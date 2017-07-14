---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT GET CODE<br/>
# DSIC CPT GET CODE

This returns various information about a specific CPT code.

## Properties

Property | Value
--- | ---
Label | CPT
Routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format.
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.
SRC | LITERAL | 1 | true | This Boolean flag (1 or 0) is optional.  Default value is 0.  I SRC&#x3D;1 then all level III codes to be returned.
DFN | LITERAL | 14 | true | This is a pointer to the PATIENT file.  It is not used at this time.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}