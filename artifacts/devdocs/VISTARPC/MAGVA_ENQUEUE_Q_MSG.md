---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA ENQUEUE Q MSG
# MAGVA ENQUEUE Q MSG

Add a record to QUEUE MESSAGE file (#2006.928)

Property | Value
--- | ---
Label | ADDQM
Routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM(&quot;EXPIRATION DATETIME&quot;) MAGPARAM(&quot;EARLIEST DELIVERY DATE/TIME&quot;) MAGPARAM(&quot;PRIORITY&quot;) &#x3D; 1..99 MAGPARAM(&quot;QUEUE&quot;) &#x3D; Pointer to QUEUE file (#2006.927) MAGPARAM(&quot;MESSAGE GROUP ID&quot;) &#x3D; value of the field &quot;MESSAGE GROUP ID&quot;                                 in QUEUE file (#2006.927) or &quot;*&quot; or &quot;&quot;
MAGMSG | LIST |  | true | MAGMSG(1..n)&#x3D; MESSAGE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}