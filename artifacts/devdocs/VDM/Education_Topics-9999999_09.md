---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Education_Topics-9999999_09<br/>
<a name="top"></a>
# Education Topics (9999999.09)
This file defines the names of education topics to be tracked at your site. Education topics that are not to be used should be marked "Inactive" in the Active Status field.   Changes to this data dictionary should be coordinated thru the IHS DBA.   A x-ref on the MNEMONIC field was added to version 93.2.

**Global:** ^AUTTEDT(

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the Patient Education Topic. Patient Education Topics<br/>are the subject on which a patient needs some more information in order<br/>to continue on his road to better health. For example, a patient may have <br/>had some podiatry work done and received foot care education. 'foot care'<br/>would be the name of the education topic.<br/> <br/>Enter a Topic that is 3-30 characters in length. | STRING | INDEXED<br/>REQUIRED | 
**Inactive Flag**{::nomarkdown}<pre><code>  inactive_flag</code></pre>{:/} | .03 | This field is used to inactivate an education topic.  If this field<br/>contains a "1" then the education topic is inactive.  Inactive education<br/>topics cannot be selected in the manual data entry process.  Education<br/>topic entries should be made inactive when they are no longer used.  Do<br/>not delete the entry or change the meaning of the education topic entry.<br/> <br/>To make an inactive education topic active, enter the symbol "@" to delete<br/>the "1" from the field. | ENUMERATION |  | {::nomarkdown}INACTIVE: <em><strong>1</strong></em>{:/}
**Print Name**{::nomarkdown}<pre><code>  print_name</code></pre>{:/} | .04 | This is the name of the education that will be displayed in menu selection,<br/>and on Health Summaries. | STRING |  | 
**Subtopic**{::nomarkdown}<pre><code>  subtopic</code></pre>{:/} | 10 |  | OBJECT |  | [Subtopic-9999999_091001](#Subtopic-9999999_091001)
**Educational Outcome**{::nomarkdown}<pre><code>  educational_outcome</code></pre>{:/} | 11 | This is a statement about what outcome is expected when providing this<br/>patient education.  It may reflect education plan and goals. | STRING |  | 
**Educational Standards**{::nomarkdown}<pre><code>  educational_standards</code></pre>{:/} | 12 | This is the standards that and educator should use to teach the patient<br/>or family or significant other. | STRING |  | 

## Sub-Files
### <a name="Subtopic-9999999_091001"></a>Subtopic (9999999.091001)

<dl>
<dt>ID</dt><dd>Subtopic-9999999_091001</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Subtopic**{::nomarkdown}<pre><code>  subtopic</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [Education_Topics-9999999_09](Education_Topics-9999999_09)
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | 3 | This field defines the sequence the item should be presented in, as it<br/>relates to other items making up the education topic. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}