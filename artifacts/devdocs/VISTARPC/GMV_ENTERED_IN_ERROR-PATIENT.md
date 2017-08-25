---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV ENTERED IN ERROR-PATIENT<br/>
# GMV ENTERED IN ERROR-PATIENT

Prints a report of all vitals/measurements entered in error for theselected patient for a given date/time range.

## Properties

Property | Value
--- | ---
Label | EN1
MUMPS Implementation | [GMVER0](http://code.osehra.org/dox/Routine_GMVER0_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.   Piece  1: DFN         2: Start date/time of the report range (FileMan format)         3: End date/time of the report range (FileMan format)         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}