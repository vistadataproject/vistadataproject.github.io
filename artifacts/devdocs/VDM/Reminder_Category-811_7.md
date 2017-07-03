---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Reminder_Category-811_7
# Reminder Category (811.7)
This file contains Reminder Categories. Reminder Categories are created at each site and are not released with the reminder package.   A Reminder Category is a list of reminders (or other reminder categories) and is used to group reminders for display in the CPRS GUI. Reminder categories are allocated to individual users, locations, service or system using the option PXRM CPRS LOOKUP CATEGORIES.  Reminder Categories can also be used in conjunction with Reminder Due Summary Reports. The user is given the option to select a Reminder Category or input a list of individual reminders.

<dl>
<dt>Global</dt><dd>^PXRMD(811.7,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the Reminder Category. | STRING | REQUIRED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 1 | This is the description of the Reminder Category. | STRING |  | 
**Individual Reminders**{::nomarkdown}<pre><code>  individual_reminders</code></pre>{:/} | 2 | This is the list of reminders that are in this category. | OBJECT |  | [Individual_Reminders-811_72](#Individual_Reminders-811_72)
**Sub-category**{::nomarkdown}<pre><code>  subcategory</code></pre>{:/} | 10 | This multiple allows you to include already existing categories as part<br/>of a new category. Sub-categories are always listed after individual<br/>reminders. | OBJECT |  | [Subcategory-811_701](#Subcategory-811_701)

### Subfile
#### <a name="Individual_Reminders-811_72"></a>Individual Reminders

<dl>
<dt>ID</dt><dd>Individual_Reminders-811_72</dd>
<dt>File Type</dt><dd>811.72</dd>
<dt>Label</dt><dd>Individual Reminders</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Individual Reminders**{::nomarkdown}<pre><code>  individual_reminders</code></pre>{:/} | .01 | This is a reminder definition. | POINTER | INDEXED<br/>REQUIRED | [Reminder_Definition-811_9](Reminder_Definition-811_9)
**Display Order**{::nomarkdown}<pre><code>  display_order</code></pre>{:/} | .02 | This is the order in which to display this reminder definition when the <br/>list of reminders in this category is displayed. | NUMERIC | REQUIRED | 

#### <a name="Subcategory-811_701"></a>Sub-category

<dl>
<dt>ID</dt><dd>Subcategory-811_701</dd>
<dt>File Type</dt><dd>811.701</dd>
<dt>Label</dt><dd>Sub-category</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sub-category**{::nomarkdown}<pre><code>  subcategory</code></pre>{:/} | .01 | This is an existing category that is to be included as part of a new<br/>category. | POINTER | INDEXED<br/>REQUIRED | [Reminder_Category-811_7](Reminder_Category-811_7)
**Display Order**{::nomarkdown}<pre><code>  display_order</code></pre>{:/} | .02 | This is the display order for the sub-categories. Sub-categories are<br/>displayed after individual reminders. | NUMERIC | REQUIRED | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}