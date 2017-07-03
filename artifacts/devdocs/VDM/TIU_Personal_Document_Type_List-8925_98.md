---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; TIU_Personal_Document_Type_List-8925_98
# TIU Personal Document Type List (8925.98)
This file is used to store "pick-lists" of documents (by class), for selection by the user.

<dl>
<dt>Global</dt><dd>^TIU(8925.98,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Person**{::nomarkdown}<pre><code>  person</code></pre>{:/} | .01 | This is the person whose preference is being identified. | POINTER | INDEXED<br/>REQUIRED | [New_Person-200](New_Person-200)
**Parent Document Class**{::nomarkdown}<pre><code>  parent_document_class</code></pre>{:/} | .02 | This is the group (i.e., either Document Class or Class) to which the<br/>preferred document list belongs.  i.e., enter the class Progress Notes<br/>to indicate that the corresponding list will apply to Progress Notes. | POINTER |  | [Tiu_Document_Definition-8925_1](Tiu_Document_Definition-8925_1)
**Default Type**{::nomarkdown}<pre><code>  default_type</code></pre>{:/} | .03 | This determines what TITLE will be offered by default when selecting<br/>from a given parent class (e.g., when entering a PROGRESS NOTE, you<br/>may want the DEFAULT TITLE to be DIABETES EDUCATION, etc.). | POINTER |  | [Tiu_Document_Definition-8925_1](Tiu_Document_Definition-8925_1)
**Personal Document List**{::nomarkdown}<pre><code>  personal_document_list</code></pre>{:/} | 10 | This Multiple is used for storing personal lists of documents for type<br/>selection during entry/editing. | OBJECT |  | [Personal_Document_List-8925_9801](#Personal_Document_List-8925_9801)
**Timestamp**{::nomarkdown}<pre><code>  timestamp</code></pre>{:/} | 99 | This is the timestamp on the record in $H format which is compared with<br/>that on the compiled menu in ^XUTL("XQORM","DA;TIU(8925.98,",99) to<br/>determine whether recompilation is necessary. | STRING |  | 

### Subfile
#### <a name="Personal_Document_List-8925_9801"></a>Personal Document List

<dl>
<dt>ID</dt><dd>Personal_Document_List-8925_9801</dd>
<dt>File Type</dt><dd>8925.9801</dd>
<dt>Label</dt><dd>Personal Document List</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Title**{::nomarkdown}<pre><code>  title</code></pre>{:/} | .01 | This is the document to be included in your pick list of documents for<br/>the current document class. | POINTER | INDEXED<br/>REQUIRED | [Tiu_Document_Definition-8925_1](Tiu_Document_Definition-8925_1)
**Sequence**{::nomarkdown}<pre><code>  sequence</code></pre>{:/} | .02 | This is the sequence in which you wish the document to appear in your<br/>list. | NUMERIC |  | 
**Display Name**{::nomarkdown}<pre><code>  display_name</code></pre>{:/} | .03 | This is the name of the document to be displayed in menus. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}