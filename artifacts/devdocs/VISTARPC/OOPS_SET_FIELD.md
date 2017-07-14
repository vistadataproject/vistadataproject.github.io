---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SET FIELD<br/>
# OOPS SET FIELD

This broker call will set a single field in file 2260. 

## Properties

Property | Value
--- | ---
Label | SETFIELD
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | Contains the IEN of the record and the field number to be modified in file 2260.The format for the IEN and field number is IEN^FIELDNUM.
VALUE | LITERAL |  | true | The VALUE parm should be the external value that you want to set for the fieldspecified in the INPUT parm.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}