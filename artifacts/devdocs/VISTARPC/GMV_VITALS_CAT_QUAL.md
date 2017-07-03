---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV VITALS CAT QUAL
# GMV VITALS CAT QUAL

Returns all qualifier information for the vital types selected. This remote procedure call is documented in Integration Agreement 4359.

Property | Value
--- | ---
Label | GETVITAL
Routine | [GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVLIST | LITERAL | 60 | true | A list of vital type abbreviations (FILE 120.51, Field 1) separated byup-arrows (e.g., &quot;HT^WT&quot; for height and weight). When the value is null,all qualifier information will be returned for all vital types.




### CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}