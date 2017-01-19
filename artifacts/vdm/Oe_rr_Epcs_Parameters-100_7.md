---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Oe_rr_Epcs_Parameters-100_7 

 property | value 
--- | --- 
 id | Oe_rr_Epcs_Parameters-100_7
 fmId | 100.7
 label | Oe/rr Epcs Parameters
 location | ^ORD(100.7,
 description | {::nomarkdown}This file stores the electronic Prescribing of Controlled Substances <br/>(ePCS) parameters used by CPRS.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| site_name | .01 | Site Name | {::nomarkdown}The site for which the parameter values apply.{:/} | POINTER |  | REQUIRED, INDEXED | [Institution-4](Institution-4.md) | 
| enable_epcs | .02 | Enable Epcs? | {::nomarkdown}Stores whether ePCS is enabled for the selected site or not.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>false</dd><dt>0</dt><dd>true</dd></dl>{:/} | 
| enabled_users | 1 | Enabled Users | {::nomarkdown}Users for which ePCS is enabled.{:/} | [POINTER] |  |  | {id:New_Person-200} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}