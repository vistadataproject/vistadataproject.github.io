---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS EDIT PATIENT DEMOGRAPHIC<br/>
# VPS EDIT PATIENT DEMOGRAPHIC

Called by the Vetlink Kiosk system. The VAMC staff will make changes tothe patient demographic record via the Vecna Kiosk and submit the changesto VistA.  The RPC will accept 3 parameters.  The first parameterrepresents the return value as required by RPC Broker, the 2nd parameteris an input value which is the patient DFN, and the 3rd parameter is aninput value which is the list of data changes that will update one to manyfields in the PATIENT file (#2).  Integration Agreement 5799 identifiesthe fields that could potentially be edited.

## Properties

Property | Value
--- | ---
Label | EDIT
MUMPS Implementation | [VPSRPC2](http://code.osehra.org/dox/Routine_VPSRPC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSDFN | LITERAL | 30 | true | The patient DFN which is to be used in processing the changes and updatingthe associated patient record in the PATIENT file (#2).
VPSLST | LIST |  | true | Local array where each field that is to be updated in the PATIENT file (#2) is assigned as a string to the data element in the array along with the field value.input structure:  LocalArray(n)&#x3D;field label^data  where n is an incremental number and field label^data  are literal values



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}