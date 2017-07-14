---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; File-1<br/>
<a name="top"></a>
# File (1)
This file stores the descriptive information for all files in the FileMan managed database.

**Global:** ^DIC(

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 4 |  | STRING |  | 
**Application Group**{::nomarkdown}<pre><code>  application_group</code></pre>{:/} | 10 |  | OBJECT |  | [Applicationgroup-1_005](#Applicationgroup-1_005)
**Developer**{::nomarkdown}<pre><code>  developer</code></pre>{:/} | 20 |  | POINTER |  | [New_Person-200](New_Person-200)
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | 21 |  | DATE-TIME |  | 

## Sub-Files
### <a name="Applicationgroup-1_005"></a>Application-group (1.005)

<dl>
<dt>ID</dt><dd>Applicationgroup-1_005</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Application Group**{::nomarkdown}<pre><code>  application_group</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}