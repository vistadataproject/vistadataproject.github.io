---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Health_Factors-9999999_64 

{::nomarkdown}<dl>
<dt>id</dt><dd>Health_Factors-9999999_64</dd>
<dt>fmId</dt><dd>9999999.64</dd>
<dt>label</dt><dd>Health Factors</dd>
<dt>location</dt><dd>^AUTTHF(</dd>
<dt>description</dt><dd>{::nomarkdown}This file contains a descriptive name of health factors, and their health<br/>factor category.<br/> <br/>Changes to this data dictionary should be coordinated thru the IHS DBA.{:/}</dd>
</dl>{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| factor | .01 | Factor | {::nomarkdown}This is the name of the Health Factor (e.g., Current Smoker, Non-Tobacco User){:/} | STRING |  | REQUIRED, INDEXED |  | 
| category | .03 | Category | {::nomarkdown} This is the Health Factor that categorizes several factors into one group.<br/>For instance, Non smoker and Frequent Smoker would have the category of<br/>Tobacco.<br/> <br/>Enter the name of the Health Factor Category.{:/} | POINTER |  | REQUIRED, INDEXED | Health_Factors-9999999_64 | 
| short_name | .04 | Short Name | {::nomarkdown}(Optional)<br/>This is a 'short name' for this health factor. If defined, it will be<br/>used on the Health Factors Component of the Health Summary<br/> <br/>Enter a 2-10 character short name for this health factor.{:/} | STRING |  |  |  | 
| use_only_with_sex | .05 | Use Only With Sex | {::nomarkdown}(Optional)<br/>This is the sex that this health factor is used for.<br/> <br/>Enter an \F\ for female or an \M\ for male.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>M</dt><dd>MALE</dd><dt>F</dt><dd>FEMALE</dd></dl>{:/} | 
| lower_age | .06 | Lower Age | {::nomarkdown}(Optional)<br/>This is the lower age limit that might apply to this health factor.<br/> <br/>Enter an age between 0 and 99999.{:/} | NUMERIC |  |  |  | 
| upper_age | .07 | Upper Age | {::nomarkdown}(Optional)<br/>This is the upper age limit that applies to this health factor. <br/> <br/>Enter a number between 0 and 99999.{:/} | NUMERIC |  |  |  | 
| display_on_health_summary | .08 | Display On Health Summary | {::nomarkdown}(Optional)<br/>This allows the health factor to be displayed on Health Summaries.<br/> <br/>Enter a yes to display or a no to not display.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>N</dt><dd>false</dd><dt>Y</dt><dd>true</dd></dl>{:/} | 
| synonym | .09 | Synonym | {::nomarkdown}(Optional)<br/>This this the synonym for this health factor.<br/> <br/>Enter a 3 to 30 character synonym for this health factor.{:/} | STRING |  | INDEXED |  | 
| entry_type | .1 | Entry Type | {::nomarkdown}This is the type of health factor, (e.g.,\F\ for factor or \C\ for category).<br/> <br/>Enter an \F\ for factor or a \C\ for category.{:/} | ENUMERATION |  | REQUIRED, INDEXED | {::nomarkdown}<dl><dt>C</dt><dd>CATEGORY</dd><dt>F</dt><dd>FACTOR</dd></dl>{:/} | 
| inactive_flag | .11 | Inactive Flag | {::nomarkdown}This field is used to inactivate a health factor type. If this field<br/>contains a \1\ then the health factor is inactive.  Inactive health<br/>factors cannot be selected in the manual data entry process.  Health<br/>factor entries should be made inactive when they are no longer used.  Do<br/>not delete the entry or change the meaning of the health factor entry.<br/> <br/>To make an inactive health factor active, enter the \@\ symbol to delete<br/>the \1\ from the field.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| not_used_with | 1101 | Not Used With | {::nomarkdown}Some health factors are not used with others. This is the group of health<br/>factors that this factor is not used with.{:/} | [POINTER] |  |  | {id:Health_Factors-9999999_64} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 7:58:46 pm</p>{:/}