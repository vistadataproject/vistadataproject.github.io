---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Health_Factors-9999999_64
# Health Factors (9999999.64)
This file contains a descriptive name of health factors, and their health factor category.   Changes to this data dictionary should be coordinated thru the IHS DBA.

<dl>
<dt>Global</dt><dd>^AUTTHF(</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Factor**{::nomarkdown}<pre><code>  factor</code></pre>{:/} | .01 | This is the name of the Health Factor (e.g., Current Smoker, Non-Tobacco User) | STRING | INDEXED<br/>REQUIRED | 
**Category**{::nomarkdown}<pre><code>  category</code></pre>{:/} | .03 |  This is the Health Factor that categorizes several factors into one group.<br/>For instance, Non smoker and Frequent Smoker would have the category of<br/>Tobacco.<br/> <br/>Enter the name of the Health Factor Category. | POINTER | INDEXED<br/>REQUIRED | [Health_Factors-9999999_64](Health_Factors-9999999_64)
**Short Name**{::nomarkdown}<pre><code>  short_name</code></pre>{:/} | .04 | (Optional)<br/>This is a 'short name' for this health factor. If defined, it will be<br/>used on the Health Factors Component of the Health Summary<br/> <br/>Enter a 2-10 character short name for this health factor. | STRING |  | 
**Use Only With Sex**{::nomarkdown}<pre><code>  use_only_with_sex</code></pre>{:/} | .05 | (Optional)<br/>This is the sex that this health factor is used for.<br/> <br/>Enter an "F" for female or an "M" for male. | ENUMERATION |  | {::nomarkdown}MALE: <em><strong>M</strong></em><br/>FEMALE: <em><strong>F</strong></em>{:/}
**Lower Age**{::nomarkdown}<pre><code>  lower_age</code></pre>{:/} | .06 | (Optional)<br/>This is the lower age limit that might apply to this health factor.<br/> <br/>Enter an age between 0 and 99999. | NUMERIC |  | 
**Upper Age**{::nomarkdown}<pre><code>  upper_age</code></pre>{:/} | .07 | (Optional)<br/>This is the upper age limit that applies to this health factor. <br/> <br/>Enter a number between 0 and 99999. | NUMERIC |  | 
**Display On Health Summary**{::nomarkdown}<pre><code>  display_on_health_summary</code></pre>{:/} | .08 | (Optional)<br/>This allows the health factor to be displayed on Health Summaries.<br/> <br/>Enter a yes to display or a no to not display. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>N</strong></em><br/>true: <em><strong>Y</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | .09 | (Optional)<br/>This this the synonym for this health factor.<br/> <br/>Enter a 3 to 30 character synonym for this health factor. | STRING | INDEXED | 
**Entry Type**{::nomarkdown}<pre><code>  entry_type</code></pre>{:/} | .1 | This is the type of health factor, (e.g.,"F" for factor or "C" for category).<br/> <br/>Enter an "F" for factor or a "C" for category. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}CATEGORY: <em><strong>C</strong></em><br/>FACTOR: <em><strong>F</strong></em>{:/}
**Inactive Flag**{::nomarkdown}<pre><code>  inactive_flag</code></pre>{:/} | .11 | This field is used to inactivate a health factor type. If this field<br/>contains a "1" then the health factor is inactive.  Inactive health<br/>factors cannot be selected in the manual data entry process.  Health<br/>factor entries should be made inactive when they are no longer used.  Do<br/>not delete the entry or change the meaning of the health factor entry.<br/> <br/>To make an inactive health factor active, enter the "@" symbol to delete<br/>the "1" from the field. | ENUMERATION |  | {::nomarkdown}INACTIVE: <em><strong>1</strong></em>{:/}
**Not Used With**{::nomarkdown}<pre><code>  not_used_with</code></pre>{:/} | 1101 | Some health factors are not used with others. This is the group of health<br/>factors that this factor is not used with. | POINTER |  | [Health_Factors-9999999_64](Health_Factors-9999999_64)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}