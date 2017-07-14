---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG DTTM<br/>
# MAGG DTTM

Does a FileMan conversion using %DT="T" D ^%DT,$$FMTE^XLFDT(Y,"8")

## Properties

Property | Value
--- | ---
Label | DTTM
Routine | [MAGGTU5](http://code.osehra.org/dox/Routine_MAGGTU5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
  X | LITERAL | 30 | true | User input to date/time field 
INDT | LITERAL | 30 | true | This is the Date to be converted in External or Internal Format.
NOFDT | LITERAL | 1 | true | This is a Flag to tell if Future Dates are allowed.The defaults is 0, so Future Dates Are Allowed.If 1, then NOFDT is true and NO Future Dates are Allowed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}