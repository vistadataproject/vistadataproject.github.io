---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORAMSET GET
# ORAMSET GET

Returns the Anticoagulation Manager parameters for the division which theuser is logged into.

Property | Value
--- | ---
Label | GET
Routine | [ORAMSET](http://code.osehra.org/dox/Routine_ORAMSET_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINICLOC | LITERAL |  | true | This is the entry of the clinic in the HOSPITAL LOCATION FILE (#44), expressed in variable pointer format (e.g., &quot;32;SC(&quot;).
VISITDT | LITERAL |  | true | This is the date/time of the visit in Intenal VA FileMan format (e.g., 3140929.1400).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}