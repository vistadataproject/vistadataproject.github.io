---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS DEL TRACKING
# DSIF CNSLTS DEL TRACKING

This RPC will delete FBCS Consult Tracking Records (truly mark as hidden) so they will no longer be returned. The Consult Tracking records are not truly deleted as they are still being used to look for Comment/Significant Finding updates that may occur. After 90 days of inactivity, they are removed from the file.

Property | Value
--- | ---
Label | DELETE
Routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFCSLT | LITERAL |  | true | This is the IEN of the Consult you wish to delete (hide) from being returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}