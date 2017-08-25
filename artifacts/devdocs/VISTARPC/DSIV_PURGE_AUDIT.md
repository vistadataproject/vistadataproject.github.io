---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV PURGE AUDIT<br/>
# DSIV PURGE AUDIT

Purge ICB AUDIT FILE entries through <date> or keeping <days>.

## Properties

Property | Value
--- | ---
Label | PURGE
MUMPS Implementation | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIV | LITERAL | 7 | true | Either a FileMan internal date, specifying the last date to purge,OR a number specifying how many days to keep.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}