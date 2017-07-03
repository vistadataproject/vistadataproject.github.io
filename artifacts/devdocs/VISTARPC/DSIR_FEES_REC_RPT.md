---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR FEES REC RPT
# DSIR FEES REC RPT

This RPC produces the data for the Fees Recieved report.

Property | Value
--- | ---
Label | FEESREC
Routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | The internal FileMan format date to start the report.
END DATE | LITERAL | 7 | true | This is an optional date (FM format) to end the reporting period.  The default will be the current date the report is requested.
DIVISIONS | LITERAL | 999 | true | This is a variable &#x27;^&#x27; delimited containing selected Divisions from which the user may see data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}