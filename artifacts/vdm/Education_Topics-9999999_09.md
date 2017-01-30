---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Education_Topics-9999999_09 

<dl>
<dt>id</dt><dd>Education_Topics-9999999_09</dd>
<dt>fmId</dt><dd>9999999.09</dd>
<dt>label</dt><dd>Education Topics</dd>
<dt>location</dt><dd>^AUTTEDT(</dd>
<dt>description</dt><dd>{::nomarkdown}This file defines the names of education topics to be tracked at your<br/>site. Education topics that are not to be used should be marked \Inactive\<br/>in the Active Status field.<br/> <br/>Changes to this data dictionary should be coordinated thru the IHS DBA.<br/> <br/>A x-ref on the MNEMONIC field was added to version 93.2.{:/}</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the Patient Education Topic. Patient Education Topics<br/>are the subject on which a patient needs some more information in order<br/>to continue on his road to better health. For example, a patient may have <br/>had some podiatry work done and received foot care education. 'foot care'<br/>would be the name of the education topic.<br/> <br/>Enter a Topic that is 3-30 characters in length.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| inactive_flag | .03 | Inactive Flag | {::nomarkdown}This field is used to inactivate an education topic.  If this field<br/>contains a \1\ then the education topic is inactive.  Inactive education<br/>topics cannot be selected in the manual data entry process.  Education<br/>topic entries should be made inactive when they are no longer used.  Do<br/>not delete the entry or change the meaning of the education topic entry.<br/> <br/>To make an inactive education topic active, enter the symbol \@\ to delete<br/>the \1\ from the field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| print_name | .04 | Print Name | {::nomarkdown}This is the name of the education that will be displayed in menu selection,<br/>and on Health Summaries.{:/} | STRING |  |  |  | 
| subtopic | 10 | Subtopic |  | [OBJECT] |  |  | [Subtopic-9999999_091001](#Subtopic-9999999_091001)  | 
| educational_outcome | 11 | Educational Outcome | {::nomarkdown}This is a statement about what outcome is expected when providing this<br/>patient education.  It may reflect education plan and goals.{:/} | STRING |  |  |  | 
| educational_standards | 12 | Educational Standards | {::nomarkdown}This is the standards that and educator should use to teach the patient<br/>or family or significant other.{:/} | STRING |  |  |  | 

## <a name="Subtopic-9999999_091001"></a>Subtopic-9999999_091001 

<dl>
<dt>id</dt><dd>Subtopic-9999999_091001</dd>
<dt>label</dt><dd>Subtopic</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subtopic | .01 | Subtopic |  | POINTER |  | REQUIRED, INDEXED | Education_Topics-9999999_09 | 
| sequence | 3 | Sequence | {::nomarkdown}This field defines the sequence the item should be presented in, as it<br/>relates to other items making up the education topic.{:/} | NUMERIC |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:06:42 pm</p>{:/}