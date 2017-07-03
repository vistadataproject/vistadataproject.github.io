---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA CREATE ARETPOL
# MAGVA CREATE ARETPOL

Create a new record in Artifact Retention Policy file (#2006.921).

Property | Value
--- | ---
Label | ADDARP
Routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT&quot;)           &#x3D; A pointer to ARTIFACT file (#2006.916) MAGPARAM(&quot;RETENTION POLICY&quot;)   &#x3D; A pointer to RETENTION POLICY file (#2006.914) MAGPARAM(&quot;SATISFIED DATE/TIME&quot;) &#x3D; DateTime in IDF format (YYYYMMDD.HHMMSS)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}