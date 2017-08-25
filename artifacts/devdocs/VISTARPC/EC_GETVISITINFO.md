---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; EC GETVISITINFO<br/>
# EC GETVISITINFO

This broker call returns specific EC patient visit data (location, DSS Unit,patient ien, etc) based on a Visit Number.

## Properties

Property | Value
--- | ---
Label | VISINFO
MUMPS Implementation | [ECUERPC2](http://code.osehra.org/dox/Routine_ECUERPC2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LITERAL |  | true | The value ECARY contains the Visit Number IEN (ECVSN), found in file (#9000010).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}