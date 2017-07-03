---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIV EXCEPTION REPORT
# DSIV EXCEPTION REPORT

Retrieves ICB Exception data from 19625.1.  A nightly job queued from option DSIV NIGHTLY REPORT processes the report - this rpc now just returns the data.

Property | Value
--- | ---
Label | RRPT
Routine | [DSIVICR2](http://code.osehra.org/dox/Routine_DSIVICR2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDT | LITERAL | 30 | true | Contains the start date for the report.  This is the report date in file 19625.1.  Since reports are run each night, it is the same as the appointment date.
EDT | LITERAL | 30 | true | Contains the end date for the report.  Defaults to current date if not sent.
MORE | LITERAL | 3 | true | Contains a flag to denote recursive calls to get the Exception Report data.  MORE&#x3D;0 is the starting condition (start at the start date in parameter 1), MORE&#x3D;1 is to continue getting the records until the value ~END~ is received.  The number of records returned for each call is based on the DSIV MAX NUM ENTRIES parameter.  The MORE parameter and recursive calling to the rpc prevents network timeouts when a lot of data is being returned (e.g. one month of Exception data).
LOCS | LIST | 50 | true | Contains an array of clinics to include or exclude from the report.  The array is in the format: LOCS(1)&#x3D;&quot;INCLUDE&quot;   (or &quot;EXCLUDE&quot; to exclude the clinics) LOCS(n)&#x3D;228  (clinic IEN from file 44)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}