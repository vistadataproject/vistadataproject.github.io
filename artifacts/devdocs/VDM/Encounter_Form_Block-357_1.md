---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Encounter_Form_Block-357_1<br/>
<a name="top"></a>
# Encounter Form Block (357.1)
Warning: Do Not Re-Index this file.  If this file should accidentally          be re-indexed, use the option to Recompile All Forms.  This will          correct any printing problems that might occur.   This file contains the description of encounter form blocks.  A block is a rectangular areas on an encounter form.  Blocks are the basic building unit of encounter forms.  All data on a form is contained within a block and the block is sized and positioned to create a usable form.

**Global:** ^IBE(357.1,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  <br/> <br/>The name of the block. | STRING | INDEXED<br/>REQUIRED | 
**Form**{::nomarkdown}<pre><code>  form</code></pre>{:/} | .02 |  <br/>The form the block appears on. | POINTER | INDEXED<br/>REQUIRED | Encounter_Form-357
**Block&#x27;s Starting Row**{::nomarkdown}<pre><code>  blocks_starting_row</code></pre>{:/} | .04 | The row  on the encounter form that the block starts on. | NUMERIC | REQUIRED | 
**Block&#x27;s Starting Column**{::nomarkdown}<pre><code>  blocks_starting_column</code></pre>{:/} | .05 | The column on the encounter form that the block starts on. | NUMERIC | REQUIRED | 
**Width In Characters**{::nomarkdown}<pre><code>  width_in_characters</code></pre>{:/} | .06 |  <br/>The width of the block, measured in the number of characters across. | NUMERIC | REQUIRED | 
**Height In Lines**{::nomarkdown}<pre><code>  height_in_lines</code></pre>{:/} | .07 |  <br/>The height of the block, measured by the number of lines it takes up. | NUMERIC | REQUIRED | 
**Outline Type**{::nomarkdown}<pre><code>  outline_type</code></pre>{:/} | .1 |  <br/>How the block is outlined on the form. | ENUMERATION | REQUIRED | {::nomarkdown}INVISIBLE: <em><strong>2</strong></em><br/>SOLID LINE: <em><strong>1</strong></em>{:/}
**Block Header**{::nomarkdown}<pre><code>  block_header</code></pre>{:/} | .11 |  <br/>The text appearing at the top of the block. | STRING |  | 
**Header Appearance**{::nomarkdown}<pre><code>  header_appearance</code></pre>{:/} | .12 |  <br/>This field determines the appearance of the block's header. | STRING |  | 
**Brief Description**{::nomarkdown}<pre><code>  brief_description</code></pre>{:/} | .13 |  <br/>A brief description of the contents or use of the block. | STRING | REQUIRED | 
**Toolkit Order**{::nomarkdown}<pre><code>  toolkit_order</code></pre>{:/} | .14 | A number>0 in this field means that the block is part of the toolkit.<br/>The value determines the order that the block will be listed to the<br/>screen that displays the toolkit blocks. | NUMERIC |  | 
**Compiled Strings**{::nomarkdown}<pre><code>  compiled_strings</code></pre>{:/} | 1 | Contains a compiled list of the calls, along with the arguments, that should<br/>be made to the routine that prints strings to the form. Before printing, the<br/>block offset is added to the string position. | OBJECT |  | [Compiled_Strings-357_11](#Compiled_Strings-357_11)
**Compiled Vertical Lines**{::nomarkdown}<pre><code>  compiled_vertical_lines</code></pre>{:/} | 2 | A compiled list of the vertical lines that are needed to print the block.<br/>The arguments to the routine that prints the line are included. The<br/>block's offset is must be added to the line's position. | OBJECT |  | [Compiled_Vertical_Lines-357_12](#Compiled_Vertical_Lines-357_12)
**Compiled Bubbles**{::nomarkdown}<pre><code>  compiled_bubbles</code></pre>{:/} | 3 | A compiled list of the bubbles appearing in the block. The arguments to the <br/>routine that prints the bubble are included. The block's offset must be added<br/>to the bubbles position. | OBJECT |  | [Compiled_Bubbles-357_13](#Compiled_Bubbles-357_13)
**Compiled Hand Print Fields**{::nomarkdown}<pre><code>  compiled_hand_print_fields</code></pre>{:/} | 4 | A compiled list of the hand print fields appearing in the block. The<br/>arguments to the routine that prints the hand print fields are included.<br/>The block's offset must be added to the hand print field's position. | OBJECT |  | [Compiled_Hand_Print_Fields-357_14](#Compiled_Hand_Print_Fields-357_14)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Compiled_Strings-357_11"></a>Compiled Strings (357.11)

<dl>
<dt>ID</dt><dd>Compiled_Strings-357_11</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**String Row**{::nomarkdown}<pre><code>  string_row</code></pre>{:/} | .01 | The row that the string should be printed at. | NUMERIC | INDEXED<br/>REQUIRED | 
**Column**{::nomarkdown}<pre><code>  column</code></pre>{:/} | .02 | The column that the string should be printed at. | NUMERIC | REQUIRED | 
**Options**{::nomarkdown}<pre><code>  options</code></pre>{:/} | .03 | The display characteristics that the string should have. | STRING |  | 
**Width**{::nomarkdown}<pre><code>  width</code></pre>{:/} | .04 | The width that the printed string should occupy. (optional) | NUMERIC |  | 
**String**{::nomarkdown}<pre><code>  string</code></pre>{:/} | .05 | The string that should be printed. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Compiled_Vertical_Lines-357_12"></a>Compiled Vertical Lines (357.12)

<dl>
<dt>ID</dt><dd>Compiled_Vertical_Lines-357_12</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Vertical Line Row**{::nomarkdown}<pre><code>  vertical_line_row</code></pre>{:/} | .01 | The row that the line should begin at. | NUMERIC | INDEXED<br/>REQUIRED | 
**Column**{::nomarkdown}<pre><code>  column</code></pre>{:/} | .02 | The column that the line should begin at. | NUMERIC | REQUIRED | 
**Length**{::nomarkdown}<pre><code>  length</code></pre>{:/} | .03 | The length of the line. | NUMERIC | REQUIRED | 
**Character**{::nomarkdown}<pre><code>  character</code></pre>{:/} | .04 | The string (probably a single character) to use to create the string. (optional) | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Compiled_Bubbles-357_13"></a>Compiled Bubbles (357.13)

<dl>
<dt>ID</dt><dd>Compiled_Bubbles-357_13</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Row**{::nomarkdown}<pre><code>  row</code></pre>{:/} | .01 |  | NUMERIC | INDEXED<br/>REQUIRED | 
**Column**{::nomarkdown}<pre><code>  column</code></pre>{:/} | .02 |  | NUMERIC | REQUIRED | 
**Type Of Data**{::nomarkdown}<pre><code>  type_of_data</code></pre>{:/} | .03 | The value associated with the bubble is passed to the package interface<br/>to pass the data to DHCP. | POINTER |  | Package_Interface-357_6
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | .04 |  | STRING |  | 
**Field Name**{::nomarkdown}<pre><code>  field_name</code></pre>{:/} | .05 |  | STRING | REQUIRED | 
**Field Id**{::nomarkdown}<pre><code>  field_id</code></pre>{:/} | .06 |  | STRING | REQUIRED | 
**Selection Rule**{::nomarkdown}<pre><code>  selection_rule</code></pre>{:/} | .07 |  | ENUMERATION | REQUIRED | {::nomarkdown}AT LEAST ONE: <em><strong>3</strong></em><br/>ANY NUMBER: <em><strong>0</strong></em><br/>EXACTLY ONE: <em><strong>1</strong></em><br/>AT MOST ONE: <em><strong>2</strong></em>{:/}
**Displayed Text**{::nomarkdown}<pre><code>  displayed_text</code></pre>{:/} | .08 |  | STRING | REQUIRED | 
**Displayed Header**{::nomarkdown}<pre><code>  displayed_header</code></pre>{:/} | .09 |  | STRING |  | 
**Data Qualifier**{::nomarkdown}<pre><code>  data_qualifier</code></pre>{:/} | .1 |  | POINTER |  | Aics_Data_Qualifiers-357_98
**Dynamic?**{::nomarkdown}<pre><code>  dynamic</code></pre>{:/} | .11 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Item Count**{::nomarkdown}<pre><code>  item_count</code></pre>{:/} | .12 |  | NUMERIC |  | 
**Quantity**{::nomarkdown}<pre><code>  quantity</code></pre>{:/} | .13 | This field will be populated if more than one occurrence of the entry<br/>is required.  The quantity field will contain the number of occurrences<br/>to pass to PCE for the value referenced. | NUMERIC |  | 
**Subheader**{::nomarkdown}<pre><code>  subheader</code></pre>{:/} | 1 | The subheader will be concatenated with the narrative before passing it to<br/>PCE. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Compiled_Hand_Print_Fields-357_14"></a>Compiled Hand Print Fields (357.14)

<dl>
<dt>ID</dt><dd>Compiled_Hand_Print_Fields-357_14</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Row For Hand Print**{::nomarkdown}<pre><code>  row_for_hand_print</code></pre>{:/} | .01 |  | NUMERIC | INDEXED<br/>REQUIRED | 
**Column For Hand Print**{::nomarkdown}<pre><code>  column_for_hand_print</code></pre>{:/} | .02 |  | NUMERIC | REQUIRED | 
**Width**{::nomarkdown}<pre><code>  width</code></pre>{:/} | .03 |  | NUMERIC | REQUIRED | 
**Type Of Data**{::nomarkdown}<pre><code>  type_of_data</code></pre>{:/} | .04 |  | POINTER | REQUIRED | Package_Interface-357_6
**Number Of Hand Print Lines**{::nomarkdown}<pre><code>  number_of_hand_print_lines</code></pre>{:/} | .06 |  | NUMERIC | REQUIRED | 
**Field Id**{::nomarkdown}<pre><code>  field_id</code></pre>{:/} | .07 | Identifies the form block object that contains the print field. | STRING | REQUIRED | 
**Field Name**{::nomarkdown}<pre><code>  field_name</code></pre>{:/} | .08 | The name of the form block object that contains the print field. | STRING | REQUIRED | 
**Displayed Header**{::nomarkdown}<pre><code>  displayed_header</code></pre>{:/} | .09 |  | STRING |  | 
**Data Qualifier**{::nomarkdown}<pre><code>  data_qualifier</code></pre>{:/} | .1 |  | POINTER |  | Aics_Data_Qualifiers-357_98
**Item Number**{::nomarkdown}<pre><code>  item_number</code></pre>{:/} | .12 |  | NUMERIC |  | 
**Print?**{::nomarkdown}<pre><code>  print</code></pre>{:/} | .14 |  | ENUMERATION |  | {::nomarkdown}NO, DO NOT PRINT: <em><strong>0</strong></em><br/>YES, FOR ICR: <em><strong>2</strong></em><br/>YES, NOT FOR ICR: <em><strong>1</strong></em>{:/}
**Read?**{::nomarkdown}<pre><code>  read</code></pre>{:/} | .15 |  | ENUMERATION |  | {::nomarkdown}NO, DO NOT READ: <em><strong>0</strong></em><br/>YES, READ WITHOUT ICR: <em><strong>1</strong></em><br/>YES, READ WITH ICR: <em><strong>2</strong></em><br/>YES, ICR PRINT FORMAT, READ WITHOUT ICR: <em><strong>3</strong></em>{:/}
**Data Element**{::nomarkdown}<pre><code>  data_element</code></pre>{:/} | .17 |  | POINTER |  | Aics_Data_Elements-359_1

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}