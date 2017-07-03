---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGVA DEQUEUE Q MSG
# MAGVA DEQUEUE Q MSG

 Find, return and remove a message from the QUEUE MESSAGE file (#2006.928) by QUEUE FK - IEN of record in QUEUE file (#2006.927) and by MESSAGE GROUP ID. If "MESSAGE GROUP ID" equals "*" it ignores "MESSAGE GROUP ID". If "MESSAGE GROUP ID" equals "" it looks only at queue messages with blank "MESSAGE GROUP ID". Otherwise looks at queue messages with MESSAGE GROUP ID

Property | Value
--- | ---
Label | DEQM
Routine | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM(&quot;QUEUE&quot;) &#x3D; IEN in QUEUE file (#2006.927)MAGPARAM(&quot;MESSAGE GROUP ID&quot;) &#x3D; value of the field &quot;MESSAGE GROUP ID&quot;                               in QUEUE file (#2006.927) or &quot;*&quot; or &quot;&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}