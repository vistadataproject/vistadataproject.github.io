---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA CREATE STORAGE TA<br/>
# MAGVA CREATE STORAGE TA

Add a new record to STORAGE TRANSACTION file (#2006.926)

## Properties

Property | Value
--- | ---
Label | ADDSTTA
MUMPS Implementation | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT&quot;) &#x3D; Pointer to ARTIFACT file (#2006.916) MAGPARAM(&quot;STORAGE PROVIDER&quot;) &#x3D; Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(&quot;SUCCEEDED&quot;) &#x3D; 0/1 MAGPARAM(&quot;TRANSACTION TYPE&quot;) &#x3D;  MAGPARAM(&quot;INITIATING APPLICATION&quot;) &#x3D; 
MAGMSG | LIST |  | true | MAGMSG(1..n) &#x3D; MESSAGE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}