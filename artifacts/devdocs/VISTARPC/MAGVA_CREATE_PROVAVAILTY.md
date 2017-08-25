---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA CREATE PROVAVAILTY<br/>
# MAGVA CREATE PROVAVAILTY

Add a new record to PROVIDER AVAILABILITY file (#2006.924)

## Properties

Property | Value
--- | ---
Label | ADDPA
MUMPS Implementation | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |     MAGPARAM(&quot;STORAGE PROVIDER&quot;)      &#x3D; A pointer to STORAGE PROVIDER file (#2006.917)    MAGPARAM(&quot;SOURCE PLACE&quot;)  &#x3D; A pointer to IMAGING SITE PARAMETERS file (#2006.1)    MAGPARAM(&quot;START TIME&quot;)    &#x3D;  DateTime in IDF format (YYYYMMDD.HHMMSS)    MAGPARAM(&quot;END TIME&quot;)      &#x3D; DateTime in IDF format (YYYYMMDD.HHMMSS)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}