---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD ROUTINE LINE SRCH<br/>
# KMPD ROUTINE LINE SRCH

Search routine(s) for text.

## Properties

Property | Value
--- | ---
Label | ROUSRC2
Routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ROUTINES | LIST | 60 | true | Array containg routine names to be searched.        array(&quot;RoutineName&quot;)&#x3D;&quot;&quot;
SEARCH TEXT | LITERAL | 245 | true | Text to search for.
GLOBAL | LITERAL | 60 | true | Temporary global storage for data.  Must be ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}