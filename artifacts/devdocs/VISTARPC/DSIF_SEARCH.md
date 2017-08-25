---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF SEARCH<br/>
# DSIF SEARCH

Used to search Fee Basis authorizations based on from and to dates.on error returns-1^error message

## Properties

Property | Value
--- | ---
Label | SEARCH
MUMPS Implementation | [DSIFENA4](http://code.osehra.org/dox/Routine_DSIFENA4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FROMDT | LITERAL | 7 | true | Pass in FM date of Authorizations to start search 
TODATE | LITERAL | 7 | true | Pass in FM date of Authorizations to end search



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}