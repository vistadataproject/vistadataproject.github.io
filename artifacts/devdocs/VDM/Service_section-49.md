---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Service_section-49
# Service/section (49)
This file is a list of the services and sections within the services. Some of the entries may be 'MIS COSTING SECTIONS' for use with the cost accounting part of the Management Information System software. A section is an MIS section if there is a code entered in the field called MIS COSTING CODE.  In the cost accounting system all medical center costs will be tied to a particular section.  When MIS sections change, do not delete the old section.  Instead, change the fields under the multiple field called "DATE CLOSED" to identify which sections are no longer in use.

<dl>
<dt>Global</dt><dd>^DIC(49,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Enter Service or Section name. | STRING | INDEXED<br/>REQUIRED | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 1 | This field contains the accepted abbreviation for this service or section. | STRING | INDEXED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 1.3 | This field contains a brief description or the mission of this service<br/>or section. | STRING |  | 
**Mail Symbol**{::nomarkdown}<pre><code>  mail_symbol</code></pre>{:/} | 1.5 | This field contains the accepted mail routing symbol for the service<br/>or section. | STRING | INDEXED | 
**Parent Service**{::nomarkdown}<pre><code>  parent_service</code></pre>{:/} | 1.6 | This field contains a pointer to the name of the service or section which<br/>is "parent" to this section. | POINTER | INDEXED | [Service_section-49](Service_section-49)
**Type Of Service**{::nomarkdown}<pre><code>  type_of_service</code></pre>{:/} | 1.7 | This flag indicates the type of each entry in this file.  Services or<br/>sub-services may be marked as Administrative or for Patient Care.<br/>or for Patient Care. | ENUMERATION | INDEXED | {::nomarkdown}PATIENT CARE: <em><strong>C</strong></em><br/>ADMINISTRATIVE: <em><strong>A</strong></em>{:/}
**Chief**{::nomarkdown}<pre><code>  chief</code></pre>{:/} | 2 | This field contains a pointer to the name of the chief of this service<br/>or section. | POINTER |  | [New_Person-200](New_Person-200)
**Chief Phone**{::nomarkdown}<pre><code>  chief_phone</code></pre>{:/} | 3 | This field contains the telephone number(s) for the chief of this service .<br/>or section. | STRING |  | 
**Asst Chief**{::nomarkdown}<pre><code>  asst_chief</code></pre>{:/} | 4 | This field contains a pointer to the name of the assistant chief of this<br/>service or section. | POINTER |  | [New_Person-200](New_Person-200)
**Asst Chief Phone**{::nomarkdown}<pre><code>  asst_chief_phone</code></pre>{:/} | 5 | This field contains the telephone number(s) for the assistant chief of<br/>this service or section. | STRING |  | 
**Location**{::nomarkdown}<pre><code>  location</code></pre>{:/} | 6 | This field contains the physical location of this service or section<br/>(i.e., room number). | STRING |  | 
**Mis Costing Code**{::nomarkdown}<pre><code>  mis_costing_code</code></pre>{:/} | 9 | This field contains the Management Information Cost Accounting code<br/>for this service or section. | STRING | INDEXED | 
**Cost Center**{::nomarkdown}<pre><code>  cost_center</code></pre>{:/} | 10 | This field contains the cost center name for this service section.<br/>The cost center must be defined in the IFCAP Cost Center File<br/>420.1. | STRING | INDEXED | 
**Type Of Costing Section**{::nomarkdown}<pre><code>  type_of_costing_section</code></pre>{:/} | 11 | This field contains the type of management information cost accounting<br/>section for this service or section. | ENUMERATION |  | {::nomarkdown}SUB-SPECIALTY ADMINISTRATIVE: <em><strong>S</strong></em><br/>NON-ADMINISTRATIVE: <em><strong>N</strong></em><br/>ADMINISTRATIVE: <em><strong>A</strong></em><br/>OFF-STATION: <em><strong>O</strong></em>{:/}
**Ambulatory Care Flag**{::nomarkdown}<pre><code>  ambulatory_care_flag</code></pre>{:/} | 12 | This field contains the ambulatory care flag.  Yes or No for this<br/>sertice or section. | ENUMERATION |  | {::nomarkdown}AMBULATORY CARE: <em><strong>Y</strong></em><br/>NOT AMBULATORY CARE: <em><strong>N</strong></em>{:/}
**Date Closed**{::nomarkdown}<pre><code>  date_closed</code></pre>{:/} | 13 | This field contains date(s) when this service or section closed. | OBJECT |  | [Date_Closed-49_07](#Date_Closed-49_07)
**National Service**{::nomarkdown}<pre><code>  national_service</code></pre>{:/} | 730 | This field is a pointer to the National Service File #730, and is<br/>used to link the locally built 'Service/Section' file to the<br/>standardized list of nationally recognized services. | POINTER | INDEXED | [National_Service-730](National_Service-730)
**Coordinator (irm)**{::nomarkdown}<pre><code>  coordinator_irm</code></pre>{:/} | 16000 | This field is used by kernel to link a NEW PERSON entry through the<br/>service/section pointer back to a New Person entry for access help. | POINTER | INDEXED | [New_Person-200](New_Person-200)

### Subfile
#### <a name="Date_Closed-49_07"></a>Date Closed

<dl>
<dt>ID</dt><dd>Date_Closed-49_07</dd>
<dt>File Type</dt><dd>49.07</dd>
<dt>Label</dt><dd>Date Closed</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date Closed**{::nomarkdown}<pre><code>  date_closed</code></pre>{:/} | .01 | This field contains a date/time when this service or section closed for<br/>hospital use. | DATE-TIME | REQUIRED | 
**Date Re-opened**{::nomarkdown}<pre><code>  date_reopened</code></pre>{:/} | 1 | This field contains a date/time when this closed service or section<br/>was reopened for hospital use. | DATE-TIME |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}