---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPT6 RQSTRS REPORT<br/>
# DSIRRPT6 RQSTRS REPORT

This RPC will return entries from the DSIR NEW REQUESTORS file (#19620.12) in alphabetical order.  The report can be pulled for all requestors or in an alphabetic range, and further sorted by those flagged as Active, Inactive or Both.

## Properties

Property | Value
--- | ---
Label | RQSTRS
MUMPS Implementation | [DSIRRPT6](http://code.osehra.org/dox/Routine_DSIRRPT6_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INACT | LITERAL | 1 | true | Inactive/Active Flag (Optional - A &#x3D; Active Only, I &#x3D; Inactive Only, B &#x3D; Both) [Default - B]
FRNM | LITERAL | 30 | true | From Name (Optional - Starting name or partial name, if null all names pulled)
TONM | LITERAL | 30 | true | To Name (Optional - Ending name or partial name, only valid if starting name passed)
SCHED | LITERAL | 1 | true | This is a flag to indicate if the report should be scheduled in TaskMan or not.  1 &#x3D; Yes, 0 &#x3D; No, Default is 0.
ESTART | LITERAL | 14 | true | This is the FileMan format date/time to start the task. If blank the task will run immediately.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}