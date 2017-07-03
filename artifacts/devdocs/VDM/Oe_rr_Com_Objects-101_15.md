---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Oe_rr_Com_Objects-101_15
# Oe/rr Com Objects (101.15)
None

<dl>
<dt>Global</dt><dd>^ORD(101.15,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 |  | STRING | INDEXED<br/>REQUIRED | 
**Object Guid**{::nomarkdown}<pre><code>  object_guid</code></pre>{:/} | .02 | COM Object GUID | STRING | REQUIRED | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .03 |  | ENUMERATION |  | {::nomarkdown}INACTIVE: <em><strong>I</strong></em>{:/}
**Param1**{::nomarkdown}<pre><code>  param1</code></pre>{:/} | .04 | Optional parameter to pass to COM object as PARAM1  | STRING |  | 
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 2 | Optional description of COM Object.  Should include any contact<br/>information for vendor or other provider of the COM Object. | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}