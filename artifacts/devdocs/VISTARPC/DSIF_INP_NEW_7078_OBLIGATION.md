---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP NEW 7078 OBLIGATION<br/>
# DSIF INP NEW 7078 OBLIGATION



## Properties

Property | Value
--- | ---
Label | NEWOBL
MUMPS Implementation | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FB VENDOR IEN | LITERAL | 25 | true | 
FM ADMIT DATE | LITERAL | 12 | true | 
PATIENT IEN | LITERAL | 25 | true | 
FUND CONTROL POINT | LITERAL | 6 | true | 
OBLIGATION NUMBER | LITERAL | 8 | true | 
NOTIFICATION IEN | LITERAL | 15 | true | IEN to file 162.2 (Notification)
EST AMOUNT | LITERAL | 15 | true | Estimated amount of 7078 Obligation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}