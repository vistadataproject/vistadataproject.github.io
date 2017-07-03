---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV DD SECURITY KEY
# DENTV DD SECURITY KEY

This rpc will check to see if user holds the DENTV EDIT FILE securitykeys.

Property | Value
--- | ---
Label | KEY
Routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
KEY | LITERAL | 1 | true | Optional if KEY&#x3D;&quot;L&quot; (or KEY not passed at all), then check to see if theuser owns the VEJDWPD EDIT LOCAL security key.  If they do, then they canadd cpt codes to file 19600 in the local number space. If KEY&#x3D;&quot;M&quot;, then check to see if the user owns the VEJDWPD EDIT FILEsecurity key.  If so, then they are a VACO representative, and are allowedto add cpt procedures to file 19600 with iens &lt;100,000



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}