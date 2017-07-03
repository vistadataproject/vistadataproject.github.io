---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Ndc_upn-50_67
# Ndc/upn (50.67)
This file contains a list of National Drug Codes (NDCs) and Universal Product Numbers (UPNs).

<dl>
<dt>Global</dt><dd>^PSNDF(50.67,</dd>
<dt>Domain</dt><dd>Allergies</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Sequence Number**{::nomarkdown}<pre><code>  sequence_number</code></pre>{:/} | .01 |  | NUMERIC | REQUIRED | 
**Ndc**{::nomarkdown}<pre><code>  ndc</code></pre>{:/} | 1 | This is the 12 character NDC (National Drug Code) for this item. | STRING | INDEXED | 
**Upn**{::nomarkdown}<pre><code>  upn</code></pre>{:/} | 2 | This is the UPN (Universal Product Number) for this item. | STRING | INDEXED | 
**Manufacturer**{::nomarkdown}<pre><code>  manufacturer</code></pre>{:/} | 3 | This is the manufacturer of this item. | POINTER |  | [Drug_Manufacturer-55_95](Drug_Manufacturer-55_95)
**Trade Name**{::nomarkdown}<pre><code>  trade_name</code></pre>{:/} | 4 | This is the trade name of this item. | STRING | INDEXED | 
**VA Product Name**{::nomarkdown}<pre><code>  va_product_name</code></pre>{:/} | 5 | This is the VA Product associated with this item. | POINTER |  | [VA_Product-50_68](VA_Product-50_68)
**Route Of Administration**{::nomarkdown}<pre><code>  route_of_administration</code></pre>{:/} | 6 |  | STRING |  | 
**Inactivation Date**{::nomarkdown}<pre><code>  inactivation_date</code></pre>{:/} | 7 | This is the date when this item was made inactive. | DATE-TIME |  | 
**Package Size**{::nomarkdown}<pre><code>  package_size</code></pre>{:/} | 8 | This is the package size. | POINTER |  | [Package_Size-50_609](Package_Size-50_609)
**Package Type**{::nomarkdown}<pre><code>  package_type</code></pre>{:/} | 9 | This is the package type. | POINTER |  | [Package_Type-50_608](Package_Type-50_608)
**Otx/rx Indicator**{::nomarkdown}<pre><code>  otx_rx_indicator</code></pre>{:/} | 10 |  | ENUMERATION |  | {::nomarkdown}Over the counter: <em><strong>O</strong></em><br/>Prescription: <em><strong>R</strong></em>{:/}
**Previous Ndc**{::nomarkdown}<pre><code>  previous_ndc</code></pre>{:/} | 11 |  | STRING |  | 
**Previous Upn**{::nomarkdown}<pre><code>  previous_upn</code></pre>{:/} | 12 |  | STRING |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}