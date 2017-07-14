---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SET DUAL BENEFITS DATA<br/>
# OOPS SET DUAL BENEFITS DATA

This broker call files data in the DUAL Node of the ASISTS Accident ReportingFile (#2260).

## Properties

Property | Value
--- | ---
Label | DUAL
Routine | [OOPSGUID](http://code.osehra.org/dox/Routine_OOPSGUID_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 20 | true | This field contains the IEN and the form of the record the data willbe filed into.  The format is IEN^FORM.  An example is 373^DUAL.
DATA | LITERAL | 245 | true | This string contains the DUAL Benefits data.  It is in the format of:P1 data^P2 data^P3 data^P4 data^P5 data^P6 data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}