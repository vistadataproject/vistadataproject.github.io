---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS WRITE KIOSK PARAMETERS<br/>
# VPS WRITE KIOSK PARAMETERS

Called by the VetLink Kiosk system. This RPC will accept three inputparameters and will return result output when processing complete. Theinput parameters are Kiosk Group (literal value) and the changed configuration values (array) Kiosk Group: when an administrator of VetLink Kiosk is making any Kiosk             configuration changes, he/she is making changes for a Kiosk Group.Each element in the array is constructed as:        array(n)  = field label^field value        where      n           : an incremental number that acts as an index                   field label : the name of VistA Field Name                   field value : the parameter value to be stored in VistA The output result has similar array structure as the array(n) with an additionof the result code and potential exception messageSuccessful output structure is constructed as:       output(n)  = field label^field value^1                    value '1' at the end indicates the field value was stored                     successfullyFailed output structure is constructed as:       output(n)  = field label^field value^99^exception message                    value '99' at the end indicates either field label doesn't                    exist in VistA or the field value is invalid.

## Properties

Property | Value
--- | ---
Label | WRITE
Routine | [VPSPARAM](http://code.osehra.org/dox/Routine_VPSPARAM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMNAM | LITERAL | 30 | true | When An Administrator of VetLink Kiosk system made anyconfiguration changes, the changes were made against this Kiosk Group or Clinic
PARAMETERS | LIST |  |  | A subscripted array that represents the list of parameter changes to the VetLink&#x27;s Kiosk Configuration.Each element in the subscripted array is constructed as:PARAMETERS(n) &#x3D; field label^field value        where   n           : an incremental number that acts as an index                field label : the name of VistA Field Name                field value : the parameter value to be stored in VistA
PARAMTYP | LITERAL | 1 | true | This parameter contains either &#x27;K&#x27; for KIOSK GROUP or &#x27;C&#x27; for CLINIC.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}