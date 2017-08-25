---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR STATUS DISCREPANCY RPT<br/>
# DSIR STATUS DISCREPANCY RPT

This RPC returns data from the DSIR STATUS HISTORY file to review which request are being entered as closed on one day yet the status date is a previous date.

## Properties

Property | Value
--- | ---
Label | STATDISC
MUMPS Implementation | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 7 | true | FileMan format start date.
END DATE | LITERAL | 7 | true | FileMan end date. Optional - defaults to current date.
CLERK(S) | LIST | 99 | true | Array where each element is equal to the DUZ of selected clerks.  Optional - no entries passed will return all clerks for time period.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}