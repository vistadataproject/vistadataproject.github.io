---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Urgency-101_42 

<dl>
<dt>id</dt><dd>Order_Urgency-101_42</dd>
<dt>fmId</dt><dd>101.42</dd>
<dt>label</dt><dd>Order Urgency</dd>
<dt>location</dt><dd>^ORD(101.42,</dd>
<dt>description</dt><dd>This file contains the urgencies available to assign to an order.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is an urgency that may be requested for an order; the Parameters<br/>Definition file will contain the different combinations that are allowable<br/>in different dialogs.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| usage | 1 | Usage | {::nomarkdown}This multiple contains all the possible ways to use this urgency.{:/} | [STRING] |  |  |  | 
| abbreviation | 2 | Abbreviation | {::nomarkdown}This field contains the abbreviation to be used in HL7 messages and some<br/>displays.{:/} | STRING |  | INDEXED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 6:18:28 am</p>{:/}