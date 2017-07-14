---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH STATUS<br/>
# DSIF BATCH STATUS

Used to return a list of a current batch out of Fee Basis. or -1^Batch not found,  Quitting

## Properties

Property | Value
--- | ---
Label | STATBAT
Routine | [DSIFBAT3](http://code.osehra.org/dox/Routine_DSIFBAT3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BATCH | LITERAL | 99 | true | Pass in Batch number not IEN.  Output:   (all dates in formatted FM date;External date FBOUT(0)&#x3D;1 or -1^error message FBOUT(1)&#x3D;Batch #^Obligation #^Type^Date opened^Clerk (Ien;name)            ^Date Supervisor closed FBOUT(2)&#x3D;^Total $^Payment line count^Date finalized^Date Clerk           Closed^Date Transmitted^Person who completed(IEN;name)^Status FBOUT(3)&#x3D;Station#^CNH batch(Y/N)^Batch exempt(Y/N)^Statistical Batch(Y/N)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}