---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET MISC REPORT DATA<br/>
# OOPS GET MISC REPORT DATA

This broker call will return data to generate reports on the Delphi Clientside.  It is a generic call that needs the start date, end date, stationnumber (or A for all stations), and the report call or name.

## Properties

Property | Value
--- | ---
Label | ENT
Routine | [OOPSGUIR](http://code.osehra.org/dox/Routine_OOPSGUIR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 255 | true | 
REPORT | LITERAL | 40 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}