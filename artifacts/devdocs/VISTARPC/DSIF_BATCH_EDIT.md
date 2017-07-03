---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF BATCH EDIT
# DSIF BATCH EDIT

Used to edit an existing batch in Fee BasisReturns 1^edit successfull or-1^error message

Property | Value
--- | ---
Label | EDITBAT
Routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FBIN | LIST | 999 | true | Pass in an array formatted as follows:  ; FBIN(.01)&#x3D;BATCH NUMBER ; FBIN(1)&#x3D;OBLIGATION NUMBER  (DO NOT SEND STATION NUMBER WITH OBLIGATION &quot;500-C09045&quot;, PASS ONLY &quot;C09045&quot;) ; FBIN(3)&#x3D;DATE OPENED



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}