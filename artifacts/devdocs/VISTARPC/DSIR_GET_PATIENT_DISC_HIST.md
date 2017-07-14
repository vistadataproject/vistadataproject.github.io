---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET PATIENT DISC HIST<br/>
# DSIR GET PATIENT DISC HIST

This routine returns the data nescessary for the patient disclosure history report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  RequestIEN        .01   DocumentCaption   .05  DateReceived    10.06   DocumentDate      .07  Requestor         .11  Reason          10.02  RequestorType   10.04  Status          10.08  Comment           .31

## Properties

Property | Value
--- | ---
Label | DISHISTR
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 20 | true | PAT &#x3D; fully qualified patient pointer    Examples:   &quot;125325;DPT(&quot;              &quot;152;DSIR(19620.96,&quot;,
FRDT | LITERAL | 7 | true | FRDT is the starting date which will be reported on.  FILEMAN date format - 3101225 &#x3D; Dec 25,2010
TODT | LITERAL | 20 | true | TODT is the ending date which will be reported on.This is an optional field and if not provided, the current date will be used. FILEMAN date format - 3101225 &#x3D; Dec 25,2010



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}