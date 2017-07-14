---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XHDX VERSRV<br/>
# XHDX VERSRV

Returns a list of options and the associated version numbers.  The list ofoptions is passed in.  Returns is a list of OptionName^VersionNumber.  Theversion number must be the last space piece in the MENU TEXT of the option.

## Properties

Property | Value
--- | ---
Label | VERSRV
Routine | [XHDX](http://code.osehra.org/dox/Routine_XHDX_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPT | LIST | 3 | true | A list of option names.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}