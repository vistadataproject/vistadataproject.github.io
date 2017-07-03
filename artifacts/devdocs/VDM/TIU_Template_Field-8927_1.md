---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; TIU_Template_Field-8927_1
# TIU Template Field (8927.1)
None

<dl>
<dt>Global</dt><dd>^TIU(8927.1,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | Unique Dialog Field Name. | STRING | INDEXED<br/>REQUIRED | 
**Type**{::nomarkdown}<pre><code>  type-_02</code></pre>{:/} | .02 | Type of template field. | ENUMERATION | REQUIRED | {::nomarkdown}Radio Buttons: <em><strong>R</strong></em><br/>Check Boxes: <em><strong>X</strong></em><br/>Hyperlink: <em><strong>H</strong></em><br/>Text: <em><strong>T</strong></em><br/>Button: <em><strong>B</strong></em><br/>Numeric: <em><strong>N</strong></em><br/>Word Processing: <em><strong>W</strong></em><br/>Date: <em><strong>D</strong></em><br/>Combo Box: <em><strong>C</strong></em><br/>Edit Box: <em><strong>E</strong></em>{:/}
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .03 | Disable template field | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Length**{::nomarkdown}<pre><code>  length</code></pre>{:/} | .04 | This is the display length of edit and combo boxes. | NUMERIC |  | 
**Default Text**{::nomarkdown}<pre><code>  default_text</code></pre>{:/} | .05 | Default text. | STRING |  | 
**List Manager Text**{::nomarkdown}<pre><code>  list_manager_text</code></pre>{:/} | .06 | This is the text to insert into a boilerplate when expanded from<br/>a list manager interface. | STRING |  | 
**Default Index**{::nomarkdown}<pre><code>  default_index</code></pre>{:/} | .07 | Line # of default item in the ITEMS field. | NUMERIC |  | 
**Required**{::nomarkdown}<pre><code>  required</code></pre>{:/} | .08 | Indicates that entry into the template field is required. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Separate Lines**{::nomarkdown}<pre><code>  separate_lines</code></pre>{:/} | .09 | This field determines if Check Box or Radio Group fields should be<br/>displayed on separate lines, or if they should wrap. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Max Length**{::nomarkdown}<pre><code>  max_length</code></pre>{:/} | .1 | This is the maximum number of characters that can be typed<br/>in an edit box or combo box.  This can be longer than the<br/>Length field, which is the display width of the control. | NUMERIC |  | 
**Indent**{::nomarkdown}<pre><code>  indent</code></pre>{:/} | .11 | The number of characters to indent the control in the dialog.  Has no<br/>affect on the spacing of text generated from the control. | NUMERIC |  | 
**Pad**{::nomarkdown}<pre><code>  pad</code></pre>{:/} | .12 | The number of characters to indent the text generated<br/>from the control.  Has no affect on the position of<br/>the control in the dialog. | NUMERIC |  | 
**Min Value**{::nomarkdown}<pre><code>  min_value</code></pre>{:/} | .13 | Min allowed value on numeric fields. | NUMERIC |  | 
**Max Value**{::nomarkdown}<pre><code>  max_value</code></pre>{:/} | .14 | Max allowed value on numeric fields. | NUMERIC |  | 
**Increment**{::nomarkdown}<pre><code>  increment</code></pre>{:/} | .15 | Amount to increment numeric fields with the up<br/>and down arrow buttons are used. | NUMERIC |  | 
**Date Type**{::nomarkdown}<pre><code>  date_type</code></pre>{:/} | .16 | Indicates the type of control to use to represent a date value. | ENUMERATION |  | {::nomarkdown}DATE & REQUIRED TIME: <em><strong>R</strong></em><br/>COMBO YEAR ONLY: <em><strong>Y</strong></em><br/>DATE & TIME: <em><strong>T</strong></em><br/>COMBO STYLE: <em><strong>C</strong></em><br/>DATE: <em><strong>D</strong></em><br/>COMBO YEAR & MONTH: <em><strong>M</strong></em>{:/}
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 2 | A word processing field containing a description of the field, or other <br/>notes and history information. | STRING |  | 
**Url**{::nomarkdown}<pre><code>  url</code></pre>{:/} | 3 | Web address of hyperlink fields. | STRING |  | 
**Items**{::nomarkdown}<pre><code>  items</code></pre>{:/} | 10 | Word processing field representing either the list of items that can<br/>be selected, or the default word processing text. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}