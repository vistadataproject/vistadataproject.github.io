---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST VA DRUG CLASSES
# ROR LIST VA DRUG CLASSES

The ROR LIST VA DRUG CLASSES remote procedure returns a list of VA drug classes (defined in the VA DRUG CLASS file), which conform to the searchcriteria.

Property | Value
--- | ---
Label | VACLSLST
Routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARENT | LITERAL |  |  | Reserved
PART | LITERAL | 30 |  | The partial match restriction.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   N  Search the classes by their names     (by default, the search is performed by codes)
NUMBER | LITERAL |  |  | Deprecatedparameter designates all entries.
FROM | LITERAL |  |  | Deprecated   ^01: FromName   ^02: FromIEN   For example, a FROM value of &quot;XA&quot; would list entries following XA. You canuse the 2-nd and 3-rd &quot;^&quot;- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.   NOTE: The FROM value itself is not included in the      resulting list.   See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}