---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF DEL AUTH
# DSIF DEL AUTH

Used to delete an existing authorization in Fee Basis.

Property | Value
--- | ---
Label | DEL
Routine | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 35 | true | Pass in Patient File IEN (file #2) 
AUTHIEN | LITERAL | 25 | true | Authorization IEN to be deleted



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}