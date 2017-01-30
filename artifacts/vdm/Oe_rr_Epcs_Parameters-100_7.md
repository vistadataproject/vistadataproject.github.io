---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Epcs_Parameters-100_7 

<dl>
<dt>id</dt><dd>Oe_rr_Epcs_Parameters-100_7</dd>
<dt>fmId</dt><dd>100.7</dd>
<dt>label</dt><dd>Oe/rr Epcs Parameters</dd>
<dt>location</dt><dd>^ORD(100.7,</dd>
<dt>description</dt><dd>This file stores the electronic Prescribing of Controlled Substances <br/>(ePCS) parameters used by CPRS.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_name | .01 | Site Name | {::nomarkdown}The site for which the parameter values apply.{:/} | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| enable_epcs | .02 | Enable Epcs? | {::nomarkdown}Stores whether ePCS is enabled for the selected site or not.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| enabled_users | 1 | Enabled Users | {::nomarkdown}Users for which ePCS is enabled.{:/} | [POINTER] |  |  | {id:New_Person-200} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:27:43 pm</p>{:/}