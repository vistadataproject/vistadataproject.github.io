---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV POLLED DATA
# DSIV POLLED DATA

Used to check the status of the background job kicked off by the DSIV REPORT QUEUE rpc, and to get the report results.

Property | Value
--- | ---
Label | POLL
Routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVHNDL | LITERAL | 50 | true | Contains the handle returned by the kick-off rpc called DSIV REPORT QUEUE.  This is the ^XTMP global node where the data resides.
NUMS | LITERAL | 30 | true | Contains the number of records to return for each call to the rpc.  If there are no more records, then the data will be followed by &quot;$END&quot;.
MORE | LITERAL | 1 | true | MORE&#x3D;0 for the first call, MORE&#x3D;1 for subsequent calls when there are more record that NUMS (param 2) to return and MORE&#x3D;9 to kill the ^XTMP global where the report data is stored for retrieval.  MORE&#x3D;9 would be used if the user wants to cancel getting all the data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}