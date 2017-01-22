---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG IMAGE STATISTICS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG IMAGE STATISTICS{:/}
 tag | {::nomarkdown}IMGQUERY{:/}
 routine | [MAGGA03](http://code.osehra.org/dox/Routine_MAGGA03_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The MAGG IMAGE STATISTICS remote procedure queries the image file(s) and returns various statistics/summary data. Currently, 2 queries are implemented:   Counts of images captured in the provided date range   grouped by the image status codes.   Counts of images captured in the provided date range  grouped by users and image status codes.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Flags that control the execution (can be combined):   C  Capture date range. If this flag is provided,     then the remote procedure uses values of the     FROMDATE and TODATE parameters to select images     that were captured in this date range (see the     DATE/TIME IMAGE SAVED field (7) and the \AD\     cross-reference).      Otherwise, values of those parameters are     treated as the date range when procedures were     performed (see the PROCEDURE/EXAM DATE/TIME     field (15) and cross-references \APDTPX\ and     \APDT\).   D  Include only deleted images (file #2005.1)  E  Include only existing images (file #2005)   S  Return image counts grouped by status  U  Return image counts grouped by users and status If neither 'E' nor 'D' flag is provided, then an error code (-6) isreturned. If neither 'S' nor 'U' flag is provided, then an error code (-6) isreturned.{:/} | 
| {::nomarkdown}FROMDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Beginning of the date range for image selection. Dates can be in internalor external FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field(15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)). Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.{:/} | 
| {::nomarkdown}TODATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}End of the date range for image selection. Dates can be in internal orexternal FileMan format. If the parameter is not defined or empty, thenthe date range remains open on this side. Depending on the value of the FLAGS parameter, the date range filter isapplied either to the exam/procedure dates (PROCEDURE/EXAM DATE/TIME field(15)) or image capture dates (DATE/TIME IMAGE SAVED field (7)). Time parts of date range parameters are ignored and both ends of the daterange are included in the search. For example, in order to search imagesfor May 21, 2008, the internal value of both parameters should be 3080521.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}