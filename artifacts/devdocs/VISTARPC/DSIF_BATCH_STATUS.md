---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH STATUS
# DSIF BATCH STATUS

Used to return a list of a current batch out of Fee Basis. or -1^Batch not found,  Quitting

Property | Value
--- | ---
Label | STATBAT
Routine | [DSIFBAT3](http://code.osehra.org/dox/Routine_DSIFBAT3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BATCH | LITERAL | 99 | true | Pass in Batch number not IEN.  Output:   (all dates in formatted FM date;External date FBOUT(0)&#x3D;1 or -1^error message FBOUT(1)&#x3D;Batch #^Obligation #^Type^Date opened^Clerk (Ien;name)            ^Date Supervisor closed FBOUT(2)&#x3D;^Total $^Payment line count^Date finalized^Date Clerk           Closed^Date Transmitted^Person who completed(IEN;name)^Status FBOUT(3)&#x3D;Station#^CNH batch(Y/N)^Batch exempt(Y/N)^Statistical Batch(Y/N)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}