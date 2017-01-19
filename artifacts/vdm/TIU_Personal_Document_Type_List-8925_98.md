---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; TIU_Personal_Document_Type_List-8925_98 

 property | value 
--- | --- 
 id | TIU_Personal_Document_Type_List-8925_98
 fmId | 8925.98
 label | TIU Personal Document Type List
 location | ^TIU(8925.98,
 description | {::nomarkdown}This file is used to store \pick-lists\ of documents (by class), for<br/>selection by the user.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| person | .01 | Person | {::nomarkdown}This is the person whose preference is being identified.{:/} | POINTER |  | REQUIRED, INDEXED | [New_Person-200](New_Person-200.md) | 
| parent_document_class | .02 | Parent Document Class | {::nomarkdown}This is the group (i.e., either Document Class or Class) to which the<br/>preferred document list belongs.  i.e., enter the class Progress Notes<br/>to indicate that the corresponding list will apply to Progress Notes.{:/} | POINTER |  |  | [TIU_Document_Definition-8925_1](TIU_Document_Definition-8925_1.md) | 
| default_type | .03 | Default Type | {::nomarkdown}This determines what TITLE will be offered by default when selecting<br/>from a given parent class (e.g., when entering a PROGRESS NOTE, you<br/>may want the DEFAULT TITLE to be DIABETES EDUCATION, etc.).{:/} | POINTER |  |  | [TIU_Document_Definition-8925_1](TIU_Document_Definition-8925_1.md) | 
| personal_document_list | 10 | Personal Document List | {::nomarkdown}This Multiple is used for storing personal lists of documents for type<br/>selection during entry/editing.{:/} | [OBJECT] |  |  | [Personal_Document_List-8925_9801](#Personal_Document_List-8925_9801)  | 
| timestamp | 99 | Timestamp | {::nomarkdown}This is the timestamp on the record in $H format which is compared with<br/>that on the compiled menu in ^XUTL(\XQORM\,\DA;TIU(8925.98,\,99) to<br/>determine whether recompilation is necessary.{:/} | STRING |  |  |  | 

## <a name="Personal_Document_List-8925_9801"></a>Personal_Document_List-8925_9801 

 property | value 
--- | --- 
 id | Personal_Document_List-8925_9801
 label | Personal Document List

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| title | .01 | Title | {::nomarkdown}This is the document to be included in your pick list of documents for<br/>the current document class.{:/} | POINTER |  | REQUIRED, INDEXED | [TIU_Document_Definition-8925_1](TIU_Document_Definition-8925_1.md) | 
| sequence | .02 | Sequence | {::nomarkdown}This is the sequence in which you wish the document to appear in your<br/>list.{:/} | NUMERIC |  |  |  | 
| display_name | .03 | Display Name | {::nomarkdown}This is the name of the document to be displayed in menus.{:/} | STRING |  |  |  | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}