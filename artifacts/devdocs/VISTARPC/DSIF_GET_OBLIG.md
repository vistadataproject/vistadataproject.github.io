---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF GET OBLIG<br/>
# DSIF GET OBLIG

Used to return a list of obligations based upon Control point and number of years past to return.  Example, control point 038 with 2 years, will return all obligations from control point 038 from today - two years to today on error returns -1^error message

## Properties

Property | Value
--- | ---
Label | GETOBLIG
Routine | [DSIFBAT5](http://code.osehra.org/dox/Routine_DSIFBAT5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FUND CONTROL POINT | LITERAL | 99 | true | Pass in the control point used to return current obligations.
FBYEAR | LITERAL | 4 | true | Years to search for existing obligations, default is current year and last year.  If you input 3 it will display current year and go back 3 years.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}