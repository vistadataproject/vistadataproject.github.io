---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC FM FIND<br/>
# DSIC FM FIND

This provides a wrapper around the FIND^DIC API.  It exposes more of the functionality of the API to the RPC than the old DSIC DDR FINDER RPC. For a lookup value, this RPC will return all matches.  It allows for input a multiple screening logic which would be ANDed together.

## Properties

Property | Value
--- | ---
Label | FIND
Routine | [DSICFM05](http://code.osehra.org/dox/Routine_DSICFM05_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 250 | true | he INPUT(n) &#x3D; tag^value   where   tag &#x3D; LIST^DIC input parameter name such as        FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  VAL  SCREEN  value &#x3D; value for that input parameter For those input parameters that allow an array, you can pass that array in the tag such as SCREEN()^lookup value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}