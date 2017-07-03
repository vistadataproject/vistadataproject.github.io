---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR AMOUNT BILLED RPT
# DSIR AMOUNT BILLED RPT

This RPC returns the data for the Amount Billed report.

Property | Value
--- | ---
Label | AMTBILD
Routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Start Date | LITERAL | 7 | true | Pass in the FileMan format date to start the reporting period.
End Date | LITERAL | 7 | true | Pass the FileMan format ending date for the reporting period.  This parameter will default to the current date.
Divisions | LITERAL | 512 | true | This is a variable &#x27;^&#x27; delimited containing selected Divisions from whichthe user may see data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}