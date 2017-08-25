---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST DIVISIONS<br/>
# ROR LIST DIVISIONS

The ROR LIST DIVISIONS remote procedure returns a list of divisions defined in the MEDICAL CENTER DIVISION file (#40.8).

## Properties

Property | Value
--- | ---
Label | DIVLIST
MUMPS Implementation | [RORRP015](http://code.osehra.org/dox/Routine_RORRP015_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 |  | The partial match restriction.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list  ^01: FromName  ^02: FromIEN For example, a FROM value of &quot;VA&quot; would list entries following VA. You canuse the 2-nd and 3-rd &quot;^&quot;- pieces of the @RESULTS@(0) node to continue thelisting in the subsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}