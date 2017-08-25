---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA CREATE ARTIFACT W KL<br/>
# MAGVA CREATE ARTIFACT W KL

Add a record to ARTIFACT file (#2006.916)

## Properties

Property | Value
--- | ---
Label | ADDAFACT
MUMPS Implementation | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT DESCRIPTOR&quot;) MAGPARAM(&quot;ARTIFACT TOKEN&quot;) MAGPARAM(&quot;CRC&quot;) MAGPARAM(&quot;CREATED BY&quot;) MAGPARAM(&quot;LAST ACCESS DATE/TIME&quot;) MAGPARAM(&quot;SIZE IN BYTES&quot;)
KLIST | LIST |  | true |  Artifact KEYLIST values   KLIST(1) &#x3D; First level Key   KLIST(2) &#x3D; Second level Key   ...   KLIST(N) &#x3D; N-th level Key



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}