---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; TIU_Template_Field-8927_1 

 property | value 
--- | --- 
 id | TIU_Template_Field-8927_1
 fmId | 8927.1
 label | TIU Template Field
 location | ^TIU(8927.1,
 description | 

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}Unique Dialog Field Name.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| type-_02 | .02 | Type | {::nomarkdown}Type of template field.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>R</dt><dd>Radio Buttons</dd><dt>X</dt><dd>Check Boxes</dd><dt>H</dt><dd>Hyperlink</dd><dt>T</dt><dd>Text</dd><dt>B</dt><dd>Button</dd><dt>N</dt><dd>Numeric</dd><dt>W</dt><dd>Word Processing</dd><dt>D</dt><dd>Date</dd><dt>C</dt><dd>Combo Box</dd><dt>E</dt><dd>Edit Box</dd></dl>{:/} | 
| inactive | .03 | Inactive | {::nomarkdown}Disable template field{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| length | .04 | Length | {::nomarkdown}This is the display length of edit and combo boxes.{:/} | NUMERIC |  |  |  | 
| default_text | .05 | Default Text | {::nomarkdown}Default text.{:/} | STRING |  |  |  | 
| list_manager_text | .06 | List Manager Text | {::nomarkdown}This is the text to insert into a boilerplate when expanded from<br/>a list manager interface.{:/} | STRING |  |  |  | 
| default_index | .07 | Default Index | {::nomarkdown}Line # of default item in the ITEMS field.{:/} | NUMERIC |  |  |  | 
| required | .08 | Required | {::nomarkdown}Indicates that entry into the template field is required.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| separate_lines | .09 | Separate Lines | {::nomarkdown}This field determines if Check Box or Radio Group fields should be<br/>displayed on separate lines, or if they should wrap.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| max_length | .1 | Max Length | {::nomarkdown}This is the maximum number of characters that can be typed<br/>in an edit box or combo box.  This can be longer than the<br/>Length field, which is the display width of the control.{:/} | NUMERIC |  |  |  | 
| indent | .11 | Indent | {::nomarkdown}The number of characters to indent the control in the dialog.  Has no<br/>affect on the spacing of text generated from the control.{:/} | NUMERIC |  |  |  | 
| pad | .12 | Pad | {::nomarkdown}The number of characters to indent the text generated<br/>from the control.  Has no affect on the position of<br/>the control in the dialog.{:/} | NUMERIC |  |  |  | 
| min_value | .13 | Min Value | {::nomarkdown}Min allowed value on numeric fields.{:/} | NUMERIC |  |  |  | 
| max_value | .14 | Max Value | {::nomarkdown}Max allowed value on numeric fields.{:/} | NUMERIC |  |  |  | 
| increment | .15 | Increment | {::nomarkdown}Amount to increment numeric fields with the up<br/>and down arrow buttons are used.{:/} | NUMERIC |  |  |  | 
| date_type | .16 | Date Type | {::nomarkdown}Indicates the type of control to use to represent a date value.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>R</dt><dd>DATE & REQUIRED TIME</dd><dt>Y</dt><dd>COMBO YEAR ONLY</dd><dt>T</dt><dd>DATE & TIME</dd><dt>C</dt><dd>COMBO STYLE</dd><dt>D</dt><dd>DATE</dd><dt>M</dt><dd>COMBO YEAR & MONTH</dd></dl>{:/} | 
| description | 2 | Description | {::nomarkdown}A word processing field containing a description of the field, or other <br/>notes and history information.{:/} | STRING |  |  |  | 
| url | 3 | Url | {::nomarkdown}Web address of hyperlink fields.{:/} | STRING |  |  |  | 
| items | 10 | Items | {::nomarkdown}Word processing field representing either the list of items that can<br/>be selected, or the default word processing text.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:30:43 am</p>{:/}