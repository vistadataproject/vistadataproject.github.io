---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; File-1 

 property | value 
--- | --- 
 id | File-1
 fmId | 1
 label | File
 location | ^DIC(
 description | {::nomarkdown}This file stores the descriptive information for all files in the FileMan<br/>managed database.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number |  | IEN |  |  |  | 
| name | .01 | Name |  | STRING |  | REQUIRED, INDEXED |  | 
| description | 4 | Description |  | STRING |  |  |  | 
| application_group | 10 | Application Group |  | [OBJECT] |  |  | [Applicationgroup-1_005](#Applicationgroup-1_005)  | 
| developer | 20 | Developer |  | POINTER |  |  | [New_Person-200](New_Person-200.md) | 
| date | 21 | Date |  | DATE-TIME |  |  |  | 

## <a name="Applicationgroup-1_005"></a>Applicationgroup-1_005 

 property | value 
--- | --- 
 id | Applicationgroup-1_005
 label | Application-group

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| application_group | .01 | Application Group |  | STRING |  | REQUIRED, INDEXED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:13:02 pm</p>{:/}