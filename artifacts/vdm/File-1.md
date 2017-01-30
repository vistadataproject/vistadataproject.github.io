---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; File-1 

<dl>
<dt>id</dt><dd>File-1</dd>
<dt>fmId</dt><dd>1</dd>
<dt>label</dt><dd>File</dd>
<dt>location</dt><dd>^DIC(</dd>
<dt>description</dt><dd>This file stores the descriptive information for all files in the FileMan<br/>managed database.</dd>
</dl>

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

<dl>
<dt>id</dt><dd>Applicationgroup-1_005</dd>
<dt>label</dt><dd>Application-group</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| application_group | .01 | Application Group |  | STRING |  | REQUIRED, INDEXED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:17:13 pm</p>{:/}