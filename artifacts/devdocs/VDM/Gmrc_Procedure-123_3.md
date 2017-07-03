---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Gmrc_Procedure-123_3
# Gmrc Procedure (123.3)
This file is used for the maintenance of procedures used in the CONSULT/REQUEST TRACKING package. The procedures contained in this file are orderable in CPRS if not inactive.

<dl>
<dt>Global</dt><dd>^GMR(123.3,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the procedure that will be requested within CPRS. | STRING | INDEXED<br/>REQUIRED | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .02 | The INACTIVE field, if set to YES causes a procedure to no longer be<br/>selectable when ordering within CPRS.  Existing requests for this<br/>procedure may be processed to completion even if the procedure is<br/>inactive. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Clinical Procedure**{::nomarkdown}<pre><code>  clinical_procedure</code></pre>{:/} | .04 | This field provides a mapping between the CP DEFINITIONS (#702.01) file<br/>and the GMRC PROCEDURES file.   Orders placed for a procedure having a<br/>valid entry in this field will be processed and resulted via the Clinical<br/>Procedures package. | POINTER | INDEXED | [Cp_Definition-702_01](Cp_Definition-702_01)
**Type Of Procedure**{::nomarkdown}<pre><code>  type_of_procedure</code></pre>{:/} | .05 | This field indicates which type of medicine procedure and thus which<br/>result file in the Medicine Package will hold results for this procedure.<br/> <br/>Coordination may be necessary with the Medicine Adpac to determine the<br/>correct procedure mapping.<br/> <br/>If this field is not entered, the procedure may still be resulted using a<br/>TIU document, but Medicine results may not be linked to requests for this<br/>procedure.<br/> <br/>This field invokes IA# 616. | POINTER |  | [Procedure_subspecialty-697_2](Procedure_subspecialty-697_2)
**Protocol**{::nomarkdown}<pre><code>  protocol</code></pre>{:/} | .06 |  This field serves as a placeholder for a conversion value. The field<br/> contains the pointer value of the PROTOCOL that represented this<br/> procedure before conversion. | STRING | INDEXED | 
**Provisional Dx Prompt**{::nomarkdown}<pre><code>  provisional_dx_prompt</code></pre>{:/} | .07 | This field will be used by CPRS to determine how to prompt for the<br/>provisional diagnosis when ordering this procedure. If this field is <br/>set to OPTIONAL, the user will be prompted for the provisional <br/>diagnosis but may bypass answering the prompt. If the field is set to<br/>SUPPRESS, the user will not be presented with the provisional diagnosis<br/>prompt. If set to REQUIRED, the user must answer the prompt to continue<br/>placing the order. | ENUMERATION |  | {::nomarkdown}SUPPRESS: <em><strong>S</strong></em><br/>REQUIRED: <em><strong>R</strong></em><br/>OPTIONAL: <em><strong>O</strong></em>{:/}
**Provisional Dx Input**{::nomarkdown}<pre><code>  provisional_dx_input</code></pre>{:/} | .08 | This field will determine the method that CPRS will use to prompt the <br/>user for input of the provisional diagnosis when ordering. If set to <br/>FREE TEXT, the user may type any text from 2-80 characters in length. <br/>If set to LEXICON, the user will be required to select a coded <br/>diagnosis from the Clinical Lexicon. | ENUMERATION |  | {::nomarkdown}FREE TEXT: <em><strong>F</strong></em><br/>LEXICON: <em><strong>L</strong></em>{:/}
**Restrict Default Reason Edit**{::nomarkdown}<pre><code>  restrict_default_reason_edit</code></pre>{:/} | .09 | If a DEFAULT REASON FOR REQUEST exists for this procedure this field<br/>affects the ordering person's ability to edit the default reason while<br/>placing an order.<br/> <br/>        0 - UNRESTRICTED<br/>            User will be able to edit the default text at any time.<br/> <br/>        1 - ASK ON EDIT ONLY<br/>            User will only be allowed to edit the default reason if the<br/>            order is edited before releasing to the service.<br/> <br/>        2 - NO EDITING<br/>            User will not be allowed to edit the default reason at any<br/>            time.<br/> <br/>The value of this field will be ignored if no DEFAULT REASON FOR REQUEST<br/>exists for this procedure. | ENUMERATION |  | {::nomarkdown}UNRESTRICTED: <em><strong>0</strong></em><br/>ASK ON EDIT ONLY: <em><strong>1</strong></em><br/>NO EDITING: <em><strong>2</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 1 |  | STRING |  | 
**Related Services**{::nomarkdown}<pre><code>  related_services</code></pre>{:/} | 2 |  | POINTER |  | [Request_Services-123_5](Request_Services-123_5)
**Internal Name**{::nomarkdown}<pre><code>  internal_name</code></pre>{:/} | 3 | This field holds a name that can be used for internal name-spacing. <br/>This name will not be viewable to users when selecting a procedure. <br/>This name may be used to look up entries in the file via VA <br/>Fileman and the Setup Procedures option. | STRING | INDEXED | 
**Default Reason For Request**{::nomarkdown}<pre><code>  default_reason_for_request</code></pre>{:/} | 124 | This field will allow a boilerplate of text to be imported into the reason<br/>for request when placing orders for this procedure. If the user places an<br/>order using a quick order having boilerplate text, that text will<br/>supersede any default text stored in this field.<br/> <br/>This field may contain any text including TIU objects. TIU Objects must be<br/>enclosed in vertical bars (e.g. PATIENT NAME ). | STRING |  | 
**Prerequisite**{::nomarkdown}<pre><code>  prerequisite</code></pre>{:/} | 125 |  | STRING |  | 
**Ifc Routing Site**{::nomarkdown}<pre><code>  ifc_routing_site</code></pre>{:/} | 126 | This field contains the VA facility that will perform this procedure <br/>when requested. When a request for this procedure is ordered, it will<br/>automatically be routed to the VA facility in this field. | POINTER |  | [Institution-4](Institution-4)
**Ifc Remote Proc Name**{::nomarkdown}<pre><code>  ifc_remote_proc_name</code></pre>{:/} | 127 | This field contains the name of the PROCEDURE that will be requested <br/>at the VAMC defined in the IFC ROUTING SITE field.<br/> <br/>Enter the name of the procedure exactly as it is named at the remote<br/>facility. If this name does not match the name of the procedure at <br/>the routing site, the request will fail to be filed at the remote site.<br/>This will delay or prohibit the performance and processing of this<br/>request. | STRING |  | 
**Ifc Sending Facility**{::nomarkdown}<pre><code>  ifc_sending_facility</code></pre>{:/} | 128 |  | POINTER |  | [Institution-4](Institution-4)
**Ifc Coordinator**{::nomarkdown}<pre><code>  ifc_coordinator</code></pre>{:/} | 129 | The person entered in this field will have expanded abilities to correct <br/>IFC records that require manual intervention to remain updated.<br/> <br/>The full capabilities of this field are not yet defined. | POINTER |  | [New_Person-200](New_Person-200)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}