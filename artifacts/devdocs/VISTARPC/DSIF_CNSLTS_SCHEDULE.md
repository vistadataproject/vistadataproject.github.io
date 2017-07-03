---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS SCHEDULE
# DSIF CNSLTS SCHEDULE

This RPC updates a Consult with the action of Scheduled. Cloned from ORQQCN SCH

Property | Value
--- | ---
Label | SCH
Routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFIEN | LITERAL |  | true | This is the IEN for the Consult you wish to update.
DSIFNP | LITERAL |  |  | This is the IEN/DUZ for the provider making the requested change.
DSIFORDT | LITERAL |  | true | This is the Date/Time the Consult was scheduled.
DSIFALRT | LITERAL |  | true | This determines whether or not Alerts should be sent with this update. 1 &#x3D; Yes.
DSIFALTO | LITERAL |  |  | This is the array of alert recipient IENs.
DSIFCOM | LIST |  |  | This is the array of comments to be added to this action. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}