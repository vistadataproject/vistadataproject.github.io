---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH REPROCESS<br/>
# DSIF BATCH REPROCESS



## Properties

Property | Value
--- | ---
Label | PROCESS
Routine | [DSIFBAT9](http://code.osehra.org/dox/Routine_DSIFBAT9_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBN | LITERAL | 10 | true | Batch IEN that needs to be reprocessed
FBACT | LITERAL | 1 | true | &quot;R&quot; - Retransmit, &quot;F&quot; - Reject



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}