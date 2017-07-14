---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET AOD<br/>
# DSIR GET AOD

This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  Requestor Address .81   DocumentCaption   .05  Patient Address   .82   DocumentDate      .07  Current Status  10.05  Date Received   10.06  Date Closed     10.07  Clerk Assigned    .03  Comment           .31

## Properties

Property | Value
--- | ---
Label | ACCOFDIS
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
AODIEN | LITERAL | 20 | true | AODIEN &#x3D; The request IEN for which you want an Accounting of Disclosure.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}