---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA CREATE STORAGE TA
# MAGVA CREATE STORAGE TA

Add a new record to STORAGE TRANSACTION file (#2006.926)

Property | Value
--- | ---
Label | ADDSTTA
Routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT&quot;) &#x3D; Pointer to ARTIFACT file (#2006.916) MAGPARAM(&quot;STORAGE PROVIDER&quot;) &#x3D; Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(&quot;SUCCEEDED&quot;) &#x3D; 0/1 MAGPARAM(&quot;TRANSACTION TYPE&quot;) &#x3D;  MAGPARAM(&quot;INITIATING APPLICATION&quot;) &#x3D; 
MAGMSG | LIST |  | true | MAGMSG(1..n) &#x3D; MESSAGE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}