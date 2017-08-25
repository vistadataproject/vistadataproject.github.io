---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV FM LIST<br/>
# DSIV FM LIST

The RPC provides a wrapper around the LIST^DIC API. It exposes more of the functionality of the API than the DSIV DDR LISTER RPC. For a lookup value, return all entries starting from that lookup value and which collates after that lookup value.

## Properties

Property | Value
--- | ---
Label | LIST
MUMPS Implementation | [DSIVFM05](http://code.osehra.org/dox/Routine_DSIVFM05_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 250 | true |  The INPUT(n) &#x3D; tag^value  where   tag &#x3D; LIST^DIC input parameter name such as         FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  FROM  PART  SCREEN   value &#x3D; value for that input parameter  The INDEX variable consists only of a single index name.  For those input parameters that allow an array, you can pass that array in the tag such as FROM(2)^lookup value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}