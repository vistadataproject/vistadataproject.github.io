---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA CREATE RETPOL PROV MAP<br/>
# MAGVA CREATE RETPOL PROV MAP

Add a new record to RETENTION POLICY STORAGE PROVIDER MAP file (#2006.923)

## Properties

Property | Value
--- | ---
Label | ADDRPPM
MUMPS Implementation | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;RETENTION POLICY&quot;) &#x3D; Pointer to RETENTION POLICY file (#2006.914) MAGPARAM(&quot;STORAGE PROVIDER&quot;) &#x3D; Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(&quot;SOURCE PLACE&quot;) &#x3D; Pointer to IMAGING SITE PARAMETERS file (#2006.1) MAGPARAM(&quot;SYNCHRONOUS&quot;) &#x3D; 0/1 MAGPARAM(&quot;OFFSITE&quot;) &#x3D; 0/1



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}