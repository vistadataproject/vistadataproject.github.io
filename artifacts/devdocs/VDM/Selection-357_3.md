---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Selection-357_3<br/>
<a name="top"></a>
# Selection (357.3)
  Contains the items appearing on the SELECTION LISTS. A selection can be composed of several fields, hence can occupy several subcolumns. Only the text is stored here, not the MARKING SYMBOLS.

**Global:** ^IBE(357.3,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Selection Id**{::nomarkdown}<pre><code>  selection_id</code></pre>{:/} | .01 |  <br/>The ID passed by the package. | STRING | INDEXED<br/>REQUIRED | 
**Place Holder Only**{::nomarkdown}<pre><code>  place_holder_only</code></pre>{:/} | .02 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Selection List**{::nomarkdown}<pre><code>  selection_list</code></pre>{:/} | .03 |  <br/>Identifies the selection list that this selection belongs on. | POINTER | INDEXED<br/>REQUIRED | [Selection_List-357_2](Selection_List-357_2)
**Selection Group**{::nomarkdown}<pre><code>  selection_group</code></pre>{:/} | .04 |  <br/>The SELECTION GROUP that the selection belongs to.The selection will<br/>appear under the group header on the form. | POINTER | INDEXED<br/>REQUIRED | [Selection_Group-357_4](Selection_Group-357_4)
**Print Order Within Group**{::nomarkdown}<pre><code>  print_order_within_group</code></pre>{:/} | .05 | Determines the order that this selection entry will appear in under the<br/>header for the selection group. | NUMERIC | REQUIRED | 
**Place Holder Text**{::nomarkdown}<pre><code>  place_holder_text</code></pre>{:/} | .06 |  | STRING |  | 
**Use As Subheader?**{::nomarkdown}<pre><code>  use_as_subheader</code></pre>{:/} | .07 | One use that is being made of selections that are defined as place holders<br/>is to use them as subheaders. When this is done the text should be<br/>included with the header for the following selections. This field is<br/>used to allow that.<br/> <br/>If this field is set to YES for a place holder that contains text, the<br/>text will be used as a subheader (#1) and will be concatenated to the end<br/>of the header passed to PCE. The subheader is in use until a place<br/>holder is reached that ends it, or the group ends. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Stop Using Subheader?**{::nomarkdown}<pre><code>  stop_using_subheader</code></pre>{:/} | .08 | This field is used to signal that the subheader in use, defined by prior<br/>place holders, should be ended. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Quantity**{::nomarkdown}<pre><code>  quantity</code></pre>{:/} | .09 | This field contains the number of occurrences for a particular selection.<br/>A value placed in this field will be passed to PCE as the quantity.<br/>Presently, the quantity field will only be asked for CPT codes. | NUMERIC |  | 
**Subcolumn Value**{::nomarkdown}<pre><code>  subcolumn_value</code></pre>{:/} | 1 |  <br/>The selection can be composed of multiple fields. Each field occupies its<br/>own subcolumn on the form. | OBJECT |  | [Subcolumn_Value-357_31](#Subcolumn_Value-357_31)
**Narrative To Send To Pce**{::nomarkdown}<pre><code>  narrative_to_send_to_pce</code></pre>{:/} | 2.01 | Enter the narrative that should be sent to PCE when this selection is<br/>scanned.  This will be the provider narrative that is shown in PCE and<br/>Problem List.  If there is no entry in this field the text as it appears<br/>on the form will be sent as the narrative.<br/><br/>This field can only be entered for the type of interfaces that allow<br/>adding this narrative, and then send the narrative to PCE. | STRING |  | 
**Clinical Lexicon Entry**{::nomarkdown}<pre><code>  clinical_lexicon_entry</code></pre>{:/} | 2.02 | This is the clinical lexicon entry this term should be associated with.<br/>Generally this is only completed for selections based on diagnosis.<br/>The clinical lexicon entry will be passed to pce when this selection is<br/>scanned.  This allows maintaining the patient problem list associated <br/>with clinical terms. | POINTER |  | [Expressions-757_01](Expressions-757_01)
**Second Code**{::nomarkdown}<pre><code>  second_code</code></pre>{:/} | 2.03 | Used to send additional codes along when one entry is bubbled. | STRING |  | 
**Third Code**{::nomarkdown}<pre><code>  third_code</code></pre>{:/} | 2.04 | Used to pass a third code to PCE for this one entry. | STRING |  | 
**Cpt Modifier**{::nomarkdown}<pre><code>  cpt_modifier</code></pre>{:/} | 3 |  | OBJECT |  | [Cpt_Modifier-357_33](#Cpt_Modifier-357_33)
**Icd Code Edit Date/time**{::nomarkdown}<pre><code>  icd_code_edit_date_time</code></pre>{:/} | 4.01 | Indicates date and time when the ICD diagnosis code was edited in the <br/>block/encounter form.             | DATE-TIME |  | 
**Icd Changes Made By**{::nomarkdown}<pre><code>  icd_changes_made_by</code></pre>{:/} | 4.02 | Indicates the user who last made ICD changes to this record. | POINTER |  | [New_Person-200](New_Person-200)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Subcolumn_Value-357_31"></a>Subcolumn Value (357.31)

<dl>
<dt>ID</dt><dd>Subcolumn_Value-357_31</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Subcolumn Number**{::nomarkdown}<pre><code>  subcolumn_number</code></pre>{:/} | .01 |  <br/>The order that the subcolumn should appear on the form. | NUMERIC | INDEXED<br/>REQUIRED | 
**Subcolumn Value**{::nomarkdown}<pre><code>  subcolumn_value</code></pre>{:/} | .02 |  <br/>The text that should appear in the subcolumn. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Cpt_Modifier-357_33"></a>Cpt Modifier (357.33)

<dl>
<dt>ID</dt><dd>Cpt_Modifier-357_33</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Cpt Modifier**{::nomarkdown}<pre><code>  cpt_modifier</code></pre>{:/} | .01 | The two character .01 field of the CPT MODIFIER file is stored. | STRING | INDEXED<br/>REQUIRED | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | 1 | Description (name) of CPT Modifier. | STRING |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}