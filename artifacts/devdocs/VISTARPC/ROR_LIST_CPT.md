---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST CPT<br/>
# ROR LIST CPT

The ROR LIST CPT remote procedure returns a list of CPT codes (defined inthe CPT file), which conform the criteria.

## Properties

Property | Value
--- | ---
Label | CPTLIST
Routine | [RORRP042](http://code.osehra.org/dox/Routine_RORRP042_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 |  | The partial match restriction.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Exclude active codes   B  Backwards. Traverses the index in the opposite     direction of normal traversal   D  Full search by short name   I  Exclude inactive codes   K  Search in description keywords
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list   ^01: FromName   ^02: FromIEN  For example, a FROM value of &quot;18&quot; would list entries following 18. You canuse the 2-nd and 3-rd &quot;^&quot;- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.
DATE | LITERAL |  |  | Date for the code set versioning.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}