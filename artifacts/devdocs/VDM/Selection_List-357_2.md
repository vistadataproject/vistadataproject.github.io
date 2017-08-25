---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Selection_List-357_2<br/>
<a name="top"></a>
# Selection List (357.2)
          This file contains descriptions of 'selection lists'.  A selection list is a rectangular area in a block that contains a list. The list has 'columns' of 'selections'. The columns have 'subcolumns', which can either contain text or  a 'marking area'.  A marking area is an area on the form designed to be checked to indicate that a choice is being made from the list.

**Global:** ^IBE(357.2,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  <br/>The name of the list. | STRING | INDEXED<br/>REQUIRED | 
**Block**{::nomarkdown}<pre><code>  block</code></pre>{:/} | .02 | The block that the list appears on. The position of the selection list is<br/>relative to the block. | POINTER | INDEXED<br/>REQUIRED | [Encounter_Form_Block-357_1](Encounter_Form_Block-357_1)
**Subcolumn Header Appearance**{::nomarkdown}<pre><code>  subcolumn_header_appearance</code></pre>{:/} | .04 | Allows the form designer to select the appearance of the subcolumn<br/>headers. | STRING |  | 
**Column Header**{::nomarkdown}<pre><code>  column_header</code></pre>{:/} | .05 |  <br/>The text that appears at the top of each column (NOT subcolumn). | STRING |  | 
**Column Header Appearance**{::nomarkdown}<pre><code>  column_header_appearance</code></pre>{:/} | .06 |  <br/>The column header can be give characteristics, such as centered and bold. | STRING |  | 
**Subcolumns Separated With?**{::nomarkdown}<pre><code>  subcolumns_separated_with</code></pre>{:/} | .07 |  <br/>What characters are used to separate the subcolumns. | ENUMERATION | REQUIRED | {::nomarkdown}TWO SPACES: <em><strong>2</strong></em><br/>LINE: <em><strong>3</strong></em><br/>SPACE/LINE/SPACE: <em><strong>4</strong></em><br/>ONE SPACE: <em><strong>1</strong></em>{:/}
**Extra Lines For Selections**{::nomarkdown}<pre><code>  extra_lines_for_selections</code></pre>{:/} | .08 |  <br/>Each entry on the list prints on only one line. However, if you want<br/>extra space to appear below each entry on the list then this field should<br/>be set to the number of blank lines desired. | NUMERIC |  | 
**Group Header Appearance**{::nomarkdown}<pre><code>  group_header_appearance</code></pre>{:/} | .09 | This field determines the appearance of the group headers. | STRING |  | 
**Selection Interface**{::nomarkdown}<pre><code>  selection_interface</code></pre>{:/} | .11 |  <br/>This identifies the Package Interface that is used to fill the list. | POINTER | REQUIRED | Package_Interface-357_6
**Underline Selections?**{::nomarkdown}<pre><code>  underline_selections</code></pre>{:/} | .12 |  <br/>Answer yes if each entry on the list should be underlined. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Number Of Columns**{::nomarkdown}<pre><code>  number_of_columns</code></pre>{:/} | .13 |  <br/>A selection list may be displayed in an area several columns wide. The<br/>starting position and height of each column may be specified. However, it<br/>is not necessary because defaults values will be used. The defaults used<br/>assume that nothing else is going in the block except the selection list<br/>and that the entire block should be filled. | NUMERIC |  | 
**Dynamic Selections**{::nomarkdown}<pre><code>  dynamic_selections</code></pre>{:/} | .14 | This is used to flag the list as being created at print time as opposed to<br/>design time. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Print Complete**{::nomarkdown}<pre><code>  print_complete</code></pre>{:/} | .15 | Applies only to dynamic selection lists. This controls the overflow behavior<br/>of the list. YES means that if the data on the list does not fit, it should<br/>be printed on a separate page. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Number Of Other**{::nomarkdown}<pre><code>  number_of_other</code></pre>{:/} | .16 | Space will be allocated at the bottom of the selection list for the user<br/>to enter this number of items not found on the list. | NUMERIC |  | 
**What To Allocate Space For**{::nomarkdown}<pre><code>  what_to_allocate_space_for</code></pre>{:/} | .17 | This field determines what fields to place on the form for writting in<br/>other items not found on the list. | ENUMERATION |  | {::nomarkdown}CODE ONLY: <em><strong>2</strong></em><br/>NARRATIVE AND CODE: <em><strong>3</strong></em><br/>NARRATIVE ONLY: <em><strong>1</strong></em>{:/}
**What To Send To Pce**{::nomarkdown}<pre><code>  what_to_send_to_pce</code></pre>{:/} | .18 | This determines what is sent to PCE. For example, some types of data may<br/>require that a code be sent, but the narrative may be optional. | ENUMERATION |  | {::nomarkdown}CODE ONLY: <em><strong>2</strong></em><br/>NARRATIVE AND CODE: <em><strong>3</strong></em><br/>NARRATIVE ONLY: <em><strong>1</strong></em>{:/}
**Clinical Reminder Display Type**{::nomarkdown}<pre><code>  clinical_reminder_display_type</code></pre>{:/} | .19 | Enter "DUE NOW ONLY" if you want to print only those reminders that<br/>are currently due (this is sometimes called clinical reminder mode).<br/> <br/>Enter "ALL REMINDERS" if you want to print all applicable reminders<br/>and a date due (this is sometimes called clincal maintenance mode).<br/> <br/>Reminders that are not applicable for a patient will not print. | ENUMERATION |  | {::nomarkdown}DUE NOW ONLY: <em><strong>1</strong></em><br/>ALL REMINDERS: <em><strong>2</strong></em>{:/}
**List Column**{::nomarkdown}<pre><code>  list_column</code></pre>{:/} | 1 | A column is a rectangular area that has the necessary width to display a<br/>single item on the list. | OBJECT |  | [List_Column-357_21](#List_Column-357_21)
**Subcolumn Number**{::nomarkdown}<pre><code>  subcolumn_number</code></pre>{:/} | 2 |  <br/>A subcolumn contains one field of the entry on the list. The subcolumn<br/>order is the order, from left to right, that the subcolumns will appear<br/>in. | OBJECT |  | [Subcolumn_Number-357_22](#Subcolumn_Number-357_22)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="List_Column-357_21"></a>List Column (357.21)

<dl>
<dt>ID</dt><dd>List_Column-357_21</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**List Column Number**{::nomarkdown}<pre><code>  list_column_number</code></pre>{:/} | .01 | The order that the columns will be filled. Column 1 will first be filled<br/>with items, then column 2, etc. | NUMERIC | INDEXED<br/>REQUIRED | 
**List Column&#x27;s Starting Row**{::nomarkdown}<pre><code>  list_columns_starting_row</code></pre>{:/} | .02 | The row, relative to the block, that the column should begin in. This is<br/>optional, since default values can be used. | NUMERIC |  | 
**List Column&#x27;s Starting Column**{::nomarkdown}<pre><code>  list_columns_starting_column</code></pre>{:/} | .03 |  <br/>The column (# of characters to the right) that the list column should<br/>begin in, relative to the block. It is optional, since a default value can<br/>be used. | NUMERIC |  | 
**List Column Height**{::nomarkdown}<pre><code>  list_column_height</code></pre>{:/} | .04 |  <br/>The number of lines the column should occupy. This is optional - if not<br/>supplied the column will extend to the bottom of the block. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Subcolumn_Number-357_22"></a>Subcolumn Number (357.22)

<dl>
<dt>ID</dt><dd>Subcolumn_Number-357_22</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Subcolumn Number**{::nomarkdown}<pre><code>  subcolumn_number</code></pre>{:/} | .01 |  <br/>The order that the subcolumn will appear on the form. | NUMERIC | INDEXED<br/>REQUIRED | 
**Subcolumn Header**{::nomarkdown}<pre><code>  subcolumn_header</code></pre>{:/} | .02 |  <br/>The text that will appear at the top of the subcolumn. | STRING |  | 
**Subcolumn Width**{::nomarkdown}<pre><code>  subcolumn_width</code></pre>{:/} | .03 |  <br/>The width of the subcolumn. If the subcolumn contains a MARKING AREA then<br/>the width of the MARKING AREA overrides what ever this is. | NUMERIC |  | 
**Type Of Subcolumn**{::nomarkdown}<pre><code>  type_of_subcolumn</code></pre>{:/} | .04 |  <br/>The subcolumn can contain either text, derived from what is returned by<br/>the PACKAGE INTERFACE, or a MARKING AREA, which is meant to be written in<br/>to select an entry on the list. | ENUMERATION | REQUIRED | {::nomarkdown}TEXT: <em><strong>1</strong></em><br/>MARKING: <em><strong>2</strong></em>{:/}
**Subcolumn&#x27;s Data**{::nomarkdown}<pre><code>  subcolumns_data</code></pre>{:/} | .05 |  <br/>The Package Interface returns a record, which is composed of fields. This<br/>identifies which field goes in the subcolumn. | NUMERIC |  | 
**Marking Area**{::nomarkdown}<pre><code>  marking_area</code></pre>{:/} | .06 |  <br/>This identifies which MARKING AREA should go in the subcolumn. | POINTER |  | Marking_Area_Type-357_91
**Allow Editing Of Text?**{::nomarkdown}<pre><code>  allow_editing_of_text</code></pre>{:/} | .07 |  <br/>This determines whether or not the user, when selecting items to appear on<br/>the list, will be able to edit the text appearing in the subcolum. This is<br/>ignored if the subcolumn contains a MARKING AREA. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Do Not Underline Marking Area?**{::nomarkdown}<pre><code>  do_not_underline_marking_area</code></pre>{:/} | .08 | Underlining can be turned off for the subcolumn even if it is turned on<br/>for the list as a whole. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Data Qualifier**{::nomarkdown}<pre><code>  data_qualifier</code></pre>{:/} | .09 | Used to associate a data qualifier to a subcolumn that is used for making<br/>selections. | POINTER |  | Aics_Data_Qualifiers-357_98
**Selection Rule**{::nomarkdown}<pre><code>  selection_rule</code></pre>{:/} | .1 | A selection rule can be applied to a subcolumn used to make selections,<br/>i.e., one that contains marking areas. | ENUMERATION |  | {::nomarkdown}ANY NUMBER: <em><strong>0</strong></em><br/>AT LEAST ONE (1 or more): <em><strong>3</strong></em><br/>EXACTLY ONE: <em><strong>1</strong></em><br/>AT MOST ONE (0 or 1): <em><strong>2</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}