---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV POLL PRODUCTIVITY<br/>
# DSIV POLL PRODUCTIVITY

Used to check the status of the background job kicked off by the DSIV PRODUCTIVITY REPORT rpc and to return results from that report.

## Properties

Property | Value
--- | ---
Label | POLL
Routine | [DSIVICR3](http://code.osehra.org/dox/Routine_DSIVICR3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVHNDL | LITERAL | 50 | true | Contains the Handle returned by the kick-off rpc (or sent by the GUI) to uniquely identify a report instance running in the background.
CNT | LITERAL | 10 | true | The number of records to return for each call of the rpc.  This is used to avoid broker timeouts for reports with a lot of data.
MORE | LITERAL | 1 | true | MORE&#x3D;1 when subsequent calls are made to the rpc to return the next &quot;CNT&quot; (count) of rows of report data.  The GUI may send MORE&#x3D;9 to terminate the report and have the M code kill the ^XTMP global as it is no longer needed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}