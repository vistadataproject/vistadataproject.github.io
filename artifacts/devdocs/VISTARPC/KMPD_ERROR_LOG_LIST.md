---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD ERROR LOG LIST<br/>
# KMPD ERROR LOG LIST

Return a list of errors for a certain date from file #3.075 (ERROR LOG).

## Properties

Property | Value
--- | ---
Label | ERRLIST
Routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | Internal entry for file #3.075 (ERROR LOG).  This value will be $P($H,&quot;,&quot;).
SCREEN | LITERAL | 254 | true | Screen for ERROR TYPE.
DATAGLOBAL | LITERAL | 60 | true | Return global for data (^TMP($J).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}