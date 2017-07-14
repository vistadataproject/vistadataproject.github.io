---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DM DEL QUEUE ENTRIES<br/>
# DSIV DM DEL QUEUE ENTRIES

This will allow for the deletion of one or more records from file 19621.

## Properties

Property | Value
--- | ---
Label | DEL
Routine | [DSIVDM](http://code.osehra.org/dox/Routine_DSIVDM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVL | LIST | 80 | true | This is a list of records to be deleted from file 19621.  The value of each array element can be either the Transaction ID name or the IEN.    DSIVL(sub) &#x3D; value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}