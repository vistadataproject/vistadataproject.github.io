---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIROI4 BTCH BATCH PROCESSING
# DSIROI4 BTCH BATCH PROCESSING

This RPC clones requests in a batch manner.

Property | Value
--- | ---
Label | BTCH
Routine | [DSIROI4](http://code.osehra.org/dox/Routine_DSIROI4_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL | 1 | true | The type of cloning (1&#x3D;multi patient, 2&#x3D;multi requestors)
IEN | LITERAL | 30 | true | The IEN of the request being cloned from 19620.
SELLIST | LIST | 60 | true | A list of requestors or patients as follows:   REQUESTOR IEN^REQUESTOR ADDRESS IEN   or   PATIENT IEN^PATIENT ADDRESS IEN^PATIENT ADDRESS IEN^ADDRESS TYPE           (PATIENT IEN MUST BE FULLY QUALIFIED)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}