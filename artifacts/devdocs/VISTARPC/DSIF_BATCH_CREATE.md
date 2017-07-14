---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH CREATE<br/>
# DSIF BATCH CREATE



## Properties

Property | Value
--- | ---
Label | NEWBAT
Routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OBLIGATION | LITERAL | 30 | true | 
TYPE | LITERAL | 5 | true | 
CONTROL POINT | LITERAL | 4 | true | Control point, may be entered as &quot;038&quot; or the actual IEN &quot;38&quot;
BATCH EMEMPT | LITERAL | 2 | true | Optional (not used) for B3 batches,Required for B9 batches, must be &quot;Y&quot; or &quot;N&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}