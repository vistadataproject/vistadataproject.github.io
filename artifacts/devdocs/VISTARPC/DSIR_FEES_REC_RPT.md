---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR FEES REC RPT<br/>
# DSIR FEES REC RPT

This RPC produces the data for the Fees Recieved report.

## Properties

Property | Value
--- | ---
Label | FEESREC
Routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | The internal FileMan format date to start the report.
END DATE | LITERAL | 7 | true | This is an optional date (FM format) to end the reporting period.  The default will be the current date the report is requested.
DIVISIONS | LITERAL | 999 | true | This is a variable &#x27;^&#x27; delimited containing selected Divisions from which the user may see data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}