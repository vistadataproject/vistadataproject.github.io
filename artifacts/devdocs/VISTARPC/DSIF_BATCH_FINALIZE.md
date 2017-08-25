---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH FINALIZE<br/>
# DSIF BATCH FINALIZE



## Properties

Property | Value
--- | ---
Label | FINALIZE
MUMPS Implementation | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BATCH IEN | LITERAL | 15 | true | 
REJECT LINES | LIST | 80 | true | B3 Batches: REJL(line)&#x3D;Pmt ID^Invoice^reject reason (2-40 characters) B9 Batches: REJL(1)&#x3D;Invoice^reject reason (2-40 characters)] PMT ID &#x3D; Patient IEN;Vendor IEN;Date of Serice IEN;Service provided IEN
REJECT ALL | LITERAL | 1 | true | 1 (yes) 0 (no)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}