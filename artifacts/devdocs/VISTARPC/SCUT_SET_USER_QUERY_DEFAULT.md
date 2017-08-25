---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCUT SET USER QUERY DEFAULT<br/>
# SCUT SET USER QUERY DEFAULT

This RPC is used to set or change the user's defualt PCMMquery template.

## Properties

Property | Value
--- | ---
Label | SETDEF
MUMPS Implementation | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER NUMBER | LITERAL | 20 | true | Internal entry number of the user (DUZ).
QUERY ID | LITERAL | 20 | true | Internal entry number of query template(#404.95) that the userselected as his/her default.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}