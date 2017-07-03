---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR GET AOD
# DSIR GET AOD

This routine returns the data nescessary for the patient disclosurehistory report.   Required fields for this report:   From 19620      FIELD   From 19620.1    FIELD  ---------------------   ---------------------  Requestor Address .81   DocumentCaption   .05  Patient Address   .82   DocumentDate      .07  Current Status  10.05  Date Received   10.06  Date Closed     10.07  Clerk Assigned    .03  Comment           .31

Property | Value
--- | ---
Label | ACCOFDIS
Routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
AODIEN | LITERAL | 20 | true | AODIEN &#x3D; The request IEN for which you want an Accounting of Disclosure.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}