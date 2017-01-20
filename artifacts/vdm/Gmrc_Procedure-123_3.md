---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Gmrc_Procedure-123_3 

 property | value 
--- | --- 
 id | Gmrc_Procedure-123_3
 fmId | 123.3
 label | Gmrc Procedure
 location | ^GMR(123.3,
 description | {::nomarkdown}This file is used for the maintenance of procedures used in the<br/>CONSULT/REQUEST TRACKING package. The procedures contained in this file<br/>are orderable in CPRS if not inactive.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the procedure that will be requested within CPRS.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| inactive | .02 | Inactive | {::nomarkdown}The INACTIVE field, if set to YES causes a procedure to no longer be<br/>selectable when ordering within CPRS.  Existing requests for this<br/>procedure may be processed to completion even if the procedure is<br/>inactive.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| clinical_procedure | .04 | Clinical Procedure | {::nomarkdown}This field provides a mapping between the CP DEFINITIONS (#702.01) file<br/>and the GMRC PROCEDURES file.   Orders placed for a procedure having a<br/>valid entry in this field will be processed and resulted via the Clinical<br/>Procedures package.{:/} | POINTER |  | INDEXED | Cp_Definition-702_01 | 
| type_of_procedure | .05 | Type Of Procedure | {::nomarkdown}This field indicates which type of medicine procedure and thus which<br/>result file in the Medicine Package will hold results for this procedure.<br/> <br/>Coordination may be necessary with the Medicine Adpac to determine the<br/>correct procedure mapping.<br/> <br/>If this field is not entered, the procedure may still be resulted using a<br/>TIU document, but Medicine results may not be linked to requests for this<br/>procedure.<br/> <br/>This field invokes IA# 616.{:/} | POINTER |  |  | Procedure_subspecialty-697_2 | 
| protocol | .06 | Protocol | {::nomarkdown} This field serves as a placeholder for a conversion value. The field<br/> contains the pointer value of the PROTOCOL that represented this<br/> procedure before conversion.{:/} | STRING |  | INDEXED |  | 
| provisional_dx_prompt | .07 | Provisional Dx Prompt | {::nomarkdown}This field will be used by CPRS to determine how to prompt for the<br/>provisional diagnosis when ordering this procedure. If this field is <br/>set to OPTIONAL, the user will be prompted for the provisional <br/>diagnosis but may bypass answering the prompt. If the field is set to<br/>SUPPRESS, the user will not be presented with the provisional diagnosis<br/>prompt. If set to REQUIRED, the user must answer the prompt to continue<br/>placing the order.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SUPPRESS</dd><dt>R</dt><dd>REQUIRED</dd><dt>O</dt><dd>OPTIONAL</dd></dl>{:/} | 
| provisional_dx_input | .08 | Provisional Dx Input | {::nomarkdown}This field will determine the method that CPRS will use to prompt the <br/>user for input of the provisional diagnosis when ordering. If set to <br/>FREE TEXT, the user may type any text from 2-80 characters in length. <br/>If set to LEXICON, the user will be required to select a coded <br/>diagnosis from the Clinical Lexicon.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>FREE TEXT</dd><dt>L</dt><dd>LEXICON</dd></dl>{:/} | 
| restrict_default_reason_edit | .09 | Restrict Default Reason Edit | {::nomarkdown}If a DEFAULT REASON FOR REQUEST exists for this procedure this field<br/>affects the ordering person's ability to edit the default reason while<br/>placing an order.<br/> <br/>        0 - UNRESTRICTED<br/>            User will be able to edit the default text at any time.<br/> <br/>        1 - ASK ON EDIT ONLY<br/>            User will only be allowed to edit the default reason if the<br/>            order is edited before releasing to the service.<br/> <br/>        2 - NO EDITING<br/>            User will not be allowed to edit the default reason at any<br/>            time.<br/> <br/>The value of this field will be ignored if no DEFAULT REASON FOR REQUEST<br/>exists for this procedure.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>UNRESTRICTED</dd><dt>1</dt><dd>ASK ON EDIT ONLY</dd><dt>2</dt><dd>NO EDITING</dd></dl>{:/} | 
| synonym | 1 | Synonym |  | [STRING] |  |  |  | 
| related_services | 2 | Related Services |  | [POINTER] |  |  | {id:Request_Services-123_5} | 
| internal_name | 3 | Internal Name | {::nomarkdown}This field holds a name that can be used for internal name-spacing. <br/>This name will not be viewable to users when selecting a procedure. <br/>This name may be used to look up entries in the file via VA <br/>Fileman and the Setup Procedures option.{:/} | STRING |  | INDEXED |  | 
| default_reason_for_request | 124 | Default Reason For Request | {::nomarkdown}This field will allow a boilerplate of text to be imported into the reason<br/>for request when placing orders for this procedure. If the user places an<br/>order using a quick order having boilerplate text, that text will<br/>supersede any default text stored in this field.<br/> <br/>This field may contain any text including TIU objects. TIU Objects must be<br/>enclosed in vertical bars (e.g. |PATIENT NAME| ).{:/} | STRING |  |  |  | 
| prerequisite | 125 | Prerequisite |  | STRING |  |  |  | 
| ifc_routing_site | 126 | Ifc Routing Site | {::nomarkdown}This field contains the VA facility that will perform this procedure <br/>when requested. When a request for this procedure is ordered, it will<br/>automatically be routed to the VA facility in this field.{:/} | POINTER |  |  | [Institution-4](Institution-4.md) | 
| ifc_remote_proc_name | 127 | Ifc Remote Proc Name | {::nomarkdown}This field contains the name of the PROCEDURE that will be requested <br/>at the VAMC defined in the IFC ROUTING SITE field.<br/> <br/>Enter the name of the procedure exactly as it is named at the remote<br/>facility. If this name does not match the name of the procedure at <br/>the routing site, the request will fail to be filed at the remote site.<br/>This will delay or prohibit the performance and processing of this<br/>request.{:/} | STRING |  |  |  | 
| ifc_sending_facility | 128 | Ifc Sending Facility |  | [POINTER] |  |  | {id:Institution-4} | 
| ifc_coordinator | 129 | Ifc Coordinator | {::nomarkdown}The person entered in this field will have expanded abilities to correct <br/>IFC records that require manual intervention to remain updated.<br/> <br/>The full capabilities of this field are not yet defined.{:/} | POINTER |  |  | [New_Person-200](New_Person-200.md) | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:13:02 pm</p>{:/}