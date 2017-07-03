---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV QUALIFIER TABLE
# GMV QUALIFIER TABLE

Prints a list of categories and qualifiers associated with individualvital types (e.g., blood pressure). Data comes from the GMRV VitalQualifier (#120.52) file and the GMRV Vital Category (#120.53) file.

Property | Value
--- | ---
Label | EN1
Routine | [GMVCAQU](http://code.osehra.org/dox/Routine_GMVCAQU_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 150 | true | A multi-piece variable that identifies the values needed to run the report.   Piece  1: n/a         2: n/a         3: n/a         4: n/a         5: Device name (File 3.5, Field .01)         6: Device internal entry number         7: date/time to print the report (FileMan format)         8: n/a         9: n/a        10: n/a



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}