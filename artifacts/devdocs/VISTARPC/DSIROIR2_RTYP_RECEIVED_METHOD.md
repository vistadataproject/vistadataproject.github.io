---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROIR2 RTYP RECEIVED METHOD<br/>
# DSIROIR2 RTYP RECEIVED METHOD

This is produces the data for the Received Status report. 

## Properties

Property | Value
--- | ---
Label | RTYP
MUMPS Implementation | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDATE | LITERAL |  | true | SDATE - start date.  This is the date to begin pulling data for the report.
EDATE | LITERAL |  |  | EDATE - end date.  This is the last date to be used when pulling report data.
DIVL | LITERAL |  |  | DIVL  - List of selected divisions - NULL means all divisions



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}