---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA CREATE QUEUE
# MAGVA CREATE QUEUE

 Add a record to QUEUE file (#2006.927)

Property | Value
--- | ---
Label | ADDQUEUE
Routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true |  MAGPARAM(&quot;NAME&quot;) MAGPARAM(&quot;ACTIVE&quot;) &#x3D; 0/1 MAGPARAM(&quot;QUEUE TYPE&quot;) MAGPARAM(&quot;NUM RETRIES&quot;) MAGPARAM(&quot;RETRY DELAY IN SECONDS&quot;) MAGPARAM(&quot;TRIGGER DELAY IN SECONDS&quot;)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}