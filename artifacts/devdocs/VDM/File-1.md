---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; File-1
# File (1)
This file stores the descriptive information for all files in the FileMan managed database.

<dl>
<dt>Global</dt><dd>^DIC(</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 |  | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 4 |  | STRING |  | 
**Application Group**{::nomarkdown}<pre><code>  application_group</code></pre>{:/} | 10 |  | OBJECT |  | [Applicationgroup-1_005](#Applicationgroup-1_005)
**Developer**{::nomarkdown}<pre><code>  developer</code></pre>{:/} | 20 |  | POINTER |  | [New_Person-200](New_Person-200)
**Date**{::nomarkdown}<pre><code>  date</code></pre>{:/} | 21 |  | DATE-TIME |  | 

### Subfile
#### <a name="Applicationgroup-1_005"></a>Application-group

<dl>
<dt>ID</dt><dd>Applicationgroup-1_005</dd>
<dt>File Type</dt><dd>1.005</dd>
<dt>Label</dt><dd>Application-group</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Application Group**{::nomarkdown}<pre><code>  application_group</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}