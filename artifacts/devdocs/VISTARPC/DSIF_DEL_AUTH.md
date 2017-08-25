---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF DEL AUTH<br/>
# DSIF DEL AUTH

Used to delete an existing authorization in Fee Basis.

## Properties

Property | Value
--- | ---
Label | DEL
MUMPS Implementation | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 35 | true | Pass in Patient File IEN (file #2) 
AUTHIEN | LITERAL | 25 | true | Authorization IEN to be deleted



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}