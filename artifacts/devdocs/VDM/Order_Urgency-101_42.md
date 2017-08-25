---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Order_Urgency-101_42<br/>
<a name="top"></a>
# Order Urgency (101.42)
This file contains the urgencies available to assign to an order.

**Global:** ^ORD(101.42,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is an urgency that may be requested for an order; the Parameters<br/>Definition file will contain the different combinations that are allowable<br/>in different dialogs. | STRING | INDEXED<br/>REQUIRED | 
**Usage**{::nomarkdown}<pre><code>  usage</code></pre>{:/} | 1 | This multiple contains all the possible ways to use this urgency. | STRING |  | 
**Abbreviation**{::nomarkdown}<pre><code>  abbreviation</code></pre>{:/} | 2 | This field contains the abbreviation to be used in HL7 messages and some<br/>displays. | STRING | INDEXED | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}