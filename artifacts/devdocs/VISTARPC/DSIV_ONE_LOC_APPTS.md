---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ONE LOC APPTS<br/>
# DSIV ONE LOC APPTS

Request all appointments for one hospital location with insurance flag, check-in user, check-out user, and manual patient flag.

## Properties

Property | Value
--- | ---
Label | RQONELOC
MUMPS Implementation | [DSIVIC5](http://code.osehra.org/dox/Routine_DSIVIC5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MORE | LITERAL | 1 | true | Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout.
LOCIEN | LITERAL | 16 | true | Hospital Location IEN
SDT | LITERAL | 16 | true | FileMan Start date.time (optional)
EDT | LITERAL | 16 | true | FileMan End date.time (optional)
DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default&#x3D;182)
SCREEN | LITERAL | 1 | true | Contains the type of appointment to screen out:  1&#x3D;checked in (which also screens checked out appointments by default) or 2&#x3D;checked out
NUMS | LITERAL | 9 | true | Contains the number of records to return for each call.
BUF | LITERAL | 1 | true | This field can be set to 1 to screen out (not return) appointments if there&#x27;s an existing buffer entry for that patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}