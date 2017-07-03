---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB GETIVPAR
# PSB GETIVPAR

Returns the IV parameters by IV type, as defined for a ward in file 53.66.

Property | Value
--- | ---
Label | GETPAR
Routine | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBWARD | LITERAL | 10 | true | The IEN of the ward from file 53.66 or the word &#x27;ALL&#x27;.
PSBIVPT | LITERAL | 1 | true | The IV type - &#x27;A&#x27; for Additive              &#x27;P&#x27; for Piggyback              &#x27;H&#x27; for Hyperal              &#x27;C&#x27; for Chemo              &#x27;S&#x27; for Syringe
PSBDIV | LITERAL | 1 | true | ^1&#x3D;IEN of division as in the Ward Location file (File #42)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}