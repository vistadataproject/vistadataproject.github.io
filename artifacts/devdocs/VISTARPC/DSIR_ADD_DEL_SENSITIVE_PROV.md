---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR ADD DEL SENSITIVE PROV<br/>
# DSIR ADD DEL SENSITIVE PROV

This RPC will add or delete entries in file 19620.94 (DSIR SENSITIVE PROVIDERS)

## Properties

Property | Value
--- | ---
Label | ADDPROV
MUMPS Implementation | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL | 99 | true | This is the internal entry number of the New Person file (#200) of the person to be flagged as a sensitive provider in the ROI package.
DEL | LITERAL | 1 | true | This is a flag that if true will delete the record pointed to by parameter 1 from file 19620.94.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}