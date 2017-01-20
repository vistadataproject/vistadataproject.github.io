---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Parameter_Definition-8989_51 

 property | value 
--- | --- 
 id | Parameter_Definition-8989_51
 fmId | 8989.51
 label | Parameter Definition
 location | ^XTV(8989.51,
 description | {::nomarkdown}This file contains the characteristics of parameters.  Entries in this<br/>file must be namespaced and they are exported by the package which owns<br/>them.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the parameter.  It should be namespaced according to the <br/>package from which the parameter originated.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| display_text | .02 | Display Text | {::nomarkdown}This is the displayable name for the parameter (allows mixed case, <br/>non-namespaced names).{:/} | STRING |  |  |  | 
| multiple_valued | .03 | Multiple Valued | {::nomarkdown}If this field is set to 'Yes', multiple instances of the parameter will be <br/>allowed for a single entity.  Otherwise, the value of the instance field<br/>for a given Entity-Parameter combination will always be '1'.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| instance_term | .04 | Instance Term | {::nomarkdown}This is a free text term that can be used when prompting for a new instance of <br/>the parameter (in the case where the parameter in multiple valued).  If not <br/>entered, the word \Instance\ will be used.{:/} | STRING |  |  |  | 
| value_term | .05 | Value Term | {::nomarkdown}This contains text that is issued as a prompt for the value.  If nothing<br/>is here, the prompt will be the word 'Value:'.{:/} | STRING |  |  |  | 
| prohibit_editing | .06 | Prohibit Editing | {::nomarkdown}This field prevents the parameter value from being edited with Fileman or<br/>any Parameters tools.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| value_data_type | 1.1 | Value Data Type | {::nomarkdown}This is the type of data this parameter will contain.  This field is used to <br/>define a call to the reader (^DIR) in most cases.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>free text</dd><dt>C</dt><dd>constant</dd><dt>S</dt><dd>set of codes</dd><dt>M</dt><dd>M code</dd><dt>N</dt><dd>numeric</dd><dt>Y</dt><dd>yes/no</dd><dt>D</dt><dd>date/time</dd><dt>W</dt><dd>word processing</dd><dt>P</dt><dd>pointer</dd></dl>{:/} | 
| value_domain | 1.2 | Value Domain | {::nomarkdown}This is a string that may be used to further specify the data type.  The <br/>string stored here should be appropriate for the second ^-piece of DIR(0) <br/>when used with the data type field.{:/} | STRING |  |  |  | 
| value_help | 1.3 | Value Help | {::nomarkdown}This field contains a line of help text that is displayed when the user <br/>requests help or encounters an error while entering the VALUE field in the <br/>PARAMETERS file.{:/} | STRING |  |  |  | 
| value_validation_code | 2 | Value Validation Code | {::nomarkdown}This field contains the M code that is placed in the third piece of DIR(0)<br/>when validating a value in the PARAMETERS file.{:/} | STRING |  |  |  | 
| value_screen_code | 3 | Value Screen Code | {::nomarkdown}This field contains M code that is used to screen allowable entries for the <br/>VALUE field in the PARAMETERS file.  The code is placed in DIR(\S\) when <br/>validating the entry.{:/} | STRING |  |  |  | 
| keyword | 4 | Keyword |  | [STRING] |  |  |  | 
| instance_data_type | 6.1 | Instance Data Type | {::nomarkdown}This is the type of data that is contained in the INSTANCE field of the <br/>PARAMETERS file, if multiple parameter instances per entity are allowed.  <br/>This field is used to define a call to the reader.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>F</dt><dd>free text</dd><dt>S</dt><dd>set of codes</dd><dt>N</dt><dd>numeric</dd><dt>Y</dt><dd>yes/no</dd><dt>D</dt><dd>date/time</dd><dt>P</dt><dd>pointer</dd></dl>{:/} | 
| instance_domain | 6.2 | Instance Domain | {::nomarkdown}This may be used to further define the data type for the INSTANCE field of <br/>the parameter.  The string stored here should be appropriate for the second <br/>^-piece of DIR(0) when used with the data type field.{:/} | STRING |  |  |  | 
| instance_help | 6.3 | Instance Help | {::nomarkdown}This field contains a line of help text that is displayed when the user <br/>requests help or encounters an error while entering the INSTANCE field of <br/>the PARAMETERS file.{:/} | STRING |  |  |  | 
| instance_validation_code | 7 | Instance Validation Code | {::nomarkdown}This field contains M code that is placed in the third piece of DIR(0) when <br/>validating the INSTANCE field in the PARAMETERS file.{:/} | STRING |  |  |  | 
| instance_screen_code | 8 | Instance Screen Code | {::nomarkdown}This field contains M code that is used to screen allowable entries for the <br/>INSTANCE field in the PARAMETERS file.  The code is placed in DIR(\S\) when <br/>validating the entry.{:/} | STRING |  |  |  | 
| description | 20 | Description | {::nomarkdown}A description of the parameter may be entered here.{:/} | STRING |  |  |  | 
| allowable_entities | 30 | Allowable Entities | {::nomarkdown}This multiple contains a list of entities (pointers to files) for which the <br/>parameter may be validly set.{:/} | [OBJECT] |  |  | [Allowable_Entities-8989_513](#Allowable_Entities-8989_513)  | 

## <a name="Allowable_Entities-8989_513"></a>Allowable_Entities-8989_513 

 property | value 
--- | --- 
 id | Allowable_Entities-8989_513
 label | Allowable Entities

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| precedence | .01 | Precedence | {::nomarkdown}A single parameter may be set for several different types of entities.  This <br/>lists the order in which entities are searched for a defined value.  For <br/>example, if a parameter may be set for a package, a location, and a user, <br/>and the respective precedents are 3, 2, 1, the value of the user parameter <br/>would be returned.  If it did not exist, the value of the location <br/>parameter.  If that did not exist, then the value of the package parameter.{:/} | NUMERIC |  | REQUIRED, INDEXED |  | 
| entity_file | .02 | Entity File | {::nomarkdown}This identifies an entity for which the parameter can be legally entered.  <br/>Entities are simply variable pointers.  The files which are eligible to be<br/>entities are listed in the PARAMETER ENTITY file.{:/} | POINTER |  | REQUIRED | Parameter_Entity-8989_518 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 9:52:13 pm</p>{:/}