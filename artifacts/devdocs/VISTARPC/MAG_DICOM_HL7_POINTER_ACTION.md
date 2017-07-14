---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM HL7 POINTER ACTION<br/>
# MAG DICOM HL7 POINTER ACTION

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC retrieves information about HL7 messages.Depending on the values of the parameters, different types ofinformation can be returned.

## Properties

Property | Value
--- | ---
Label | HL7PTR
Routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACTION | LITERAL | 30 | true | The value of this parameter is a string that specifies the actionto be taken by the remote procedure.Currently, valid actions are &quot;GetDate&quot; and &quot;DatePtr&quot;.
VALUE | LITERAL | 30 | true | The value of this parameter is a string. The meaning of thisstring depends on the value of parameter ACTION.When ACTION&#x3D;&quot;GetDate&quot;, the value of this parameter is interpretedas a pointer to the HL7 message for which the date is to beretrieved.When ACTION&#x3D;&quot;DatePtr&quot;, the value of this parameter is interpretedas the date for which a pointer to the first HL7 message thatoccurred on or past that date is to be retrieved.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}