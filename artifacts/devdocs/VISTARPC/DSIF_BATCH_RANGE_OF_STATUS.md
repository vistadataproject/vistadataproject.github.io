---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF BATCH RANGE OF STATUS<br/>
# DSIF BATCH RANGE OF STATUS

Used to display a list of batches based on a batch IEN. on error returns -1^error message

## Properties

Property | Value
--- | ---
Label | RANGEBAT
MUMPS Implementation | [DSIFBAT2](http://code.osehra.org/dox/Routine_DSIFBAT2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RANGE | LITERAL | 99 | true | Input range of batch numbers in the format of n-nnn (or a single batch) 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}