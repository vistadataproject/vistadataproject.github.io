---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Oe_rr_Epcs_Parameters-100_7
# Oe/rr Epcs Parameters (100.7)
This file stores the electronic Prescribing of Controlled Substances  (ePCS) parameters used by CPRS.

<dl>
<dt>Global</dt><dd>^ORD(100.7,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site Name**{::nomarkdown}<pre><code>  site_name</code></pre>{:/} | .01 | The site for which the parameter values apply. | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Enable Epcs?**{::nomarkdown}<pre><code>  enable_epcs</code></pre>{:/} | .02 | Stores whether ePCS is enabled for the selected site or not. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Enabled Users**{::nomarkdown}<pre><code>  enabled_users</code></pre>{:/} | 1 | Users for which ePCS is enabled. | POINTER |  | [New_Person-200](New_Person-200)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}