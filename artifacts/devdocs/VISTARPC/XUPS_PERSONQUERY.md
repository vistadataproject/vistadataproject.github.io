---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUPS PERSONQUERY<br/>
# XUPS PERSONQUERY



## Properties

Property | Value
--- | ---
Label | EN1
Routine | [XUPSQRY](http://code.osehra.org/dox/Routine_XUPSQRY_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
XUPSLNAM | LITERAL | 25 | true | Required if lookup by name.
XUPSFNAM | LITERAL | 15 | true | 
XUPSSSN | LITERAL | 9 | true | 
XUPSPROV | LITERAL | 1 | true | 
XUPSSTN | LITERAL | 6 | true | 
XUPSMNM | LITERAL | 3 | true | 
XUPSDATE | LITERAL | 8 | true | 
XUPSVPID | LITERAL |  | true | Required if lookup by VPID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}