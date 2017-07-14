---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB MAIL<br/>
# PSB MAIL

A call is made that allows the GUI to send its' own formatted mailmessage.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [PSBRPCXM](http://code.osehra.org/dox/Routine_PSBRPCXM_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBCMD | LITERAL | 30 | true | The type of action being attempted:        &quot;CREATE&quot;        &quot;APPEND&quot;        &quot;SUBJECT&quot;        &quot;SENDTO&quot;        &quot;EXECUTE&quot;
PSBDATA | REFERENCE | 80 | true | The text to be acted on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}