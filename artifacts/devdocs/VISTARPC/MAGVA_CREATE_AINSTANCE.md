---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA CREATE AINSTANCE
# MAGVA CREATE AINSTANCE

Add a record to ARTIFACT INSTANCE file (#2006.918)

Property | Value
--- | ---
Label | ADDAINST
Routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;ARTIFACT&quot;) MAGPARAM(&quot;STORAGE PROVIDER&quot;) MAGPARAM(&quot;FILEREF&quot;) MAGPARAM(&quot;DISK VOLUME&quot;) MAGPARAM(&quot;FILEPATH&quot;)
MAGURL | LIST |  | true | MAGURL(1..n) &#x3D; URL value  URL value is split in individual records in MAGURL



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}