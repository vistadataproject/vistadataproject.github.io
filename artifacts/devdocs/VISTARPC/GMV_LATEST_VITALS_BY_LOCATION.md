---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV LATEST VITALS BY LOCATION
# GMV LATEST VITALS BY LOCATION

Prints the latest vitals/measurements for all patients on a given wardlocation.

Property | Value
--- | ---
Label | EN1
Routine | [GMVDS1](http://code.osehra.org/dox/Routine_GMVDS1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.    Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: ward internal entry number (File 42)         9: hospital location internal entry number (File 44)        10: n/a



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}