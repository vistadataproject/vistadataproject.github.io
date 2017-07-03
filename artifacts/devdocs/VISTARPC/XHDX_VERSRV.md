---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XHDX VERSRV
# XHDX VERSRV

Returns a list of options and the associated version numbers.  The list ofoptions is passed in.  Returns is a list of OptionName^VersionNumber.  Theversion number must be the last space piece in the MENU TEXT of the option.

Property | Value
--- | ---
Label | VERSRV
Routine | [XHDX](http://code.osehra.org/dox/Routine_XHDX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OPT | LIST | 3 | true | A list of option names.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}