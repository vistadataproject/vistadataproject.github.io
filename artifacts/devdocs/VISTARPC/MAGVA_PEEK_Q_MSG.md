---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGVA PEEK Q MSG<br/>
# MAGVA PEEK Q MSG

 Get a queue message from the QUEUE MESSAGE file (#2006.928) by QUEUE - IEN of record in QUEUE file (#2006.927) and by MESSAGE GROUP ID. If "MESSAGE GROUP ID" equals "*" it ignores "MESSAGE GROUP ID". If "MESSAGE GROUP ID" equals "" it looks only at queue messages with blank "MESSAGE GROUP ID". Otherwise looks at queue messages with MESSAGE GROUP ID

## Properties

Property | Value
--- | ---
Label | PEEKQM
MUMPS Implementation | [MAGVAQ01](http://code.osehra.org/dox/Routine_MAGVAQ01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGPARAM | LIST |  | true | MAGPARAM(&quot;QUEUE&quot;) &#x3D; IEN in file (#2006.927)MAGPARAM(&quot;MESSAGE GROUP ID&quot;) &#x3D; value of the field &quot;MESSAGE GROUP ID&quot;                                                                   in file (#2006.927) or &quot;*&quot; or &quot;&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}