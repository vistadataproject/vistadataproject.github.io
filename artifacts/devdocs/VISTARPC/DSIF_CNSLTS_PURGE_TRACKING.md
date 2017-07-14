---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF CNSLTS PURGE TRACKING<br/>
# DSIF CNSLTS PURGE TRACKING

This RPC allows for purging of tracking records from within VistA by the Authorization GUI. This will allow us to do bulk deletes through the Purge Utility found in Authorization.

## Properties

Property | Value
--- | ---
Label | PURGE
Routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCSLT | LIST |  | true | This is a list/array of IENs that need to be removed from the FBCS Consult Tracking file (#19655). Example: DSIFCNSLTS(1)&#x3D;4523DSIFCNSLTS(2)&#x3D;3452DSIFCNSLTS(3)&#x3D;5234



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}