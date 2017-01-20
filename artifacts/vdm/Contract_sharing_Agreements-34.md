---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Contract_sharing_Agreements-34 

 property | value 
--- | --- 
 id | Contract_sharing_Agreements-34
 fmId | 34
 label | Contract/sharing Agreements
 location | ^DIC(34,
 description | {::nomarkdown}This file contains the Contract and Sharing agreements used in<br/>Radiology.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| agreement_name | .01 | Agreement Name |  | STRING |  | REQUIRED, INDEXED |  | 
| type_of_agreement | 2 | Type Of Agreement |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>S</dt><dd>SHARING</dd><dt>C</dt><dd>CONTRACT</dd></dl>{:/} | 
| inactivation_date | 3 | Inactivation Date |  | DATE-TIME |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 9:52:13 pm</p>{:/}