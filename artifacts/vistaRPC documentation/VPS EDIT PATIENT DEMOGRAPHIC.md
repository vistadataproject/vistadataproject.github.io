---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS EDIT PATIENT DEMOGRAPHIC 

 property | value 
--- | --- 
 label | VPS EDIT PATIENT DEMOGRAPHIC
 tag | EDIT
 routine | [VPSRPC2](http://code.osehra.org/dox/Routine_VPSRPC2_source.html)
 return value type | ARRAY
 description | Called by the Vetlink Kiosk system. The VAMC staff will make changes tothe patient demographic record via the Vecna Kiosk and submit the changesto VistA.  The RPC will accept 3 parameters.  The first parameterrepresents the return value as required by RPC Broker, the 2nd parameteris an input value which is the patient DFN, and the 3rd parameter is aninput value which is the list of data changes that will update one to manyfields in the PATIENT file (#2).  Integration Agreement 5799 identifiesthe fields that could potentially be edited.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSDFN | LITERAL | 30 | true | The patient DFN which is to be used in processing the changes and updatingthe associated patient record in the PATIENT file (#2). | 
| VPSLST | LIST |  | true | Local array where each field that is to be updated in the PATIENT file (#2) is assigned as a string to the data element in the array along with the field value.input structure:  LocalArray(n)=field label^data  where n is an incremental number and field label^data  are literal values | 




Generated on January 11th 2017, 6:34:23 am