---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Reminder_Category-811_7 

 property | value 
--- | --- 
 id | Reminder_Category-811_7
 fmId | 811.7
 label | Reminder Category
 location | ^PXRMD(811.7,
 description | {::nomarkdown}This file contains Reminder Categories. Reminder Categories are<br/>created at each site and are not released with the reminder package.<br/> <br/>A Reminder Category is a list of reminders (or other reminder<br/>categories) and is used to group reminders for display in the CPRS<br/>GUI. Reminder categories are allocated to individual users,<br/>locations, service or system using the option PXRM CPRS LOOKUP<br/>CATEGORIES.<br/><br/>Reminder Categories can also be used in conjunction with Reminder<br/>Due Summary Reports. The user is given the option to select a<br/>Reminder Category or input a list of individual reminders.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the Reminder Category.{:/} | STRING |  | REQUIRED |  | 
| description | 1 | Description | {::nomarkdown}This is the description of the Reminder Category.{:/} | STRING |  |  |  | 
| individual_reminders | 2 | Individual Reminders | {::nomarkdown}This is the list of reminders that are in this category.{:/} | [OBJECT] |  |  | [Individual_Reminders-811_72](#Individual_Reminders-811_72)  | 
| subcategory | 10 | Sub-category | {::nomarkdown}This multiple allows you to include already existing categories as part<br/>of a new category. Sub-categories are always listed after individual<br/>reminders.{:/} | [OBJECT] |  |  | [Subcategory-811_701](#Subcategory-811_701)  | 

## <a name="Individual_Reminders-811_72"></a>Individual_Reminders-811_72 

 property | value 
--- | --- 
 id | Individual_Reminders-811_72
 label | Individual Reminders

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| individual_reminders | .01 | Individual Reminders | {::nomarkdown}This is a reminder definition.{:/} | POINTER |  | REQUIRED, INDEXED | Reminder_Definition-811_9 | 
| display_order | .02 | Display Order | {::nomarkdown}This is the order in which to display this reminder definition when the <br/>list of reminders in this category is displayed.{:/} | NUMERIC |  | REQUIRED |  | 

## <a name="Subcategory-811_701"></a>Subcategory-811_701 

 property | value 
--- | --- 
 id | Subcategory-811_701
 label | Sub-category

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| subcategory | .01 | Sub-category | {::nomarkdown}This is an existing category that is to be included as part of a new<br/>category.{:/} | POINTER |  | REQUIRED, INDEXED | Reminder_Category-811_7 | 
| display_order | .02 | Display Order | {::nomarkdown}This is the display order for the sub-categories. Sub-categories are<br/>displayed after individual reminders.{:/} | NUMERIC |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:13:02 pm</p>{:/}