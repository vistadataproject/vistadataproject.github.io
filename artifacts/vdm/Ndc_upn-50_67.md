---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Ndc_upn-50_67 

 property | value 
--- | --- 
 id | Ndc_upn-50_67
 fmId | 50.67
 label | Ndc/upn
 location | ^PSNDF(50.67,
 description | {::nomarkdown}This file contains a list of National Drug Codes (NDCs) and Universal<br/>Product Numbers (UPNs).{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sequence_number | .01 | Sequence Number |  | NUMERIC |  | REQUIRED |  | 
| ndc | 1 | Ndc | {::nomarkdown}This is the 12 character NDC (National Drug Code) for this item.{:/} | STRING |  | INDEXED |  | 
| upn | 2 | Upn | {::nomarkdown}This is the UPN (Universal Product Number) for this item.{:/} | STRING |  | INDEXED |  | 
| manufacturer | 3 | Manufacturer | {::nomarkdown}This is the manufacturer of this item.{:/} | POINTER |  |  | Drug_Manufacturer-55_95 | 
| trade_name | 4 | Trade Name | {::nomarkdown}This is the trade name of this item.{:/} | STRING |  | INDEXED |  | 
| va_product_name | 5 | VA Product Name | {::nomarkdown}This is the VA Product associated with this item.{:/} | POINTER |  |  | [VA_Product-50_68](VA_Product-50_68.md) | 
| route_of_administration | 6 | Route Of Administration |  | [STRING] |  |  |  | 
| inactivation_date | 7 | Inactivation Date | {::nomarkdown}This is the date when this item was made inactive.{:/} | DATE-TIME |  |  |  | 
| package_size | 8 | Package Size | {::nomarkdown}This is the package size.{:/} | POINTER |  |  | Package_Size-50_609 | 
| package_type | 9 | Package Type | {::nomarkdown}This is the package type.{:/} | POINTER |  |  | Package_Type-50_608 | 
| otx_rx_indicator | 10 | Otx/rx Indicator |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>O</dt><dd>Over the counter</dd><dt>R</dt><dd>Prescription</dd></dl>{:/} | 
| previous_ndc | 11 | Previous Ndc |  | [STRING] |  |  |  | 
| previous_upn | 12 | Previous Upn |  | [STRING] |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 9:52:13 pm</p>{:/}