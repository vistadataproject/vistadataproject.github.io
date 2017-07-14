---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Mas_Eligibility_Code-8_1<br/>
<a name="top"></a>
# Mas Eligibility Code (8.1)
The MAS ELIGIBILITY CODE file consists of those codes which have been established by VACO MAS.  Currently there are 18 eligibility codes in use by the Dept of Veterans Affairs.  Addition to this file of local codes or modification of those codes distributed by the MAS package developers could have a negative impact on the performance of the MAS module as well as other modules.   If local codes are desired,the site can enter them in the ELIGIBILITY CODE file (#8).  Each code entered in the ELIGIBILITY CODE file must point to an entry in MAS ELIGIBILITY CODE file via the MAS ELIGIBILITY CODE field.

**Global:** ^DIC(8.1,

**Domain:** Patients

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the official name of the MAS eligibility code. | STRING | INDEXED<br/>REQUIRED | 
**Card Color**{::nomarkdown}<pre><code>  card_color</code></pre>{:/} | 1 | This field indicates the color of the patient"s card for the<br/>MAS eligibility. | ENUMERATION | REQUIRED | {::nomarkdown}PURPLE: <em><strong>P</strong></em><br/>BLUE: <em><strong>B</strong></em><br/>RED: <em><strong>R</strong></em>{:/}
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 2 | This field may contain an abbreviation for the eligibility<br/>name.  It may be used in place of the name in selected<br/>prints. | STRING |  | 
**VA Code Number**{::nomarkdown}<pre><code>  va_code_number</code></pre>{:/} | 3 | This field contains the VA CODE NUMBER that has been assigned<br/>to this eligibility. | NUMERIC | INDEXED<br/>REQUIRED | 
**Type**{::nomarkdown}<pre><code>  type-4</code></pre>{:/} | 4 | This field indicates the type of patient that can be assigned<br/>this eligibility. The patient is either a "veteran" or a<br/>"non-veteran" type. | ENUMERATION | REQUIRED | {::nomarkdown}NON-VETERAN: <em><strong>N</strong></em><br/>VETERAN: <em><strong>Y</strong></em>{:/}
**Print Name**{::nomarkdown}<pre><code>  print_name</code></pre>{:/} | 5 | This field contains a shorten eligibility name that is used for<br/>output that has limited space to print. | STRING | REQUIRED | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | 6 | If the eligibility is inactive then this field will be set to<br/>"YES". | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Select As Additional**{::nomarkdown}<pre><code>  select_as_additional</code></pre>{:/} | 7 | This field indicates whether patients may be assigned this eligibility<br/>as an "additional" eligibility.<br/> <br/>If the field is set to "NO" or is not filled in,then the eligibility can<br/>only be assigned as a primary eligibility.<br/> <br/>If set to "YES",then the eligibility can be used as both a<br/>primary and an "additional" eligibility. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}