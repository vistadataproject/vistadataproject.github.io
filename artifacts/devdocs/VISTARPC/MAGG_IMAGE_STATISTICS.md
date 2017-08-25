---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG IMAGE STATISTICS<br/>
# MAGG IMAGE STATISTICS

The MAGG IMAGE STATISTICS remote procedure queries the image file(s) and returns various statistics/summary data. Currently, 2 queries are implemented:   Counts of images captured in the provided date range   grouped by the image status codes.   Counts of images captured in the provided date range  grouped by users and image status codes.

## Properties

Property | Value
--- | ---
Label | IMGQUERY
MUMPS Implementation | [MAGGA03](http://code.osehra.org/dox/Routine_MAGGA03_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FLAGS | LITERAL |  | true | Flags that control the execution (can be combined):   C  Capture date range. If this flag is provided,     then the remote procedure uses values of the     FROMDATE and TODATE parameters to select images     that were captured in this date range (see the     DATE/TIME IMAGE SAVED field (7) and the &quot;AD&quot;     cross-reference).      Otherwise, values of those parameters are     treated as the date range when procedures were     performed (see the PROCEDURE/EXAM DATE/TIME     field (15) and cross-references &quot;APDTPX&quot; and     &quot;APDT&quot;).   D  Include only deleted images (file #2005.1)  E  Include only existing images (file #2005)   S  Return image counts grouped by status  U  Return image counts grouped by users and status If neither &#x27;E&#x27; nor &#x27;D&#x27; flag is provided, then an error code (-6) isreturned. If neither &#x27;S&#x27; nor &#x27;U&#x27; flag is provided, then an error code (-6) isreturned.
FROMDATE | LITERAL |  |  | Beginning of the date range for image selection. Dates can be in internalor external FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field(15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)). Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.
TODATE | LITERAL |  |  | End of the date range for image selection. Dates can be in internal orexternal FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field(15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)). Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}