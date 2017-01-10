---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU CREATE RECORD 

 property | value 
--- | --- 
 label | TIU CREATE RECORD
 tag | MAKE
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure allows the creation of TIU DOCUMENT records.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true | This REQUIRED PARAMETER is the pointer to the patient file. | 
| vs:Input_Parameter-8994_02 | TITLE | LITERAL |  | true | This is the pointer to the TIU DOCUMENT DEFINITION FILE which identifiesthe TITLE of the document to be filed. | 
| vs:Input_Parameter-8994_02 | VDT | LITERAL |  | true | This optional parameter is the Date/time of visit.  If the parameter VSITis present, this will be ignored.  Otherwise, the RPC will attempt togenerate a match with a visit based on DFN, VDT, and VLOC (visitlocation).  In the event that the RPC cannot generate such a match, a newEVENT-type Visit will be created with the current date/time. | 
| vs:Input_Parameter-8994_02 | VLOC | LITERAL |  | true | This optional parameter is the Location of Visit (e.g., CardiologyClinic).  It is a pointer to Hospital location (File #44). | 
| vs:Input_Parameter-8994_02 | VSIT | LITERAL |  | true | This is a pointer to the Visit File (#9000010) entry for the visit towhich the document is to be linked. | 
| vs:Input_Parameter-8994_02 | TIUX | LIST |  | true | This is the input array in which the identifiers of the document, as wellas its text, are to be stored in the format described for the TIU UPDATERECORD RPC. | 
| vs:Input_Parameter-8994_02 | VSTR | LITERAL |  | true | This parameter identifies the visit location, date/time, and ServiceCategory (Hospitalization, Ambulatory, Telecommunications, or Event(HISTORICAL)) in the form of a semi-colon delimited string (e.g.,\469;2970616.1415;A\). | 
| vs:Input_Parameter-8994_02 | SUPPRESS | LITERAL | 1 | true | BOOLEAN flag indicating whether or not to suppress execution of the COMMITACTION for the document in question. This gives the calling applicationcontrol over the circumstances in which the COMMIT CODE should beexecuted. | 
| vs:Input_Parameter-8994_02 | NOASF | LITERAL | 1 | true | This parameter can optionally be set to 1 to indicate the ASAVE cross-reference in the TIU Document file (#8925) should not be set when calling this RPC.  The intent of this cross-reference is for telnet type sessions where a user could be dropped.  The cross-reference is used to provide the user with an easy way to resume editing the TIU Document they were working on when they were dropped.  In the Clinical Procedures realm, for example, where the stub is created in the 'background' thiscross-reference should not be set since the user is not interactivelyinvolved in the creation of the record. | 