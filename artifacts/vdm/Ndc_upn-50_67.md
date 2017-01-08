---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> Ndc_upn-50_67 

 property | value 
--- | --- 
 id | Ndc_upn-50_67
 fmId | 50.67
 label | Ndc/upn
 location | ^PSNDF(50.67,
 description | This file contains a list of National Drug Codes (NDCs) and Universal\rProduct Numbers (UPNs).

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| sequence_number | .01 | Sequence Number |  | NUMERIC |  | REQUIRED |  | 
| ndc | 1 | Ndc | This is the 12 character NDC (National Drug Code) for this item. | STRING |  | INDEXED |  | 
| upn | 2 | Upn | This is the UPN (Universal Product Number) for this item. | STRING |  | INDEXED |  | 
| manufacturer | 3 | Manufacturer | This is the manufacturer of this item. | POINTER |  |  | {id:Drug_Manufacturer-55_95} | 
| trade_name | 4 | Trade Name | This is the trade name of this item. | STRING |  | INDEXED |  | 
| va_product_name | 5 | VA Product Name | This is the VA Product associated with this item. | POINTER |  |  | [VA_Product-50_68](VA_Product-50_68.md) | 
| route_of_administration | 6 | Route Of Administration |  | [STRING] |  |  |  | 
| inactivation_date | 7 | Inactivation Date | This is the date when this item was made inactive. | DATE-TIME |  |  |  | 
| package_size | 8 | Package Size | This is the package size. | POINTER |  |  | {id:Package_Size-50_609} | 
| package_type | 9 | Package Type | This is the package type. | POINTER |  |  | {id:Package_Type-50_608} | 
| otx_rx_indicator | 10 | Otx/rx Indicator |  | ENUMERATION |  |  | {::nomarkdown}<dl><dt>O</dt><dd>Over the counter</dd><dt>R</dt><dd>Prescription</dd></dl>{:/} | 
| previous_ndc | 11 | Previous Ndc |  | [STRING] |  |  |  | 
| previous_upn | 12 | Previous Upn |  | [STRING] |  |  |  | 