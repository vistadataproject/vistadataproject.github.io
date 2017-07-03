---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGG IMAGE STATISTICS QUE
# MAGG IMAGE STATISTICS QUE

The MAGG QUEUE IMAGE STATISTICS remote procedure queues a job throughTaskMan that queries the image file(s) and returns variousstatistics/summary data. Currently, 2 queries are implemented:   Counts of images captured in the provided date range grouped by the   image status codes.   Counts of images captured in the provided date range grouped by users   and image status codes.

Property | Value
--- | ---
Label | STATS
Routine | [MAGGA03Q](http://code.osehra.org/dox/Routine_MAGGA03Q_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAGS | LITERAL |  | true | Flags that control the execution (can be combined):    C  Capture date range. If this flag is provided,     then the remote procedure uses values of the     FROMDATE and TODATE parameters to select images     that were captured in this date range (see the     DATE/TIME IMAGE SAVED field (7) and the &quot;AD&quot;     cross-reference).       Otherwise, values of those parameters are     treated as the date range when procedures were     performed (see the PROCEDURE/EXAM DATE/TIME     field (15) and cross-references &quot;APDTPX&quot; and     &quot;APDT&quot;).    D  Include only deleted images (file #2005.1)  E  Include only existing images (file #2005)    S  Return image counts grouped by status  U  Return image counts grouped by users and status  If neither &#x27;E&#x27; nor &#x27;D&#x27; flag is provided, then an error code (-6) isreturned.  If neither &#x27;S&#x27; nor &#x27;U&#x27; flag is provided, then an error code (-6) isreturned.
FROMDATE | LITERAL |  |  | Beginning of the date range for image selection. Dates can be in internalor external FileMan format. If the parameter is not defined or empty, then the date range remains open on this side.  Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field (15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)).  Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.
TODATE | LITERAL |  |  | End of the date range for image selection. Dates can be in internal orexternal FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side.  Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field (15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)).  Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.
MQUE | LITERAL |  |  | Flags for tasking reports and action on previously tasked reports.   Q  (Default) Queue a new report task or return the status of In      Progress for a running report. If previously ran task is complete,     then the report data is returned in the output of the RPC.   R  Stop and Re-queue a running report task with the same parameters.     Existing data collected is removed from temporary storage.   D  Stop a running or completed report task and delete all associated     data from temporary storage.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}