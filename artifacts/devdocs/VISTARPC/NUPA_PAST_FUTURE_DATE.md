---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; NUPA PAST FUTURE DATE<br/>
# NUPA PAST FUTURE DATE

Returns a 1 or a 0 when checking to see if a date is in the past or future, based on $H.  

## Properties

Property | Value
--- | ---
Label | PF
MUMPS Implementation | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAR 1 | LITERAL | 30 | true | The date you want to check.  Should be in &quot;7/7/11@12:30:00 PM&quot; format.
VAR 2 | LITERAL | 1 | true | Variable should be set to &quot;P&quot; if you want to see if the date is in the past, or set it to &quot;F&quot; if you want to see if it&#x27;s in the future.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}