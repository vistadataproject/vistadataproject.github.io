---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT GET DETAIL DESC<br/>
# DSIC CPT GET DETAIL DESC

This returns the full description for a code

## Properties

Property | Value
--- | ---
Label | CPTD
Routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format.
DFN | LITERAL | 14 | true | This is the ien to the PATIENT file.  It is not used at this time.
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}