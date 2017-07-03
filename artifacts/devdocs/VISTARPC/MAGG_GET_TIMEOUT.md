---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG GET TIMEOUT
# MAGG GET TIMEOUT

Called by imaging application to get the Site defined timeout for the Imaging applications. Accepted input is "DISPLAY", "CAPTURE", "VISTARAD", "TELEREADER",or "IMPORTER".

Property | Value
--- | ---
Label | TIMEOUT
Routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
APP | LITERAL | 255 | true | Either &quot;DISPLAY&quot;, &quot;CAPTURE&quot;, &quot;VISTARAD&quot;, &quot;TELEREADER&quot;,or &quot;IMPORTER&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}