---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV PT GRAPH<br/>
# GMV PT GRAPH

Prints Vitals/Measurements Graphic Reports.

## Properties

Property | Value
--- | ---
Label | EN1
Routine | [GMVSR0](http://code.osehra.org/dox/Routine_GMVSR0_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.    Piece  1: DFN         2: Start date/time of the report range (FileMan format)         3: End date/time of the report range (FileMan format)         4: Number indicating graph type *         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: ward internal entry number (File 42)         9: hospital location internal entry number (File 44)        10: list of rooms separated by a comma (e.g., 200,210,220) * Graph &#x3D; 1 prints Vital Signs Record        &#x3D; 2 prints B/P Plotting Chart        &#x3D; 3 prints Weight Chart        &#x3D; 4 prints Pulse Oximetry/Respiratory Graph        &#x3D; 5 prints Pain Chart



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}