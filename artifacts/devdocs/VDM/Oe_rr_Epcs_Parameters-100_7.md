---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Oe_rr_Epcs_Parameters-100_7<br/>
<a name="top"></a>
# Oe/rr Epcs Parameters (100.7)
This file stores the electronic Prescribing of Controlled Substances  (ePCS) parameters used by CPRS.

**Global:** ^ORD(100.7,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Site Name**{::nomarkdown}<pre><code>  site_name</code></pre>{:/} | .01 | The site for which the parameter values apply. | POINTER | INDEXED<br/>REQUIRED | [Institution-4](Institution-4)
**Enable Epcs?**{::nomarkdown}<pre><code>  enable_epcs</code></pre>{:/} | .02 | Stores whether ePCS is enabled for the selected site or not. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Enabled Users**{::nomarkdown}<pre><code>  enabled_users</code></pre>{:/} | 1 | Users for which ePCS is enabled. | POINTER |  | [New_Person-200](New_Person-200)

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}