---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA CREATE ARETPOL<br/>
# MAGVA CREATE ARETPOL

Create a new record in Artifact Retention Policy file (#2006.921).

## Properties

Property | Value
--- | ---
Label | ADDARP
Routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT&quot;)           &#x3D; A pointer to ARTIFACT file (#2006.916) MAGPARAM(&quot;RETENTION POLICY&quot;)   &#x3D; A pointer to RETENTION POLICY file (#2006.914) MAGPARAM(&quot;SATISFIED DATE/TIME&quot;) &#x3D; DateTime in IDF format (YYYYMMDD.HHMMSS)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}