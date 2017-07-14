---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT GET MODIFIER<br/>
# DSIC CPT GET MODIFIER

This returns basic information for a MODIFIER, file 81.3

## Properties

Property | Value
--- | ---
Label | MOD
Routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MOD | LITERAL | 5 | true | This is the ifn or name of the MODIFIER, file 81.3
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}