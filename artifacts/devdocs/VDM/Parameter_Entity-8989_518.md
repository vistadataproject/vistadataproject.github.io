---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Parameter_Entity-8989_518
# Parameter Entity (8989.518)
This file contains a list of files which parameter instances can be associated with.  Any additions to this file must be coordinated with Toolkit developers so a patch can be issued.

<dl>
<dt>Global</dt><dd>^XTV(8989.518,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**File Number**{::nomarkdown}<pre><code>  file_number</code></pre>{:/} | .001 | The internal entry numbers of this file match the file numbers from which<br/>entity instances are obtained.  For example, for the entity USER, the file<br/>number is 200. | IEN |  | 
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name used to identify the entity when using parameter tools.<br/>It may not always be the same as the file name from which entities are<br/>selected. | STRING | INDEXED<br/>REQUIRED | 
**Prefix**{::nomarkdown}<pre><code>  prefix</code></pre>{:/} | .02 | This identifies the prefix used to identify the entity type when making<br/>calls to XPAR. | STRING | INDEXED<br/>REQUIRED | 
**Mixed Case Name**{::nomarkdown}<pre><code>  mixed_case_name</code></pre>{:/} | .03 | This is the name of the entity in mixed case. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}