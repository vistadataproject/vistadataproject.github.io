---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR AMOUNT BILLED RPT<br/>
# DSIR AMOUNT BILLED RPT

This RPC returns the data for the Amount Billed report.

## Properties

Property | Value
--- | ---
Label | AMTBILD
MUMPS Implementation | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Start Date | LITERAL | 7 | true | Pass in the FileMan format date to start the reporting period.
End Date | LITERAL | 7 | true | Pass the FileMan format ending date for the reporting period.  This parameter will default to the current date.
Divisions | LITERAL | 512 | true | This is a variable &#x27;^&#x27; delimited containing selected Divisions from whichthe user may see data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}