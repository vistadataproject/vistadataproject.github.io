---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG GET TIMEOUT<br/>
# MAGG GET TIMEOUT

Called by imaging application to get the Site defined timeout for the Imaging applications. Accepted input is "DISPLAY", "CAPTURE", "VISTARAD", "TELEREADER",or "IMPORTER".

## Properties

Property | Value
--- | ---
Label | TIMEOUT
MUMPS Implementation | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
APP | LITERAL | 255 | true | Either &quot;DISPLAY&quot;, &quot;CAPTURE&quot;, &quot;VISTARAD&quot;, &quot;TELEREADER&quot;,or &quot;IMPORTER&quot;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}