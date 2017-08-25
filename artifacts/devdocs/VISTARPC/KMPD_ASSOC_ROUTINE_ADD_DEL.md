---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD ASSOC ROUTINE ADD DEL<br/>
# KMPD ASSOC ROUTINE ADD DEL

Delete all entries in multiple field #11 (ASSOCIATED ROUTINE) in file#8972.1 (CM CODE EVALUATOR) and then add entries to multiple.

## Properties

Property | Value
--- | ---
Label | ASSCROU
MUMPS Implementation | [KMPDU4](http://code.osehra.org/dox/Routine_KMPDU4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | Ien for file #8972.1 (CM CODE EVALUATOR).
PARAM2 | LIST | 60 | true | Array containing routine names to be entered into field #11 (ASSOCIATEDROUTINE).         ARRAY(1)&#x3D;&quot;ROUTINE1&quot;        ARRAY(2)&#x3D;&quot;ROUTINE2&quot;        ARRAY(...)&#x3D;&quot;...&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}