---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ONE LOC APPOINTMENTS<br/>
# DSIV ONE LOC APPOINTMENTS

Request all appointments for one hospital location, with insuranceflag.

## Properties

Property | Value
--- | ---
Label | REQONE
Routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCIEN | LITERAL | 16 | true | Hospital Location IEN.
SDT | LITERAL | 16 | true | FileMan start date.time (optional).
EDT | LITERAL | 16 | true | FileMan end date.time (optional).
DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default&#x3D;182).
SCREEN | LITERAL | 1 | true | Contains the type of appointment to screen out.  1&#x3D;checked in (which also screens checked out appts by default) or 2&#x3D;checked out.
BUF | LITERAL | 1 | true | This field can be set to 1 to screen out (not return) appointments if there&#x27;s an existing buffer entry for that patient.
NUMS | LITERAL | 9 | true | Contains the number of records to return for each call.
MORE | LITERAL | 1 | true | Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}