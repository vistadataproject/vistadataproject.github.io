---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR UPDATE BILL<br/>
# DSIR UPDATE BILL

This RPC is used to create and edit the ROI Bill entries.

## Properties

Property | Value
--- | ---
Label | UPDBILL
MUMPS Implementation | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REQN | LITERAL | 999 | true | Request pointer to file 19620
BILN | LITERAL | 9999 | true | Internal Entry Number to file 19620.2 (Optional)If null new entry in 19620.2 will be created
DATA | LIST | 999 | true | Array of data for the fields in file 19620.2 (Required)Format of Array:        Field Number ^ Internal Data Value          .01^12345        .02^3030911



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}