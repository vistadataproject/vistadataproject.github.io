---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ DFNIQ<br/>
# MAGQ DFNIQ

This provides a method of sending a Patient DFN VistA mail message from client methods.

## Properties

Property | Value
--- | ---
Label | DFNIQ
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL |  | true | This is the message content that is sent if the Send Flag is set.
PLACE | LITERAL | 1 | true | This is the internal entry number of the site parameter file that designates the local Imaging configuration from which this messageis addressed.
SEND | LITERAL | 1 | true | If this is the last line of the message and if this value is set to&quot;1&quot; then the message will be sent.
APPLICATION | LITERAL | 36 | true | This value is set to the application that has created this message.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}