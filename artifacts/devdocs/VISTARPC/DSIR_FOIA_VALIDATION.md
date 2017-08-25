---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR FOIA VALIDATION<br/>
# DSIR FOIA VALIDATION

This RPC will return a global array of all records thkat were looked at for the year end FOIA report.  It will contain the internal request number and patient name/FOIA indicator, and a one for any block on the report that the given request was included on.  It also contains all record that, during the report period, were entered in error or of the type of request/requestor type of an excluded state reporting agency.

## Properties

Property | Value
--- | ---
Label | FOIA
MUMPS Implementation | [DSIROIRV](http://code.osehra.org/dox/Routine_DSIROIRV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 99 | true | 
END DATE | LITERAL | 99 | true | 
DIVISION(S) | LIST | 99 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}