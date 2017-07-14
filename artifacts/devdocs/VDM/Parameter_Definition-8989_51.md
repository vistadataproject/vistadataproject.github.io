---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Parameter_Definition-8989_51<br/>
<a name="top"></a>
# Parameter Definition (8989.51)
This file contains the characteristics of parameters.  Entries in this file must be namespaced and they are exported by the package which owns them.

**Global:** ^XTV(8989.51,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the parameter.  It should be namespaced according to the <br/>package from which the parameter originated. | STRING | INDEXED<br/>REQUIRED | 
**Display Text**{::nomarkdown}<pre><code>  display_text</code></pre>{:/} | .02 | This is the displayable name for the parameter (allows mixed case, <br/>non-namespaced names). | STRING |  | 
**Multiple Valued**{::nomarkdown}<pre><code>  multiple_valued</code></pre>{:/} | .03 | If this field is set to 'Yes', multiple instances of the parameter will be <br/>allowed for a single entity.  Otherwise, the value of the instance field<br/>for a given Entity-Parameter combination will always be '1'. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Instance Term**{::nomarkdown}<pre><code>  instance_term</code></pre>{:/} | .04 | This is a free text term that can be used when prompting for a new instance of <br/>the parameter (in the case where the parameter in multiple valued).  If not <br/>entered, the word "Instance" will be used. | STRING |  | 
**Value Term**{::nomarkdown}<pre><code>  value_term</code></pre>{:/} | .05 | This contains text that is issued as a prompt for the value.  If nothing<br/>is here, the prompt will be the word 'Value:'. | STRING |  | 
**Prohibit Editing**{::nomarkdown}<pre><code>  prohibit_editing</code></pre>{:/} | .06 | This field prevents the parameter value from being edited with Fileman or<br/>any Parameters tools. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Value Data Type**{::nomarkdown}<pre><code>  value_data_type</code></pre>{:/} | 1.1 | This is the type of data this parameter will contain.  This field is used to <br/>define a call to the reader (^DIR) in most cases. | ENUMERATION |  | {::nomarkdown}free text: <em><strong>F</strong></em><br/>constant: <em><strong>C</strong></em><br/>set of codes: <em><strong>S</strong></em><br/>M code: <em><strong>M</strong></em><br/>numeric: <em><strong>N</strong></em><br/>yes/no: <em><strong>Y</strong></em><br/>date/time: <em><strong>D</strong></em><br/>word processing: <em><strong>W</strong></em><br/>pointer: <em><strong>P</strong></em>{:/}
**Value Domain**{::nomarkdown}<pre><code>  value_domain</code></pre>{:/} | 1.2 | This is a string that may be used to further specify the data type.  The <br/>string stored here should be appropriate for the second ^-piece of DIR(0) <br/>when used with the data type field. | STRING |  | 
**Value Help**{::nomarkdown}<pre><code>  value_help</code></pre>{:/} | 1.3 | This field contains a line of help text that is displayed when the user <br/>requests help or encounters an error while entering the VALUE field in the <br/>PARAMETERS file. | STRING |  | 
**Value Validation Code**{::nomarkdown}<pre><code>  value_validation_code</code></pre>{:/} | 2 | This field contains the M code that is placed in the third piece of DIR(0)<br/>when validating a value in the PARAMETERS file. | STRING |  | 
**Value Screen Code**{::nomarkdown}<pre><code>  value_screen_code</code></pre>{:/} | 3 | This field contains M code that is used to screen allowable entries for the <br/>VALUE field in the PARAMETERS file.  The code is placed in DIR("S") when <br/>validating the entry. | STRING |  | 
**Keyword**{::nomarkdown}<pre><code>  keyword</code></pre>{:/} | 4 |  | STRING |  | 
**Instance Data Type**{::nomarkdown}<pre><code>  instance_data_type</code></pre>{:/} | 6.1 | This is the type of data that is contained in the INSTANCE field of the <br/>PARAMETERS file, if multiple parameter instances per entity are allowed.  <br/>This field is used to define a call to the reader. | ENUMERATION |  | {::nomarkdown}free text: <em><strong>F</strong></em><br/>set of codes: <em><strong>S</strong></em><br/>numeric: <em><strong>N</strong></em><br/>yes/no: <em><strong>Y</strong></em><br/>date/time: <em><strong>D</strong></em><br/>pointer: <em><strong>P</strong></em>{:/}
**Instance Domain**{::nomarkdown}<pre><code>  instance_domain</code></pre>{:/} | 6.2 | This may be used to further define the data type for the INSTANCE field of <br/>the parameter.  The string stored here should be appropriate for the second <br/>^-piece of DIR(0) when used with the data type field. | STRING |  | 
**Instance Help**{::nomarkdown}<pre><code>  instance_help</code></pre>{:/} | 6.3 | This field contains a line of help text that is displayed when the user <br/>requests help or encounters an error while entering the INSTANCE field of <br/>the PARAMETERS file. | STRING |  | 
**Instance Validation Code**{::nomarkdown}<pre><code>  instance_validation_code</code></pre>{:/} | 7 | This field contains M code that is placed in the third piece of DIR(0) when <br/>validating the INSTANCE field in the PARAMETERS file. | STRING |  | 
**Instance Screen Code**{::nomarkdown}<pre><code>  instance_screen_code</code></pre>{:/} | 8 | This field contains M code that is used to screen allowable entries for the <br/>INSTANCE field in the PARAMETERS file.  The code is placed in DIR("S") when <br/>validating the entry. | STRING |  | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 20 | A description of the parameter may be entered here. | STRING |  | 
**Allowable Entities**{::nomarkdown}<pre><code>  allowable_entities</code></pre>{:/} | 30 | This multiple contains a list of entities (pointers to files) for which the <br/>parameter may be validly set. | OBJECT |  | [Allowable_Entities-8989_513](#Allowable_Entities-8989_513)

## Sub-Files
### <a name="Allowable_Entities-8989_513"></a>Allowable Entities (8989.513)

<dl>
<dt>ID</dt><dd>Allowable_Entities-8989_513</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Precedence**{::nomarkdown}<pre><code>  precedence</code></pre>{:/} | .01 | A single parameter may be set for several different types of entities.  This <br/>lists the order in which entities are searched for a defined value.  For <br/>example, if a parameter may be set for a package, a location, and a user, <br/>and the respective precedents are 3, 2, 1, the value of the user parameter <br/>would be returned.  If it did not exist, the value of the location <br/>parameter.  If that did not exist, then the value of the package parameter. | NUMERIC | INDEXED<br/>REQUIRED | 
**Entity File**{::nomarkdown}<pre><code>  entity_file</code></pre>{:/} | .02 | This identifies an entity for which the parameter can be legally entered.  <br/>Entities are simply variable pointers.  The files which are eligible to be<br/>entities are listed in the PARAMETER ENTITY file. | POINTER | REQUIRED | [Parameter_Entity-8989_518](Parameter_Entity-8989_518)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}