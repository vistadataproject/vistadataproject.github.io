---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV CUMULATIVE REPORT
# GMV CUMULATIVE REPORT

Prints the Cumulative Vitals Report.

Property | Value
--- | ---
Label | EN1
Routine | [GMVSC0](http://code.osehra.org/dox/Routine_GMVSC0_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.  Piece  1: DFN        2: Start date/time of the report range (FileMan format)        3: End date/time of the report range (FileMan format)        4: n/a        5: Device name (File 3.5, Field .01)        6: Device internal entry number        7: date/time to print the report (FileMan format)        8: ward internal entry number (File 42)        9: hospital location internal entry number (File 44)       10: list of rooms separated by a comma (e.g., 200,210,220)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}