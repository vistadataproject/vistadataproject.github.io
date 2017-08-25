---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR KILL BILL<br/>
# DSIR KILL BILL

This RPC will delete a bill and all related entries in the DSIR BILL HISTORY and DSIR BILL TRACKING files.

## Properties

Property | Value
--- | ---
Label | KILLBILL
MUMPS Implementation | [DSIRBIL0](http://code.osehra.org/dox/Routine_DSIRBIL0_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BILL IEN | LITERAL | 9999 | true | Internal Number to file 19620.2 DISR BILLS.
ADMIN OVERRIDE | LITERAL | 1 | true | This is a set of codes 0 &#x3D; No, 1 &#x3D; Yes to override the checking for any payments and delete the bill and all payments.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}