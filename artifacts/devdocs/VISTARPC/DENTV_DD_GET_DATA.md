---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV DD GET DATA
# DENTV DD GET DATA

Pass this RPC a cpt code and it will return the data stored in file 228

Property | Value
--- | ---
Label | GTD
Routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 6 | true | This is the CPT code name.  You can also send the ien to file 81 (CPT)
KEY | LITERAL | 1 | true | Check which security key this user has. The default value is &#x27;L&#x27;, or youmay pass &#x27;M&#x27;  If L, then see if user owns the local edit security key toedit entries in the local number space (&gt;100,000).  If you pass &#x27;M&#x27; thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}