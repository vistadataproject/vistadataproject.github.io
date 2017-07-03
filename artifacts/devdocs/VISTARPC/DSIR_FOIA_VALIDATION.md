---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIR FOIA VALIDATION
# DSIR FOIA VALIDATION

This RPC will return a global array of all records thkat were looked at for the year end FOIA report.  It will contain the internal request number and patient name/FOIA indicator, and a one for any block on the report that the given request was included on.  It also contains all record that, during the report period, were entered in error or of the type of request/requestor type of an excluded state reporting agency.

Property | Value
--- | ---
Label | FOIA
Routine | [DSIROIRV](http://code.osehra.org/dox/Routine_DSIROIRV_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
START DATE | LITERAL | 99 | true | 
END DATE | LITERAL | 99 | true | 
DIVISION(S) | LIST | 99 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}