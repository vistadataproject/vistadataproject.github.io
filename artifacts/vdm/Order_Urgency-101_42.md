---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Urgency-101_42 

 property | value 
--- | --- 
 id | Order_Urgency-101_42
 fmId | 101.42
 label | Order Urgency
 location | ^ORD(101.42,
 description | {::nomarkdown}This file contains the urgencies available to assign to an order.{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is an urgency that may be requested for an order; the Parameters<br/>Definition file will contain the different combinations that are allowable<br/>in different dialogs.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| usage | 1 | Usage | {::nomarkdown}This multiple contains all the possible ways to use this urgency.{:/} | [STRING] |  |  |  | 
| abbreviation | 2 | Abbreviation | {::nomarkdown}This field contains the abbreviation to be used in HL7 messages and some<br/>displays.{:/} | STRING |  | INDEXED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 8:01:05 am</p>{:/}