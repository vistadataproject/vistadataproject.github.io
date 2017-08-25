---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT MOD PAIR<br/>
# DSIC CPT MOD PAIR

This will check to see if a modifier can be used with a code as of the input date.

## Properties

Property | Value
--- | ---
Label | MODP
MUMPS Implementation | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 7 | true | This is the ifn or CPT code name (file 81)
MOD | LITERAL | 5 | true | This is the ifn or modifier .01 field value from file 81.3
MFT | LITERAL | 1 | true | This parameter works in conjunction with the MOD parameter.Default value &#x3D; &quot;E&quot;If MFT&#x3D;&quot;E&quot; then MOD parameter is an .01 field value for file 81.3If MFT&#x3D;&quot;I&quot; then MOD parameter is an ifn value for file 81.3
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the CPT/Modifier pair was acceptable as of that date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}