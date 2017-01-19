---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Display_Group-100_98 

 property | value 
--- | --- 
 id | Display_Group-100_98
 fmId | 100.98
 label | Display Group
 location | ^ORD(100.98,
 description | {::nomarkdown}This file allows orders to be clustered in groups other than by package.<br/>It is similar in structure to the OPTION File (19).  This allows display<br/>groups to be arranged in a hierarchy.  The main entry in this file<br/>should be 'ALL SERVICES'.  Other entries should be logically subordinate<br/>to the 'ALL SERVICES' entry.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the display group for a particular kind of order.<br/>The display group generally corresponds to a hospital service or part<br/>of a service.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| member | 1 | Member | {::nomarkdown}This is a list of specific display groups that `belong' to the display<br/>group listed in the NAME field.  (This is similar to menu items in the<br/>OPTION File.){:/} | [OBJECT] |  |  | [Member-100_981](#Member-100_981)  | 
| mixed_name | 2 | Mixed Name | {::nomarkdown}This field contains a mixed case name for the display group.  The name <br/>should be as short as possible without being obscure.  This name is <br/>primarily intended for use in the windows display of orders.{:/} | STRING |  |  |  | 
| short_name | 3 | Short Name | {::nomarkdown}This is an abbreviation for the display group to be used in displays and<br/>reports.{:/} | STRING |  |  |  | 
| default_dialog | 4 | Default Dialog | {::nomarkdown}This is the dialog that will be used as the default definition when<br/>placing quick orders associated with this display group.{:/} | POINTER |  |  | [Order_Dialog-101_41](Order_Dialog-101_41.md) | 

## <a name="Member-100_981"></a>Member-100_981 

 property | value 
--- | --- 
 id | Member-100_981
 label | Member

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sequence | .001 | Sequence | {::nomarkdown}This is the sequence of the member in the display group for reporting<br/>purposes.{:/} | IEN |  |  |  | 
| member | .01 | Member | {::nomarkdown}This is a display group listed in the NAME field. (This is similar to a<br/>menu item in the OPTION File.){:/} | POINTER |  | REQUIRED, INDEXED | [Display_Group-100_98](Display_Group-100_98.md) | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}