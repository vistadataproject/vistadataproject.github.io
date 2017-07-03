---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Order_Urgency-101_42
# Order Urgency (101.42)
This file contains the urgencies available to assign to an order.

<dl>
<dt>Global</dt><dd>^ORD(101.42,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is an urgency that may be requested for an order; the Parameters<br/>Definition file will contain the different combinations that are allowable<br/>in different dialogs. | STRING | INDEXED<br/>REQUIRED | 
**Usage**{::nomarkdown}<pre><code>  usage</code></pre>{:/} | 1 | This multiple contains all the possible ways to use this urgency. | STRING |  | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 2 | This field contains the abbreviation to be used in HL7 messages and some<br/>displays. | STRING | INDEXED | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}