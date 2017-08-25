---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV POLL REPORT<br/>
# DSIV POLL REPORT

Used to check the status of the background job kicked off by the DSIV EXCEPTION REPORT2 rpc, and to get the report data.

## Properties

Property | Value
--- | ---
Label | POLL
MUMPS Implementation | [DSIVICR1](http://code.osehra.org/dox/Routine_DSIVICR1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVHNDL | LITERAL | 50 | true | Contains the Handle returned by the kick-off rpc call DSIV EXCEPTION REPORT2.  This is the ^XTMP global node where the report status and data reside.
CNT | LITERAL | 10 | true | Contains the count (#) of records to return for each call to the rpc.
MORE | LITERAL | 1 | true | Contains a flag (MORE&#x3D;1) when there were more records than parameter 2 (CNT) to supress the header for the subsequent calls to get data.The first call to the rpc should NOT include the MORE&#x3D;1 parameter.  Send MORE&#x3D;9 to kill the report data in ^XTMP global if the user no longer wants to get it.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}