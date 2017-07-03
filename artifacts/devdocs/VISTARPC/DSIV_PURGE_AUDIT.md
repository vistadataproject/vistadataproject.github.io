---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV PURGE AUDIT
# DSIV PURGE AUDIT

Purge ICB AUDIT FILE entries through <date> or keeping <days>.

Property | Value
--- | ---
Label | PURGE
Routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIV | LITERAL | 7 | true | Either a FileMan internal date, specifying the last date to purge,OR a number specifying how many days to keep.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}