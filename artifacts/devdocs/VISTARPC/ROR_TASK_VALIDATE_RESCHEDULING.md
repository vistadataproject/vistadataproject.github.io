---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR TASK VALIDATE RESCHEDULING<br/>
# ROR TASK VALIDATE RESCHEDULING

The ROR TASK VALIDATE RESCHEDULING remote procedure validates the rescheduling code and returns the next date/time to run.

## Properties

Property | Value
--- | ---
Label | VALIDSCH
MUMPS Implementation | [RORRP012](http://code.osehra.org/dox/Routine_RORRP012_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCHCODE | LITERAL |  | true | Rescheduling code (&quot;1D&quot;, &quot;1M&quot;, &quot;D@12:00&quot;, etc).
SCHDT | LITERAL |  |  | Date when a task is scheduled to run for the first time (FileMan). By default (if $G(SCHDT)&#x27;&gt;0), the current date/time is used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}